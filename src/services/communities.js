/**
 * Communities service.
 */
import fetch from 'isomorphic-fetch';
import qs from 'qs';
import { config } from 'topcoder-react-utils';

/* Client-side version of the service. */
class Communities {
  constructor(tokenV3) {
    this.private = { tokenV3 };
  }

  /**
   * Gets the list of communities accessible to the member of specified groups.
   * @param {String[]} userGroupIds
   * @return {Promise} Resolves to the array of community data objects. Each of
   *  the objects indludes only the most important data on the community.
   */
  getList(userGroupIds) {
    let url = `/community-app-assets/api/tc-communities?${qs.stringify({ groups: userGroupIds })}`;
    if (config.URL && config.URL.COMMUNITY_APP) {
      url = `${config.URL.COMMUNITY_APP}url`;
    }
    return fetch(url, {
      headers: {
        authorization: this.private.tokenV3,
      },
    }).then(res => res.json());
  }

  /**
   * Gets metadata for the specified community.
   * @param {String} communityId
   * @return {Promise} Resolves to the community metadata.
   */
  getMetadata(communityId) {
    let url = `/community-app-assets/api/tc-communities/${communityId}/meta`;
    if (config.URL && config.URL.COMMUNITY_APP) {
      url = `${config.URL.COMMUNITY_APP}url`;
    }
    return fetch(url, {
      headers: {
        authorization: this.private.tokenV3,
      },
    }).then(res => res.json());
  }
}

/**
 * Returns a new or existing communities service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {Communities} Communties service object
 */
let lastInstance = null;
export function getService(tokenV3) {
  if (!lastInstance || (tokenV3 !== lastInstance.private.tokenV3)) {
    lastInstance = new Communities(tokenV3);
  }
  return lastInstance;
}

export default undefined;
