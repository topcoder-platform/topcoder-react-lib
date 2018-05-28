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
            * [.getEmailPreferences(userId)](#module_services.user..User+getEmailPreferences) ⇒ <code>Promise</code>
            * [.saveEmailPreferences(user, preferences)](#module_services.user..User+saveEmailPreferences) ⇒ <code>Promise</code>
            * [.getCredential(userId)](#module_services.user..User+getCredential) ⇒ <code>Promise</code>
            * [.updatePassword(userId, newPassword, oldPassword)](#module_services.user..User+updatePassword) ⇒ <code>Promise</code>
            * [.getLinkedAccounts(userId)](#module_services.user..User+getLinkedAccounts) ⇒ <code>Promise</code>
            * [.unlinkExternalAccount(userId, provider)](#module_services.user..User+unlinkExternalAccount) ⇒ <code>Promise</code>
            * [.linkExternalAccount(userId, provider, callbackUrl)](#module_services.user..User+linkExternalAccount) ⇒ <code>Promise</code>
        * [~getSocialUserData(profile, accessToken)](#module_services.user..getSocialUserData) ⇒ <code>Object</code>

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
    * [.getEmailPreferences(userId)](#module_services.user..User+getEmailPreferences) ⇒ <code>Promise</code>
    * [.saveEmailPreferences(user, preferences)](#module_services.user..User+saveEmailPreferences) ⇒ <code>Promise</code>
    * [.getCredential(userId)](#module_services.user..User+getCredential) ⇒ <code>Promise</code>
    * [.updatePassword(userId, newPassword, oldPassword)](#module_services.user..User+updatePassword) ⇒ <code>Promise</code>
    * [.getLinkedAccounts(userId)](#module_services.user..User+getLinkedAccounts) ⇒ <code>Promise</code>
    * [.unlinkExternalAccount(userId, provider)](#module_services.user..User+unlinkExternalAccount) ⇒ <code>Promise</code>
    * [.linkExternalAccount(userId, provider, callbackUrl)](#module_services.user..User+linkExternalAccount) ⇒ <code>Promise</code>

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

<a name="module_services.user..User+getEmailPreferences"></a>

#### user.getEmailPreferences(userId) ⇒ <code>Promise</code>
Gets email preferences.

NOTE: Only admins are authorized to use the underlying endpoint.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  
**Returns**: <code>Promise</code> - Resolves to the email preferences result  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | The TopCoder user id |

<a name="module_services.user..User+saveEmailPreferences"></a>

#### user.saveEmailPreferences(user, preferences) ⇒ <code>Promise</code>
Saves email preferences.

NOTE: Only admins are authorized to use the underlying endpoint.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  
**Returns**: <code>Promise</code> - Resolves to the email preferences result  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | The TopCoder user |
| preferences | <code>Object</code> | The email preferences |

<a name="module_services.user..User+getCredential"></a>

#### user.getCredential(userId) ⇒ <code>Promise</code>
Gets credential for the specified user id.

NOTE: Only admins are authorized to use the underlying endpoint.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  
**Returns**: <code>Promise</code> - Resolves to the linked accounts array.  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | The user id |

<a name="module_services.user..User+updatePassword"></a>

#### user.updatePassword(userId, newPassword, oldPassword) ⇒ <code>Promise</code>
Updates user password.

NOTE: Only admins are authorized to use the underlying endpoint.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  
**Returns**: <code>Promise</code> - Resolves to the update result.  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | The user id |
| newPassword | <code>String</code> | The new password |
| oldPassword | <code>String</code> | The old password |

<a name="module_services.user..User+getLinkedAccounts"></a>

#### user.getLinkedAccounts(userId) ⇒ <code>Promise</code>
Gets linked accounts for the specified user id.

NOTE: Only admins are authorized to use the underlying endpoint.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  
**Returns**: <code>Promise</code> - Resolves to the linked accounts array.  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | The user id |

<a name="module_services.user..User+unlinkExternalAccount"></a>

#### user.unlinkExternalAccount(userId, provider) ⇒ <code>Promise</code>
Unlinks external account.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  
**Returns**: <code>Promise</code> - Resolves to the unlink result  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | The TopCoder user id |
| provider | <code>String</code> | The external account service provider |

<a name="module_services.user..User+linkExternalAccount"></a>

#### user.linkExternalAccount(userId, provider, callbackUrl) ⇒ <code>Promise</code>
Links external account.

**Kind**: instance method of [<code>User</code>](#module_services.user..User)  
**Returns**: <code>Promise</code> - Resolves to the linked account result  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | The TopCoder user id |
| provider | <code>String</code> | The external account service provider |
| callbackUrl | <code>String</code> | Optional. The callback url |

<a name="module_services.user..getSocialUserData"></a>

### services.user~getSocialUserData(profile, accessToken) ⇒ <code>Object</code>
Gets social user data.

**Kind**: inner method of [<code>services.user</code>](#module_services.user)  
**Returns**: <code>Object</code> - Social user data  

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Object</code> | The user social profile |
| accessToken | <code>\*</code> | The access token |

