<a name="module_services.billing"></a>

## services.billing
Access to Topcoder billing accounts.


* [services.billing](#module_services.billing)
    * _static_
        * [.default](#module_services.billing.default)
        * [.getService(tokenV3)](#module_services.billing.getService) ⇒ <code>Billing</code>
    * _inner_
        * [~Billing](#module_services.billing..Billing)
            * [new Billing(tokenV3)](#new_module_services.billing..Billing_new)
            * [.getUserBillingAccounts()](#module_services.billing..Billing+getUserBillingAccounts) ⇒ <code>Promise</code>

<a name="module_services.billing.default"></a>

### services.billing.default
Default module export is
 [Billing](#module_services.billing..Billing) class.

**Kind**: static property of [<code>services.billing</code>](#module_services.billing)  
<a name="module_services.billing.getService"></a>

### services.billing.getService(tokenV3) ⇒ <code>Billing</code>
Returns a new or existing Billing service for the user specified by token.

**Kind**: static method of [<code>services.billing</code>](#module_services.billing)  
**Returns**: <code>Billing</code> - Billing service instance.  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |

<a name="module_services.billing..Billing"></a>

### services.billing~Billing
Billing service object.

**Kind**: inner class of [<code>services.billing</code>](#module_services.billing)  

* [~Billing](#module_services.billing..Billing)
    * [new Billing(tokenV3)](#new_module_services.billing..Billing_new)
    * [.getUserBillingAccounts()](#module_services.billing..Billing+getUserBillingAccounts) ⇒ <code>Promise</code>

<a name="new_module_services.billing..Billing_new"></a>

#### new Billing(tokenV3)
Creates a new service.


| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |

<a name="module_services.billing..Billing+getUserBillingAccounts"></a>

#### billing.getUserBillingAccounts() ⇒ <code>Promise</code>
Gets billing accounts accessible to service user.

**Kind**: instance method of [<code>Billing</code>](#module_services.billing..Billing)  
**Returns**: <code>Promise</code> - Resolves to the list of billing account objects.  
