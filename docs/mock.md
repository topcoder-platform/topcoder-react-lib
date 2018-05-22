<a name="module_mock"></a>

## mock
Collection of functions useful in unit tests.

**Todo**

- [ ] This will be moved to Jest utils in `topcoder-react-utils` soon.

<a name="module_mock.mockAction"></a>

### mock.mockAction(type, payload, error)
Creates a mock Flux Standard Action creator.
TODO: Additional options to set errors, etc. should be added.
TODO: It may be handier to return action created wrapped into Jest mock
 function.

**Kind**: static method of [<code>mock</code>](#module_mock)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | Action type. |
| payload | <code>Any</code> | Action payload. |
| error | <code>Any</code> | Has error or not. |

