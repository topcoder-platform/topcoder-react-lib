<a name="module_services.user"></a>

## services.user
The User service provides functionality related to Topcoder user
 accounts.


* [services.user](#module_services.user)
    * _static_
        * [.default](#module_services.user.default)
        * [.getService(tokenV3, tokenV2)](#module_services.user.getService) ⇒ <code>Api</code>
    * _inner_
        * [~User](#module_services.user..User)
            * [new User(tokenV3, tokenV2)](#new_module_services.user..User_new)
            * [.getAchievements(username)](#module_services.user..User+getAchievements) ⇒ <code>Object</code>
            * [.getUserPublic(username)](#module_services.user..User+getUserPublic) ⇒ <code>Object</code>
            * [.getUser(username)](#module_services.user..User+getUser) ⇒ <code>Promise</code>

<a name="module_services.user.default"></a>

### services.user.default
Default export is [User](#module_services.user..User) class.

**Kind**: static property of [<code>services.user</code>](#module_services.user)  
<a name="module_services.user.getService"></a>

### services.user.getService(tokenV3, tokenV2) ⇒ <code>Api</code>
Returns a new or existing User service for the specified tokenV3.

**Kind**: static method of [<code>services.user</code>](#module_services.user)  
**Returns**: <code>Api</code> - API v3 service object.  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Topcoder auth token v3. |
| tokenV2 | <code>String</code> | Optional. TC auth token v2. |

<a name="module_services.user..User"></a>

### services.user~User
Service class.

**Kind**: inner class of [<code>services.user</code>](#module_services.user)  

* [~User](#module_services.user..User)
    * [new User(tokenV3, tokenV2)](#new_module_services.user..User_new)
    * [.getAchievements(username)](#module_services.user..User+getAchievements) ⇒ <code>Object</code>
    * [.getUserPublic(username)](#module_services.user..User+getUserPublic) ⇒ <code>Object</code>
    * [.getUser(username)](#module_services.user..User+getUser) ⇒ <code>Promise</code>

<a name="new_module_services.user..User_new"></a>

#### new User(tokenV3, tokenV2)
Creates a new User service.


| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Topcoder auth tokenV3. |
| tokenV2 | <code>String</code> | TC auth token v2. |

<a name="module_services.user..User+getAchievements"></a>

#### user.getAchievements(username) ⇒ <code>Object</code>
Gets user achievements. Does not need auth.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 

<a name="module_services.user..User+getUserPublic"></a>

#### user.getUserPublic(username) ⇒ <code>Object</code>
Gets public user info. Does not need auth.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 

<a name="module_services.user..User+getUser"></a>

#### user.getUser(username) ⇒ <code>Promise</code>
Gets user data object for the specified username.

NOTE: Only admins are authorized to use the underlying endpoint.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  
**Returns**: <code>Promise</code> - Resolves to the user data object.  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 

