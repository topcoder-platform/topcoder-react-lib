<a name="module_challenge_buckets"></a>

## buckets
Collection of buckets of challenge

* [challenge_buckets](#module_challenge_buckets)
    * [.BUCKETS](#module_challenge_buckets.BUCKETS)
    * [.BUCKET_DATA](#module_challenge_buckets.BUCKET_DATA)
    * [.getBuckets(res)](#module_challenge_buckets.getBuckets) ⇒ <code>Promise</code>
    * [.isReviewOpportunitiesBucket(res)](#module_challenge_buckets.isReviewOpportunitiesBucket) ⇒ <code>Promise</code>
    * [.registerBucket](#module_challenge_buckets.registerBucket)

<a name="module_challenge_buckets.BUCKETS"></a>
### challenge_buckets.BUCKETS
Bucket types
**Kind**: static constant of [<code>challenge_buckets</code>](#module_challenge_buckets)  


<a name="module_challenge_buckets.BUCKET_DATA"></a>
### challenge_buckets.BUCKET_DATA
The data of bucket
**Kind**: static constant of [<code>challenge_buckets</code>](#module_challenge_buckets)  


<a name="module_challenge_buckets.getBuckets"></a>
### challenge_buckets.getBuckets(userHandle) ⇒ <code>Promise</code>
Returns configuration of all possible challenge buckets.
**Kind**: static method of [<code>challenge_buckets</code>](#module_challenge_buckets)
**Returns**: <code>Promise</code> - Resolves to the payload.  

| Param | Type |
| --- | --- |
| res | <code>Object</code> | 


<a name="module_challenge_buckets.isReviewOpportunitiesBucket"></a>
### challenge_buckets.isReviewOpportunitiesBucket(bucket) ⇒ <code>Promise</code>
Tests if a given bucket is of any of the Review Opportunities types
**Kind**: static method of [<code>challenge_buckets</code>](#module_challenge_buckets) 
**Returns**: <code>Promise</code> - Resolves to the payload.  

| Param | Type |
| --- | --- |
| res | <code>Boolean</code> | 

<a name="module_challenge_buckets.registerBucket"></a>
### challenge_buckets.registerBucket(id, bucket) ⇒ <code>Promise</code>
Registers a new bucket.
**Kind**: static method of [<code>challenge_buckets</code>](#module_challenge_buckets)  
 
