<a name="module_actions.terms"></a>

## actions.terms
Actions related to Topcoder terms of use.


* [actions.terms](#module_actions.terms)
    * [.getTermsInit(arg)](#module_actions.terms.getTermsInit) ⇒ <code>Action</code>
    * [.getTermsDone(entity, tokens, mockAgreed)](#module_actions.terms.getTermsDone) ⇒ <code>Action</code>
    * [.checkStatusInit()](#module_actions.terms.checkStatusInit) ⇒ <code>Action</code>
    * [.checkStatusDone(entity, tokens)](#module_actions.terms.checkStatusDone) ⇒ <code>Acion</code>
    * [.getTermDetailsInit(termId)](#module_actions.terms.getTermDetailsInit) ⇒ <code>Action</code>
    * [.getTermDetailsDone(termId, tokenV2)](#module_actions.terms.getTermDetailsDone) ⇒ <code>Action</code>
    * [.getDocuSignUrlInit(templateId)](#module_actions.terms.getDocuSignUrlInit) ⇒ <code>Action</code>
    * [.getDocuSignUrlDone(templateId, returnUrl, tokenV2)](#module_actions.terms.getDocuSignUrlDone) ⇒ <code>Action</code>
    * [.agreeTermInit(termId)](#module_actions.terms.agreeTermInit) ⇒ <code>Action</code>
    * [.agreeTermDone(termId, tokenV2)](#module_actions.terms.agreeTermDone) ⇒ <code>Action</code>

<a name="module_actions.terms.getTermsInit"></a>

### actions.terms.getTermsInit(arg) ⇒ <code>Action</code>
Creates an action that signals beginning of fetching terms data.

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  
**Todo**

- [ ] Figure out the exact meaning of the argument.


| Param | Type | Description |
| --- | --- | --- |
| arg | <code>String</code> | An argument. The exact meaning to be figured out. |

<a name="module_actions.terms.getTermsDone"></a>

### actions.terms.getTermsDone(entity, tokens, mockAgreed) ⇒ <code>Action</code>
Creates an action that fetches terms of the specified entity.

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |
| [entity.type] | <code>String</code> | entity type: `challenge` or `community` |
| [entity.id] | <code>String</code> | entity id |
| tokens | <code>Object</code> | object with tokenV2 and tokenV3 properties |
| mockAgreed | <code>Boolean</code> | if true, then all terms will be mocked as   agreed this only makes effect if MOCK_TERMS_SERVICE is `true` and the only  purpose of this param is testing terms |

<a name="module_actions.terms.checkStatusInit"></a>

### actions.terms.checkStatusInit() ⇒ <code>Action</code>
Creates an action that signals beginning of terms status check
 operation.

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  
<a name="module_actions.terms.checkStatusDone"></a>

### actions.terms.checkStatusDone(entity, tokens) ⇒ <code>Acion</code>
Creates an action thatwill check if all terms of specified entity have been agreed,

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  
**Todo:**: Looks like the bug described above was caused by server caching responses
at least for getTermDetails which is used by getCommunityTerms.
To fix it I've added nocache random value param in the terms service
for getTermDetails and it looks like works so we get results immediately.
This still have to be tested for challenges as they use another endpoint
in method getChallengeTerms.
Also terms which use third part service DocuSign has to be also tested prior
to removing multiple checks.
In case their agreed status is updated immediately, this code
has to simplified and don't make several attempts, only one.  
**Todo**

- [ ] As in some reason backend does not saves immediately that DocuSign term has been agreed
In case not all terms were agreed we try again after some delay.
Maximum quantity attempts and delay between attempts are configured in
MAX_ATTEMPTS and TIME_OUT


| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |
| [entity.type] | <code>String</code> | entity type `challenge` or `community`. |
| [entity.id] | <code>String</code> | entity id |
| tokens | <code>Object</code> | object with tokenV2 and tokenV3 properties |

<a name="module_actions.terms.getTermDetailsInit"></a>

### actions.terms.getTermDetailsInit(termId) ⇒ <code>Action</code>
Creates an action that marks that we are about to fetch details of the
 specified term. If any details for another term are currently being fetched,
they will be silently discarded.

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  

| Param | Type |
| --- | --- |
| termId | <code>Number</code> \| <code>String</code> | 

<a name="module_actions.terms.getTermDetailsDone"></a>

### actions.terms.getTermDetailsDone(termId, tokenV2) ⇒ <code>Action</code>
Creates an action that fetches details of the specified term.

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  

| Param | Type |
| --- | --- |
| termId | <code>Number</code> \| <code>String</code> | 
| tokenV2 | <code>String</code> | 

<a name="module_actions.terms.getDocuSignUrlInit"></a>

### actions.terms.getDocuSignUrlInit(templateId) ⇒ <code>Action</code>
Creates an action that signals beginning of getting a DocuSign URL.

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>Number</code> \| <code>String</code> | id of document template to sign |

<a name="module_actions.terms.getDocuSignUrlDone"></a>

### actions.terms.getDocuSignUrlDone(templateId, returnUrl, tokenV2) ⇒ <code>Action</code>
Creates an action that generates the url of DoduSign term

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>Number</code> \| <code>String</code> | id of document template to sign |
| returnUrl | <code>String</code> | callback url after finishing singing |
| tokenV2 | <code>String</code> | auth token |

<a name="module_actions.terms.agreeTermInit"></a>

### actions.terms.agreeTermInit(termId) ⇒ <code>Action</code>
Creates an action that signals beginning of terms agreement operation.

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  

| Param | Type | Description |
| --- | --- | --- |
| termId | <code>Number</code> \| <code>String</code> | id of term |

<a name="module_actions.terms.agreeTermDone"></a>

### actions.terms.agreeTermDone(termId, tokenV2) ⇒ <code>Action</code>
Creates an action that agrees to a term.

**Kind**: static method of [<code>actions.terms</code>](#module_actions.terms)  

| Param | Type | Description |
| --- | --- | --- |
| termId | <code>Number</code> \| <code>String</code> | id of term |
| tokenV2 | <code>String</code> | auth token |

