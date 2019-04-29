<a name="module_url"></a>

## url
Collection of url functions.

* [url](#module_url)
    * [.updateQuery](#module_url.updateQuery)
    * [.removeTrailingSlash(res)](#module_url.removeTrailingSlash) ⇒ <code>Promise</code>

<a name="module_url.updateQuery"></a>
### url.updateQuery
If executed client-side (determined in this case by the presence of global
 * window object), this function updates query section of URL; otherwise does
 * nothing.
**Kind**: static method of [<code>tc</code>](#module_url)


<a name="module_url.removeTrailingSlash"></a>
### url.removeTrailingSlash(res) ⇒ <code>Promise</code>
Cleans/removes trailing slash from url
**Kind**: static method of [<code>url</code>](#module_url)
**Returns**: <code>Promise</code> - Resolves to the payload.  

| Param | Type |
| --- | --- |
| res | <code>String</code> |

