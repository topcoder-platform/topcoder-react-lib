<a name="module_time"></a>

## time
Utility functions for time/date related stuff


* [time](#module_time)
    * [.formatDuration](#module_time.formatDuration) ⇒ <code>String</code>
    * [.delay(time)](#module_time.delay) ⇒ <code>Promise</code>

<a name="module_time.formatDuration"></a>

### time.formatDuration ⇒ <code>String</code>
Standard duration formatting for listings and details

**Kind**: static constant of [<code>time</code>](#module_time)  
**Returns**: <code>String</code> - Formatted duration  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Number</code> | Time in milliseconds |

<a name="module_time.delay"></a>

### time.delay(time) ⇒ <code>Promise</code>
Returns a Promise that resolves after the specified delay.

**Kind**: static method of [<code>time</code>](#module_time)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Number</code> | Delay [ms]. |

