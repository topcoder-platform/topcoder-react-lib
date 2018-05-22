<a name="module_services.user-settings"></a>

## services.user-settings
User Settings service. Corresponding part of the backend is
implemented as a separate Heroku App, which is set up only for prod.
Currently, we use it to save user-defined filters in the challenge search.


* [services.user-settings](#module_services.user-settings)
    * _static_
        * [.default](#module_services.user-settings.default)
        * [.getUserSettingsService(tokenV2)](#module_services.user-settings.getUserSettingsService) ⇒ <code>UserSettings</code>
    * _inner_
        * [~UserSettings](#module_services.user-settings..UserSettings)
            * [new UserSettings(tokenV2)](#new_module_services.user-settings..UserSettings_new)
            * [.deleteFilter(id)](#module_services.user-settings..UserSettings+deleteFilter) ⇒ <code>Promise</code>
            * [.getFilters()](#module_services.user-settings..UserSettings+getFilters) ⇒ <code>Promise</code>
            * [.saveFilter(name, filter)](#module_services.user-settings..UserSettings+saveFilter)
            * [.updateFilter(id, name, filter)](#module_services.user-settings..UserSettings+updateFilter) ⇒ <code>Promise</code>

<a name="module_services.user-settings.default"></a>

### services.user-settings.default
Default export is [UserSettings](#module_services.user-settings..UserSettings)
 class.

**Kind**: static property of [<code>services.user-settings</code>](#module_services.user-settings)  
<a name="module_services.user-settings.getUserSettingsService"></a>

### services.user-settings.getUserSettingsService(tokenV2) ⇒ <code>UserSettings</code>
Returns a new or existing instance of UserSettings service.

**Kind**: static method of [<code>services.user-settings</code>](#module_services.user-settings)  

| Param | Type | Description |
| --- | --- | --- |
| tokenV2 | <code>String</code> | Topcoder auth token v2. |

<a name="module_services.user-settings..UserSettings"></a>

### services.user-settings~UserSettings
Service class.

**Kind**: inner class of [<code>services.user-settings</code>](#module_services.user-settings)  

* [~UserSettings](#module_services.user-settings..UserSettings)
    * [new UserSettings(tokenV2)](#new_module_services.user-settings..UserSettings_new)
    * [.deleteFilter(id)](#module_services.user-settings..UserSettings+deleteFilter) ⇒ <code>Promise</code>
    * [.getFilters()](#module_services.user-settings..UserSettings+getFilters) ⇒ <code>Promise</code>
    * [.saveFilter(name, filter)](#module_services.user-settings..UserSettings+saveFilter)
    * [.updateFilter(id, name, filter)](#module_services.user-settings..UserSettings+updateFilter) ⇒ <code>Promise</code>

<a name="new_module_services.user-settings..UserSettings_new"></a>

#### new UserSettings(tokenV2)

| Param | Type |
| --- | --- |
| tokenV2 | <code>String</code> | 

<a name="module_services.user-settings..UserSettings+deleteFilter"></a>

#### userSettings.deleteFilter(id) ⇒ <code>Promise</code>
Removes the filter specified by ID.

**Kind**: instance method of [<code>UserSettings</code>](#module_services.user-settings..UserSettings)  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="module_services.user-settings..UserSettings+getFilters"></a>

#### userSettings.getFilters() ⇒ <code>Promise</code>
Gets saved filters.

**Kind**: instance method of [<code>UserSettings</code>](#module_services.user-settings..UserSettings)  
<a name="module_services.user-settings..UserSettings+saveFilter"></a>

#### userSettings.saveFilter(name, filter)
Saves filter.

**Kind**: instance method of [<code>UserSettings</code>](#module_services.user-settings..UserSettings)  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| filter | <code>Object</code> | 

<a name="module_services.user-settings..UserSettings+updateFilter"></a>

#### userSettings.updateFilter(id, name, filter) ⇒ <code>Promise</code>
Updates filter.

**Kind**: instance method of [<code>UserSettings</code>](#module_services.user-settings..UserSettings)  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 
| name | <code>String</code> | 
| filter | <code>Object</code> | 

