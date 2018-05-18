<a name="module_actions.auth"></a>

## actions.auth
Actions related to Topcoder authentication system.


* [actions.auth](#module_actions.auth)
    * [.loadProfileDone(userTokenV3)](#module_actions.auth.loadProfileDone) ⇒ <code>Action</code>
    * [.setTcTokenV2(tokenV2)](#module_actions.auth.setTcTokenV2) ⇒ <code>Action</code>
    * [.setTcTokenV3(tokenV3)](#module_actions.auth.setTcTokenV3) ⇒ <code>Action</code>

<a name="module_actions.auth.loadProfileDone"></a>

### actions.auth.loadProfileDone(userTokenV3) ⇒ <code>Action</code>
Creates an action that loads Topcoder user profile from v3 API.

**Kind**: static method of [<code>actions.auth</code>](#module_actions.auth)  

| Param | Type | Description |
| --- | --- | --- |
| userTokenV3 | <code>String</code> | v3 authentication token. |

<a name="module_actions.auth.setTcTokenV2"></a>

### actions.auth.setTcTokenV2(tokenV2) ⇒ <code>Action</code>
Creates an action that sets Topcoder v2 authentication token.

**Kind**: static method of [<code>actions.auth</code>](#module_actions.auth)  

| Param | Type | Description |
| --- | --- | --- |
| tokenV2 | <code>String</code> | Topcoder v2 authentication token. |

<a name="module_actions.auth.setTcTokenV3"></a>

### actions.auth.setTcTokenV3(tokenV3) ⇒ <code>Action</code>
Creates an action that decodes Topcoder v3 authentication token,
to get user object, and then writes both the token and the user object into
Redux store.

**Kind**: static method of [<code>actions.auth</code>](#module_actions.auth)  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Topcoder v3 authentication token. |

