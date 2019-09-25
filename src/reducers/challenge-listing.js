/**
 * Reducer for state.challengeListing.
 */

import _ from 'lodash';
import { handleActions } from 'redux-actions';
import moment from 'moment';
import { updateQuery } from '../utils/url';
import { SORTS_DATA } from '../utils/challenge/sort';
import actions from '../actions/challenge-listing';
import { logger, errors, challenge as challengeUtils } from '../utils';

const { fireErrorMessage } = errors;
const { filter: Filter } = challengeUtils;
const { BUCKETS, BUCKET_DATA, getBuckets } = challengeUtils.buckets;

/**
 * Process challenge data for bucket
 * @param handle user handle
 * @param challenges all challenges
 * @param loaded fetched challenges of bucket
 * @param bucket bucket name
 * @param sorts all sorts data
 * @param sort sort name
 * @param filter filter object
 * @param frontFilter filter object
 */
function processBucketData(handle, challenges, loaded, bucket, sorts, sort, filter, frontFilter) {
  const buckets = _.isEmpty(handle) ? BUCKET_DATA : getBuckets(handle);
  const data = _.has(challenges, bucket) ? challenges[bucket]
    .filter(filter)
    .concat(loaded) : _.clone(loaded);

  const finalFilters = {
    ...frontFilter,
    ...buckets[bucket].filter,
  };

  const bucketFilter = bucket !== BUCKETS.REVIEW_OPPORTUNITIES
    ? Filter.getFilterFunction(finalFilters)
    : Filter.getReviewOpportunitiesFilterFunction(finalFilters);
  const filteredData = [];
  for (let i = 0; i < data.length; i += 1) {
    if (bucketFilter(data[i])) {
      filteredData.push(data[i]);
    }
  }

  if (bucket !== BUCKETS.ALL) {
    if (!_.isEmpty(sort)) {
      filteredData.sort(SORTS_DATA[sort].func);
      return filteredData;
    }

    if (_.has(sorts, bucket)) {
      filteredData.sort(SORTS_DATA[sorts[bucket]].func);
    } else {
      filteredData.sort(SORTS_DATA[BUCKET_DATA[bucket].sorts[0]].func);
    }
  }

  return filteredData;
}

/**
 * Check the challenges of bucket have been loaded all
 * @param challenges all challenges
 * @param bucket bucket name
 * @param loaded loaded challenges this time
 * @param data processed data
 * @returns {boolean}
 */
function checkAllLoaded(challenges, bucket, loaded, data) {
  let isAll = false;
  if (loaded.length === 0) {
    isAll = true;
  } else if (!_.isEmpty(_.get(challenges, bucket))
    && challenges[bucket].length === data.length) {
    isAll = true;
  }

  return isAll;
}

/** TODO: Inspect if the 2 actions bellow can be removed?
 * They do  duplicate what is done in `getActiveChallengesDone` but fetch all challenges
 * which was refactored in listing-improve
 */
function onGetAllActiveChallengesInit(state, { payload }) {
  return { ...state, loadingActiveChallengesUUID: payload };
}
function onGetAllActiveChallengesDone(state, { error, payload }) {
  if (error) {
    logger.error(payload);
    return state;
  }
  const { uuid, challenges: loaded } = payload;
  if (uuid !== state.loadingActiveChallengesUUID) return state;
  /* Once all active challenges are fetched from the API, we remove from the
   * store any active challenges stored there previously, and also any
   * challenges with IDs matching any challenges loaded now as active. */
  const ids = new Set();
  loaded.forEach(item => ids.add(item.id));
  const challenges = state.challenges
    .filter(item => item.status !== 'ACTIVE' && !ids.has(item.id))
    .concat(loaded);

  return {
    ...state,
    challenges,
    lastUpdateOfActiveChallenges: Date.now(),
    loadingActiveChallengesUUID: '',
  };
}

/**
 * Called when 1st page of ative challenges is loaded from `/challenges` api
 * @param {*} state
 * @param {*} param1
 */
function onGetActiveChallengesDone(state, { error, payload }) {
  if (error) {
    logger.error(payload);
    return state;
  }
  const {
    uuid, challenges: loaded, sort, bucket, tokenV3, handle, frontFilter,
    meta,
  } = payload;

  /* Once all active challenges are fetched from the API, we remove from the
   * store any active challenges stored there previously, and also any
   * challenges with IDs matching any challenges loaded now as active. */
  const ids = new Set();
  loaded.forEach(item => ids.add(item.id));

  let filter;
  let newChallenges = {};
  const otherState = {};
  switch (bucket) {
    case BUCKETS.ALL: {
      if (uuid !== state.loadingActiveChallengesUUID) return state;
      /* Fetching 0 page of active challenges also drops any active challenges
 * loaded to the state before. */
      filter = state.lastRequestedPageOfActiveChallenges
        ? item => !ids.has(item.id)
        : item => !ids.has(item.id) && item.status !== 'ACTIVE';

      // my
      const my = !_.isEmpty(tokenV3) ? processBucketData(
        handle, state.challenges, loaded, BUCKETS.MY, state.sorts, sort, filter,
      ) : [];
      // open for registration
      const open = processBucketData(
        handle, state.challenges, loaded, BUCKETS.OPEN_FOR_REGISTRATION, state.sorts, sort, filter,
      );
      // ongoing
      const ongoing = processBucketData(
        handle, state.challenges, loaded, BUCKETS.ONGOING, state.sorts, sort, filter,
      );
      newChallenges = _.clone(state.challenges);
      newChallenges[BUCKETS.MY] = my;
      newChallenges[BUCKETS.OPEN_FOR_REGISTRATION] = open;
      newChallenges[BUCKETS.ONGOING] = ongoing;
      otherState.loadingActiveChallengesUUID = '';
      otherState.meta = _.clone(meta);
    }
      break;
    case BUCKETS.MY: {
      if (uuid !== state.loadingMyChallengesUUID) return state;
      /* Fetching 0 page of active challenges also drops any active challenges
 * loaded to the state before. */
      filter = state.lastRequestedPageOfMyChallenges
        ? item => !ids.has(item.id)
        : item => !ids.has(item.id) && item.status !== 'ACTIVE';

      const data = processBucketData(
        handle, state.challenges, loaded, bucket, state.sorts, sort, filter,
      );
      newChallenges = _.cloneDeep(state.challenges);
      newChallenges[bucket] = data;
      otherState.loadingMyChallengesUUID = '';
      otherState.allMyChallengesLoaded = checkAllLoaded(state.challenges, bucket, loaded, data);
      otherState.gettingMoreMyChallenges = !otherState.allMyChallengesLoaded;
      otherState.meta = _.clone(meta);
      /* TODO Due to the meta of backend response is currently not correct,
/* so should update counts after fetch all challenges of bucket */
      if (_.get(meta, 'myChallengesCount') !== data.length && otherState.allMyChallengesLoaded) {
        otherState.meta.myChallengesCount = data.length;
        otherState.meta.allChallengesCount = meta.allChallengesCount
          + data.length - meta.myChallengesCount;
      }
    }
      break;
    case BUCKETS.OPEN_FOR_REGISTRATION: {
      if (uuid !== state.loadingOpenChallengesUUID) return state;
      /* Fetching 0 page of active challenges also drops any active challenges
 * loaded to the state before. */
      filter = state.lastRequestedPageOfOpenChallenges
        ? item => !ids.has(item.id)
        : item => !ids.has(item.id) && item.status !== 'ACTIVE';

      const data = processBucketData(
        handle, state.challenges, loaded, bucket, state.sorts, sort, filter,
      );

      newChallenges = _.cloneDeep(state.challenges);
      newChallenges[bucket] = data;
      otherState.loadingOpenChallengesUUID = '';
      otherState.allOpenChallengesLoaded = checkAllLoaded(state.challenges, bucket, loaded, data);
      otherState.gettingMoreOpenChallenges = !otherState.allOpenChallengesLoaded;
      otherState.meta = _.clone(meta);
      /* TODO Due to the meta of backend response is currently not correct,
      /* so should update counts after fetch all challenges of bucket */
      if (_.get(meta, 'openChallengesCount') !== data.length && otherState.allOpenChallengesLoaded) {
        otherState.meta.openChallengesCount = data.length;
        otherState.meta.allChallengesCount = meta.allChallengesCount
          + data.length - meta.openChallengesCount;
      }
    }
      break;
    case BUCKETS.ONGOING: {
      if (uuid !== state.loadingOnGoingChallengesUUID) return state;
      /* Fetching 0 page of active challenges also drops any active challenges
 * loaded to the state before. */
      filter = state.lastRequestedPageOfOnGoingChallenges
        ? item => !ids.has(item.id)
        : item => !ids.has(item.id) && item.status !== 'ACTIVE';

      const data = processBucketData(
        handle, state.challenges, loaded, bucket, state.sorts, sort, filter,
      );
      newChallenges = _.cloneDeep(state.challenges);
      newChallenges[bucket] = data;
      otherState.loadingOnGoingChallengesUUID = '';
      otherState.allOnGoingChallengesLoaded = checkAllLoaded(state.challenges,
        bucket, loaded, data);
      otherState.gettingMoreOnGoingChallenges = !otherState.allOnGoingChallengesLoaded;
      /* TODO Due to the meta of backend response is currently not correct,
      /* so should update counts after fetch all challenges of bucket */
      otherState.meta = _.clone(meta);
      if (_.get(meta, 'ongoingChallengesCount') !== data.length && otherState.allOnGoingChallengesLoaded) {
        otherState.meta.ongoingChallengesCount = data.length;
        otherState.meta.allChallengesCount = meta.allChallengesCount
          + data.length - meta.ongoingChallengesCount;
      }
    }
      break;
    default:
      break;
  }

  // all challenges used for other components like sub communities
  newChallenges[BUCKETS.ALL] = processBucketData(
    handle, state.challenges, loaded, BUCKETS.ALL, null, null, filter, frontFilter,
  );

  return {
    ...state,
    ...otherState,
    challenges: newChallenges,
    lastUpdateOfActiveChallenges: Date.now(),
  };
}

/**
 * Called when loading of 1st page of active challenges is started
 * @param {*} state
 * @param {*} param1
 */
function onGetActiveChallengesInit(state, { payload }) {
  const { page, bucket, uuid } = payload;
  const otherState = {};
  switch (bucket) {
    case BUCKETS.ALL:
      otherState.loadingActiveChallengesUUID = uuid;
      otherState.lastRequestedPageOfActiveChallenges = page;
      break;
    case BUCKETS.MY:
      otherState.loadingMyChallengesUUID = uuid;
      otherState.lastRequestedPageOfMyChallenges = page;
      break;
    case BUCKETS.OPEN_FOR_REGISTRATION:
      otherState.loadingOpenChallengesUUID = uuid;
      otherState.lastRequestedPageOfOpenChallenges = page;
      break;
    case BUCKETS.ONGOING:
      otherState.loadingOnGoingChallengesUUID = uuid;
      otherState.lastRequestedPageOfOnGoingChallenges = page;
      break;
    default:
      break;
  }

  return {
    ...state,
    ...otherState,
  };
}
function onGetRestActiveChallengesInit(state, { payload }) {
  return {
    ...state,
    loadingRestActiveChallengesUUID: payload.uuid,
  };
}

/**
 * Called when all challenges are loaded
 * @param {*} state
 * @param {*} param1
 */
function onGetRestActiveChallengesDone(state, { error, payload }) {
  if (error) {
    logger.error(payload);
    return state;
  }
  const {
    uuid, challenges: loaded, meta: newMeta, sort, bucket, handle, frontFilter,
  } = payload;
  if (uuid !== state.loadingRestActiveChallengesUUID) return state;

  /* Once all active challenges are fetched from the API, we remove from the
   * store any active challenges stored there previously, and also any
   * challenges with IDs matching any challenges loaded now as active. */
  const ids = new Set();
  loaded.forEach(item => ids.add(item.id));

  /* Fetching 0 page of active challenges also drops any active challenges
   * loaded to the state before. */
  const filter = item => !ids.has(item.id);

  const otherState = {};
  let newChallenges = {};
  switch (bucket) {
    case BUCKETS.MY:
    case BUCKETS.OPEN_FOR_REGISTRATION:
    case BUCKETS.ONGOING: {
      const data = processBucketData(
        handle, state.challenges, loaded, bucket, state.sorts, sort, filter, frontFilter,
      );
      newChallenges = _.cloneDeep(state.challenges);
      newChallenges[bucket] = data;
      switch (bucket) {
        case BUCKETS.MY:
          otherState.allMyChallengesLoaded = true;
          otherState.gettingMoreMyChallenges = false;
          break;
        case BUCKETS.OPEN_FOR_REGISTRATION:
          otherState.allOpenChallengesLoaded = true;
          otherState.gettingMoreOpenChallenges = false;
          break;
        case BUCKETS.ONGOING:
          otherState.allOnGoingChallengesLoaded = true;
          otherState.gettingMoreOnGoingChallenges = false;
          break;
        default:
          break;
      }
    }
      break;
    default:
      break;
  }

  const meta = newMeta || state.meta;

  return {
    ...state,
    challenges: newChallenges,
    ...otherState,
    meta,
    lastUpdateOfActiveChallenges: Date.now(),
    lastRequestedPageOfActiveChallenges: -1,
    loadingRestActiveChallengesUUID: '',
  };
}

/**
 * Handles CHALLENGE_LISTING/GET_CHALLENGE_SUBTRACKS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onGetChallengeSubtracksDone(state, action) {
  if (action.error) logger.error(action.payload);
  return {
    ...state,
    challengeSubtracks: action.error ? [] : action.payload,
    challengeSubtracksMap: action.error ? {} : _.keyBy(action.payload, 'subTrack'),
    loadingChallengeSubtracks: false,
  };
}

/**
 * Handles CHALLENGE_LISTING/GET_CHALLENGE_TAGS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onGetChallengeTagsDone(state, action) {
  if (action.error) logger.error(action.payload);
  return {
    ...state,
    challengeTags: action.error ? [] : action.payload,
    loadingChallengeTags: false,
  };
}

function onGetPastChallengesInit(state, action) {
  const { frontFilter, page, uuid } = action.payload;
  const tracks = frontFilter && frontFilter.tracks;
  if (tracks && _.isEmpty(tracks)) {
    return {
      ...state,
      allPastChallengesLoaded: true,
      loadingPastChallengesUUID: '',
    };
  }

  return {
    ...state,
    lastRequestedPageOfPastChallenges: page,
    loadingPastChallengesUUID: uuid,
  };
}

function onGetPastChallengesDone(state, { error, payload }) {
  if (error) {
    logger.error(payload);
    return state;
  }
  const {
    uuid, challenges: loaded, frontFilter, sort,
  } = payload;
  if (uuid !== state.loadingPastChallengesUUID) return state;

  const ids = new Set();
  loaded.forEach(item => ids.add(item.id));

  /* Fetching 0 page of past challenges also drops any past challenges
   * loaded to the state before. */
  const filter = state.lastRequestedPageOfPastChallenges
    ? item => !ids.has(item.id)
    : item => !ids.has(item.id) && item.status !== 'COMPLETED' && item.status !== 'PAST';

  const pasts = processBucketData(
    null, state.challenges, loaded, BUCKETS.PAST, state.sorts, sort, filter, frontFilter,
  );

  let keepPastPlaceholders = false;
  if (loaded.length) {
    const ff = Filter.getFilterFunction(frontFilter);
    keepPastPlaceholders = pasts.filter(ff).length
      - (_.has(state.challenges, BUCKETS.PAST)
        ? state.challenges[BUCKETS.PAST].filter(ff).length : 0) < 10;
  }

  const newChallenges = _.cloneDeep(state.challenges);
  newChallenges[BUCKETS.PAST] = pasts;

  return {
    ...state,
    allPastChallengesLoaded: loaded.length === 0,
    challenges: newChallenges,
    keepPastPlaceholders,
    loadingPastChallengesUUID: '',
  };
}

function onSelectCommunity(state, { payload }) {
  updateQuery({ communityId: payload || undefined });
  return {
    ...state,
    selectedCommunityId: payload,

    /* Page numbers of past/upcoming challenges depend on the filters. To keep
      * the code simple we just reset them each time a filter is modified.
      * (This community selection defines community-specific filter for
      * challenges). */
    allPastChallengesLoaded: false,
    lastRequestedPageOfPastChallenges: -1,
  };
}

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onSetFilter(state, { payload }) {
  /* Validation of filter parameters: they may come from URL query, thus
   * validation is not a bad idea. As you may note, at the moment we do not
   * do it very carefully (many params are not validated). */
  const filter = _.clone(payload);
  if (_.isPlainObject(filter.tags)) {
    filter.tags = _.values(filter.tags);
  }
  if (_.isPlainObject(filter.subtracks)) {
    filter.subtracks = _.values(filter.subtracks);
  }
  if (filter.startDate && !moment(filter.startDate).isValid()) {
    delete filter.startDate;
  }
  if (filter.endDate && !moment(filter.endDate).isValid()) {
    delete filter.endDate;
  }

  /* Update of URL and generation of the state. */
  updateQuery({ filter });
  return {
    ...state,
    filter,

    /* Page numbers of past/upcoming challenges depend on the filters. To keep
     * the code simple we just reset them each time a filter is modified. */
    allPastChallengesLoaded: false,
    lastRequestedPageOfPastChallenges: -1,
  };
}

/**
 * Handles CHALLENGE_LISTING/GET_REVIEW_OPPORTUNITIES_INIT action.
 * @param {Object} state
 * @param {Object} action Payload will be page, uuid
 * @return {Object} New state
 */
function onGetReviewOpportunitiesInit(state, { payload }) {
  return {
    ...state,
    lastRequestedPageOfReviewOpportunities: payload.page,
    loadingReviewOpportunitiesUUID: payload.uuid,
  };
}

/**
 * Handles CHALLENGE_LISTING/GET_REVIEW_OPPORTUNITIES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call and UUID
 * @return {Object} New state
 */
function onGetReviewOpportunitiesDone(state, { payload, error }) {
  if (error) {
    return state;
  }

  const {
    uuid,
    loaded,
    sort,
    frontFilter,
  } = payload;

  if (uuid !== state.loadingReviewOpportunitiesUUID) return state;

  const ids = new Set();
  loaded.forEach(item => ids.add(item.id));

  const filter = item => !ids.has(item.id);

  const reviewOpportunities = processBucketData(
    null, state, loaded, BUCKETS.REVIEW_OPPORTUNITIES,
    state.sorts, sort, filter, frontFilter,
  );

  return {
    ...state,
    reviewOpportunities,
    loadingReviewOpportunitiesUUID: '',
    allReviewOpportunitiesLoaded: loaded.length === 0,
  };
}

/**
 * Inits the loading of SRMs.
 * @param {Object} state
 * @param {String} payload Operation UUID.
 * @return {Object} New state.
 */
function onGetSrmsInit(state, { payload }) {
  return {
    ...state,
    srms: {
      ...state.srms,
      loadingUuid: payload,
    },
  };
}

/**
 * Handles loaded SRMs.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetSrmsDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to load SRMs', payload);
    fireErrorMessage('Failed to load SRMs', '');
    return state;
  }

  const { uuid, data } = payload;
  if (state.srms.loadingUuid !== uuid) return state;
  return {
    ...state,
    srms: {
      data,
      loadingUuid: '',
      timestamp: Date.now(),
    },
  };
}

/**
 * Creates a new Challenge Listing reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return Challenge Listing reducer.
 */
function create(initialState) {
  const a = actions.challengeListing;
  return handleActions({
    [a.dropChallenges]: (state, { payload }) => {
      const { bucket } = payload;
      const otherState = {};
      switch (bucket) {
        case BUCKETS.REVIEW_OPPORTUNITIES:
          otherState.lastRequestedPageOfReviewOpportunities = -1;
          otherState.reviewOpportunities = [];
          otherState.allReviewOpportunitiesLoaded = false;
          break;
        case BUCKETS.PAST:
          otherState.challenges = _.cloneDeep(state.challenges);
          otherState.lastRequestedPageOfPastChallenges = -1;
          otherState.challenges.past = [];
          otherState.allPastChallengesLoaded = false;
          break;
        default:
          otherState.challenges = {};
          otherState.allMyChallengesLoaded = false;
          otherState.allOnGoingChallengesLoaded = false;
          otherState.allOpenChallengesLoaded = false;
          otherState.allActiveChallengesLoaded = false;
          otherState.allPastChallengesLoaded = false;
          otherState.allReviewOpportunitiesLoaded = false;
          otherState.lastRequestedPageOfActiveChallenges = -1;
          otherState.lastRequestedPageOfMyChallenges = -1;
          otherState.lastRequestedPageOfOpenChallenges = -1;
          otherState.lastRequestedPageOfOnGoingChallenges = -1;
          otherState.lastRequestedPageOfPastChallenges = -1;
          otherState.lastRequestedPageOfReviewOpportunities = -1;
          otherState.lastUpdateOfActiveChallenges = -1;
          otherState.loadingActiveChallengesUUID = '';
          otherState.loadingMyChallengesUUID = '';
          otherState.loadingOpenChallengesUUID = '';
          otherState.loadingOnGoingChallengesUUID = '';
          otherState.loadingRestActiveChallengesUUID = '';
          otherState.loadingPastChallengesUUID = '';
          otherState.loadingReviewOpportunitiesUUID = '';
          otherState.reviewOpportunities = [];
          otherState.meta = {
            allChallengesCount: 0,
            myChallengesCount: 0,
            ongoingChallengesCount: 0,
            openChallengesCount: 0,
            totalCount: 0,
          };
          break;
      }

      return ({
        ...state,
        ...otherState,
      });
    },

    [a.getMoreChallenges]: (state, { payload }) => {
      const { bucket } = payload;
      const otherState = {};
      switch (bucket) {
        case BUCKETS.MY:
          otherState.gettingMoreMyChallenges = true;
          break;
        case BUCKETS.ONGOING:
          otherState.gettingMoreOnGoingChallenges = true;
          break;
        case BUCKETS.OPEN_FOR_REGISTRATION:
          otherState.gettingMoreOpenChallenges = true;
          break;
        default:
          break;
      }
      return ({
        ...state,
        ...otherState,
      });
    },

    [a.expandTag]: (state, { payload }) => ({
      ...state,
      expandedTags: [...state.expandedTags, payload],
    }),

    [a.getAllActiveChallengesInit]: onGetAllActiveChallengesInit,
    [a.getAllActiveChallengesDone]: onGetAllActiveChallengesDone,

    [a.getActiveChallengesInit]: onGetActiveChallengesInit,
    [a.getActiveChallengesDone]: onGetActiveChallengesDone,

    [a.getRestActiveChallengesInit]: onGetRestActiveChallengesInit,
    [a.getRestActiveChallengesDone]: onGetRestActiveChallengesDone,

    [a.getChallengeSubtracksInit]: state => ({
      ...state,
      loadingChallengeSubtracks: true,
    }),
    [a.getChallengeSubtracksDone]: onGetChallengeSubtracksDone,

    [a.getChallengeTagsInit]: state => ({
      ...state,
      loadingChallengeTags: true,
    }),
    [a.getChallengeTagsDone]: onGetChallengeTagsDone,

    [a.getPastChallengesInit]: onGetPastChallengesInit,
    [a.getPastChallengesDone]: onGetPastChallengesDone,

    [a.getReviewOpportunitiesInit]: onGetReviewOpportunitiesInit,
    [a.getReviewOpportunitiesDone]: onGetReviewOpportunitiesDone,

    [a.getSrmsInit]: onGetSrmsInit,
    [a.getSrmsDone]: onGetSrmsDone,

    [a.selectCommunity]: onSelectCommunity,

    [a.setFilter]: onSetFilter,
    [a.setSort]: (state, { payload }) => {
      const otherState = {};
      switch (payload.bucket) {
        case BUCKETS.PAST:
          otherState.lastRequestedPageOfPastChallenges = -1;
          break;
        case BUCKETS.MY:
        case BUCKETS.OPEN_FOR_REGISTRATION:
        case BUCKETS.ONGOING:
          otherState.lastRequestedPageOfActiveChallenges = -1;
          break;
        case BUCKETS.REVIEW_OPPORTUNITIES:
          otherState.lastRequestedPageOfReviewOpportunities = -1;
          break;
        default:
          break;
      }
      return ({
        ...state,
        ...otherState,
        sorts: {
          ...state.sorts,
          [payload.bucket]: payload.sort,
        },
      });
    },

    [a.setDatePickerStatus]: (state, { payload }) => {
      const { status } = payload;
      return ({
        ...state,
        datepickerOpen: status,
      });
    },
  }, _.defaults(_.clone(initialState) || {}, {
    allMyChallengesLoaded: false,
    allOnGoingChallengesLoaded: false,
    allOpenChallengesLoaded: false,
    allActiveChallengesLoaded: false,
    allPastChallengesLoaded: false,
    allReviewOpportunitiesLoaded: false,

    challenges: {},
    challengeSubtracks: [],
    challengeSubtracksMap: {},
    challengeTags: [],

    expandedTags: [],

    gettingMoreChallenges: false,
    gettingMoreMyChallenges: false,
    gettingMoreOnGoingChallenges: false,
    gettingMoreOpenChallenges: false,

    filter: {},

    keepPastPlaceholders: false,

    lastRequestedPageOfActiveChallenges: -1,
    lastRequestedPageOfMyChallenges: -1,
    lastRequestedPageOfOnGoingChallenges: -1,
    lastRequestedPageOfOpenChallenges: -1,
    lastRequestedPageOfPastChallenges: -1,
    lastRequestedPageOfReviewOpportunities: -1,
    lastUpdateOfActiveChallenges: 0,

    loadingActiveChallengesUUID: '',
    loadingMyChallengesUUID: '',
    loadingOnGoingChallengesUUID: '',
    loadingOpenChallengesUUID: '',
    loadingRestActiveChallengesUUID: '',
    loadingPastChallengesUUID: '',
    loadingReviewOpportunitiesUUID: '',

    loadingChallengeSubtracks: false,
    loadingChallengeTags: false,

    reviewOpportunities: [],

    selectedCommunityId: '',

    sorts: {},

    srms: {
      data: [],
      loadingUuid: '',
      timestamp: 0,
    },

    meta: {
      allChallengesCount: 0,
      myChallengesCount: 0,
      ongoingChallengesCount: 0,
      openChallengesCount: 0,
      totalCount: 0,
    },

    datepickerOpen: false,
  }));
}

/**
 * The factory creates the new reducer with initial state tailored to the given
 * ExpressJS HTTP request, if specified (for server-side rendering). If no HTTP
 * request is specified, it creates the default reducer.
 * @return {Promise} Resolves to the new reducer.
 */
export function factory() {
  return Promise.resolve(create());
}

/* Default reducer with empty initial state. */
export default create();
