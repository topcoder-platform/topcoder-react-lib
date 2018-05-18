<a name="module_errors"></a>

## errors
Utility functions for the standard error handling.

**Todo**

- [ ] They will be moved to `topcoder-react-utils` soon.


* [errors](#module_errors)
    * [.fireErrorMessage()](#module_errors.fireErrorMessage)
    * [.clearAllErrorIcons()](#module_errors.clearAllErrorIcons)
    * [.setErrorIcon(id, title, message)](#module_errors.setErrorIcon)
    * [.clearErrorIcon(id)](#module_errors.clearErrorIcon)

<a name="module_errors.fireErrorMessage"></a>

### errors.fireErrorMessage()
The function behaves similarly to javascript alert()
it will show a modal error diaglog with styling until the user clicks OK.

**Kind**: static method of [<code>errors</code>](#module_errors)  
<a name="module_errors.clearAllErrorIcons"></a>

### errors.clearAllErrorIcons()
clear all error icons

**Kind**: static method of [<code>errors</code>](#module_errors)  
<a name="module_errors.setErrorIcon"></a>

### errors.setErrorIcon(id, title, message)
add error message to error icon in bottom left in the screen.

**Kind**: static method of [<code>errors</code>](#module_errors)  

| Param | Description |
| --- | --- |
| id | id of error icon type (ERROR_ICON_TYPES.NETWORK or ERROR_ICON_TYPES.API) |
| title | icon hover title |
| message | icon hover message |

<a name="module_errors.clearErrorIcon"></a>

### errors.clearErrorIcon(id)
clear all error message for an error icon.

**Kind**: static method of [<code>errors</code>](#module_errors)  

| Param | Description |
| --- | --- |
| id | id of error icon type to clear |

