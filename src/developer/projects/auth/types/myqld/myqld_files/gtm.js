
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"439",
  
  "macros":[{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/(index|default)\\.(html?|aspx?|php)\/i,d=",["escape",["macro",3],8,16],";a=",["escape",["macro",4],8,16],".replace(a,\"\");var b=",["escape",["macro",5],8,16],",c=",["escape",["macro",6],8,16],";b\u0026\u0026(b=\/^\\?.*\/.test(b)?b:\"?\"+b);c\u0026\u0026(c=\/^#.*\/.test(c)?c:\"#\"+c);a\u0026\u0026(\/\\\/$\/.test(d)||(a=\/^\\\/.*\/.test(a)?a:\"\/\"+a));return decodeURIComponent(d+a+b+c)})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-7276966-12"
    },{
      "function":"__c",
      "vtp_value":"11"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",9],8,16],";return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"phone_number tel telephone phone mobile mob firstname lastname surname givenName middleNames familyName password passwd pass postcode zipcode zip unsubscribe cpUid Password lastLoggedInUsernameForIdentity vendorName vendorContact vendorABN vendorPhoneNumber vendorEmail page_0$contentform_0$txtEmail page_0$contentform_0$txtpage_0$contentform_0$txtSurname page_0$contentform_0$txtMessage page_0$content_3$txtName page_0$content_3$txtEmail page_0$content_3$txtMessage emailIdUpdated email\".split(\" \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"location clientSessionId dswid formId in_sessionid mfRid ageRestriction anyWord as_fid as_sfid awardDateFromString awardDateToString awardedDateFromString awardedDateToString businessId changeLevel closingDateFromString closingDateToString codeSearchString contractTitle CSRFNONCE dateAwardedIndex dateClosingIndex dateOpeningIndex editUNSPSCCode expiredReason fieldNumber groupBy inputlist isSearch issuingBusinessId issuingBusinessIdForSort mkt_tok nonceCacheSize noncePrev openingDateFromString openingDateToString orderBy originalResponseCode page pageNum parentId path personId popup popupWin post reference regionId register retryWith returnUrl saveSearchProfileName searchForm.businessName searchForm.businessType searchForm.emailAddress searchForm.firstName searchForm.lastName searchForm.roleId searchProfile%5B0%5D.notify searchProfile%5B1%5D.notify searchProfile%5B2%5D.notify searchProfile%5B3%5D.notify searchProfile%5B4%5D.notify selectedDeleteProfileId selectedMegaCategory selectedProfileId showSearch sortBy startingDateFromString startingDateToString state subscribe tenderBoxTaskId tenderState tenderTitle type unID unId unspscCode unspscCode1 unspscCode2 unspscCode3 unspscCodeLevel2 unspscCodeLevel3 unspscCodeLevel4 url userName value withdrawalReason\".split(\" \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",11],8,16],",h=",["escape",["macro",12],8,16],",f=a.split(\"?\"),b=[],c=[],k=[],g=\"?\",l=RegExp(\/^([\\w!#$%\u0026'*\\+\\-\\\/=?^`{|}~](?:\\.?[\\w!#$%\u0026'*\\+\\-\\\/=?^`{|}~])*)@([^\\W_](?:\\-*[^\\W_])*(?:(?:\\.[^\\W_](?:\\-*[^\\W_])*)*\\.([^\\W_]{2,}|[^\\W_](?:\\-*[^\\W_])+)))*$\/),e=",["escape",["macro",13],8,16],";if(a.includes(\"?\")){if(2\u003Cf.length){var d=f.slice(1);f[1]=d.join(\"?\");f.splice(2)}if(f[1].includes(\"#\")){d=f[1].split(\"#\");if(2\u003Cd.length){var m=d.slice(1);d[1]=m.join(\"#\");d.splice(2)}f[1]=d[0];f[2]=d[1]}d=f[1].split(\"\\x26\");\nif(a.match(\/qtenders\\.hpw\\.qld\\.gov\\.au\/))for(a=d.length-1;0\u003C=a;a--)e.includes(d[a].split(\"\\x3d\")[0])\u0026\u0026d.splice(a,1);for(a=0;a\u003Cd.length;a++)if(\"\"!=d[a]){pairJoin=d[a].split(\"\\x3d\");for(e=0;e\u003CpairJoin.length;e++)1==l.test(pairJoin[e])\u0026\u0026(pairJoin[e]=\"[EMAIL-REDACTED]\");b.push(pairJoin[0]);0==d[a].includes(\"\\x3d\")\u0026\u0026(pairJoin[1]=\"~!4120919114_MALFORMED-NO_EQUATOR!~\");Object.keys(c).includes(pairJoin[0])?(e=c[pairJoin[0]].toString(),e+=\",\"+pairJoin[1],c[pairJoin[0]]=e.split(\",\")):c[pairJoin[0]]=pairJoin[1]}for(a=\n0;a\u003CObject.keys(c).length;a++)for(e=0;e\u003Ch.length;e++)Object.keys(c)[a].includes(h[e])\u0026\u0026k.push(h[e]);for(a=0;a\u003Ck.length;a++)if(\"object\"===typeof c[k[a]])for(h=0;h\u003Cc[k[a]].length;h++)c[k[a]][h]=\"[PII-REDACTED]\";else c[k[a]]=\"[PII-REDACTED]\";for(a=0;a\u003Cb.length;a++)\"string\"===typeof c[b[a]]?g=\"~!4120919114_MALFORMED-NO_EQUATOR!~\"===c[b[a]]==0?g+(b[a]+\"\\x3d\"+c[b[a]]):g+b[a]:\"object\"===typeof c[b[a]]\u0026\u0026(g=\"~!4120919114_MALFORMED-NO_EQUATOR!~\"===c[b[a]][0]==0?g+(b[a]+\"\\x3d\"+c[b[a]][0]):g+b[a],c[b[a]].shift()),\na\u003Cb.length-1\u0026\u0026(g+=\"\\x26\");\"?\"==g\u0026\u0026(g=\"\");b=f[0]+g;f[2]\u0026\u0026(b+=\"#\"+f[2]);return b}return a})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"userId"
    },{
      "function":"__c",
      "vtp_value":"18"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){window.datisan=window.datisan||{};if(!datisan.fbclid_cd){var a=",["escape",["macro",11],8,16],",b=\/[\u0026\\\/\\?](fbclid=)[^\u0026\\\/\\?]+\/i;b.test(a)\u0026\u0026(a=b.exec(a)[0],a=a.split(\"\\x3d\")[1])\u0026\u0026(datisan.fbclid_cd=a)}return datisan.fbclid_cd})();"]
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__j",
      "vtp_name":"CMS_Asset_ID"
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var g=[],m=document.querySelectorAll('meta[name\\x3d\"DCTERMS.creator\"], meta[name\\x3d\"DC.Creator\"], meta[name\\x3d\"dc.creator\"], meta[name\\x3d\"DC.Creator.CorporateName\"]'),h=0,n=m.length;h\u003Cn;h++){var b=m[h].getAttribute(\"content\"),k;if(null!=b\u0026\u0026void 0!=b\u0026\u0026!\/^\\s*$\/.test(b)){var c=\" - \";var d=\";\",l=\"\\x3d\";d=d||\";\";l=l||\"\\x3d\";c=c||\" - \";var f={};b=b.split(d);d=0;for(var p=b.length;d\u003Cp;d++){var a=b[d].split(l),e=a[0].replace(\/^\\s+|\\s+$\/g,\"\");a=a[1];if(void 0==a||null==a||a.match(\/^\\s*$\/))a=\ne,e=\"corporateName\";f[e]=e in f?f[e]+c+a:a}(c=f)\u0026\u0026(k=c.corporateName||c.ou||c.CorporateName);k\u0026\u0026g.push(k)}}if(0\u003Cg.length)return g.join(\", \")})();"]
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],d=document.querySelectorAll('meta[name\\x3d\"DCTERMS.created\"], meta[name\\x3d\"dc.created\"], meta[name\\x3d\"DC.Date.created\"], meta[name\\x3d\"DC.Date.Issued\"]'),c=0,e=d.length;c\u003Ce;c++){var a=d[c].getAttribute(\"content\");null==a||void 0==a||\/^\\s*$\/.test(a)||b.push(a)}if(0\u003Cb.length)return b.join(\", \")})();"]
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],d=document.querySelectorAll('meta[name\\x3d\"DCTERMS.modified\"], meta[name\\x3d\"DC.Date.modified\"], meta[name\\x3d\"dc.modified\"]'),c=0,e=d.length;c\u003Ce;c++){var a=d[c].getAttribute(\"content\");null==a||void 0==a||\/^\\s*$\/.test(a)||b.push(a)}if(0\u003Cb.length)return b.join(\", \")})();"]
    },{
      "function":"__c",
      "vtp_value":"6"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],d=document.querySelectorAll('meta[name\\x3d\"DCTERMS.type\"], meta[name\\x3d\"DC.Type.category\"], meta[name\\x3d\"DC.Type.Category\"]'),c=0,e=d.length;c\u003Ce;c++){var a=d[c].getAttribute(\"content\");null==a||void 0==a||\/^\\s*$\/.test(a)||b.push(a)}if(0\u003Cb.length)return b.join(\", \")})();"]
    },{
      "function":"__c",
      "vtp_value":"7"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],d=document.querySelectorAll('meta[name\\x3d\"AGLSTERMS.documentType\"], meta[name\\x3d\"DC.Type.documentType\"], meta[name\\x3d\"DC.Type.DocumentType\"]'),c=0,e=d.length;c\u003Ce;c++){var a=d[c].getAttribute(\"content\");null==a||void 0==a||\/^\\s*$\/.test(a)||b.push(a)}if(0\u003Cb.length)return b.join(\", \")})();"]
    },{
      "function":"__c",
      "vtp_value":"8"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],d=document.querySelectorAll('meta[name\\x3d\"AGLSTERMS.aggregationLevel\"], meta[name\\x3d\"DC.Type.aggregationLevel\"], meta[name\\x3d\"DC.Type.AggregationLevel\"]'),c=0,e=d.length;c\u003Ce;c++){var a=d[c].getAttribute(\"content\");null==a||void 0==a||\/^\\s*$\/.test(a)||b.push(a)}if(0\u003Cb.length)return b.join(\", \")})();"]
    },{
      "function":"__c",
      "vtp_value":"9"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],d=document.querySelectorAll('meta[name\\x3d\"DCTERMS.audience\"], meta[name\\x3d\"AGLS.audience\"], meta[name\\x3d\"AGLS.Audience\"], meta[name\\x3d\"dcterms.audience\"], meta[name\\x3d\"dcterms.Audience\"]'),c=0,e=d.length;c\u003Ce;c++){var a=d[c].getAttribute(\"content\");null==a||void 0==a||\/^\\s*$\/.test(a)||b.push(a)}if(0\u003Cb.length)return b.join(\", \")})();"]
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__c",
      "vtp_value":"12"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(a,b){for(b=a=\"\";36\u003Ea++;b+=51*a\u002652?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):\"-\");return b})();"]
    },{
      "function":"__c",
      "vtp_value":"13"
    },{
      "function":"__cid"
    },{
      "function":"__c",
      "vtp_value":"14"
    },{
      "function":"__ctv"
    },{
      "function":"__c",
      "vtp_value":"16"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__c",
      "vtp_value":"15"
    },{
      "function":"__c",
      "vtp_value":"17"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",10]],["map","fieldName","location","value",["macro",14]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",15]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",16],"dimension",["macro",17]],["map","index",["macro",18],"dimension",["macro",19]],["map","index",["macro",20],"dimension",["macro",21]],["map","index",["macro",22],"dimension",["macro",23]],["map","index",["macro",24],"dimension",["macro",25]],["map","index",["macro",26],"dimension",["macro",27]],["map","index",["macro",28],"dimension",["macro",29]],["map","index",["macro",30],"dimension",["macro",31]],["map","index",["macro",32],"dimension",["macro",33]],["map","index",["macro",34],"dimension",["macro",8]],["map","index",["macro",35],"dimension",["macro",36]],["map","index",["macro",37],"dimension",["macro",38]],["map","index",["macro",39],"dimension",["macro",40]],["map","index",["macro",41],"dimension",["macro",42]],["map","index",["macro",43],"dimension",["macro",11]],["map","index",["macro",44],"dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"action",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"label",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",50],8,16],".parentNode.id})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",50],8,16],".parentNode})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",52],8,16],".parentNode.parentNode.id})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\/(index|default)\\.(html?|aspx?|php)\/i,a=document.createElement(\"a\");if(0==",["escape",["macro",0],8,16],".indexOf(\"javascript\"))return ",["escape",["macro",0],8,16],";a.href=",["escape",["macro",0],8,16],";var c=a.hostname;b=a.pathname.replace(b,\"\");var d=a.search;a=a.hash;d\u0026\u0026\/^\\?.*\/.test(d);a\u0026\u0026(a=\/^#.*\/.test(a)?a:\"#\"+a);b\u0026\u0026(\/\\\/$\/.test(c)||(b=\/^\\\/.*\/.test(b)?b:\"\/\"+b));return decodeURIComponent(c+b+a)})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__c",
      "vtp_value":"UA-7276966-17"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__r"
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"CMS_Asset_ID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"interaction-type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",64],
      "vtp_name":"interactionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"target"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"target-properties"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",68],
      "vtp_name":"label"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"value"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"content-name"
    },{
      "function":"__c",
      "vtp_value":["macro",8]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",8],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(location not set)",
      "vtp_name":"ngErrorLocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ngErrorMsg"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ngErrorStack"
    },{
      "function":"__j",
      "vtp_name":"qgovGaScrollTrackReg"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventTiming"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventNonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__c",
      "vtp_value":"undefined"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",84],
      "vtp_name":"cetEnquiryStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",84],
      "vtp_name":"cetEnquiryId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",84],
      "vtp_name":"cetServiceName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"CET Status\"+(",["escape",["macro",87],8,16],"===",["escape",["macro",84],8,16],"?\"\":\": \"+",["escape",["macro",87],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",84],
      "vtp_name":"userProfileData.user_metadata.qid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){switch(",["escape",["macro",67],8,16],"){case \"Submit Success\":var a=\"Widget Complete\";break;case \"Step\":case \"Step Timing\":a=\"Widget Step Complete\"}return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"No Click Destination",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.pptx?((\\?|#)(.*))?$","value","PPT Download"]]
    },{
      "function":"__c",
      "vtp_value":"localhost"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new RegExp(\"^(\"+",["escape",["macro",93],8,16],"+\")\")).toString()})();"]
    },{
      "function":"__c",
      "vtp_value":"(qld\\.gov\\.au|qld\\.edu\\.au)"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"ELT - No Click Destination \/ Functionality Click",
      "vtp_map":["list",["map","key","^tel\\:","value","ELT - Phone Number Click"],["map","key","^mailto\\:","value","ELT - Email Link Click"],["map","key","(youtube|facebook|instagram|linkedin|pinterest|snapchat|twitter|digg|google)\\.com","value","ELT - Outbound Social Click"],["map","key","\\.(xls|xlt|xlsx|xlsm|xlsb|xltm|xltx)((\\\\?|#)(.*))?$","value","ELT - Download Excel Link Click"],["map","key","\\.(docx?|rtf|dotx?)((\\\\?|#)(.*))?$","value","ELT - Download Doc Link Click"],["map","key","\\.pptx?((\\?|#)(.*))?$","value","ELT - Presentation Download Link Click"],["map","key","\\.(csv)((\\\\?|#)(.*))?$","value","ELT - Download CSV Link Click"],["map","key","\\.(pdf)((\\\\?|#)(.*))?$","value","ELT - PDF Download Link Click"],["map","key","\\.(jpg|jpeg|png)((\\\\?|#)(.*))?$","value","ELT - Image Link Click"],["map","key","^javascript:","value","ELT - Javascript Link Click"],["map","key",["template","^(https?:\\\/\\\/)((?!www\\.",["macro",92],").*)",["macro",92],".*"],"value","ELT - Localhost Dev Site Link Click"],["map","key",["template","^(https?:\\\/\\\/)(www\\.)?(",["macro",94],"|",["macro",93],").*$"],"value","ELT - Internal Link Click"],["map","key",["template","^(https?:\\\/\\\/)((?!www\\.",["macro",95],").*)",["macro",95],".*|^(https?:\\\/\\\/)(www\\.)?(?!",["macro",94],"|",["macro",93],")",["macro",95],".*$"],"value","ELT - External Gov Site Link Click"],["map","key",["template","^(https?:\\\/\\\/)(?!.*",["macro",95],".*).*$"],"value","ELT - Outbound Link Click"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",96],8,16],",a=",["escape",["macro",50],8,16],";void 0!=a.dataset.analyticsLinkGroup\u0026\u0026null!==a.dataset.analyticsLinkGroup\u0026\u0026(b+=\" - \"+String(a.dataset.analyticsLinkGroup).trim());return b})();"]
    },{
      "function":"__v",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"resultCount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=parseInt(",["escape",["macro",98],8,16],");return isNaN(a)?0:a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filtersApplied"
    },{
      "function":"__aev",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\/(index|default)\\.(html?|aspx?|php)\/i,a=document.createElement(\"a\");if(0==",["escape",["macro",101],8,16],".indexOf(\"javascript\"))return ",["escape",["macro",101],8,16],";a.href=",["escape",["macro",101],8,16],";var c=a.hostname;b=a.pathname.replace(b,\"\");var d=a.search;a=a.hash;d\u0026\u0026\/^\\?.*\/.test(d);a\u0026\u0026(a=\/^#.*\/.test(a)?a:\"#\"+a);b\u0026\u0026(\/\\\/$\/.test(c)||(b=\/^\\\/.*\/.test(b)?b:\"\/\"+b));return decodeURIComponent(c+b+a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){for(;!a.matches(b)\u0026\u0026!a.matches(\"body\");)a=a.parentElement;return a.matches(b)?a:void 0}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",103],8,16],"(",["escape",["macro",50],8,16],",\"div#formio\");return void 0!==a?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formio-category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formio-action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formio-version"
    },{
      "function":"__j",
      "vtp_name":"formioEventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=RegExp(\/:+\/gi);if(\"\"!=",["escape",["macro",108],8,16],")return a=formioEventLabel.replace(a,\":\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formio-submissionsUrl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formio-name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)if(\/youtube.com\\\/embed\/.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__dbg"
    },{
      "function":"__j",
      "vtp_name":"jwplayer"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"2001"
    },{
      "function":"__c",
      "vtp_value":"2002"
    },{
      "function":"__c",
      "vtp_value":"2003"
    },{
      "function":"__c",
      "vtp_value":"2004"
    },{
      "function":"__c",
      "vtp_value":"2005"
    },{
      "function":"__c",
      "vtp_value":"2006"
    },{
      "function":"__c",
      "vtp_value":"2007"
    },{
      "function":"__c",
      "vtp_value":"2008"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",115],
      "vtp_defaultValue":["macro",84],
      "vtp_map":["list",["map","key","\/education\/earlychildhood\/prep\/pages\/enrolments.html","value",["macro",116]],["map","key","\/education\/earlychildhood\/prep\/pages\/preparing.html","value",["macro",116]],["map","key","\/health\/children\/babies\/help\/support\/","value",["macro",116]],["map","key","\/health\/children\/babies\/help\/mothers\/index.html","value",["macro",116]],["map","key","\/health\/children\/babies\/help\/mothers\/","value",["macro",116]],["map","key","\/families\/babies\/new-parents\/pages\/tips.html","value",["macro",116]],["map","key","\/health\/children\/pregnancy\/prenatal\/","value",["macro",116]],["map","key","\/education\/schools\/find\/pages\/directory.html","value",["macro",117]],["map","key","\/education\/schools\/find\/enrolment\/pages\/how-to.html","value",["macro",117]],["map","key","\/families\/recreation\/pages\/camps.html","value",["macro",117]],["map","key","\/families\/education\/pages\/care.html","value",["macro",117]],["map","key","\/jobs\/finding\/pages\/vacancies.html","value",["macro",118]],["map","key","\/jobs\/career\/pages\/changing.html","value",["macro",118]],["map","key","\/jobs\/return\/pages\/re-enter.html","value",["macro",118]],["map","key","\/community\/community-organisations-volunteering\/volunteering\/","value",["macro",119]],["map","key","\/community\/community-organisations-volunteering\/setting-up-charity-ngo\/","value",["macro",119]],["map","key","\/community\/your-home-community\/for-event-organisers\/","value",["macro",119]],["map","key","\/community\/community-organisations-volunteering\/funding-grants-resources\/qld-government-grants\/index.html","value",["macro",119]],["map","key","\/community\/community-organisations-volunteering\/funding-grants-resources\/qld-government-grants\/","value",["macro",119]],["map","key","\/transport\/boating\/registration\/recreational\/","value",["macro",120]],["map","key","\/transport\/boating\/notices\/map-of-regions\/index.html","value",["macro",120]],["map","key","\/transport\/boating\/notices\/capricorn-coast\/index.html","value",["macro",120]],["map","key","\/transport\/boating\/notices\/notices-all-regions\/index.html","value",["macro",120]],["map","key","\/transport\/boating\/notices\/map-of-regions\/","value",["macro",120]],["map","key","\/transport\/boating\/notices\/capricorn-coast\/","value",["macro",120]],["map","key","\/transport\/boating\/notices\/notices-all-regions\/","value",["macro",120]],["map","key","\/seniors\/legal-finance-concessions\/applying-seniors-card\/","value",["macro",121]],["map","key","\/seniors\/legal-finance-concessions\/using-seniors-card\/","value",["macro",121]],["map","key","\/community\/cost-of-living-support\/transport-concessions\/","value",["macro",121]],["map","key","\/community\/cost-of-living-support\/leisure-concessions\/","value",["macro",121]],["map","key","\/community\/getting-support-health-social-issue\/avoiding-social-isolation\/","value",["macro",122]],["map","key","\/seniors\/recreation-staying-connected\/ideas-for-events\/","value",["macro",122]],["map","key","\/seniors\/health\/be-active\/","value",["macro",122]],["map","key","\/seniors\/recreation-staying-connected\/seniors-week\/","value",["macro",122]],["map","key","\/environment\/pollution\/management\/impacts\/","value",["macro",123]],["map","key","\/environment\/pollution\/monitoring\/air-explained\/","value",["macro",123]],["map","key","\/environment\/water\/use\/","value",["macro",123]],["map","key","\/environment\/plants-animals\/habitats\/","value",["macro",123]]]
    },{
      "function":"__c",
      "vtp_value":"https:\/\/central-bi-data-dmp.s3-ap-southeast-2.amazonaws.com\/"
    },{
      "function":"__t"
    },{
      "function":"__hid"
    },{
      "function":"__c",
      "vtp_value":"((qld-(dev|beta|uat)\\.ssq|test\\.smartservice|development\\.getinvolved)\\.qld\\.gov\\.au|localhost)"
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"(qld\\.gov\\.au|qld\\.edu\\.au)"
    },{
      "function":"__c",
      "vtp_value":"(www\\.smartservice\\.qld\\.gov\\.au\\\/services\\\/permits\\\/fishing\\\/apply|www\\.police\\.qld\\.gov\\.au|www\\.qld\\.gov\\.au\\\/web\\\/)"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jwplayer().getPlaylistItem().file;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jwplayer().getPlaylistItem().title;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",84],
      "vtp_name":"player_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",84],
      "vtp_name":"interaction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",84],
      "vtp_name":"video_title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",84],
      "vtp_name":"video_url"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],d=document.querySelectorAll('meta[name\\x3d\"description\"]'),c=0,e=d.length;c\u003Ce;c++){var a=d[c].getAttribute(\"content\");null==a||void 0==a||\/^\\s*$\/.test(a)||b.push(a)}if(0\u003Cb.length)return b.join(\", \")})();"]
    },{
      "function":"__e"
    },{
      "function":"__e"
    },{
      "function":"__e"
    },{
      "function":"__e"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",84],
      "vtp_name":"userProfileData"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ngWorkflowTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ngWorkflowStepTime"
    },{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return[{name:\"PPC Click IDs\",regex:\/[\u0026\\\/\\?]((fbclid=)|(dattestparam=))[^\u0026\\\/\\?]+\/ig,removeVsRedact:!0},{name:\"TEL\",list:\"phone_number tel telephone phone mobile mob\".split(\" \"),group:\"$1\",removeVsRedact:!1},{name:\"NAME\",list:\"firstname lastname surname givenName middleNames familyName\".split(\" \"),group:\"$1\",removeVsRedact:!1},{name:\"PASSWORD\",list:[\"password\",\"passwd\",\"pass\"],group:\"$1\",removeVsRedact:!1},{name:\"POSTCODE\",list:[\"postcode\",\"zipcode\",\"zip\"],group:\"$1\",removeVsRedact:!1},\n{name:\"LOGIN-DETAILS\",list:[\"unsubscribe\",\"cpUid\",\"Password\",\"lastLoggedInUsernameForIdentity\"],group:\"$1\",removeVsRedact:!1},{name:\"VENDOR-DETAILS\",list:[\"vendorName\",\"vendorContact\",\"vendorABN\",\"vendorPhoneNumber\",\"vendorEmail\"],group:\"$1\",removeVsRedact:!1},{name:\"OTHER-QGOV-PII\",list:\"page_0$contentform_0$txtEmail page_0$contentform_0$txtpage_0$contentform_0$txtSurname page_0$contentform_0$txtMessage page_0$content_3$txtName page_0$content_3$txtEmail page_0$content_3$txtMessage\".split(\" \"),group:\"$1\",\nremoveVsRedact:!1},{name:\"EMAIL\",regex:\/([\u0026\\\/\\?]+[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+=)(([^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))(@|%40)((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))\/gi,group:\"\",removeVsRedact:!1,group:\"$1\",isValueCheck:!0}]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){Object.keys||(Object.keys=function(){var b=Object.prototype.hasOwnProperty,d=!{toString:null}.propertyIsEnumerable(\"toString\"),a=\"toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor\".split(\" \"),g=a.length;return function(e){if(\"function\"!==typeof e\u0026\u0026(\"object\"!==typeof e||null===e))throw new TypeError(\"Object.keys called on non-object\");var h=[],f;for(f in e)b.call(e,f)\u0026\u0026h.push(f);if(d)for(f=0;f\u003Cg;f++)b.call(e,a[f])\u0026\u0026h.push(a[f]);return h}}());\nArray.prototype.map||(Array.prototype.map=function(b){var d,a;if(null==this)throw new TypeError(\"this is null or not defined\");var g=Object(this),e=g.length\u003E\u003E\u003E0;if(\"function\"!==typeof b)throw new TypeError(b+\" is not a function\");1\u003Carguments.length\u0026\u0026(d=arguments[1]);var h=Array(e);for(a=0;a\u003Ce;){if(a in g){var f=g[a];f=b.call(d,f,a,g);h[a]=f}a++}return h});Array.prototype.forEach||(Array.prototype.forEach=function(b){var d,a;if(null==this)throw new TypeError(\"this is null or not defined\");var g=Object(this),\ne=g.length\u003E\u003E\u003E0;if(\"function\"!==typeof b)throw new TypeError(b+\" is not a function\");1\u003Carguments.length\u0026\u0026(d=arguments[1]);for(a=0;a\u003Ce;){if(a in g){var h=g[a];b.call(d,h,a,g)}a++}});var p=",["escape",["macro",9],8,16],",q=",["escape",["macro",16],8,16],",r=\"z\";window.datisan=window.datisan||{};window.dataLayer=window.dataLayer||[];var l=",["escape",["macro",153],8,16],",m=\"_ga_originalSendHitTask\";return function(b){datisan[m]=datisan[m]||b.get(\"sendHitTask\");if(\"number\"===typeof p){var d=b.get(\"clientId\");datisan.cid=d;window.dataLayer.push({event:\"cidPush\",\ncid:d});b.set(\"dimension\"+p,d+r)}\"number\"===typeof q\u0026\u0026(d=",["escape",["macro",17],8,16],",b.set(\"dimension\"+q,d));b.set(\"sendHitTask\",function(a){var b=a,e=datisan[m],d=!0;try{if(\"undefined\"!==typeof l\u0026\u0026l.length){var f=a.get(\"hitPayload\");var k=f.replace(\/(^\\?)\/,\"\").split(\"\\x26\").map(function(c){return c=c.split(\"\\x3d\"),this[c[0]]=c[1],this}.bind({}))[0];for(var n in k)l.forEach(function(c){var a=decodeURIComponent(k[n]);if(c.list\u0026\u0026c.list.length){for(var b=\"[\\x26\/?](\",d=0,e=c.list.length;d\u003Ce;d++)b+=\"(\"+c.list[d]+\n\"\\x3d)\",d\u003Ce-1\u0026\u0026(b+=\"|\");b+=\")[^\\x26\/?]+\";c.regex=new RegExp(b,\"ig\")}if(a.match(c.regex))if(c.isValueCheck){do a=c.removeVsRedact?a.replace(c.regex,\"\"):a.replace(c.regex,c.group+\"[REDACTED-\"+c.name+\"]\"),b=!c.regex.test(a);while(!b);k[n]=encodeURIComponent(a)}else k[n]=c.removeVsRedact?encodeURIComponent(a.replace(c.regex,\"\")):encodeURIComponent(a.replace(c.regex,c.group+\"[REDACTED-\"+c.name+\"]\"))});a.set(\"hitPayload\",Object.keys(k).map(function(a){return a+\"\\x3d\"+k[a]}).join(\"\\x26\"),!0)}d?e(a):e(b)}catch(c){e(b)}})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"phone_number tel telephone phone mobile mob firstname lastname surname givenName middleNames familyName password passwd pass postcode zipcode zip unsubscribe cpUid Password lastLoggedInUsernameForIdentity vendorName vendorContact vendorABN vendorPhoneNumber vendorEmail page_0$contentform_0$txtEmail page_0$contentform_0$txtpage_0$contentform_0$txtSurname page_0$contentform_0$txtMessage page_0$content_3$txtName page_0$content_3$txtEmail page_0$content_3$txtMessage emailIdUpdated email\".split(\" \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(void 0!=document.querySelector(\"div#formio \\x3e div:first-child\").id)return!0})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":59
    },{
      "function":"__ua",
      "priority":3,
      "vtp_trackingId":["macro",57],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_useHashAutoLink":false,
      "vtp_enableEcommerce":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":81
    },{
      "function":"__gaawc",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-EEPDL0G7H1",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":112
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"mailto",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",0],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":58
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",8],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_eventCategory":["macro",46],
      "vtp_eventAction":["macro",47],
      "vtp_eventLabel":["macro",48],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":62
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Outbound Link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",54],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":63
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",8],
      "vtp_trackType":"TRACK_TRANSACTION",
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTransaction":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Excel Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",54],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":69
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",8],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_eventCategory":"YouTube Video",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",55],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":70
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"PDF Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",54],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":71
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"DOC Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",54],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Internal NonTest Env Link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",54],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":73
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Button Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",56],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":74
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Internal Test Env Link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",54],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":75
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Telephone Number",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",0],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":76
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"QG Crest Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",49],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":78
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",56],
      "vtp_eventLabel":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":82
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Print Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",7],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":83
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",8],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_eventCategory":"New URL Fragment",
      "vtp_eventAction":["macro",58],
      "vtp_eventLabel":["template","from: ",["macro",59]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":84
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/www.google-analytics.com\/collect?v=1\u0026t=event\u0026ni=0\u0026dl=",["escape",["macro",11],12],"\u0026dt=No%20JavaScript\u0026cid=",["escape",["macro",61],12],"\u0026tid=",["escape",["macro",8],12],"\u0026gtm=",["escape",["macro",38],12],"\u0026ec=Technical%20Measurement\u0026ea=No%20JS%20Pageview\u0026el=",["escape",["macro",11],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",62],
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"CMS Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Asset ID",
      "vtp_eventLabel":["macro",63],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":87
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",65],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",66],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",67],
      "vtp_eventLabel":["macro",69],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_eventValue":["macro",70],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",71]],["map","fieldName","userId","value",["macro",15]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",18],"dimension",["macro",19]],["map","index",["macro",20],"dimension",["macro",21]],["map","index",["macro",22],"dimension",["macro",23]],["map","index",["macro",24],"dimension",["macro",25]],["map","index",["macro",26],"dimension",["macro",27]],["map","index",["macro",28],"dimension",["macro",29]],["map","index",["macro",30],"dimension",["macro",31]],["map","index",["macro",32],"dimension",["macro",33]],["map","index",["macro",34],"dimension",["macro",8]],["map","index",["macro",35],"dimension",["macro",36]],["map","index",["macro",37],"dimension",["macro",38]],["map","index",["macro",39],"dimension",["macro",40]],["map","index",["macro",43],"dimension",["macro",11]],["map","index",["macro",41],"dimension",["macro",42]],["map","index",["macro",44],"dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",72],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":88
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",71]],["map","fieldName","userId","value",["macro",15]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",18],"dimension",["macro",19]],["map","index",["macro",20],"dimension",["macro",21]],["map","index",["macro",22],"dimension",["macro",23]],["map","index",["macro",24],"dimension",["macro",25]],["map","index",["macro",26],"dimension",["macro",27]],["map","index",["macro",28],"dimension",["macro",29]],["map","index",["macro",30],"dimension",["macro",31]],["map","index",["macro",32],"dimension",["macro",33]],["map","index",["macro",34],"dimension",["macro",8]],["map","index",["macro",35],"dimension",["macro",36]],["map","index",["macro",37],"dimension",["macro",38]],["map","index",["macro",39],"dimension",["macro",40]],["map","index",["macro",43],"dimension",["macro",11]],["map","index",["macro",41],"dimension",["macro",42]],["map","index",["macro",44],"dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",72],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Capture Client ID",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template","CID: ",["macro",73]],
      "vtp_eventLabel":["template","UA: ",["macro",8]],
      "vtp_dimension":["list",["map","index","11","dimension",["macro",73]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["template","ng Error: ",["macro",74]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",75],
      "vtp_eventLabel":["macro",76],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",71]],["map","fieldName","userId","value",["macro",15]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",18],"dimension",["macro",19]],["map","index",["macro",20],"dimension",["macro",21]],["map","index",["macro",22],"dimension",["macro",23]],["map","index",["macro",24],"dimension",["macro",25]],["map","index",["macro",26],"dimension",["macro",27]],["map","index",["macro",28],"dimension",["macro",29]],["map","index",["macro",30],"dimension",["macro",31]],["map","index",["macro",32],"dimension",["macro",33]],["map","index",["macro",34],"dimension",["macro",8]],["map","index",["macro",35],"dimension",["macro",36]],["map","index",["macro",37],"dimension",["macro",38]],["map","index",["macro",39],"dimension",["macro",40]],["map","index",["macro",43],"dimension",["macro",11]],["map","index",["macro",41],"dimension",["macro",42]],["map","index",["macro",44],"dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":93
    },{
      "function":"__ua",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",78],
      "vtp_enableLinkId":false,
      "vtp_timingCategory":["macro",79],
      "vtp_timingVar":["macro",80],
      "vtp_timingValue":["macro",81],
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "vtp_enableGA4Schema":false,
      "tag_id":94
    },{
      "function":"__ua",
      "vtp_nonInteraction":["macro",82],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",83],
      "vtp_eventCategory":["macro",79],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",80],
      "vtp_eventLabel":["macro",78],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":96
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",88],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["macro",86],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":98
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",89]]],
      "vtp_eventCategory":"Capture User QID",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"QID received",
      "vtp_eventLabel":["template","UA: ",["macro",8]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":99
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",15]],["map","fieldName","page","value",["macro",11]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",69],
      "vtp_enableLinkId":false,
      "vtp_timingCategory":["macro",66],
      "vtp_timingVar":["macro",90],
      "vtp_dimension":["list",["map","index",["macro",18],"dimension",["macro",19]],["map","index",["macro",20],"dimension",["macro",21]],["map","index",["macro",22],"dimension",["macro",23]],["map","index",["macro",24],"dimension",["macro",25]],["map","index",["macro",26],"dimension",["macro",27]],["map","index",["macro",28],"dimension",["macro",29]],["map","index",["macro",30],"dimension",["macro",31]],["map","index",["macro",32],"dimension",["macro",33]],["map","index",["macro",34],"dimension",["macro",8]],["map","index",["macro",35],"dimension",["macro",36]],["map","index",["macro",37],"dimension",["macro",38]],["map","index",["macro",39],"dimension",["macro",40]],["map","index",["macro",43],"dimension",["macro",11]],["map","index",["macro",41],"dimension",["macro",42]],["map","index",["macro",44],"dimension",["macro",15]]],
      "vtp_timingValue":["macro",70],
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "vtp_enableGA4Schema":false,
      "tag_id":101
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":["macro",91],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",54],
      "vtp_eventLabel":["macro",7],
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",97],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["template","Click URL : ",["macro",54]],
      "vtp_eventLabel":["template","Click Text : ",["macro",56]," | Click Classes: ",["macro",55]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":109
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",99],
      "vtp_eventCategory":"Ajax Form Results",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["template","Form Filtered: ",["macro",56]],
      "vtp_eventLabel":["template","Filters Applied: ",["macro",100]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":111
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":113
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",97],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["template","Search URL : ",["macro",102]],
      "vtp_eventLabel":["template","Click Text : ",["macro",56]," | Click Classes: ",["macro",55]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":383
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",79],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["macro",80],
      "vtp_eventLabel":["macro",78],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":401
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form Submit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["macro",54],
      "vtp_eventLabel":["macro",49],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":402
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",105],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["template",["macro",106]," | Form Version: ",["macro",107]],
      "vtp_eventLabel":["macro",109],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":403
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form Submit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["macro",110],
      "vtp_eventLabel":["template","Form Name: ",["macro",111]," | Form Version: ",["macro",107]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":405
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-K9VWBH5","nickname","Toms Example Container"]],
      "vtp_boundaries":["list",["zb","_cn",["macro",4],"data.qld.gov.au",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","fls"],["map","typeId","flc"]],
      "tag_id":418
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_15",
      "tag_id":419
    },{
      "function":"__cl",
      "tag_id":420
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_20",
      "tag_id":421
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_21",
      "tag_id":422
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_23",
      "tag_id":423
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_24",
      "tag_id":424
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_25",
      "tag_id":425
    },{
      "function":"__cl",
      "tag_id":426
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_28",
      "tag_id":427
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_30",
      "tag_id":428
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_31",
      "tag_id":429
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_32",
      "tag_id":430
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_37",
      "tag_id":431
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_38",
      "tag_id":432
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_39",
      "tag_id":433
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_40",
      "tag_id":434
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_41",
      "tag_id":435
    },{
      "function":"__cl",
      "tag_id":436
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_123",
      "tag_id":437
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_335",
      "tag_id":438
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_386",
      "tag_id":439
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div#formio \u003E div:first-child",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"697852_397",
      "tag_id":440
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"697852_399",
      "tag_id":441
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript id=\"gtmNBSWN3listenerYouTube\" type=\"text\/gtmscript\"\u003Efor(var e=document.getElementsByTagName(\"iframe\"),x=e.length;x--;)\/youtube.com\\\/embed\/.test(e[x].src)\u0026\u0026-1===e[x].src.indexOf(\"enablejsapi\\x3d\")\u0026\u0026(e[x].src+=(-1===e[x].src.indexOf(\"?\")?\"?\":\"\\x26\")+\"enablejsapi\\x3d1\");var gtmYTListeners=[];\nfunction onYouTubeIframeAPIReady(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)\/youtube.com\\\/embed\/.test(a[b].src)\u0026\u0026(gtmYTListeners.push(new YT.Player(a[b],{events:{onStateChange:onPlayerStateChange,onError:onPlayerError}})),YT.gtmLastAction=\"p\")}\nfunction onPlayerStateChange(a){a.data==YT.PlayerState.PLAYING\u0026\u0026setTimeout(onPlayerPercent,1E3,a.target);var b=a.target.getVideoData();b=b.video_id+\":\"+b.title;a.data==YT.PlayerState.PLAYING\u0026\u0026\"p\"==YT.gtmLastAction\u0026\u0026(dataLayer.push({event:\"youtube\",action:\"play\",label:b}),YT.gtmLastAction=\"\");a.data==YT.PlayerState.PAUSED\u0026\u0026(dataLayer.push({event:\"youtube\",action:\"pause\",label:b}),YT.gtmLastAction=\"p\")}\nfunction onPlayerError(a){dataLayer.push({event:\"error\",action:\"GTM\",label:\"youtube:\"+a.target.src+\"-\"+a.data})}function onPlayerPercent(a){if(a.getPlayerState()==YT.PlayerState.PLAYING){var b=1.5\u003E=a.getDuration()-a.getCurrentTime()?1:(Math.floor(a.getCurrentTime()\/a.getDuration()*4)\/4).toFixed(2);if(!a.lastP||b\u003Ea.lastP){var c=a.getVideoData();c=c.video_id+\":\"+c.title;a.lastP=b;dataLayer.push({event:\"youtube\",action:100*b+\"%\",label:c})}1!=a.lastP\u0026\u0026setTimeout(onPlayerPercent,1E3,a)}}\nvar j=document.createElement(\"script\"),f=document.getElementsByTagName(\"script\")[0];j.src=\"\/\/www.youtube.com\/iframe_api\";j.async=!0;f.parentNode.insertBefore(j,f);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"gtmNBSWN3jQueryTrackFormActivity\" type=\"text\/gtmscript\"\u003E(function(b,l,e,f){b\u0026\u0026b(e).ready(function(c){function b(d){",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"fieldTrackingHandler\",d,this);var g=this.value?\"filled in\":\"skipped\",a=c(this);this.type\u0026\u0026\"submit\"===this.type.toLowerCase()\u0026\u0026(g=\"submitted\");var b=this.type\u0026\u0026\"radio\"===this.type.toLowerCase()?\": \"+(a.val()||\"no value entered\"):a.val()?\"\":\": no value entered\";var h=k(this);",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"\\t\",d,this,h);d=c(this.form).data(\"analytics-form-name\")||this.form.id||\"form without an id\";a=a.data(\"analytics-field-name\")||\nthis.name;",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"Form name\",d,c(this.form).data(\"analytics-form-name\"),this.form.id,this.form);dataLayer.push({event:\"trackFormEvent\",eventCategory:\"Form: \"+d,eventLabel:h+\": \"+a+b,eventAction:g})}function k(d){if(!\/html(input|textarea|select)+element\/.test({}.toString.call(d).match(\/\\s([a-zA-Z]+)\/)[1].toLowerCase()))return null;var b=d\u0026\u0026d.form;if(b===f||null===b)return null;var a=\"---\";c(b).find(\":input\").each(function(b,c){c===d\u0026\u0026(a=String(b+1),1===a.length?a=\"00\"+a:\n2==a.length\u0026\u0026(a=\"0\"+a))});return a}",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"Form Field Tracking - Document Ready!\",c.fn.on);if(c.fn.on===f||null===c.fn.on)c(\"form :input\").bind(\"blur.formTracking\",b);else c(e).on(\"blur.formTracking\",\"form :input\",b)})})(jQuery,window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript id=\"gtmNBSWN3jQueryTrackScrollActivity\" type=\"text\/gtmscript\"\u003E\/*\n @preserve\n jquery.scrolldepth.js | v0.4.1\n Copyright (c) 2014 Rob Flaherty (@robflaherty)\n Licensed under the MIT and GPL licenses.\n*\/\nwindow.dataLayer=window.dataLayer||[];\n(function(b,l,q,m){if(b){\"use strict\";var n=!1;if(b.fn.on===m||null===b.fn.on||b.fn.off===m||null===b.fn.off)n=!0;var u={elements:[],minHeight:0,percentage:!0,absolute:!0,testing:!1},f=b(l),k=[];b.scrollDepth=function(e){function h(a,c,d,p){d=null===d||d===m?!0:d;e.testing?b(\"#console\").html(a+\": \"+c):\"undefined\"!==typeof dataLayer?(dataLayer.push({event:\"ScrollDistance\",eventCategory:\"Scroll Depth\",eventAction:a,eventLabel:c,eventValue:1,eventNonInteraction:d}),3\u003Carguments.length\u0026\u0026dataLayer.push({event:\"ScrollTiming\",\neventCategory:\"Scroll Depth\",eventAction:a,eventLabel:c,eventTiming:p})):(\"undefined\"!==typeof ga\u0026\u0026(ga(\"send\",\"event\",\"Scroll Depth\",a,c,1,{nonInteraction:d?1:0}),3\u003Carguments.length\u0026\u0026ga(\"send\",\"timing\",\"Scroll Depth\",a,p,c)),\"undefined\"!==typeof _gaq\u0026\u0026(_gaq.push([\"_trackEvent\",\"Scroll Depth\",a,c,1,d]),3\u003Carguments.length\u0026\u0026_gaq.push([\"_trackTiming\",\"Scroll Depth\",a,p,c,100])))}function v(a,c,d){b.each(a,function(a,g){-1===b.inArray(a,k)\u0026\u0026c\u003E=g\u0026\u0026(h(\"Percentage\",a,!1,d),e.absolute\u0026\u0026h(\"Pixel Depth\",c,!1),\nk.push(a))})}function w(a,c,d){b.each(a,function(a,g){-1===b.inArray(g,k)\u0026\u0026b(g).length\u0026\u0026c\u003E=b(g).offset().top\u0026\u0026(h(\"Elements\",g,!1,d),k.push(g))})}function r(a,c){var d,b,g,e=null,f=0,k=function(){f=new Date;e=null;g=a.apply(d,b)};return function(){var h=new Date;f||(f=h);var l=c-(h-f);d=this;b=arguments;0\u003E=l?(clearTimeout(e),e=null,f=h,g=a.apply(d,b)):e||(e=setTimeout(k,l));return g}}function t(a){var c=b(q).height();a=l.innerHeight?l.innerHeight:f.height();a=f.scrollTop()+a;c={\"25%\":parseInt(.25*\nc,10),\"50%\":parseInt(.5*c,10),\"75%\":parseInt(.75*c,10),\"100%\":c-1};var d=+new Date-x;k.length\u003E=4+e.elements.length?n?f.unbind(\"scroll.scrollDepth\"):f.off(\"scroll.scrollDepth\"):(e.elements\u0026\u0026w(e.elements,a,d),e.percentage\u0026\u0026v(c,a,d))}var x=+new Date;e=b.extend({},u,e);if(!(b(q).height()\u003Ce.minHeight))if(h(\"Percentage\",\"Baseline\"),n)f.bind(\"scroll.scrollDepth\",r(t,150));else f.on(\"scroll.scrollDepth\",r(t,150))}}})(jQuery,window,document);jQuery.scrollDepth();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"gtmNBSWN3jsJWPlayerTracking\" type=\"text\/gtmscript\"\u003E(function(){function e(a,f,b){for(var c=0;c\u003Ca.length;c++)if(a[c][f]==b)return c;return null}for(var d=0,g=[1,2,3,4,5,10,20,30,40,50,60,70,80,90],c=[];;){var b=jwplayer(d);",["escape",["macro",113],8,16],"\u0026\u0026(console.group\u0026\u0026console.group(\"JWPlayer Tracking\"),console.log(\"Checking for player\",d,b),console.groupEnd\u0026\u0026console.groupEnd());if(!b||!b.id)break;c.push({id:b.id,markers:[]});b.onPlay(function(a){",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"onPlay\",a);dataLayer.push({event:\"JWPlayerVideo\",player_id:this.id,interaction:\"Play\",\nvideo_url:this.getPlaylistItem().file,video_title:this.getPlaylistItem().title,duration:this.getDuration(),width:this.getWidth(),height:this.getHeight(),position:this.getPosition(),resolutions:[].map.call(this.getQualityLevels(),function(a){return a.label}),volume:this.getVolume(),player_type:this.renderingMode})});b.onComplete(function(a){",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"onComplete\",a);dataLayer.push({event:\"JWplayerVideo\",player_id:this.id,interaction:\"Complete\",video_url:this.getPlaylistItem().file,\nvideo_title:this.getPlaylistItem().title,duration:this.getDuration(),width:this.getWidth(),height:this.getHeight(),position:this.getPosition(),resolutions:[].map.call(this.getQualityLevels(),function(a){return a.label}),volume:this.getVolume(),player_type:this.renderingMode})});b.onPause(function(a){",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"onPause\",a);dataLayer.push({event:\"JWplayerVideo\",player_id:this.id,interaction:\"Pause\",video_url:this.getPlaylistItem().file,video_title:this.getPlaylistItem().title,\nduration:this.getDuration(),width:this.getWidth(),height:this.getHeight(),position:this.getPosition(),resolutions:[].map.call(this.getQualityLevels(),function(a){return a.label}),volume:this.getVolume(),player_type:this.renderingMode})});b.onError(function(a){",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"onError\",a);dataLayer.push({event:\"JWplayerVideoError\",player_id:this.id,interaction:a.message,video_url:this.getPlaylistItem().file,video_title:this.getPlaylistItem().title,duration:this.getDuration(),width:this.getWidth(),\nheight:this.getHeight(),position:this.getPosition(),resolutions:[].map.call(this.getQualityLevels(),function(a){return a.label}),volume:this.getVolume(),player_type:this.renderingMode})});b.onFullscreen(function(a){",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"onFullscreen\",a);dataLayer.push({event:\"JWplayerVideo\",player_id:this.id,interaction:\"FullScreen \"+(a.fullscreen?\"On\":\"Off\"),video_url:this.getPlaylistItem().file,video_title:this.getPlaylistItem().title,duration:this.getDuration(),width:this.getWidth(),\nheight:this.getHeight(),position:this.getPosition(),resolutions:[].map.call(this.getQualityLevels(),function(a){return a.label}),volume:this.getVolume(),player_type:this.renderingMode})});b.onMute(function(a){",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"onMute\",a);dataLayer.push({event:\"JWplayerVideo\",player_id:this.id,interaction:\"Mute \"+(a.mute?\"On\":\"Off\"),video_url:this.getPlaylistItem().file,video_title:this.getPlaylistItem().title,duration:this.getDuration(),width:this.getWidth(),height:this.getHeight(),\nposition:this.getPosition(),resolutions:[].map.call(this.getQualityLevels(),function(a){return a.label}),volume:this.getVolume(),player_type:this.renderingMode})});b.onTime(function(a){a=Math.floor(100*a.position\/a.duration);var b=e(c,\"id\",this.id);",["escape",["macro",113],8,16],"\u0026\u0026console.log(\"onTime\",a);-1\u003Cg.indexOf(a)\u0026\u0026-1==c[b].markers.indexOf(a)\u0026\u0026(c[b].markers.push(a),dataLayer.push({event:\"JWplayerVideo\",player_id:this.id,interaction:\"Progress \"+a+\"%\",video_url:this.getPlaylistItem().file,video_title:this.getPlaylistItem().title,\nduration:this.getDuration(),width:this.getWidth(),height:this.getHeight(),position:this.getPosition(),resolutions:[].map.call(this.getQualityLevels(),function(a){return a.label}),volume:this.getVolume(),player_type:this.renderingMode}))});d++}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"gtmNBSWN3jsSendCIDtoS3\" type=\"text\/gtmscript\"\u003E(function(d,a,c,b){a=+new Date;c=",["escape",["macro",73],8,16],";b=",["escape",["macro",124],8,16],";\"",["escape",["macro",84],7],"\"!=b\u0026\u0026(a=\"",["escape",["macro",125],7],"\"+a+\"_\"+c+\"_\"+b,d.ajax({type:\"PUT\",url:a,dataType:\"json\",data:\"\"}))})(jQuery,window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"gtmNBSWN3jsScrollTrackingDocumentHeight\" type=\"text\/gtmscript\"\u003E(function(a,c,b,d){\"undefined\"!==typeof dataLayer\u0026\u0026dataLayer.push({event:\"ScrollDistance\",eventCategory:\"Scroll Depth\",eventAction:\"Document Height\",eventLabel:a(b).height(),eventValue:1,eventNonInteraction:!0})})(jQuery,window,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":97
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"  \u003Cscript type=\"text\/gtmscript\" id=\"gtmNBSWN3aaaMonsidoContentAuditorTest\"\u003Evar _monsido=_monsido||[];_monsido.push([\"_setDomainToken\",\"LnVzIic2jBLmhP8CXvsy-Q\"]);_monsido.push([\"_withStatistics\",\"true\"]);\u003C\/script\u003E\n  \u003Cscript id=\"gtmNBSWN3aaaMonsidoContentAuditorTestSrc\" data-gtmsrc=\"\/\/cdn.monsido.com\/tool\/javascripts\/monsido.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  button.btn-open-survey * {\n    pointer-events:none; \n  }\n  #surveyContent .span.required-mark { color:red !important; font-size: 1.2rem !important; }\n  #surveyContent a.tooltip div { font-size: 0.8rem !important; } \n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=\"bv47qpri88h05shhknuc95gc3zyc09kov1e\",a=document.createElement(\"script\");a.setAttribute(\"type\",\"text\/javascript\");a.setAttribute(\"src\",\"\/\/deploy.mopinion.com\/js\/pastease.js\");a.async=!0;document.getElementsByTagName(\"head\")[0].appendChild(a);var c=setInterval(function(){try{new Pastease.load(b),clearInterval(c)}catch(d){}},50)})();\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){b(document).on(\"click\",\"button.btn-open-survey\",function(){try{var c=b(\"#surveyWindow\"),a=c.contents(),d=a.find('a#closeModalBtn [href\\x3d\"javascript:;\"]');a.find(\"#surveySubmitBtn\");a.attr(\"title\")||c.attr(\"title\",\"This tab opens a feedback dialog box\");d\u0026\u0026a.find(\"a#closeModalBtn\").removeAttr(\"href\").css(\"cursor\",\"pointer\").attr(\"tabindex\",0).attr(\"title\",\"Close window\");a\u0026\u0026(a.find(\"#surveyTitle.srv-title h1\").css(\"color\",\"#FFF  !important\")\u0026\u0026a.find(\"#closeModalBtn.close-modal:after\").css(\"color\",\n\"#FFF  !important\")\u0026\u0026a.find(\"#closeModalBtn.close-modal:after\").css(\"color\",\"#FFF  !important\")||(console.log(\"found issue here!\"),a.find(\"#surveyTitle.srv-title h1\").css(\"color\",\"#FFF  !important\"),a.find(\"#closeModalBtn.close-modal:after\").css(\"background\",\"#FFF !important\"),a.find(\"#closeModalBtn.close-modal:before\").css(\"background\",\"#FFF !important\")),a.find(\"#surveyBody object\").attr(\"name\")||(a.find(\"#surveyBody object\").attr(\"name\",\"A feedback window has opened\"),a.find(\"#surveyBody object\").attr(\"aria-label\",\n\"Feedback window\")),a.find(\"#branding\").remove())}catch(e){console.log(e)}})}(jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#qg-site-header div.alert\").each(function(){this.remove()});$(\"#qg-site-header\").append('\\x3cdiv id\\x3d\"qgcidm-avatar\"\\x3e\\x3c\/div\\x3e');\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){if(window.jQuery)return window.google_tag_manager[",["escape",["macro",38],8,16],"].onHtmlSuccess(",["escape",["macro",127],8,16],"),!1;console.log(\"jQuery not detected\");var a=document.createElement(\"script\");a.src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/3.4.1\/jquery.min.js\";a.async=!0;a.addEventListener(\"load\",function(){window.google_tag_manager[",["escape",["macro",38],8,16],"].onHtmlSuccess(",["escape",["macro",127],8,16],")});a.addEventListener(\"error\",function(){window.google_tag_manager[",["escape",["macro",38],8,16],"].onHtmlFailure(",["escape",["macro",127],8,16],")});\ndocument.head.appendChild(a)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=$(\"#access\")||$(\"#qg-access\"),b='\\x3cdiv id\\x3d\"global-healthalerts\" style\\x3d\" background-color: #3b3b3b; color: #fff; line-height: 50px; font-weight: bold; height: 50px; margin-top: 0px !important;\"\\x3e \\x3cdiv class\\x3d\"container\" style\\x3d\" max-width: 1250px; margin: 0px auto; height: 50px; text-align: left;\"\\x3e \\x3cdiv class\\x3d\"row links total-2\" style\\x3d\" display: inline-flex; font-size: 1rem;\"\\x3e\\x3cdiv class\\x3d\"healthalerts healthalerts-pos-1\" style\\x3d\"padding-left: 1.3em;box-sizing: border-box;\"\\x3e\\x3csvg width\\x3d\"16\" height\\x3d\"16\" viewBox\\x3d\"0 0 1792 1792\" xmlns\\x3d\"http:\/\/www.w3.org\/2000\/svg\" style\\x3d\"margin-bottom: 2px;vertical-align: middle;\"\\x3e\\x3cpath d\\x3d\"M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z\" fill\\x3d\"#fff\"\\x3e\\x3c\/path\\x3e\\x3c\/svg\\x3e\\x26nbsp;Health alert:\\x3c\/div\\x3e\\x3cdiv class\\x3d\"healthalerts asset-pos-1\" style\\x3d\" box-sizing: border-box;\"\\x3e \\x3ca href\\x3d\"https:\/\/www.health.qld.gov.au\/news-events\/health-alerts\/novel-coronavirus\" style\\x3d\" color: white; margin: 20px;\" class\\x3d\"\"\\x3eNovel coronavirus\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e';\n0\u003Ca.length?(a.css(\"margin-bottom\",\"0px !important\"),b.insertAfter(a),console.log(\"appending\")):console.log(\"Health alert not triggered\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":373
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=\"[[[bv47qpri88h05shhknuc95gc3zyc09kov1e]]]\",a=document.createElement(\"script\");a.setAttribute(\"type\",\"text\/javascript\");a.setAttribute(\"src\",\"\/\/deploy.mopinion.com\/js\/pastease.js\");a.async=!0;document.getElementsByTagName(\"head\")[0].appendChild(a);var c=setInterval(function(){try{new Pastease.load(b),clearInterval(c)}catch(d){}},50)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction digits(a,b){var c=Array(b+1).join(\"0\");return(c+a).slice(-b)}function includeWhitelist(a){return\"address\"===a||\"button\"===a||\"checkbox\"===a||\"currency\"===a||\"custom\"===a||\"datetime\"===a||\"day\"===a||\"email\"===a||\"file\"===a||\"number\"===a||\"password\"===a||\"phoneNumber\"===a||\"radio\"===a||\"select\"===a||\"selectboxes\"===a||\"signature\"===a||\"survey\"===a||\"textarea\"===a||\"textfield\"===a||\"time\"===a||\"panel\"===a?!0:!1}\nfunction answerWhitelist(a){a=a.toLowerCase();return\"button\"===a||\"checkbox\"===a||\"radio\"===a||\"survey\"===a?!0:!1}\nfunction iterate(a,b){for(var c in a)if(a.hasOwnProperty(c)\u0026\u0026b.includes(c))for(var d=0;d\u003Ca[c].length;d++){if(1==includeWhitelist(a[c][d].type)){\"panel\"===a[c][d].type?(pageNum+=1,a[c][d].pageNum=digits(pageNum,4)):(componentNum+=1,a[c][d].orderNum=digits(componentNum,4));if(void 0!=a[c][d].values\u0026\u00261==answerWhitelist(a[c][d].type))for(var e=0;e\u003Ca[c][d].values.length;e++)componentNum+=1,a[c][d].values[e].orderNum=digits(componentNum,4);for(e=0;e\u003Ca[c][d].length;e++)iterate(a[c][e],b)}iterate(a[c][d],\nb)}}var componentNum=0,pageNum=0,formioEventLabel=\"\",property;for(property in Formio.forms){var formioId=Formio.forms[property].id,formioJsonCopy=Formio.forms[formioId],edgeArray=[\"components\",\"columns\",\"currentPanel\"];iterate(formioJsonCopy.component,edgeArray)}var changeLookup={},sendLookup={},timeToWait=1E3;\nformioJsonCopy.on(\"change\",function(a){if(\"hidden\"!=a.changed.component.type){var b=a.changed.component.key;sendLookup[b]\u0026\u0026clearTimeout(sendLookup[b]);changeLookup[b]\u0026\u0026clearTimeout(changeLookup[b]);changeLookup[b]=setTimeout(processChange,timeToWait,a,b)}});\nfunction processChange(a,b){if(void 0===a.form)if(void 0!=a.changed.component.values\u0026\u00261==answerWhitelist(a.changed.component.type))for(k=0;k\u003Ca.changed.component.values.length;k++){if(a.changed.component.values[k].value===a.data[a.changed.component.key]){formioEventLabel=a.changed.component.label+\": \"+a.data[a.changed.component.key];break}}else formioEventLabel=a.changed.component.label;else formioEventLabel=\"Detected Incorrect Form Component: Suspected Form Submission Attempt\";a=\"Form: \"+formioJsonCopy._form.title;\n\"undefined\"!=typeof dataLayer\u0026\u00261\u003CdataLayer.length\u0026\u0026(console.log(dataLayer),\"formio-interaction\"!=dataLayer[dataLayer.length-1].event\u0026\u0026\"formio-interaction\"!=dataLayer[dataLayer.length-2].event\u0026\u0026dataLayer.push({event:\"formio-interaction-old\",\"formio-name\":formioJsonCopy._form.title,\"formio-version\":formioJsonCopy._form.modified,\"formio-category\":a,\"formio-action\":\"filled in\",\"formio-label-raw\":formioEventLabel,\"formio-submissionsUrl\":formioJsonCopy.formio.submissionsUrl}));sendLookup[b]\u0026\u0026clearTimeout(sendLookup[b])}\nformioJsonCopy.on(\"submit\",function(a){dataLayer.push({event:\"formio-submission\",\"formio-name\":formioJsonCopy._form.title,\"formio-version\":formioJsonCopy._form.modified,\"formio-submission-object\":a,\"formio-submissionsUrl\":formioJsonCopy.formio.submissionsUrl})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":404
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction qgovGaTrueByPercent(a){var b=Math.random();return b\u003Ca\/100}var qgovGaScrollTrackReg=qgovGaTrueByPercent(10);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":410
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\n                \u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=\"wq7aydxga7u5xr1m50vj3achmfwa0woaorq\",a=document.createElement(\"script\");a.setAttribute(\"type\",\"text\/javascript\");a.setAttribute(\"src\",\"\/\/deploy.mopinion.com\/js\/pastease.js\");a.async=!0;document.getElementsByTagName(\"head\")[0].appendChild(a);var c=setInterval(function(){try{Pastease.load(b),clearInterval(c)}catch(d){}},50)})();\u003C\/script\u003E\n\n                ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":417
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"mailto"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_20($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"youtube"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(qld\\.gov\\.au|qld\\.edu\\.au|localhost)"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_30($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"youtube"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_15($|,)))"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":".pdf"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_23($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(\\.doc|\\.docx)$"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_24($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(\\.xls|\\.xlsx|\\.xlm|\\.xlsm|\\.xlt|\\.xltx)$"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_25($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"tel:"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_32($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"qg-coa"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_37($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"qg-coa"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_38($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"print-page"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_39($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"qg-coa"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_40($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"control-"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_41($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"breadcrumbs"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\/payment\/notice\/receipt"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(qld\\.gov\\.au|qld\\.edu\\.au)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"((qld-(dev|beta|uat)\\.ssq|test\\.smartservice|dev\\.getinvolved)\\.qld\\.gov\\.au|localhost)"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_31($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"button|btn",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_21($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"((pan\\.search)|(find\\.search))\\.qld\\.gov\\.au"
    },{
      "function":"_cn",
      "arg0":["macro",46],
      "arg1":"gtm.newURLFragment"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"interaction"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(content\\-view|Page View)$"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"ngErrorEvent"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"ScrollTiming"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"ScrollDistance"
    },{
      "function":"_eq",
      "arg0":["macro",85],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"cetEvent"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"authResultEvent"
    },{
      "function":"_re",
      "arg0":["macro",67],
      "arg1":"(Step Timing)|(Submit Success)"
    },{
      "function":"_gt",
      "arg0":["macro",70],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",91],
      "arg1":"PPT Download"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_123($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_335($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"ajaxFormResults"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"https:\/\/staging.publications.qld.gov.au|https:\/\/staging.data.qld.gov.au"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"https:\/\/staging."
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"find.search.qld.gov.au"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"find.search.qld.gov.au\/s\/redirect"
    },{
      "function":"_re",
      "arg0":["macro",102],
      "arg1":"find\\.search\\.qld\\.gov\\.au\\\/s\\\/search\\.html||undefined"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_386($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",46],
      "arg1":"trackFormEvent"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_399($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"formio-interaction-old"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"formio-submission"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",114],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"((www.seniors\\-concessions\\.(staging\\-)?services)|((www)\\.qld\\.gov\\.au\\\/services)|(concessionsfinder\\.(staging\\-)?services)|((dev\\.)|(staging\\.))?data\\.qld\\.gov\\.au)"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"https:\/\/oss-uat.clients.squiz.net\/health\/staying-healthy\/diet-nutrition\/diet"
    },{
      "function":"_eq",
      "arg0":["macro",93],
      "arg1":"uat.digital.rta.qld.gov.au"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(oss-uat\\.clients\\.squiz\\.net\/?)|(www\\.qld\\.gov\\.au\/?)"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)697852_397($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"https:\/\/myqld-www"
    }],
  "rules":[
    [["if",0,1,2],["add",3],["block",5,11,13]],
    [["if",3],["add",0,2,39,64,65,69,76,41,47,57,58,59,60,61]],
    [["if",4],["add",4]],
    [["if",1,6],["unless",5],["add",5]],
    [["if",3,29],["add",6]],
    [["if",1,13,14],["add",7],["block",5,11,13]],
    [["if",7,28],["add",8]],
    [["if",1,9,10],["add",9],["block",5,11,13]],
    [["if",1,11,12],["add",10],["block",5,11,13]],
    [["if",1,30,32],["unless",31],["add",11]],
    [["if",28,33],["add",12]],
    [["if",1,31,34],["add",13]],
    [["if",1,15,16],["add",14],["block",5,11,13]],
    [["if",1,17,18],["add",15],["block",5,11,13]],
    [["if",1,19,20],["add",15],["block",5,11,13]],
    [["if",1,23,24],["add",15],["block",5,11,13]],
    [["if",3,35],["add",1]],
    [["if",1,25,26],["add",16],["block",5,11,13]],
    [["if",27,28],["add",16],["block",5,11,13]],
    [["if",1,21,22],["add",17],["block",5,11,13]],
    [["if",36,37],["add",18]],
    [["if",3],["unless",38],["add",19]],
    [["if",40],["unless",39],["add",20]],
    [["if",41],["add",21]],
    [["if",42],["add",22]],
    [["if",40],["unless",43],["add",23,67]],
    [["if",44],["add",24]],
    [["if",37,45,46],["add",25]],
    [["if",37,46,47],["add",26]],
    [["if",50],["unless",48,49],["add",27]],
    [["if",3],["unless",48,49],["add",27]],
    [["if",52],["unless",51],["add",28]],
    [["if",41,53,54],["add",29]],
    [["if",1,55,56],["add",30]],
    [["if",1,57],["add",31]],
    [["if",58],["add",32]],
    [["if",40,59,60],["add",33]],
    [["if",1,61,62,64],["unless",63],["add",34]],
    [["if",37,65],["unless",66],["add",35]],
    [["if",67,68],["unless",66],["add",36]],
    [["if",69],["add",37],["block",36]],
    [["if",70],["add",38]],
    [["if",3,71],["add",40,42,43,44,45,46,48,49,50,51,52,53,54,55,56,62]],
    [["if",72,73],["add",63]],
    [["if",73],["unless",74],["add",66]],
    [["if",40],["add",68,74]],
    [["if",40,75],["add",70]],
    [["if",3,76],["add",71]],
    [["if",3,77],["add",72]],
    [["if",40,78],["add",73]],
    [["if",79,80],["add",75]],
    [["if",3,81],["add",77]],
    [["if",1,7,8],["block",5,11,13]]]
},
"runtime":[]




};

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self,D=function(n,v){var w=n.split("."),q=C;w[0]in q||"undefined"==typeof q.execScript||q.execScript("var "+w[0]);for(var t;w.length&&(t=w.shift());)w.length||void 0===v?q=q[t]&&q[t]!==Object.prototype[t]?q[t]:q[t]={}:q[t]=v};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var E,F=function(){};
(function(){function n(h,m){h=h||"";m=m||{};for(var y in v)v.hasOwnProperty(y)&&(m.N&&(m["fix_"+y]=!0),m.G=m.G||m["fix_"+y]);var z={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},e={comment:function(){var a=h.indexOf("--\x3e");if(0<=a)return{content:h.substr(4,a),length:a+3}},endTag:function(){var a=h.match(q);if(a)return{tagName:a[1],length:a[0].length}},atomicTag:function(){var a=e.startTag();if(a){var b=h.slice(a.length);
if(b.match(new RegExp("</\\s*"+a.tagName+"\\s*>","i"))){var c=b.match(new RegExp("([\\s\\S]*?)</\\s*"+a.tagName+"\\s*>","i"));if(c)return{tagName:a.tagName,g:a.g,content:c[1],length:c[0].length+a.length}}}},startTag:function(){var a=h.match(w);if(a){var b={};a[2].replace(t,function(c,d,k,g,r){var u=k||g||r||B.test(d)&&d||null,l=document.createElement("div");l.innerHTML=u;b[d]=l.textContent||l.innerText||u});return{tagName:a[1],g:b,s:!!a[3],length:a[0].length}}},chars:function(){var a=h.indexOf("<");
return{length:0<=a?a:h.length}}},f=function(){for(var a in z)if(z[a].test(h)){var b=e[a]();return b?(b.type=b.type||a,b.text=h.substr(0,b.length),h=h.slice(b.length),b):null}};m.G&&function(){var a=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,b=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,c=[];c.H=function(){return this[this.length-1]};c.v=function(l){var p=this.H();return p&&p.tagName&&p.tagName.toUpperCase()===l.toUpperCase()};c.V=function(l){for(var p=
0,x;x=this[p];p++)if(x.tagName===l)return!0;return!1};var d=function(l){l&&"startTag"===l.type&&(l.s=a.test(l.tagName)||l.s);return l},k=f,g=function(){h="</"+c.pop().tagName+">"+h},r={startTag:function(l){var p=l.tagName;"TR"===p.toUpperCase()&&c.v("TABLE")?(h="<TBODY>"+h,u()):m.oa&&b.test(p)&&c.V(p)?c.v(p)?g():(h="</"+l.tagName+">"+h,u()):l.s||c.push(l)},endTag:function(l){c.H()?m.W&&!c.v(l.tagName)?g():c.pop():m.W&&(k(),u())}},u=function(){var l=h,p=d(k());h=l;if(p&&r[p.type])r[p.type](p)};f=function(){u();
return d(k())}}();return{append:function(a){h+=a},ea:f,sa:function(a){for(var b;(b=f())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var a=h;h="";return a},ta:function(){return h},stack:[]}}var v=function(){var h={},m=this.document.createElement("div");m.innerHTML="<P><I></P></I>";h.va="<P><I></P></I>"!==m.innerHTML;m.innerHTML="<P><i><P></P></i></P>";h.ua=2===m.childNodes.length;return h}(),w=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
q=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,t=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,B=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;n.supports=v;for(var A in v);E=n})();
(function(){function n(){}function v(e){return void 0!==e&&null!==e}function w(e,f,a){var b,c=e&&e.length||0;for(b=0;b<c;b++)f.call(a,e[b],b)}function q(e,f,a){for(var b in e)e.hasOwnProperty(b)&&f.call(a,b,e[b])}function t(e,f){q(f,function(a,b){e[a]=b});return e}function B(e,f){e=e||{};q(f,function(a,b){v(e[a])||(e[a]=b)});return e}function A(e){try{return y.call(e)}catch(a){var f=[];w(e,function(b){f.push(b)});return f}}var h={J:n,K:n,L:n,M:n,O:n,P:function(e){return e},done:n,error:function(e){throw e;
},fa:!1},m=this;if(!m.postscribe){var y=Array.prototype.slice,z=function(){function e(a,b,c){var d="data-ps-"+b;if(2===arguments.length){var k=a.getAttribute(d);return v(k)?String(k):k}v(c)&&""!==c?a.setAttribute(d,c):a.removeAttribute(d)}function f(a,b){var c=a.ownerDocument;t(this,{root:a,options:b,l:c.defaultView||c.parentWindow,i:c,o:E("",{N:!0}),u:[a],B:"",C:c.createElement(a.nodeName),j:[],h:[]});e(this.C,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.h,arguments);for(var a;!this.m&&
this.h.length;)a=this.h.shift(),"function"===typeof a?this.U(a):this.D(a)};f.prototype.U=function(a){var b={type:"function",value:a.name||a.toString()};this.A(b);a.call(this.l,this.i);this.I(b)};f.prototype.D=function(a){this.o.append(a);for(var b,c=[],d,k;(b=this.o.ea())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(k=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.ka(c);d&&this.X(b);k&&this.Y(b)};f.prototype.ka=function(a){var b=this.R(a);
b.F&&(b.Z=this.B+b.F,this.B+=b.da,this.C.innerHTML=b.Z,this.ia())};f.prototype.R=function(a){var b=this.u.length,c=[],d=[],k=[];w(a,function(g){c.push(g.text);if(g.g){if(!/^noscript$/i.test(g.tagName)){var r=b++;d.push(g.text.replace(/(\/?>)/," data-ps-id="+r+" $1"));"ps-script"!==g.g.id&&"ps-style"!==g.g.id&&k.push("atomicTag"===g.type?"":"<"+g.tagName+" data-ps-proxyof="+r+(g.s?" />":">"))}}else d.push(g.text),k.push("endTag"===g.type?g.text:"")});return{wa:a,raw:c.join(""),F:d.join(""),da:k.join("")}};
f.prototype.ia=function(){for(var a,b=[this.C];v(a=b.shift());){var c=1===a.nodeType;if(!c||!e(a,"proxyof")){c&&(this.u[e(a,"id")]=a,e(a,"id",null));var d=a.parentNode&&e(a.parentNode,"proxyof");d&&this.u[d].appendChild(a)}b.unshift.apply(b,A(a.childNodes))}};f.prototype.X=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.src=a.g.src||a.g.ma;a.src&&this.j.length?this.m=a:this.A(a);var c=this;this.ja(a,function(){c.I(a)})};f.prototype.Y=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.type=
a.g.type||a.g.TYPE||"text/css";this.la(a);b&&this.write()};f.prototype.la=function(a){var b=this.T(a);this.aa(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.i.createTextNode(a.content)))};f.prototype.T=function(a){var b=this.i.createElement(a.tagName);b.setAttribute("type",a.type);q(a.g,function(c,d){b.setAttribute(c,d)});return b};f.prototype.aa=function(a){this.D('<span id="ps-style"/>');var b=this.i.getElementById("ps-style");b.parentNode.replaceChild(a,
b)};f.prototype.A=function(a){a.ba=this.h;this.h=[];this.j.unshift(a)};f.prototype.I=function(a){a!==this.j[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.j.shift(),this.write.apply(this,a.ba),!this.j.length&&this.m&&(this.A(this.m),this.m=null))};f.prototype.ja=function(a,b){var c=this.S(a),d=this.ha(c),k=this.options.J;a.src&&(c.src=a.src,this.ga(c,d?k:function(){b();k()}));try{this.$(c),a.src&&!d||b()}catch(g){this.options.error(g),b()}};f.prototype.S=function(a){var b=
this.i.createElement(a.tagName);q(a.g,function(c,d){b.setAttribute(c,d)});a.content&&(b.text=a.content);return b};f.prototype.$=function(a){this.D('<span id="ps-script"/>');var b=this.i.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.ga=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;t(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var k={message:"remote script failed "+
a.src};c();d(k);b()}})};f.prototype.ha=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.fa&&a.src&&a.hasAttribute("async"))};return f}();m.postscribe=function(){function e(){var d=b.shift(),k;d&&(k=d[d.length-1],k.K(),d.stream=f.apply(null,d),k.L())}function f(d,k,g){function r(x){x=g.P(x);c.write(x);g.M(x)}c=new z(d,g);c.id=a++;c.name=g.name||c.id;var u=d.ownerDocument,l={close:u.close,open:u.open,write:u.write,writeln:u.writeln};t(u,{close:n,open:n,write:function(){return r(A(arguments).join(""))},
writeln:function(){return r(A(arguments).join("")+"\n")}});var p=c.l.onerror||n;c.l.onerror=function(x,G,H){g.error({qa:x+" - "+G+":"+H});p.apply(c.l,arguments)};c.write(k,function(){t(u,l);c.l.onerror=p;g.done();c=null;e()});return c}var a=0,b=[],c=null;return t(function(d,k,g){"function"===typeof g&&(g={done:g});g=B(g,h);d=/^#/.test(d)?m.document.getElementById(d.substr(1)):d.pa?d[0]:d;var r=[d,k,g];d.ca={cancel:function(){r.stream?r.stream.abort():r[1]=n}};g.O(r);b.push(r);c||e();return d.ca},
{streams:{},ra:b,na:z})}();F=m.postscribe}})();D("google_tag_manager_external.postscribe.installPostscribe",function(){var n=window.google_tag_manager;n&&(n.postscribe||(n.postscribe=window.postscribe||F))});D("google_tag_manager_external.postscribe.getPostscribe",function(){return window.google_tag_manager.postscribe});}).call(this);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ka={};try{ka.__proto__=ia;ha=ka.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Wi=b.prototype},pa=this||self,qa=function(a){return a};var ra={},sa=function(a,b){ra[a]=ra[a]||[];ra[a][b]=!0},ta=function(a){for(var b=[],c=ra[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ua=function(){},va=function(a){return"function"==typeof a},wa=function(a){return"string"==typeof a},xa=function(a){return"number"==typeof a&&!isNaN(a)},za=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&sa("TAGGING",4):sa("TAGGING",5);return b},Aa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ba=function(a,b){if(a&&za(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ea=function(a,b){if(!xa(a)||!xa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ia=function(a,b){for(var c=new Ha,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ja=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ka=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},La=
function(a){return Math.round(Number(a))||0},Ma=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Na=function(a){var b=[];if(za(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Oa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Pa=function(){return new Date(Date.now())},g=function(){return Pa().getTime()},Ha=function(){this.prefix="gtm.";this.values={}};Ha.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ha.prototype.get=function(a){return this.values[this.prefix+a]};
var Ra=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=/^\w{1,9}$/,
$a=function(a){var b=[];Ja(a,function(c,d){Za.test(c)&&d&&b.push(c)});return b.join(",")};var ab,bb=function(){if(void 0===ab){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}ab=a}else ab=a}return ab};var eb=function(a,b){this.o=b===cb?a:""};eb.prototype.toString=function(){return this.o+""};var cb={};var fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var gb;a:{var hb=pa.navigator;if(hb){var jb=hb.userAgent;if(jb){gb=jb;break a}}gb=""}var kb=function(a){return-1!=gb.indexOf(a)};var mb=function(a,b,c){this.o=c===lb?a:""};mb.prototype.toString=function(){return this.o.toString()};var nb=function(a){return a instanceof mb&&a.constructor===mb?a.o:"type_error:SafeHtml"},lb={},ob=function(a){var b=bb(),c=b?b.createHTML(a):a;return new mb(c,null,lb)},pb=new mb(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,lb);var qb=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},rb=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var sb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=nb(pb);return!c.parentElement}),tb=function(a,b){if(sb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=nb(b)};var l=window,B=document,ub=navigator,vb=B.currentScript&&B.currentScript.src,wb=function(a,b){var c=l[a];l[a]=void 0===c?b:c;return l[a]},xb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Cb=function(a,b,c){var d=B.createElement("script");d.type="text/javascript";d.async=!0;var e,f=bb(),h=f?f.createScriptURL(a):a;e=new eb(h,cb);d.src=e instanceof eb&&e.constructor===eb?e.o:"type_error:TrustedResourceUrl";
var k,m,n=(d.ownerDocument&&d.ownerDocument.defaultView||window).document,q=null===(m=n.querySelector)||void 0===m?void 0:m.call(n,"script[nonce]");(k=q?q.nonce||q.getAttribute("nonce")||"":"")&&d.setAttribute("nonce",k);xb(d,b);c&&(d.onerror=c);var p=B.getElementsByTagName("script")[0]||B.body||B.head;p.parentNode.insertBefore(d,p);return d},Db=function(){if(vb){var a=vb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Eb=function(a,b){var c=B.createElement("iframe");
c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=B.body&&B.body.lastChild||B.body||B.head;d.parentNode.insertBefore(c,d);xb(c,b);void 0!==a&&(c.src=a);return c},Fb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Gb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Hb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,
c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},E=function(a){l.setTimeout(a,0)},Ib=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Jb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Kb=function(a){var b=B.createElement("div"),c=ob("A<div>"+a+"</div>");tb(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},Lb=function(a,
b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Mb=function(a){ub.sendBeacon&&ub.sendBeacon(a)||Fb(a)},Nb=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ob=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Pb=function(a){if(null==a)return String(a);var b=Ob.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Qb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Rb=function(a){if(!a||"object"!=Pb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Qb(a,"constructor")&&!Qb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Qb(a,b)},G=function(a,b){var c=b||("array"==Pb(a)?[]:{}),d;for(d in a)if(Qb(a,d)){var e=a[d];"array"==Pb(e)?("array"!=Pb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Rb(e)?(Rb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Sb=function(a){if(void 0===a||za(a)||Rb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Tb=function(){var a=function(b){return{toString:function(){return b}}};return{ug:a("consent"),vg:a("consent_always_fire"),Ke:a("convert_case_to"),Le:a("convert_false_to"),Me:a("convert_null_to"),Ne:a("convert_true_to"),Oe:a("convert_undefined_to"),Fi:a("debug_mode_metadata"),ib:a("function"),gh:a("instance_name"),ih:a("live_only"),jh:a("malware_disabled"),kh:a("metadata"),Ii:a("original_activity_id"),Ji:a("original_vendor_template_id"),mh:a("once_per_event"),sf:a("once_per_load"),Li:a("priority_override"),
Mi:a("respected_consent_types"),wf:a("setup_tags"),xf:a("tag_id"),yf:a("teardown_tags")}}();
var Ub=[],Vb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Wb=function(a){return Vb[a]},Xb=/[\x00\x22\x26\x27\x3c\x3e]/g;var ac=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},dc=function(a){return cc[a]};Ub[7]=function(a){return String(a).replace(ac,dc)};
Ub[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ac,dc)+"'"}};var jc=/['()]/g,kc=function(a){return"%"+a.charCodeAt(0).toString(16)};Ub[12]=function(a){var b=
encodeURIComponent(String(a));jc.lastIndex=0;return jc.test(b)?b.replace(jc,kc):b};var lc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,rc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},sc=function(a){return rc[a]};Ub[16]=function(a){return a};var uc;
var vc=[],wc=[],xc=[],yc=[],zc=[],Ac={},Bc,Cc,Dc,Ec=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Ac[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.If&&b.If(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===Tb.vg.toString()&&a[f]){}
d&&b&&b.Hf&&(e.vtp_gtmCachedValues=b.Hf);return void 0!==d?d(e):uc(c,e,b)},Gc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Fc(a[e],b,c));return d},Fc=function(a,b,c){if(za(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Fc(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=vc[f];if(!h||b.ne(h))return;c[f]=!0;try{var k=Gc(h,b,c);k.vtp_gtmEventId=b.id;
d=Ec(k,b);Dc&&(d=Dc.Bh(d,k))}catch(y){b.Wf&&b.Wf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var m=1;m<a.length;m+=2)d[Fc(a[m],b,c)]=Fc(a[m+1],b,c);return d;case "template":d=[];for(var n=!1,q=1;q<a.length;q++){var p=Fc(a[q],b,c);Cc&&(n=n||p===Cc.Mc);d.push(p)}return Cc&&n?Cc.Eh(d):d.join("");case "escape":d=Fc(a[1],b,c);if(Cc&&za(a[1])&&"macro"===a[1][0]&&Cc.Xh(a))return Cc.ki(d);d=String(d);for(var r=2;r<a.length;r++)Ub[a[r]]&&(d=Ub[a[r]](d));return d;case "tag":var t=a[1];if(!yc[t])throw Error("Unable to resolve tag reference "+
t+".");return d={Pf:a[2],index:t};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v["function"]=a[1];var u=Hc(v,b,c),x=!!a[4];return x||2!==u?x!==(1===u):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Hc=function(a,b,c){try{return Bc(Gc(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Kc=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=Ic(a),f=0;f<wc.length;f++){var h=wc[f],k=Jc(h,e);if(k){for(var m=h.add||[],n=0;n<m.length;n++)c[m[n]]=!0;b(h.block||[])}else null===k&&b(h.block||[]);}for(var q=[],p=0;p<yc.length;p++)c[p]&&!d[p]&&(q[p]=!0);return q},Jc=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],h=0;h<f.length;h++){var k=b(f[h]);if(2===k)return null;if(1===k)return!1}return!0},Ic=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Hc(xc[c],a));return b[c]}};var Lc={Bh:function(a,b){b[Tb.Ke]&&"string"===typeof a&&(a=1==b[Tb.Ke]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Tb.Me)&&null===a&&(a=b[Tb.Me]);b.hasOwnProperty(Tb.Oe)&&void 0===a&&(a=b[Tb.Oe]);b.hasOwnProperty(Tb.Ne)&&!0===a&&(a=b[Tb.Ne]);b.hasOwnProperty(Tb.Le)&&!1===a&&(a=b[Tb.Le]);return a}};var J={Sb:"_ee",Sc:"_syn_or_mod",Ni:"_uei",Kd:"_eu",Ki:"_pci",Bd:"event_callback",Bc:"event_timeout",Aa:"gtag.config",Ja:"gtag.get",qa:"purchase",tb:"refund",Za:"begin_checkout",rb:"add_to_cart",sb:"remove_from_cart",Eg:"view_cart",Se:"add_to_wishlist",Ia:"view_item",Re:"view_promotion",Qe:"select_promotion",od:"select_item",wc:"view_item_list",Pe:"add_payment_info",Dg:"add_shipping_info",Ua:"value_key",Ta:"value_callback",Ba:"allow_ad_personalization_signals",Ob:"restricted_data_processing",Kb:"allow_google_signals",
Ea:"cookie_expires",Lb:"cookie_update",Qb:"session_duration",Gc:"session_engaged_time",Ma:"user_properties",ka:"transport_url",R:"ads_data_redaction",sa:"user_data",Mb:"first_party_collection",D:"ad_storage",H:"analytics_storage",Ie:"region",Je:"wait_for_update",Da:"conversion_linker",Ca:"conversion_cookie_prefix",fa:"value",da:"currency",kf:"trip_type",X:"items",bf:"passengers",pd:"allow_custom_scripts",yb:"session_id",hf:"quantity",hb:"transaction_id",cb:"language",Ac:"country",yc:"allow_enhanced_conversions",
ud:"aw_merchant_id",sd:"aw_feed_country",td:"aw_feed_language",rd:"discount",We:"developer_id",Ic:"delivery_postal_code",Ad:"estimated_delivery_date",yd:"shipping",Id:"new_customer",vd:"customer_lifetime_value",zd:"enhanced_conversions"};J.pf=[J.qa,J.tb,J.Za,J.rb,J.sb,J.Eg,J.Se,J.Ia,J.Re,J.Qe,J.wc,J.od,J.Pe,J.Dg];J.nf=[J.Ba,J.Kb,J.Lb];J.qf=[J.Ea,J.Bc,J.Qb,J.Gc];var ld=function(a){sa("GTM",a)};var md=function(a,b){this.o=a;this.defaultValue=void 0===b?!1:b};var nd=new md(1936,!0),od=new md(1933);var xd=function(){var a=pd;if(a.ke&&a.hasOwnProperty("ke"))return a.ke;var b=new a;return a.ke=b};var pd=function(){var a={};this.o=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[od.o]=!0}},yd=function(a){return xd().o(a.o,a.defaultValue)};var zd=[];function Ad(){var a=wb("google_tag_data",{});a.ics||(a.ics={entries:{},set:Bd,update:Cd,addListener:Dd,notifyListeners:Ed,active:!1,usedDefault:!1});return a.ics}
function Bd(a,b,c,d,e,f){var h=Ad();h.active=!0;h.usedDefault=!0;if(void 0!=b){var k=h.entries,m=k[a]||{},n=m.region,q=c&&wa(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||q===e||(q===d?n!==e:!q&&!n)){var p=!!(f&&0<f&&void 0===m.update),r={region:q,initial:"granted"===b,update:m.update,quiet:p};if(""!==d||!1!==m.initial)k[a]=r;p&&l.setTimeout(function(){k[a]===r&&r.quiet&&(r.quiet=!1,Fd(a),Ed(),sa("TAGGING",2))},f)}}}
function Cd(a,b){var c=Ad();c.active=!0;if(void 0!=b){var d=Gd(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Gd(a);f.quiet?(f.quiet=!1,Fd(a)):h!==d&&Fd(a)}}function Dd(a,b){zd.push({ae:a,Nh:b})}function Fd(a){for(var b=0;b<zd.length;++b){var c=zd[b];za(c.ae)&&-1!==c.ae.indexOf(a)&&(c.Zf=!0)}}function Ed(a){for(var b=0;b<zd.length;++b){var c=zd[b];if(c.Zf){c.Zf=!1;try{c.Nh({Ah:a})}catch(d){}}}}
var Gd=function(a){var b=Ad().entries[a]||{};return void 0!==b.update?b.update:b.initial},Hd=function(a){return(Ad().entries[a]||{}).initial},Id=function(a){return!(Ad().entries[a]||{}).quiet},Jd=function(){return yd(od)?Ad().active:!1},Kd=function(){return Ad().usedDefault},Ld=function(a,b){Ad().addListener(a,b)},Md=function(a){Ad().notifyListeners(a)},Nd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Id(b[e]))return!0;return!1}if(c()){var d=!1;Ld(b,function(e){d||c()||(d=!0,a(e))})}else a({})},
Od=function(a,b){function c(){for(var f=[],h=0;h<d.length;h++){var k=d[h];!1===Gd(k)||e[k]||(f.push(k),e[k]=!0)}return f}var d=wa(b)?[b]:b,e={};c().length!==d.length&&Ld(d,function(f){var h=c();0<h.length&&(f.ae=h,a(f))})};function Pd(a){for(var b=[],c=0;c<Qd.length;c++){var d=a(Qd[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Qd=[J.D,J.H],Rd=function(a){var b=a[J.Ie];b&&ld(40);var c=a[J.Je];c&&ld(41);for(var d=za(b)?b:[b],e={Fb:0};e.Fb<d.length;e={Fb:e.Fb},++e.Fb)Ja(a,function(f){return function(h,k){if(h!==J.Ie&&h!==J.Je){var m=d[f.Fb];Ad().set(h,k,m,"AU","AU-QLD",c)}}}(e))},Sd=function(a,b){Ja(a,function(c,d){Ad().update(c,d)});Md(b)},K=function(a){var b=Gd(a);return void 0!=b?b:!0},Td=function(){return"G1"+Pd(Gd)},Ud=function(a,b){Od(a,b)},Vd=function(a,b){Nd(a,b)};var Xd=function(a){return Wd?B.querySelectorAll(a):null},Yd=function(a,b){if(!Wd)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!B.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Zd=!1;if(B.querySelectorAll)try{var $d=B.querySelectorAll(":root");$d&&1==$d.length&&$d[0]==B.documentElement&&(Zd=!0)}catch(a){}var Wd=Zd;var ae,be=!1;var ce=function(a){if(B.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!l.getComputedStyle)return!0;var c=l.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=l.getComputedStyle(d,
null))}return!1};
var de=function(){var a=B.body,b=B.documentElement||a&&a.parentElement,c,d;if(B.compatMode&&"BackCompat"!==B.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};ld(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},ee=function(a){var b=de(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var fe=[],ge=!(!l.IntersectionObserver||!l.IntersectionObserverEntry),he=function(a,b,c){for(var d=new l.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<fe.length;f++)if(!fe[f])return fe[f]=d,f;return fe.push(d)-1},ie=function(a,b,c){function d(k,m){var n={top:0,bottom:0,right:0,left:0,width:0,height:0},q={boundingClientRect:k.getBoundingClientRect(),
intersectionRatio:m,intersectionRect:n,isIntersecting:0<m,rootBounds:n,target:k,time:g()};E(function(){return a(q)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,m){return k-m});return function(){for(var k=0;k<b.length;k++){var m=ee(b[k]);if(m>e[k])for(;f[k]<c.length-1&&m>=c[f[k]+1];)d(b[k],m),f[k]++;else if(m<e[k])for(;0<=f[k]&&m<=c[f[k]];)d(b[k],m),f[k]--;e[k]=m}}},je=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(ge){var e=!1;E(function(){e||
ie(a,b,c)()});return he(function(f){e=!0;for(var h={Gb:0};h.Gb<f.length;h={Gb:h.Gb},h.Gb++)E(function(k){return function(){return a(f[k.Gb])}}(h))},b,c)}return l.setInterval(ie(a,b,c),1E3)},ke=function(a){ge?0<=a&&a<fe.length&&fe[a]&&(fe[a].disconnect(),fe[a]=void 0):l.clearInterval(a)};var le=/:[0-9]+$/,me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ne(a.protocol)||ne(l.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:l.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||l.location.hostname).replace(le,"").toLowerCase());return oe(a,b,c,d,e)},oe=function(a,b,c,d,e){var f,h=ne(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=qe(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(le,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||sa("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=Aa(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=me(f,e,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ne=function(a){return a?a.replace(":","").toLowerCase():""},qe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},re=function(a){var b=B.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||sa("TAGGING",1),c="/"+c);var d=b.hostname.replace(le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},se=function(a){function b(n){var q=n.split("=")[0];return 0>d.indexOf(q)?n:q+"=0"}function c(n){return n.split("&").map(b).filter(function(q){return void 0!=q}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
e=re(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var m=""+f+h+k;"/"===m[m.length-1]&&(m=m.substring(0,m.length-1));return m};var te={},ue=!0;var we=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Ae=new RegExp(/@(gmail|googlemail)\./i),Be=new RegExp(/support|noreply/i),Ce="SCRIPT STYLE IMG SVG PATH BR".split(" "),De=["BR"],Ee={};
function Fe(a){var b;if(a===B.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=Fe(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}function Ge(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}
function He(a){if(0==a.length)return null;var b;b=Ge(a,function(c){return!Be.test(c.za)});b=Ge(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=Ge(b,function(c){return!ce(c.element)});return b[0]}
var Ie=function(){var a=Ee["true.true"];if(a&&200>g()-a.timestamp)return a.result;var b;var c=[],d=B.body;if(d){for(var e=d.querySelectorAll("*"),f=0;f<e.length&&1E4>f;f++){var h=e[f];if(!(0<=Ce.indexOf(h.tagName.toUpperCase()))){for(var k=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=De.indexOf(h.children[m].tagName.toUpperCase()))){k=!0;break}k||c.push(h)}}b={elements:c,status:1E4<e.length?"2":"1"}}else b={elements:c,status:"4"};for(var n=b,q=n.elements,p=[],r=0;r<q.length;r++){var t=q[r],v=t.textContent;
t.value&&(v=t.value);if(v){var u=v.match(we);if(u){var x=u[0],y;if(l.location){var w=oe(l.location,"host",!0);y=0<=x.toLowerCase().indexOf(w)}else y=!1;y||p.push({element:t,za:x})}}}var z=He(p),A=[];if(z){var C=z.element,F={za:z.za,tagName:C.tagName,type:1};F.querySelector=Fe(C);F.isVisible=!ce(C);A.push(F)}var D={elements:A,status:10<p.length?"3":n.status};Ee["true.true"]={timestamp:g(),result:D};return D},Je=function(a){return a.tagName+":"+a.isVisible+":"+a.za.length+":"+Ae.test(a.za)};var df={},ef=null,ff=Math.random();df.M="GTM-NBSWN3";df.Rc="770";df.Hi="";df.xg="ChEI8PO0hwYQ3cuxhd+UnPuQARIjAJIN4twPx+OPaLOrG6uKa9clSFnxePFD8qfZ8bd94G26lB4aAius";var gf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},hf={__paused:!0,__tg:!0},jf;for(jf in gf)gf.hasOwnProperty(jf)&&(hf[jf]=!0);var kf="www.googletagmanager.com/gtm.js";
var lf=kf,mf=Ma(""),nf=null,of=null,pf="https://www.googletagmanager.com/a?id="+df.M+"&cv=439",qf={},rf={},sf=function(){var a=ef.sequence||1;ef.sequence=a+1;return a};df.wg="";var tf={},uf=new Ha,vf={},wf={},zf={name:"dataLayer",set:function(a,b){G(Xa(a,b),vf);xf()},get:function(a){return yf(a,2)},reset:function(){uf=new Ha;vf={};xf()}},yf=function(a,b){return 2!=b?uf.get(a):Af(a)},Af=function(a){var b,c=a.split(".");b=b||[];for(var d=vf,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Aa(b,d))return}return d},Bf=function(a,b){wf.hasOwnProperty(a)||(uf.set(a,b),G(Xa(a,b),vf),xf())},xf=function(a){Ja(wf,function(b,c){uf.set(b,c);G(Xa(b,
void 0),vf);G(Xa(b,c),vf);a&&delete wf[b]})},Df=function(a,b,c){tf[a]=tf[a]||{};tf[a][b]=Cf(b,c)},Cf=function(a,b){var c,d=1!==(void 0===b?2:b)?Af(a):uf.get(a);"array"===Pb(d)||"object"===Pb(d)?c=G(d):c=d;return c},Ef=function(a,b){if(tf[a])return tf[a][b]},Ff=function(a,b){tf[a]&&delete tf[a][b]};var Kf={},Lf=function(a,b){if(l._gtmexpgrp&&l._gtmexpgrp.hasOwnProperty(a))return l._gtmexpgrp[a];void 0===Kf[a]&&(Kf[a]=Math.floor(Math.random()*b));return Kf[a]};function Mf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var m=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");m&&c&&(m=decodeURIComponent(m));d.push(m)}}return d};function Nf(a){return"null"!==a.origin};var Qf=function(a,b,c,d){return Of(d)?Mf(a,String(b||Pf()),c):[]},Tf=function(a,b,c,d,e){if(Of(e)){var f=Rf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Sf(f,function(h){return h.Yc},b);if(1===f.length)return f[0].id;f=Sf(f,function(h){return h.jc},c);return f[0]?f[0].id:void 0}}};function Uf(a,b,c,d){var e=Pf(),f=window;Nf(f)&&(f.document.cookie=a);var h=Pf();return e!=h||void 0!=c&&0<=Qf(b,h,!1,d).indexOf(c)}
var Yf=function(a,b,c){function d(t,v,u){if(null==u)return delete h[v],t;h[v]=u;return t+"; "+v+"="+u}function e(t,v){if(null==v)return delete h[v],t;h[v]=!0;return t+"; "+v}if(!Of(c.Qa))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Vf(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Ti);f=d(f,"samesite",
c.Ui);c.Vi&&(f=e(f,"secure"));var m=c.domain;if("auto"===m){for(var n=Wf(),q=0;q<n.length;++q){var p="none"!==n[q]?n[q]:void 0,r=d(f,"domain",p);r=e(r,c.flags);if(!Xf(p,c.path)&&Uf(r,a,b,c.Qa))return 0}return 1}m&&"none"!==m&&(f=d(f,"domain",m));f=e(f,c.flags);return Xf(m,c.path)?1:Uf(f,a,b,c.Qa)?0:1},Zf=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Yf(a,b,c)};
function Sf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],m=b(k);m===c?d.push(k):void 0===f||m<f?(e=[k],f=m):m===f&&e.push(k)}return 0<d.length?d:e}function Rf(a,b,c){for(var d=[],e=Qf(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var m=h.shift();m&&(m=m.split("-"),d.push({id:h.join("."),Yc:1*m[0]||1,jc:1*m[1]||1}))}}return d}
var Vf=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},$f=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gg=/(^|\.)doubleclick\.net$/i,Xf=function(a,b){return gg.test(window.document.location.hostname)||"/"===b&&$f.test(a)},Pf=function(){return Nf(window)?window.document.cookie:""},Wf=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;gg.test(e)||$f.test(e)||a.push("none");return a},Of=function(a){if(!yd(od)||!a||!Jd())return!0;if(!Id(a))return!1;var b=Gd(a);return null==b?!0:!!b};var hg=function(){return[Math.round(2147483647*Math.random()),Math.round(g()/1E3)].join(".")},kg=function(a,b,c,d,e){var f=ig(b);return Tf(a,f,jg(c),d,e)},lg=function(a,b,c,d){var e=""+ig(c),f=jg(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ig=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},jg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function mg(a,b,c){var d,e=Number(null!=a.lb?a.lb:void 0);0!==e&&(d=new Date((b||g())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var ng=["1"],og={},sg=function(a){var b=pg(a.prefix);if(!og[b]&&!qg(b,a.path,a.domain)){var c=hg();if(0===rg(b,c,a)){var d=wb("google_tag_data",{});d._gcl_au?sa("GTM",57):d._gcl_au=c}qg(b,a.path,a.domain)}};function rg(a,b,c){var d=lg(b,"1",c.domain,c.path),e=mg(c);e.Qa="ad_storage";return Zf(a,d,e)}function qg(a,b,c){var d=kg(a,b,c,ng,"ad_storage");d&&(og[a]=d);return d}function pg(a){return(a||"_gcl")+"_au"};var tg=function(a){for(var b=[],c=B.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({De:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(h,k){return k.timestamp-h.timestamp});return b};
function ug(a,b){var c=tg(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].De]||(d[c[e].De]=[]);var h={version:f[0],timestamp:1E3*Number(f[1]),xa:f[2]};b&&3<f.length&&(h.labels=f.slice(3));d[c[e].De].push(h)}}return d};function vg(){for(var a=wg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function xg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var wg,yg;
function zg(a){function b(m){for(;d<a.length;){var n=a.charAt(d++),q=yg[n];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return m}wg=wg||xg();yg=yg||vg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ag;var Eg=function(){var a=Bg,b=Cg,c=Dg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Gb(B,"mousedown",d);Gb(B,"keyup",d);Gb(B,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Fg=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Dg().decorators.push(f)},Gg=function(a,b,c){for(var d=Dg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var m=h.domains,n=a,q=!!h.sameHost;if(m&&(q||n!==B.location.hostname))for(var p=0;p<m.length;p++)if(m[p]instanceof RegExp){if(m[p].test(n)){k=!0;break a}}else if(0<=n.indexOf(m[p])||q&&0<=m[p].indexOf(n)){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ua(e,h.callback())}}return e},Dg=function(){var a=wb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Hg=/(.*?)\*(.*?)\*(.*)/,Ig=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Jg=/^(?:www\.|m\.|amp\.)+/,Kg=/([^?#]+)(\?[^#]*)?(#.*)?/;function Lg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Ng=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,h,k=String(d);wg=wg||xg();yg=yg||vg();for(var m=[],n=0;n<k.length;n+=3){var q=n+1<k.length,p=n+2<k.length,r=k.charCodeAt(n),t=q?k.charCodeAt(n+1):0,v=p?k.charCodeAt(n+2):0,u=r>>2,x=(r&3)<<4|t>>4,y=(t&15)<<2|v>>6,w=v&63;p||(w=64,q||(y=64));m.push(wg[u],wg[x],wg[y],wg[w])}h=m.join("");f.call(e,h)}}var z=b.join("*");return["1",Mg(z),
z].join("*")},Mg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ag)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ag=d;for(var m=4294967295,n=0;n<c.length;n++)m=m>>>8^Ag[(m^c.charCodeAt(n))&255];return((m^-1)>>>0).toString(36)},Pg=function(){return function(a){var b=re(l.location.href),
c=b.search.replace("?",""),d=me(c,"_gl",!0)||"";a.query=Og(d)||{};var e=pe(b,"fragment").match(Lg("_gl"));a.fragment=Og(e&&e[3]||"")||{}}},Qg=function(a){var b=Pg(),c=Dg();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ua(d,e.query),a&&Ua(d,e.fragment));return d},Og=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Hg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],m;a:{for(var n=h[2],q=0;q<
b;++q)if(n===Mg(k,q)){m=!0;break a}m=!1}if(m){for(var p={},r=k?k.split("*"):[],t=0;t<r.length;t+=2)p[r[t]]=zg(r[t+1]);return p}}}}catch(v){}};function Rg(a,b,c,d){function e(q){var p=q,r=Lg(a).exec(p),t=p;if(r){var v=r[2],u=r[4];t=r[1];u&&(t=t+v+u)}q=t;var x=q.charAt(q.length-1);q&&"&"!==x&&(q+="&");return q+n}d=void 0===d?!1:d;var f=Kg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",m=f[3]||"",n=a+"="+b;d?m="#"+e(m.substring(1)):k="?"+e(k.substring(1));return""+h+k+m}
function Sg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Gg(b,1,c),e=Gg(b,2,c),f=Gg(b,3,c);if(Va(d)){var h=Ng(d);c?Tg("_gl",h,a):Ug("_gl",h,a,!1)}if(!c&&Va(e)){var k=Ng(e);Ug("_gl",k,a,!0)}for(var m in f)if(f.hasOwnProperty(m))a:{var n=m,q=f[m],p=a;if(p.tagName){if("a"===p.tagName.toLowerCase()){Ug(n,q,p,void 0);break a}if("form"===p.tagName.toLowerCase()){Tg(n,q,p);break a}}"string"==typeof p&&Rg(n,q,p,void 0)}}
function Ug(a,b,c,d){if(c.href){var e=Rg(a,b,c.href,void 0===d?!1:d);fb.test(e)&&(c.href=e)}}
function Tg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var m=B.createElement("input");m.setAttribute("type","hidden");m.setAttribute("name",a);m.setAttribute("value",b);c.appendChild(m)}}else if("post"===d){var n=Rg(a,b,c.action);fb.test(n)&&(c.action=n)}}}
var Bg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Sg(e,e.hostname)}}catch(h){}},Cg=function(a){try{if(a.action){var b=pe(re(a.action),"host");Sg(a,b)}}catch(c){}},Vg=function(a,b,c,d){Eg();Fg(a,b,"fragment"===c?2:1,!!d,!1)},Wg=function(a,b){Eg();Fg(a,[oe(l.location,"host",!0)],b,!0,!0)},Xg=function(){var a=B.location.hostname,b=Ig.exec(B.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Jg,""),m=e.replace(Jg,""),n;if(!(n=k===m)){var q="."+m;n=k.substring(k.length-q.length,k.length)===q}return n},Yg=function(a,b){return!1===a?!1:a||b||Xg()};var Zg={};var $g=/^\w+$/,ah=/^[\w-]+$/,bh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},ch=function(){if(!yd(od)||!Jd())return!0;var a=Gd("ad_storage");return null==a?!0:!!a},dh=function(a,b){Id("ad_storage")?ch()?a():Od(a,"ad_storage"):b?sa("TAGGING",3):Nd(function(){dh(a,!0)},["ad_storage"])},fh=function(a){return eh(a).map(function(b){return b.xa})},eh=function(a){var b=[];if(!Nf(l)||!B.cookie)return b;var c=Qf(a,B.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{sc:d.sc},e++){var f=gh(c[e]);if(null!=f){var h=f,k=h.version;d.sc=h.xa;var m=h.timestamp,n=h.labels,q=Ba(b,function(p){return function(r){return r.xa===p.sc}}(d));q?(q.timestamp=Math.max(q.timestamp,m),q.labels=hh(q.labels,n||[])):b.push({version:k,xa:d.sc,timestamp:m,labels:n})}}b.sort(function(p,r){return r.timestamp-p.timestamp});return ih(b)};function hh(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function jh(a){return a&&"string"==typeof a&&a.match($g)?a:"_gcl"}
var lh=function(){var a=re(l.location.href),b=pe(a,"query",!1,void 0,"gclid"),c=pe(a,"query",!1,void 0,"gclsrc"),d=pe(a,"query",!1,void 0,"wbraid"),e=pe(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||me(f,"gclid",void 0);c=c||me(f,"gclsrc",void 0);d=d||me(f,"wbraid",void 0)}return kh(b,c,e,d)},kh=function(a,b,c,d){var e={},f=function(h,k){e[k]||(e[k]=[]);e[k].push(h)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&ah.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==a&&a.match(ah))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},mh=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},oh=function(a){var b=lh();dh(function(){nh(b,a)})};
function nh(a,b,c,d){function e(q,p){var r=ph(q,f);r&&(Zf(r,p,h),k=!0)}b=b||{};d=d||[];var f=jh(b.prefix);c=c||g();var h=mg(b,c,!0);h.Qa="ad_storage";var k=!1,m=Math.round(c/1E3),n=function(q){var p=["GCL",m,q];0<d.length&&p.push(d.join("."));return p.join(".")};a.aw&&e("aw",n(a.aw[0]));a.dc&&e("dc",n(a.dc[0]));a.gf&&e("gf",n(a.gf[0]));a.ha&&e("ha",n(a.ha[0]));a.gp&&e("gp",n(a.gp[0]));(void 0==Zg.enable_gbraid_cookie_write?0:Zg.enable_gbraid_cookie_write)&&!k&&a.gb&&e("gb",n(a.gb[0]))}
var rh=function(a,b){var c=Qg(!0);dh(function(){for(var d=jh(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==bh[f]){var h=ph(f,d),k=c[h];if(k){var m=Math.min(qh(k),g()),n;b:{var q=m;if(Nf(l))for(var p=Qf(h,B.cookie,void 0,"ad_storage"),r=0;r<p.length;++r)if(qh(p[r])>q){n=!0;break b}n=!1}if(!n){var t=mg(b,m,!0);t.Qa="ad_storage";Zf(h,k,t)}}}}nh(kh(c.gclid,c.gclsrc),b)})},ph=function(a,b){var c=bh[a];if(void 0!==c)return b+c},qh=function(a){return 0!==sh(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function gh(a){var b=sh(a.split("."));return 0===b.length?null:{version:b[0],xa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function sh(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!ah.test(a[2])?[]:a}
var th=function(a,b,c,d,e){if(za(b)&&Nf(l)){var f=jh(e),h=function(){for(var k={},m=0;m<a.length;++m){var n=ph(a[m],f);if(n){var q=Qf(n,B.cookie,void 0,"ad_storage");q.length&&(k[n]=q.sort()[q.length-1])}}return k};dh(function(){Vg(h,b,c,d)})}},ih=function(a){return a.filter(function(b){return ah.test(b.xa)})},uh=function(a,b){if(Nf(l)){for(var c=jh(b.prefix),d={},e=0;e<a.length;e++)bh[a[e]]&&(d[a[e]]=bh[a[e]]);dh(function(){Ja(d,function(f,h){var k=Qf(c+h,B.cookie,void 0,"ad_storage");k.sort(function(t,
v){return qh(v)-qh(t)});if(k.length){var m=k[0],n=qh(m),q=0!==sh(m.split(".")).length?m.split(".").slice(3):[],p={},r;r=0!==sh(m.split(".")).length?m.split(".")[2]:void 0;p[f]=[r];nh(p,b,n,q)}})})}};function vh(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var wh=function(a){function b(e,f,h){h&&(e[f]=h)}if(Jd()){var c=lh();if(vh(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Wg(function(){return d},3);Wg(function(){var e={};return e._up="1",e},1)}}};function xh(a,b){var c=jh(b),d=ph(a,c);if(!d)return 0;for(var e=eh(d),f=0,h=0;h<e.length;h++)f=Math.max(f,e[h].timestamp);return f}
function yh(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var zh=/^\d+\.fls\.doubleclick\.net$/;function Ah(a,b){Id(J.D)?K(J.D)?a():Od(a,J.D):b?ld(42):Vd(function(){Ah(a,!0)},[J.D])}function Bh(a){var b=re(l.location.href),c=pe(b,"host",!1);if(c&&c.match(zh)){var d=pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ch(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=Bh("gcl"+a);if(d)return d.split(".")}var e=jh(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!K(J.D)&&c,h;h=lh()[a]||[];if(0<h.length)return f?["0"]:h}var k=ph(a,e);return k?fh(k):[]}function Dh(a){var b=[];Ja(a,function(c,d){d=ih(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].xa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var Eh=function(a){var b=Bh("gac");return b?!K(J.D)&&a?"0":decodeURIComponent(b):Dh(ch()?ug():{})},Fh=function(a){var b=Bh("gacgb");return b?!K(J.D)&&a?"0":decodeURIComponent(b):Dh(ch()?ug("_gac_gb",!0):{})},Gh=function(a,b,c){var d=lh(),e=[],f=d.gclid,h=d.dclid,k=d.gclsrc||"aw";!f||"aw.ds"!==k&&"aw"!==k&&"ds"!==k||c&&!mh(k,c)||e.push({xa:f,ee:k});!h||c&&"dc"!==c||e.push({xa:h,ee:"ds"});Ah(function(){sg(b);var m=og[pg(b.prefix)],n=!1;if(m&&0<e.length)for(var q=ef.joined_auid=ef.joined_auid||{},p=0;p<e.length;p++){var r=e[p],t=r.xa,v=r.ee,u=(b.prefix||"_gcl")+"."+v+"."+t;if(!q[u]){var x="https://adservice.google.com/pagead/regclk";x="gb"===v?x+"?gbraid="+t+"&auid="+m:x+"?gclid="+t+"&auid="+m+"&gclsrc="+v;Mb(x);n=q[u]=!0}}null==a&&(a=n);
if(a&&m){var y=pg(b.prefix),w=og[y];w&&rg(y,w,b)}})},Hh=function(a){var b;if(Bh("gclaw")||Bh("gac")||0<(lh().aw||[]).length)b=!1;else{var c;if(0<(lh().gb||[]).length)c=!0;else{var d=Math.max(xh("aw",a),yh(ch()?ug():{}));c=Math.max(xh("gb",a),yh(ch()?ug("_gac_gb",!0):{}))>d}b=c}return b};var Ih=/[A-Z]+/,Jh=/\s/,Kh=function(a){if(wa(a)&&(a=Oa(a),!Jh.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ih.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],N:d}}}}},Mh=function(a){for(var b={},c=0;c<a.length;++c){var d=Kh(a[c]);d&&(b[d.id]=d)}Lh(b);var e=[];Ja(b,function(f,h){e.push(h)});return e};
function Lh(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.N[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Nh=function(){var a=!1;return a};var Ph=function(a,b,c,d){return(2===Oh()||d||"http:"!=l.location.protocol?a:b)+c},Oh=function(){var a=Db(),b;if(1===a)a:{var c=lf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=B.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var m=h[k].src;if(m){m=m.toLowerCase();if(0===m.indexOf(e)){b=3;break a}1===f&&0===m.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var bi=function(a){if(K(J.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=se(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=se(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},ci=function(){var a;if(!(a=mf)){var b;if(!0===l._gtmdgs)b=!0;else{var c=ub&&ub.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=La("1");return Lf(1,100)<d?Lf(2,2):-1},di=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var ei=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),fi={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},gi={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},hi="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ii=function(){var a=!1;return a},ki=function(a){var b=yf("gtm.allowlist")||yf("gtm.whitelist");b&&ld(9);ii()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&Wa(Na(b),fi),d=yf("gtm.blocklist")||
yf("gtm.blacklist");d||(d=yf("tagTypeBlacklist"))&&ld(3);d?ld(8):d=[];ji()&&(d=Na(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Aa(Na(d),"google")&&ld(2);var e=d&&Wa(Na(d),gi),f={};return function(h){var k=h&&h[Tb.ib];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var m=rf[k]||[],n=a(k,m);if(b){var q;if(q=
n)a:{if(0>Aa(c,k))if(m&&0<m.length)for(var p=0;p<m.length;p++){if(0>Aa(c,m[p])){ld(11);q=!1;break a}}else{q=!1;break a}q=!0}n=q}var r=!1;if(d){var t=0<=Aa(e,k);if(t)r=t;else{var v=Ia(e,m||[]);v&&ld(10);r=v}}var u=!n||r;u||!(0<=Aa(m,"sandboxedScripts"))||c&&-1!==Aa(c,"sandboxedScripts")||(u=Ia(e,hi));return f[k]=u}},ji=function(){return ei.test(l.location&&l.location.hostname)};var li={active:!0,isAllowed:function(){return!0}},mi=function(a){var b=ef.zones;return b?b.checkState(df.M,a):li},ni=function(a){var b=ef.zones;!b&&a&&(b=ef.zones=a());return b};var oi=function(){},pi=function(){};var qi=!1,ri=0,si=[];function ti(a){if(!qi){var b=B.createEventObject,c="complete"==B.readyState,d="interactive"==B.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){qi=!0;for(var e=0;e<si.length;e++)E(si[e])}si.push=function(){for(var f=0;f<arguments.length;f++)E(arguments[f]);return 0}}}function ui(){if(!qi&&140>ri){ri++;try{B.documentElement.doScroll("left"),ti()}catch(a){l.setTimeout(ui,50)}}}var vi=function(a){qi?a():si.push(a)};var xi=function(a,b){this.o=!1;this.F=[];this.P={tags:[]};this.aa=!1;this.s=this.C=0;wi(this,a,b)},yi=function(a,b,c,d){if(hf.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Rb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.P.tags.push(e)-1},zi=function(a,b,c,d){var e=a.P.tags[b];e&&(e.status=c,e.executionTime=d)},Ai=function(a){if(!a.o){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.o=!0;a.F.length=0}},wi=function(a,b,c){va(b)&&Bi(a,b);c&&l.setTimeout(function(){return Ai(a)},Number(c))},Bi=function(a,
b){var c=Ta(function(){return E(function(){b(df.M,a.P)})});a.o?c():a.F.push(c)},Ci=function(a){a.C++;return Ta(function(){a.s++;a.aa&&a.s>=a.C&&Ai(a)})};var Di=function(){function a(d){return!xa(d)||0>d?0:d}if(!ef._li&&l.performance&&l.performance.timing){var b=l.performance.timing.navigationStart,c=xa(zf.get("gtm.start"))?zf.get("gtm.start"):0;ef._li={cst:a(c-b),cbt:a(of-b)}}},Ei=function(a){l.performance&&l.performance.mark(df.M+"_"+a+"_start")},Fi=function(a){if(l.performance){var b=df.M+"_"+a+"_start",c=df.M+"_"+a+"_duration";l.performance.measure(c,b);var d=l.performance.getEntriesByName(c)[0];l.performance.clearMarks(b);l.performance.clearMeasures(c);
var e=ef._p||{};void 0===e[a]&&(e[a]=d.duration,ef._p=e);return d.duration}},Gi=function(){if(l.performance&&l.performance.now){var a=ef._p||{};a.PAGEVIEW=l.performance.now();ef._p=a}};var Ni={},Oi=function(){return l.GoogleAnalyticsObject&&l[l.GoogleAnalyticsObject]},Pi=!1;
var Qi=function(a){l.GoogleAnalyticsObject||(l.GoogleAnalyticsObject=a||"ga");var b=l.GoogleAnalyticsObject;if(l[b])l.hasOwnProperty(b)||ld(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(Pa());l[b]=c}Di();return l[b]},Ri=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Oi();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Si=function(a){if(!Jd())return;var b=Oi();b(a+"require","linker");b(a+"linker:passthrough",
!0);};
var Ui=function(a){},Ti=function(){return l.GoogleAnalyticsObject||"ga"},Vi=function(a,b){return function(){var c=Oi(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),m=0>h.indexOf("&tid="+b);m&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);m&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var bj=function(a){},fj=function(a){},gj=
function(){return"&tc="+yc.filter(function(a){return a}).length},jj=function(){2022<=hj().length&&ij()},kj=function(a){return 0===a.indexOf("gtm.")?encodeURIComponent(a):"*"},mj=function(){lj||(lj=l.setTimeout(ij,500))},ij=function(){lj&&(l.clearTimeout(lj),lj=void 0);void 0===nj||oj[nj]&&!pj&&!qj||(rj[nj]||sj.Yh()||0>=tj--?(ld(1),rj[nj]=!0):(sj.ri(),Fb(hj(!0)),oj[nj]=!0,uj=vj=wj=qj=pj=""))},hj=function(a){var b=nj;if(void 0===b)return"";var c=ta("GTM"),d=ta("TAGGING");return[xj,oj[b]?"":"&es=1",
yj[b],bj(b),c?"&u="+c:"",d?"&ut="+d:"",gj(),pj,qj,wj,vj,fj(a),uj,"&z=0"].join("")},Aj=function(){xj=zj()},zj=function(){return[pf,"&v=3&t=t","&pid="+Ea(),"&rv="+df.Rc].join("")},ej=["L","S","Y"],aj=["S","E"],Bj={sampleRate:"0.005000",og:"",ng:Number("5")},Cj=0<=B.location.search.indexOf("?gtm_latency=")||0<=B.location.search.indexOf("&gtm_latency="),Dj;if(!(Dj=Cj)){var Ej=Math.random(),Fj=Bj.sampleRate;Dj=Ej<Fj}var Gj=Dj,Hj={label:df.M+" Container",children:[{label:"Initialization",children:[]}]},xj=zj(),oj={},pj="",qj="",uj="",vj="",dj={},cj=!1,$i={},Ij={},wj="",nj=void 0,yj={},rj={},lj=void 0,Jj=2;0<Bj.ng&&(Jj=Bj.ng);var sj=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);
return{Yh:function(){return c<a?!1:g()-d[c%a]<b},ri:function(){var f=c++%a;d[f]=g()}}}(Jj,1E3),tj=1E3,Lj=function(a,b){if(Gj&&!rj[a]&&nj!==a){ij();nj=a;uj=pj="";yj[a]="&e="+kj(b)+"&eid="+a;mj();}},Mj=function(a,b,c,d){if(Gj&&b){var e,f=String(b[Tb.ib]||
"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var h=c+e;if(!rj[a]){a!==nj&&(ij(),nj=a);pj=pj?pj+"."+h:"&tr="+h;var k=b["function"];if(!k)throw Error("Error: No function name given for function call.");
var m=(Ac[k]?"1":"2")+e;uj=uj?uj+"."+m:"&ti="+m;mj();jj()}}};var Tj=function(a,b,c){if(Gj&&!rj[a]){a!==nj&&(ij(),
nj=a);var d=c+b;qj=qj?qj+"."+d:"&epr="+d;mj();jj()}},Uj=function(a,b,c){};function Vj(a,b,c,d){var e=yc[a],f=Wj(a,b,c,d);if(!f)return null;var h=Fc(e[Tb.wf],c,[]);if(h&&h.length){var k=h[0];f=Vj(k.index,{onSuccess:f,onFailure:1===k.Pf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Wj(a,b,c,d){function e(){if(f[Tb.jh])k();else{var x=Gc(f,c,[]);var y=x[Tb.ug];if(null!=y)for(var w=0;w<y.length;w++)if(!K(y[w])){k();return}var z=yi(c.jb,String(f[Tb.ib]),Number(f[Tb.xf]),x[Tb.kh]),A=!1;x.vtp_gtmOnSuccess=function(){if(!A){A=!0;var D=g()-F;Mj(c.id,yc[a],"5",D);zi(c.jb,z,"success",
D);h()}};x.vtp_gtmOnFailure=function(){if(!A){A=!0;var D=g()-F;Mj(c.id,yc[a],"6",D);zi(c.jb,z,"failure",D);k()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;Mj(c.id,f,"1");var C=function(){var D=g()-F;Mj(c.id,f,"7",D);zi(c.jb,z,"exception",D);A||(A=!0,k())};var F=g();try{Ec(x,c)}catch(D){C(D)}}}var f=yc[a],h=b.onSuccess,k=b.onFailure,m=b.terminate;if(c.ne(f))return null;var n=Fc(f[Tb.yf],c,[]);if(n&&n.length){var q=n[0],p=Vj(q.index,{onSuccess:h,onFailure:k,terminate:m},c,d);if(!p)return null;h=p;k=2===q.Pf?m:p}if(f[Tb.sf]||f[Tb.mh]){var r=f[Tb.sf]?zc:
c.Ai,t=h,v=k;if(!r[a]){e=Ta(e);var u=Xj(a,r,e);h=u.onSuccess;k=u.onFailure}return function(){r[a](t,v)}}return e}function Xj(a,b,c){var d=[],e=[];b[a]=Yj(d,e,c);return{onSuccess:function(){b[a]=Zj;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=ak;for(var f=0;f<e.length;f++)e[f]()}}}function Yj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Zj(a){a()}function ak(a,b){b()};var dk=function(a,b){for(var c=[],d=0;d<yc.length;d++)if(a[d]){var e=yc[d];var f=Ci(b.jb);try{var h=Vj(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(h){var k=c,m=k.push,n=d,q=e["function"];if(!q)throw"Error: No function name given for function call.";var p=Ac[q];m.call(k,{jg:n,$f:p?p.priorityOverride||0:0,Mh:h})}else bk(d,b),f()}catch(v){f()}}var r=b.jb;r.aa=!0;r.s>=r.C&&Ai(r);c.sort(ck);for(var t=0;t<c.length;t++)c[t].Mh();
return 0<c.length};function ck(a,b){var c,d=b.$f,e=a.$f;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.jg,k=b.jg;f=h>k?1:h<k?-1:0}return f}function bk(a,b){if(!Gj)return;var c=function(d){var e=b.ne(yc[d])?"3":"4",f=Fc(yc[d][Tb.wf],b,[]);f&&f.length&&c(f[0].index);Mj(b.id,yc[d],e);var h=Fc(yc[d][Tb.yf],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ek=!1,kk=function(a){var b=g(),c=a["gtm.uniqueEventId"],d=a.event;if("gtm.js"===d){if(ek)return!1;ek=!0;}var h=mi(c),k=!1;if(!h.active){if("gtm.js"!==d)return!1;k=!0;h=mi(Number.MAX_SAFE_INTEGER)}
Lj(c,d);var m=a.eventCallback,n=a.eventTimeout,q=m;var p={id:c,name:d,ne:ki(h.isAllowed),Ai:[],Wf:function(){ld(6)},If:fk(c),jb:new xi(q,n)};p.Hf=gk();
hk(c,p.jb);var r=Kc(p);k&&(r=ik(r));var t=dk(r,p);"gtm.js"!==d&&"gtm.sync"!==d||Ui(df.M);switch(d){case "gtm.init":t&&ld(20)}return jk(r,t)};function fk(a){return function(b){Gj&&(Sb(b)||Uj(a,"input",b))}}
function hk(a,b){Df(a,"event",1);Df(a,"ecommerce",1);Df(a,"gtm");Df(a,"eventModel");}function gk(){var a={};a.event=Cf("event",1);a.ecommerce=Cf("ecommerce",1);a.gtm=Cf("gtm");a.eventModel=Cf("eventModel");return a}function ik(a){for(var b=[],c=0;c<a.length;c++)a[c]&&gf[String(yc[c][Tb.ib])]&&(b[c]=!0);return b}
function jk(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&yc[c]&&!hf[String(yc[c][Tb.ib])])return!0;return!1}function lk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return re(""+c+b).href}}function mk(a,b){return nk()?lk(a,b):void 0}function nk(){var a=!1;return a};var ok=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},pk=function(a){var b=new ok;b.eventModel=a;return b},qk=function(a,b){a.targetConfig=b;return a},rk=function(a,b){a.containerConfig=b;return a},sk=function(a,b){a.remoteConfig=b;return a},tk=function(a,
b){a.globalConfig=b;return a},uk=function(a,b){a.onSuccess=b;return a},vk=function(a,b){a.setContainerTypeLoaded=b;return a},wk=function(a,b){a.getContainerTypeLoaded=b;return a},xk=function(a,b){a.onFailure=b;return a};
ok.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var yk=function(a){function b(e){Ja(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ja(c,function(e){d.push(e)});return d},zk=function(a,b){function c(f){Rb(f)&&Ja(f,function(h,k){e=!0;d[h]=k})}var d={},e=!1;c(a.globalConfig[b]);c(a.remoteConfig[b]);c(a.containerConfig[b]);c(a.targetConfig[b]);c(a.eventModel[b]);return e?d:void 0};var Ak;if(3===df.Rc.length)Ak="g";else{var Bk="G";Ak=Bk}
var Ck={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ak,OPT:"o"},Dk=function(a){var b=df.M.split("-"),c=b[0].toUpperCase(),d=Ck[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===df.Rc.length){var h="w";f="2"+h}else f="";return f+d+df.Rc+e};function Ek(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var Fk=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Gk=function(){return kb("iPhone")&&!kb("iPod")&&!kb("iPad")};kb("Opera");kb("Trident")||kb("MSIE");kb("Edge");!kb("Gecko")||-1!=gb.toLowerCase().indexOf("webkit")&&!kb("Edge")||kb("Trident")||kb("MSIE")||kb("Edge");-1!=gb.toLowerCase().indexOf("webkit")&&!kb("Edge")&&kb("Mobile");kb("Macintosh");kb("Windows");kb("Linux")||kb("CrOS");var Hk=pa.navigator||null;Hk&&(Hk.appVersion||"").indexOf("X11");kb("Android");Gk();kb("iPad");kb("iPod");Gk()||kb("iPad")||kb("iPod");gb.toLowerCase().indexOf("kaios");var Ik=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null},Jk=function(a){var b=B;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Kk=function(){};var Lk=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Mk=function(a,b){this.s=a;this.o=null;this.F={};this.aa=0;this.P=void 0===b?500:b;this.C=null};ma(Mk,Kk);
var Ok=function(a){return"function"===typeof a.s.__tcfapi||null!=Nk(a)};
Mk.prototype.addEventListener=function(a){var b={},c=rb(function(){return a(b)}),d=0;-1!==this.P&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.P));var e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=Lk(b),h&&0===b.internalErrorState||(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Pk(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Mk.prototype.removeEventListener=function(a){a&&a.listenerId&&Pk(this,"removeEventListener",null,a.listenerId)};
var Rk=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));var m;if(0===k)if(a.purpose&&a.vendor){var n=Qk(a.vendor.consents,void 0===d?"755":d);m=n&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||yd(nd)&&"CH"===a.publisherCC)?!0:n&&Qk(a.purpose.consents,b)}else m=!0;else m=
1===k?a.purpose&&a.vendor?Qk(a.purpose.legitimateInterests,b)&&Qk(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return m},Qk=function(a,b){return!(!a||!a[b])},Pk=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Nk(a)){Sk(a);var f=++a.aa;a.F[f]=c;if(a.o){var h={};a.o.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},Nk=function(a){if(a.o)return a.o;a.o=Ik(a.s,"__tcfapiLocator");return a.o},
Sk=function(a){a.C||(a.C=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},Fk(a.s,a.C))};var Tk=!0;Tk=!1;var Uk={1:0,3:0,4:0,7:3,9:3,10:3},Vk=Ek("",550),Wk=Ek("",500);function Xk(){var a=ef.tcf||{};return ef.tcf=a}
var Yk=function(a,b){this.C=a;this.o=b;this.s=g();},Zk=function(a){},$k=function(a){},fl=function(){var a=Xk(),b=new Mk(l,Tk?3E3:-1),c=new Yk(b,a);if((al()?!0===l.gtag_enable_tcf_support:!1!==l.gtag_enable_tcf_support)&&!a.active&&("function"===typeof l.__tcfapi||Ok(b))){a.active=!0;a.kc={};bl();var d=null;Tk?d=l.setTimeout(function(){cl(a);dl(a);d=null},Wk):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)cl(a),dl(a),Zk(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=el(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in Uk)if(Uk.hasOwnProperty(k))if("1"===k){var m,n=e,q=!0;q=void 0===q?!1:q;var p;var r=n;!1===r.gdprApplies?p=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Lk(r)),p="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);m=p?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!q||"string"!==typeof n.tcString||!n.tcString.length?!0:Rk(n,"1",0):!1;h["1"]=m}else h[k]=Rk(e,k,Uk[k]);f=h}f&&(a.tcString=e.tcString||"tcempty",a.kc=f,dl(a),Zk(c))}}),$k(c)}catch(e){d&&(clearTimeout(d),d=null),cl(a),dl(a)}}};function cl(a){a.type="e";a.tcString="tcunavailable";Tk&&(a.kc=el())}function bl(){var a={},b=(a.ad_storage="denied",a.wait_for_update=Vk,a);Rd(b)}
var al=function(){var a=!1;a=!0;return a};function el(){var a={},b;for(b in Uk)Uk.hasOwnProperty(b)&&(a[b]=!0);return a}function dl(a){var b={},c=(b.ad_storage=a.kc["1"]?"granted":"denied",b);gl();Sd(c,0)}
var hl=function(){var a=Xk();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},gl=function(){var a=Xk();return a.active?a.tcString||"":""},il=function(){var a=Xk();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},jl=function(a){if(!Uk.hasOwnProperty(String(a)))return!0;var b=Xk();return b.active&&b.kc?!!b.kc[String(a)]:!0};var kl=!1;kl=!0;function ll(a){var b=String(l.location).split(/[?#]/)[0],c=df.xg||l._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,h=1,k,m,n;if(f)for(h=0,m=f.length-1;0<=m;m--)n=f.charCodeAt(m),h=(h<<6&268435455)+n+(n<<14),k=h&266338304,h=0!=k?h^k>>21:h;e=String(h)}else e="0";d=e}else d="";return d}
function ml(a){function b(v){var u;ef.reported_gclid||(ef.reported_gclid={});u=ef.reported_gclid;var x;x=kl&&h&&(!Jd()||K(J.D))?m+"."+(f.prefix||"_gcl")+(v?"gcu":"gcs"):m+(v?"gcu":"gcs");if(!u[x]){u[x]=!0;var y=[],w={},z=function(P,S){S&&(y.push(P+"="+encodeURIComponent(S)),w[P]=!0)},A="https://www.google.com";if(Jd()){var C=K(J.D);z("gcs",Td());v&&z("gcu","1");Kd()&&z("gcd","G1"+Pd(Hd));ef.dedupe_gclid||
(ef.dedupe_gclid=""+hg());z("rnd",ef.dedupe_gclid);if((!m||n&&"aw.ds"!==n)&&K(J.D)){var F=fh("_gcl_aw");z("gclaw",F.join("."))}z("url",String(l.location).split(/[?#]/)[0]);z("dclid",nl(d,q));var D=!1;D=!0;C||!d&&!D||(A="https://pagead2.googlesyndication.com")}
z("gdpr_consent",gl()),z("gdpr",il());"1"===Qg(!1)._up&&z("gtm_up","1");z("gclid",nl(d,m));z("gclsrc",n);if(!(w.gclid||w.dclid||w.gclaw)&&(z("gbraid",nl(d,p)),!w.gbraid&&Jd()&&K(J.D))){var I=fh("_gcl_gb");z("gclgb",I.join("."))}z("gtm",Dk(!e));kl&&h&&K(J.D)&&(sg(f||{}),z("auid",og[pg(f.prefix)]||""));
a.Lf&&z("did",a.Lf);var Q=A+"/pagead/landing?"+y.join("&");Mb(Q)}}var c=!!a.$d,d=!!a.na,e=a.T,f=void 0===a.Wc?{}:a.Wc,h=void 0===a.bd?!0:a.bd,k=lh(),m=k.gclid||"",n=k.gclsrc,q=k.dclid||"",p=k.gbraid||"",r=!c&&((!m||n&&"aw.ds"!==n?!1:!0)||p),t=Jd();if(r||t)t?Vd(function(){b();K(J.D)||Ud(function(v){return b(!0,v.Ah)},J.D)},[J.D]):b()}function nl(a,b){var c=a&&!K(J.D);return b&&c?"0":b}var sl=!1,tl=Number("200");function ul(){if(!l.Promise)return!1;va(B.interestCohort)||sl||(sl=!0,Jk("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));return va(B.interestCohort)}
function vl(){var a=ef.floc;if(a){var b=a.ts,c=a.floc;if(b&&c&&1E3>g()-b)return Promise.resolve(c)}var d=void 0;try{d=Promise.race([B.interestCohort().then(function(e){ef.floc={ts:g(),floc:e};return e}),new Promise(function(e){l.setTimeout(function(){return e()},tl)})]).catch(function(){})}catch(e){return}return d}var sm=function(){var a=!0;jl(7)&&jl(9)&&jl(10)||(a=!1);var b=!0;b=!1;b&&!rm()&&(a=!1);return a},rm=function(){var a=!0;jl(3)&&jl(4)||(a=!1);return a};var Rm=!1;function Sm(){var a=ef;return a.gcq=a.gcq||new Tm}
var Um=function(a,b,c){Sm().register(a,b,c)},Vm=function(a,b,c,d){Sm().push("event",[b,a],c,d)},Wm=function(a,b){Sm().push("config",[a],b)},Xm=function(a,b,c,d){Sm().push("get",[a,b],c,d)},Ym={},Zm=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s={};this.C=null;this.o=!1},$m=function(a,b,c,d,e){this.type=a;this.C=b;this.T=c||"";this.o=d;this.s=e},Tm=function(){this.s={};this.C={};this.o=[];this.F={AW:!1,UA:!1};this.enableDeferrableCommandAfterConfig=
Rm},an=function(a,b){var c=Kh(b);return a.s[c.containerId]=a.s[c.containerId]||new Zm},bn=function(a,b,c){if(b){var d=Kh(b);if(d&&1===an(a,b).status){an(a,b).status=2;var e={};Gj&&(e.timeoutId=l.setTimeout(function(){ld(38);mj()},3E3));a.push("require",[e],d.containerId);Ym[d.containerId]=g();if(Nh()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=l.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),m=mk(c,h)||k;Cb(m)}}}},cn=function(a,b,c,d){if(d.T){var e=an(a,d.T),f=e.C;if(f){var h=G(c),k=G(e.targetConfig[d.T]),m=G(e.containerConfig),n=G(e.remoteConfig),q=G(a.C),p=yf("gtm.uniqueEventId"),r=Kh(d.T).prefix,t=wk(vk(xk(uk(tk(sk(rk(qk(pk(h),k),m),n),q),function(){
Tj(p,r,"2");}),function(){Tj(p,r,"3");}),function(v,u){a.F[v]=u}),function(v){return a.F[v]});try{Tj(p,r,"1");f(d.T,b,d.C,t)}catch(v){Tj(p,r,"4");}}}};
Tm.prototype.register=function(a,b,c){var d=an(this,a);if(3!==d.status){d.C=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=Kh(a),f=Ym[e.containerId];if(void 0!==f){var h=ef[e.containerId].bootstrap,k=e.prefix.toUpperCase();ef[e.containerId]._spx&&(k=k.toLowerCase());var m=yf("gtm.uniqueEventId"),n=k,q=g()-h;if(Gj&&!rj[m]){m!==nj&&(ij(),nj=m);var p=n+"."+Math.floor(h-
f)+"."+Math.floor(q);vj=vj?vj+","+p:"&cl="+p}delete Ym[e.containerId]}this.flush()}};Tm.prototype.push=function(a,b,c,d){var e=Math.floor(g()/1E3);bn(this,c,b[0][J.ka]||this.C[J.ka]);Rm&&c&&an(this,c).o&&(d=!1);this.o.push(new $m(a,e,c,b,d));d||this.flush()};Tm.prototype.insert=function(a,b,c){var d=Math.floor(g()/1E3);0<this.o.length?this.o.splice(1,0,new $m(a,d,c,b,!1)):this.o.push(new $m(a,d,c,b,!1))};
Tm.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.o.length;){var f=this.o[0];if(f.s)Rm?!f.T||an(this,f.T).o?(f.s=!1,this.o.push(f)):c.push(f):(f.s=!1,this.o.push(f)),this.o.shift();else{switch(f.type){case "require":if(3!==an(this,f.T).status&&!a){Rm&&this.o.push.apply(this.o,c);return}Gj&&l.clearTimeout(f.o[0].timeoutId);break;case "set":Ja(f.o[0],function(r,t){G(Xa(r,t),b.C)});break;case "config":e.Ha={};Ja(f.o[0],function(r){return function(t,v){G(Xa(t,v),r.Ha)}}(e));var h=!!e.Ha[J.Jc];
delete e.Ha[J.Jc];var k=an(this,f.T),m=Kh(f.T),n=m.containerId===m.id;h||(n?k.containerConfig={}:k.targetConfig[f.T]={});k.o&&h||cn(this,J.Aa,e.Ha,f);k.o=!0;delete e.Ha[J.Sb];n?G(e.Ha,k.containerConfig):G(e.Ha,k.targetConfig[f.T]);Rm&&(d=!0);break;case "event":e.qc={};Ja(f.o[0],function(r){return function(t,v){G(Xa(t,v),r.qc)}}(e));cn(this,f.o[1],e.qc,f);break;case "get":var q={},p=(q[J.Ua]=f.o[0],q[J.Ta]=f.o[1],q);cn(this,J.Ja,p,f)}this.o.shift();dn(this,f)}e={Ha:e.Ha,qc:e.qc}}Rm&&(this.o.push.apply(this.o,
c),d&&this.flush())};var dn=function(a,b){if("require"!==b.type)if(b.T)for(var c=a.getCommandListeners(b.T)[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var h=f.s[b.type]||[],k=0;k<h.length;k++)h[k]()}};Tm.prototype.getRemoteConfig=function(a){return an(this,a).remoteConfig};Tm.prototype.getCommandListeners=function(a){return an(this,a).s};var en=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":Nb(a,"className"),"gtm.elementId":a["for"]||Ib(a,"id")||"","gtm.elementTarget":a.formTarget||Nb(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||Nb(a,"href")||a.src||a.code||a.codebase||"";return d},fn=function(a){ef.hasOwnProperty("autoEventsSettings")||(ef.autoEventsSettings={});var b=ef.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},gn=function(a,b,c){fn(a)[b]=c},hn=function(a,b,c,d){var e=fn(a),f=Ra(e,b,d);e[b]=c(f)},jn=function(a,b,c){var d=fn(a);return Ra(d,b,c)};var kn=["input","select","textarea"],ln=["button","hidden","image","reset","submit"],mn=function(a){var b=a.tagName.toLowerCase();return!Ba(kn,function(c){return c===b})||"input"===b&&Ba(ln,function(c){return c===a.type.toLowerCase()})?!1:!0},nn=function(a){return a.form?a.form.tagName?a.form:B.getElementById(a.form):Lb(a,["form"],100)},on=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(mn(h)){if(h.dataset[c]===d)return f;f++}}return 0};var pn=!!l.MutationObserver,qn=void 0,rn=function(a){if(!qn){var b=function(){var c=B.body;if(c)if(pn)(new MutationObserver(function(){for(var e=0;e<qn.length;e++)E(qn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Gb(c,"DOMNodeInserted",function(){d||(d=!0,E(function(){d=!1;for(var e=0;e<qn.length;e++)E(qn[e])}))})}};qn=[];B.body?b():E(b)}qn.push(a)};var tn=!1,un=[];function vn(){if(!tn){tn=!0;for(var a=0;a<un.length;a++)E(un[a])}}var wn=function(a){tn?E(a):un.push(a)};function xn(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var yn=new Ha;function Cn(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=yn.get(e);f||(f=new RegExp(b,d),yn.set(e,f));return f.test(a)}catch(h){return!1}}
function Dn(a,b){function c(h){var k=re(h),m=pe(k,"protocol"),n=pe(k,"host",!0),q=pe(k,"port"),p=pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===m||"http"==m&&"80"==q||"https"==m&&"443"==q)m="web",q="default";return[m,n,q,p]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function En(a){return Fn(a)?1:0}
function Fn(a){var b=a.arg0,c=a.arg1;if(a.any_of&&za(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(En(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(n){}}f=!1}return f;case "_ew":return xn(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=Aa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return Cn(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Dn(b,c)}return!1};Object.freeze({dl:1,id:1});var Gn="HA GF G UA AW DC".split(" "),Hn=!1,In={},Jn=!1;function Kn(a,b){var c={event:a};b&&(c.eventModel=G(b),b[J.Bd]&&(c.eventCallback=b[J.Bd]),b[J.Bc]&&(c.eventTimeout=b[J.Bc]));return c}function Ln(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:sf()});return a["gtm.uniqueEventId"]}
function Mn(){return Hn}
var Pn={config:function(a){var b,c;c=Ln(a);void 0===c&&(c=sf());return b},consent:function(a){function b(){Mn()&&G(a[2],{subcommand:a[1]})}if(3===a.length){ld(39);var c=sf(),d=a[1];"default"===d?(b(),Rd(a[2])):"update"===d&&(b(),Sd(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&wa(b)){var c;if(2<a.length){if(!Rb(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=Kn(b,c),e=void 0;e=Ln(a),d["gtm.uniqueEventId"]=e;void 0===e&&sf();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){Jn=!0;Mn();var b={event:"gtm.js","gtm.start":a[1].getTime()};b["gtm.uniqueEventId"]=Ln(a);return b}},policy:function(){},set:function(a){var b;2==a.length&&Rb(a[1])?b=G(a[1]):3==a.length&&
wa(a[1])&&(b={},Rb(a[2])||za(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Qn={policy:!0};var Rn=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Tn=function(a){var b=Sn(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var ko=function(a){if(jo(a))return a;this.o=a};ko.prototype.Sh=function(){return this.o};var jo=function(a){return!a||"object"!==Pb(a)||Rb(a)?!1:"getUntrustedUpdateValue"in a};ko.prototype.getUntrustedUpdateValue=ko.prototype.Sh;var lo=[],mo=!1,no=!1,oo=!1,po=function(a){return l["dataLayer"].push(a)},qo=function(a){var b=ef["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function ro(a){var b=a._clear;Ja(a,function(d,e){"_clear"!==d&&(b&&Bf(d,void 0),Bf(d,e))});nf||(nf=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=sf(),a["gtm.uniqueEventId"]=c,Bf("gtm.uniqueEventId",c));return kk(a)}function so(){var a=lo[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ka(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function to(){for(var a=!1;!oo&&0<lo.length;){var b=!1;b=!0;if(b&&!no&&so()){var c={};lo.unshift((c.event=
"gtm.init",c));no=!0}var d=!1;d=!0;if(d&&!mo&&so()){var e={};lo.unshift((e.event="gtm.init_consent",e));mo=!0}oo=!0;delete vf.eventModel;xf();var f=lo.shift();if(null!=f){var h=jo(f);
if(h){var k=f;f=jo(k)?k.getUntrustedUpdateValue():void 0;for(var m=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],n=0;n<m.length;n++){var q=m[n],p=yf(q,1);if(za(p)||Rb(p))p=G(p);wf[q]=p}}try{if(va(f))try{f.call(zf)}catch(z){}else if(za(f)){var r=f;if(wa(r[0])){var t=r[0].split("."),v=t.pop(),u=r.slice(1),x=yf(t.join("."),2);if(void 0!==x&&null!==x)try{x[v].apply(x,u)}catch(z){}}}else{if(Ka(f)){a:{var y=f;if(y.length&&wa(y[0])){var w=Pn[y[0]];if(w&&(!h||!Qn[y[0]])){f=
w(y);break a}}f=void 0}if(!f){oo=!1;continue}}a=ro(f)||a}}finally{h&&xf(!0)}}oo=!1}return!a}
function uo(){var b=to();try{Rn(l["dataLayer"],df.M)}catch(c){}return b}
var wo=function(){var a=wb("dataLayer",[]),b=wb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};vi(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});wn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<ef.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new ko(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);lo.push.apply(lo,e);if(300<
this.length)for(ld(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return to()&&k};var d=a.slice(0);lo.push.apply(lo,d);if(vo()){E(uo)}},vo=function(){var a=!0;return a};var xo={};xo.Mc=new String("undefined");
var yo=function(a){this.o=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===xo.Mc?b:a[d]);return c.join("")}};yo.prototype.toString=function(){return this.o("undefined")};yo.prototype.valueOf=yo.prototype.toString;xo.oh=yo;xo.Td={};xo.Eh=function(a){return new yo(a)};var zo={};xo.si=function(a,b){var c=sf();zo[c]=[a,b];return c};xo.Kf=function(a){var b=a?0:1;return function(c){var d=zo[c];if(d&&"function"===typeof d[b])d[b]();zo[c]=void 0}};xo.Xh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};xo.ki=function(a){if(a===xo.Mc)return a;var b=sf();xo.Td[b]=a;return'google_tag_manager["'+df.M+'"].macro('+b+")"};xo.gi=function(a,b,c){a instanceof xo.oh&&(a=a.o(xo.si(b,c)),b=ua);return{Th:a,onSuccess:b}};var Ko=l.clearTimeout,Lo=l.setTimeout,N=function(a,b,c){if(Nh()){b&&E(b)}else return Cb(a,b,c)},Mo=function(){return new Date},No=function(){return l.location.href},Oo=function(a){return pe(re(a),"fragment")},Po=function(a){return qe(re(a))},Qo=function(a,b){return yf(a,b||2)},Ro=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=po(a)):d=po(a);return d},So=function(a,b){l[a]=b},R=function(a,b,c){b&&
(void 0===l[a]||c&&!l[a])&&(l[a]=b);return l[a]},To=function(a,b,c){return Qf(a,b,void 0===c?!0:!!c)},Uo=function(a,b,c){return 0===Zf(a,b,c)},Vo=function(a,b){if(Nh()){b&&E(b)}else Eb(a,b)},Wo=function(a){return!!jn(a,"init",!1)},Xo=function(a){gn(a,"init",!0)},Yo=function(a){var b=lf+"?id="+encodeURIComponent(a)+"&l=dataLayer";N(Ph("https://","http://",b))},Zo=function(a,b,c){Gj&&(Sb(a)||Uj(c,b,a))};
var $o=xo.gi;var wp=encodeURI,V=encodeURIComponent,xp=Fb;var yp=function(a,b){if(!a)return!1;var c=pe(re(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var zp=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function fr(){return l.gaGlobal=l.gaGlobal||{}}var gr=function(){var a=fr();a.hid=a.hid||Ea();return a.hid},hr=function(a,b){var c=fr();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Fr=function(){if(va(l.__uspapi)){var a="";try{l.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var $r=window,as=document,bs=function(a){var b=$r._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===$r["ga-disable-"+a])return!0;try{var c=$r.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Mf("AMP_TOKEN",String(as.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return as.getElementById("__gaOptOutExtension")?!0:!1};var cs={};
function fs(a){delete a.eventModel[J.Sb];hs(a.eventModel)}var hs=function(a){Ja(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.Ma]||{};Ja(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var ks=function(a,b,c){Vm(b,c,a)},ls=function(a,b,c){Vm(b,c,a,!0)},ts=function(a,b){};
function ms(a,b){}var Z={g:{}};
Z.g.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.h="gaawc";Z.__gaawc.m=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=zp(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(J.Ma)||b.vtp_userProperties){var e=d[J.Ma]||{};G(zp(b.vtp_userProperties,"name","value"),e);d[J.Ma]=e}b.vtp_enableSendToServerContainer&&b.vtp_serverContainerUrl&&(d[J.ka]=b.vtp_serverContainerUrl,
d[J.Mb]=!0);var f=b.vtp_userDataVariable;f&&(d[J.sa]=f);a(d,J.nf,function(h){return Ma(h)});a(d,J.qf,function(h){return Number(h)});d.send_page_view=b.vtp_sendPageView;Wm(d,c);E(b.vtp_gtmOnSuccess)})}();Z.g.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.h="ctv";Z.__ctv.m=!0;Z.__ctv.priorityOverride=0})(function(){return"439"})}();

Z.g.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.h="jsm";Z.__jsm.m=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=R("google_tag_manager");var d=c&&c.e&&c.e(b);Zo(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();Z.g.c=["google"],function(){(function(a){Z.__c=a;Z.__c.h="c";Z.__c.m=!0;Z.__c.priorityOverride=0})(function(a){Zo(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.g.e=["google"],function(){(function(a){Z.__e=a;Z.__e.h="e";Z.__e.m=!0;Z.__e.priorityOverride=0})(function(a){var b=String(Ef(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Z.g.f=["google"],function(){(function(a){Z.__f=a;Z.__f.h="f";Z.__f.m=!0;Z.__f.priorityOverride=0})(function(a){var b=Qo("gtm.referrer",1)||B.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?pe(re(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Po(String(b)):String(b)})}();
Z.g.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=en(c,"gtm.click");Ro(d)}}(function(b){Z.__cl=b;Z.__cl.h="cl";Z.__cl.m=!0;Z.__cl.priorityOverride=0})(function(b){if(!Wo("cl")){var c=R("document");Gb(c,"click",a,!0);Xo("cl")}E(b.vtp_gtmOnSuccess)})}();
Z.g.j=["google"],function(){(function(a){Z.__j=a;Z.__j.h="j";Z.__j.m=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=R(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Zo(c,"j",a.vtp_gtmEventId);return c})}();
Z.g.r=["google"],function(){(function(a){Z.__r=a;Z.__r.h="r";Z.__r.m=!0;Z.__r.priorityOverride=0})(function(a){return Ea(a.vtp_min,a.vtp_max)})}();
Z.g.t=["google"],function(){(function(a){Z.__t=a;Z.__t.h="t";Z.__t.m=!0;Z.__t.priorityOverride=0})(function(){return Mo().getTime()})}();
Z.g.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.h="u";Z.__u.m=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Qo("gtm.url",1))||No();var d=b[a("vtp_component")];if(!d||"URL"==d)return Po(String(c));var e=re(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",m=b[a("vtp_ignoreEmptyQueryParam").toString()],n;h?za(k)?n=k:n=String(k).replace(/\s+/g,
"").split(","):n=[String(k)];for(var q=0;q<n.length;q++){var p=pe(e,"QUERY",void 0,void 0,n[q]);if(void 0!=p&&(!m||""!==p)){f=p;break a}}f=void 0}else f=pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.g.v=["google"],function(){(function(a){Z.__v=a;Z.__v.h="v";Z.__v.m=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Qo(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Zo(d,"v",a.vtp_gtmEventId);return d})}();
Z.g.ua=["google"],function(){function a(p){return K(p)}function b(p,r,t){var v=!1;if(Jd()&&!v&&!e[p]){var u=!K(J.H),x=function(){var y=Oi(),w="gtm"+sf(),z=n(r);z["&gtm"]=Dk(!0);var A={name:w};m(z,A,!0);var C=void 0,F=A._useUp;y(function(){var D=y.getByName(t);D&&(C=D.get("clientId"))});
y("create",p,A);u&&K(J.H)&&(u=!1,y(function(){var D=y.getByName(w);!D||D.get("clientId")===C&&F||(z["&gcs"]=Td(),z["&gcu"]="1",D.set(z),D.send("pageview"))}));y(function(){y.remove(w)})};Od(x,J.H);Od(x,J.D);e[p]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},k={urlPassthrough:!0},m=function(p,r,t){var v=0;if(p)for(var u in p)if(!k[u]&&
p.hasOwnProperty(u)&&(t&&f[u]||!t&&void 0===f[u])){var x=h[u]?Ma(p[u]):p[u];"anonymizeIp"!=u||x||(x=void 0);r[u]=x;v++}return v},n=function(p){var r={};p.vtp_gaSettings&&G(zp(p.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);G(zp(p.vtp_fieldsToSet,"fieldName","value"),r);K(J.H)||(r.storage="none");K(J.D)||(r.allowAdFeatures=!1,r.storeGac=!1);sm()||(r.allowAdFeatures=!1);rm()||(r.allowAdPersonalizationSignals=!1);p.vtp_transportUrl&&(r._x_19=p.vtp_transportUrl);if(Ma(r.urlPassthrough)){r._useUp=!0;var t=!1;Jd()&&!t&&(r._cs=a)}return r},q=function(p){function r(oa,Y){void 0!==Y&&D("set",oa,Y)}var t={},v={},u={},x={};if(p.vtp_gaSettings){var y=p.vtp_gaSettings;G(zp(y.vtp_contentGroup,"index","group"),v);G(zp(y.vtp_dimension,"index","dimension"),u);G(zp(y.vtp_metric,"index","metric"),x);var w=G(y);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=
void 0;p=G(p,w)}G(zp(p.vtp_contentGroup,"index","group"),v);G(zp(p.vtp_dimension,"index","dimension"),u);G(zp(p.vtp_metric,"index","metric"),x);var z=n(p),A=Qi(p.vtp_functionName);if(va(A)){var C="",F="";p.vtp_setTrackerName&&"string"==typeof p.vtp_trackerName?""!==p.vtp_trackerName&&(F=p.vtp_trackerName,C=F+"."):(F="gtm"+sf(),C=F+".");var D=function(oa){var Y=[].slice.call(arguments,0);Y[0]=C+Y[0];A.apply(window,Y)},I=function(oa,Y){return void 0===Y?Y:oa(Y)},Q=function(oa,Y){if(Y)for(var Sa in Y)Y.hasOwnProperty(Sa)&&
D("set",oa+Sa,Y[Sa])},P=function(){},S={name:F};m(z,S,!0);var O=p.vtp_trackingId||t.trackingId;A("create",O,S);D("set","&gtm",Dk(!0));var M=!1;
Jd()&&!M&&(D("set","&gcs",Td()),b(O,p,F));z._x_19&&z._x_20&&!d[F]&&(d[F]=!0,A(Vi(F,String(z._x_20))));p.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(oa,Y){void 0!==p[Y]&&D("set",oa,p[Y])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",v);Q("dimension",u);Q("metric",x);var H={};m(z,H,!1)&&D("set",H);var T;
p.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var oa=z&&z.hitCallback;va(oa)&&oa();p.vtp_gtmOnSuccess()});var W=function(oa,Y){return void 0===p[oa]?t[Y]:p[oa]};if("TRACK_EVENT"==p.vtp_trackType){p.vtp_enableEcommerce&&(D("require","ec","ec.js"),P());var L={hitType:"event",eventCategory:String(W("vtp_eventCategory","category")),eventAction:String(W("vtp_eventAction","action")),eventLabel:I(String,
W("vtp_eventLabel","label")),eventValue:I(La,W("vtp_eventValue","value"))};m(T,L,!1);D("send",L);}else if("TRACK_SOCIAL"==p.vtp_trackType){}else if("TRACK_TRANSACTION"==
p.vtp_trackType){D("require","ecommerce","//www.google-analytics.com/plugins/ua/ecommerce.js");var ja=function(oa){return Qo("transaction"+oa,1)},X=ja("Id");D("ecommerce:addTransaction",{id:X,affiliation:ja("Affiliation"),revenue:ja("Total"),shipping:ja("Shipping"),tax:ja("Tax")});for(var na=ja("Products")||[],Ca=0;Ca<na.length;Ca++){var Fa=na[Ca];D("ecommerce:addItem",{id:X,sku:Fa.sku,name:Fa.name,category:Fa.category,price:Fa.price,
quantity:Fa.quantity})}D("ecommerce:send");}else if("TRACK_TIMING"==p.vtp_trackType){var mc={hitType:"timing",timingCategory:String(W("vtp_timingCategory","category")),timingVar:String(W("vtp_timingVar","name")),timingValue:La(W("vtp_timingValue","value")),timingLabel:I(String,W("vtp_timingLabel","label"))};m(T,mc,!1);D("send",mc);}else if("DECORATE_LINK"==
p.vtp_trackType){}else if("DECORATE_FORM"==p.vtp_trackType){}else if("TRACK_DATA"==p.vtp_trackType){}else{p.vtp_enableEcommerce&&
(D("require","ec","ec.js"),P());if(p.vtp_doubleClick||"DISPLAY_FEATURES"==p.vtp_advertisingFeaturesType){var ag="_dc_gtm_"+String(p.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:ag})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==p.vtp_advertisingFeaturesType){var Hi="_dc_gtm_"+String(p.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:Hi})}T?D("send","pageview",T):D("send","pageview");Ma(z.urlPassthrough)&&Si(C)}if(!c){var Qc=p.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";p.vtp_useInternalVersion&&!p.vtp_useDebugVersion&&(Qc="internal/"+Qc);c=!0;var qd=mk(z._x_19,"/analytics.js"),rd=Ph("https:","http:","//www.google-analytics.com/"+Qc,z&&!!z.forceSSL);N("analytics.js"===Qc&&qd?qd:rd,function(){var oa=
Oi();oa&&oa.loaded||p.vtp_gtmOnFailure();},p.vtp_gtmOnFailure)}}else E(p.vtp_gtmOnFailure)};(function(p){Z.__ua=p;Z.__ua.h="ua";Z.__ua.m=!0;Z.__ua.priorityOverride=0})(function(p){Vd(function(){q(p)},
[J.H,J.D])})}();



Z.g.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.h="cid";Z.__cid.m=!0;Z.__cid.priorityOverride=0})(function(){return df.M})}();



Z.g.aev=["google"],function(){function a(t,v,u){var x=t||Ef(v,"gtm");if(x)return x[u]}function b(t,v,u,x,y){y||(y="element");var w=v+"."+u,z;if(q.hasOwnProperty(w))z=q[w];else{var A=a(t,v,y);if(A&&(z=x(A),q[w]=z,p.push(w),35<p.length)){var C=p.shift();delete q[C]}}return z}function c(t,v,u,x){var y=a(t,v,r[u]);return void 0!==y?y:x}function d(t,v){if(!t)return!1;var u=e(No());za(v)||(v=String(v||"").replace(/\s+/g,"").split(","));for(var x=[u],y=0;y<v.length;y++){var w=v[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(A){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(t))return!1}else{var z=w;if(0!=z.length){if(0<=e(t).indexOf(z))return!1;x.push(e(z))}}}return!yp(t,x)}function e(t){n.test(t)||(t="http://"+t);return pe(re(t),"HOST",!0)}function f(t,v,u,x){switch(t){case "SUBMIT_TEXT":return b(v,u,"FORM."+t,h,"formSubmitElement")||x;case "LENGTH":var y=b(v,u,"FORM."+t,k);return void 0===y?x:y;case "INTERACTED_FIELD_ID":return m(v,u,"id",x);case "INTERACTED_FIELD_NAME":return m(v,
u,"name",x);case "INTERACTED_FIELD_TYPE":return m(v,u,"type",x);case "INTERACTED_FIELD_POSITION":var w=a(v,u,"interactedFormFieldPosition");return void 0===w?x:w;case "INTERACT_SEQUENCE_NUMBER":var z=a(v,u,"interactSequenceNumber");return void 0===z?x:z;default:return x}}function h(t){switch(t.tagName.toLowerCase()){case "input":return Ib(t,"value");case "button":return Jb(t);default:return null}}function k(t){if("form"===t.tagName.toLowerCase()&&t.elements){for(var v=0,u=0;u<t.elements.length;u++)mn(t.elements[u])&&
v++;return v}}function m(t,v,u,x){var y=a(t,v,"interactedFormField");return y&&Ib(y,u)||x}var n=/^https?:\/\//i,q={},p=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(t){Z.__aev=t;Z.__aev.h="aev";Z.__aev.m=!0;Z.__aev.priorityOverride=
0})(function(t){var v=t.vtp_gtmEventId,u=t.vtp_defaultValue,x=t.vtp_varType,y;t.vtp_gtmCachedValues&&(y=t.vtp_gtmCachedValues.gtm);switch(x){case "TAG_NAME":var w=a(y,v,"element");return w&&w.tagName||u;case "TEXT":return b(y,v,x,Jb)||u;case "URL":var z;a:{var A=String(a(y,v,"elementUrl")||u||""),C=re(A),F=String(t.vtp_component||"URL");switch(F){case "URL":z=A;break a;case "IS_OUTBOUND":z=
d(A,t.vtp_affiliatedDomains);break a;default:z=pe(C,F,t.vtp_stripWww,t.vtp_defaultPages,t.vtp_queryKey)}}return z;case "ATTRIBUTE":var D;if(void 0===t.vtp_attribute)D=c(y,v,x,u);else{var I=t.vtp_attribute,Q=a(y,v,"element");D=Q&&Ib(Q,I)||u||""}return D;case "MD":var P=t.vtp_mdValue,S=b(y,v,"MD",Go);return P&&S?Jo(S,P)||u:S||u;case "FORM":return f(String(t.vtp_component||"SUBMIT_TEXT"),y,v,u);default:var O=c(y,v,x,u);Zo(O,"aev",t.vtp_gtmEventId);return O}})}();

Z.g.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.h="gas";Z.__gas.m=!0;Z.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[Tb.ib]=null;c[Tb.gh]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.g.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.h="remm";Z.__remm.m=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,h=0;h<c.length;h++){var k=c[h].key||"";d&&(k="^"+k+"$");var m=new RegExp(k,e);if(m.test(b)){var n=c[h].value;a.vtp_replaceAfterMatch&&(n=String(b).replace(m,n));f=n;break}}Zo(f,"remm",a.vtp_gtmEventId);return f})}();

Z.g.fsl=[],function(){function a(){var e=R("document"),f=c(),h=HTMLFormElement.prototype.submit;Gb(e,"click",function(k){var m=k.target;if(m&&(m=Lb(m,["button","input"],100))&&("submit"==m.type||"image"==m.type)&&m.name&&Ib(m,"value")){var n;m.form?m.form.tagName?n=m.form:n=B.getElementById(m.form):n=Lb(m,["form"],100);n&&f.store(n,m)}},!1);Gb(e,"submit",function(k){var m=k.target;if(!m)return k.returnValue;var n=k.defaultPrevented||!1===k.returnValue,q=b(m)&&!n,p=f.get(m),r=!0;if(d(m,function(){if(r){var t;
p&&(t=e.createElement("input"),t.type="hidden",t.name=p.name,t.value=p.value,m.appendChild(t));h.call(m);t&&m.removeChild(t)}},n,q,p))r=!1;else return n||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,m=b(k),n=!0;d(k,function(){n&&h.call(k)},!1,m)&&(h.call(k),n=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return Ba(e,function(k){return k.form===
h})};return{store:function(h,k){var m=f(h);m?m.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,m){var n=jn("fsl",h?"nv.mwt":"mwt",0),q;q=h?jn("fsl","nv.ids",[]):jn("fsl","ids",[]);if(!q.length)return!0;var p=en(e,"gtm.formSubmit",q),r=e.action;r&&r.tagName&&(r=e.cloneNode(!1).action);p["gtm.elementUrl"]=r;m&&(p["gtm.formSubmitElement"]=m);if(k&&n){if(!Ro(p,qo(f),n))return!1}else Ro(p,function(){},n||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.h=
"fsl";Z.__fsl.m=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var m=e.vtp_uniqueTriggerId||"0";if(f){var n=function(p){return Math.max(k,p)};hn("fsl","mwt",n,0);h||hn("fsl","nv.mwt",n,0)}var q=function(p){p.push(m);return p};hn("fsl","ids",q,[]);h||hn("fsl","nv.ids",q,[]);Wo("fsl")||(a(),Xo("fsl"));E(e.vtp_gtmOnSuccess)})}();Z.g.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.h="smm";Z.__smm.m=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=zp(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Zo(d,"smm",a.vtp_gtmEventId);return d})}();




Z.g.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.h="paused";Z.__paused.m=!0;Z.__paused.priorityOverride=0})(function(a){E(a.vtp_gtmOnFailure)})}();
Z.g.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.h="hid";Z.__hid.m=!0;Z.__hid.priorityOverride=0})(function(){return xo.Mc})}();
Z.g.zone=[],function(){function a(n){for(var q=n.vtp_boundaries||[],p=0;p<q.length;p++)if(!q[p])return!1;return!0}function b(n){var q=df.M,p=q+":"+n.vtp_gtmTagId,r=Qo("gtm.uniqueEventId")||0,t=ni(function(){return new h}),v=a(n),u=n.vtp_enableTypeRestrictions?n.vtp_whitelistedTypes.map(function(z){return z.typeId}):null;u=u&&Wa(u,f);if(t.registerZone(p,r,v,u))for(var x=n.vtp_childContainers.map(function(z){return z.publicId}),y=0;y<x.length;y++){var w=String(x[y]);t.registerChild(w,q,p)&&(0!==w.indexOf("GTM-")?
(function(z,A){Ro(arguments)}("js",Pa()),m&&ef.addTargetToGroup(w),Wm({},w)):Yo(w))}}var c={active:!1,isAllowed:function(){return!1},Zh:function(){return!1}},d={active:!0,isAllowed:function(){return!0},Zh:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.o={};this.s={}};h.prototype.checkState=function(n,q){var p=this.o[n];if(!p)return d;var r=this.checkState(p.Xf,q);if(!r.active)return c;
for(var t=[],v=0;v<p.He.length;v++){var u=this.s[p.He[v]];u.cc(q)&&t.push(u)}return t.length?{active:!0,isAllowed:function(x,y){y=y||[];var w=r.isAllowed;if(!w(x,y))return!1;for(var z=0;z<t.length;++z)if(t[z].isAllowed(x,y))return!0;return!1}}:c};h.prototype.unregisterChild=function(n){delete this.o[n]};h.prototype.registerZone=function(n,q,p,r){var t=this.s[n];if(t)return t.C(q,p),!1;if(!p)return!1;this.s[n]=new k(q,r);return!0};h.prototype.registerChild=function(n,q,p){var r=this.o[n];if(!r&&ef[n]||
r&&r.Xf!==q)return!1;if(r)return r.He.push(p),!1;this.o[n]={Xf:q,He:[p]};return!0};var k=function(n,q){this.o=[{eventId:n,cc:!0}];this.s=null;if(q){this.s={};for(var p=0;p<q.length;p++)this.s[q[p]]=!0}};k.prototype.C=function(n,q){var p=this.o[this.o.length-1];n<=p.eventId||p.cc!=q&&this.o.push({eventId:n,cc:q})};k.prototype.cc=function(n){if(!this.o||0==this.o.length)return!1;for(var q=this.o.length-1;0<=q;q--)if(this.o[q].eventId<=n)return this.o[q].cc;return!1};k.prototype.isAllowed=function(n,
q){q=q||[];if(!this.s||e[n]||this.s[n])return!0;for(var p=0;p<q.length;++p)if(this.s[q[p]])return!0;return!1};var m=!1;(function(n){Z.__zone=n;Z.__zone.h="zone";Z.__zone.m=!0;Z.__zone.priorityOverride=0})(function(n){b(n);E(n.vtp_gtmOnSuccess)})}();
Z.g.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),m=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var n=B.createElement("script");n.async=!1;n.type="text/javascript";n.id=k.id;n.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(n.charset=k.charset);var q=k.getAttribute("data-gtmsrc");q&&(n.src=q,xb(n,m));d.insertBefore(n,null);q||m()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,m,h)()}else d.insertBefore(k,null),m()}else f()}catch(r){E(h)}}}var b=function(d,e,f){vi(function(){var h=google_tag_manager_external.postscribe.getPostscribe(),k={done:e},m=B.createElement("div");m.style.display="none";m.style.visibility="hidden";B.body.appendChild(m);try{h(m,d,k)}catch(n){E(f)}})};var c=function(d){if(B.body){var e=
d.vtp_gtmOnFailure,f=$o(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Th,k=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(B.body,Kb(h),k,e)()}else Lo(function(){c(d)},
200)};Z.__html=c;Z.__html.h="html";Z.__html.m=!0;Z.__html.priorityOverride=0}();

Z.g.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.h="dbg";Z.__dbg.m=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();


Z.g.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.h="img";Z.__img.m=!0;Z.__img.priorityOverride=0})(function(a){var b=Kb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}xp(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.g.lcl=[],function(){function a(){var c=R("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Wh||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=Lb(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,m=jn("lcl",k?"nv.mwt":"mwt",0),n;n=k?jn("lcl","nv.ids",[]):jn("lcl","ids",[]);if(n.length){var q=en(h,"gtm.linkClick",n);if(b(f,h,c)&&!k&&m&&h.href){var p=!!Ba(String(Nb(h,"rel")||"").split(" "),function(v){return"noreferrer"===v.toLowerCase()});
p&&ld(36);var r=R((Nb(h,"target")||"_self").substring(1)),t=!0;if(Ro(q,qo(function(){var v;if(v=t&&r){var u;a:if(p){var x;try{x=new MouseEvent(f.type,{bubbles:!0})}catch(y){if(!c.createEvent){u=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.Wh=!0;f.target.dispatchEvent(x);u=!0}else u=!1;v=!u}v&&(r.location.href=Nb(h,"href"))}),m))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Ro(q,function(){},m||2E3);return!0}}};Gb(c,"click",e,!1);Gb(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Nb(d,"href"),h=f.indexOf("#"),k=Nb(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var m=Po(f),n=Po(e.location);return m!==n}return!0}(function(c){Z.__lcl=c;Z.__lcl.h="lcl";Z.__lcl.m=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(n){return Math.max(f,n)};hn("lcl","mwt",k,0);e||hn("lcl","nv.mwt",k,0)}var m=function(n){n.push(h);return n};hn("lcl","ids",m,[]);e||hn("lcl","nv.ids",m,[]);Wo("lcl")||(a(),Xo("lcl"));E(c.vtp_gtmOnSuccess)})}();
Z.g.evl=["google"],function(){function a(){var f=Number(Qo("gtm.start"))||0;return Mo().getTime()-f}function b(f,h,k,m){function n(){if(!ce(f.target)){h.has(d.Qc)||h.set(d.Qc,""+a());h.has(d.Ld)||h.set(d.Ld,""+a());var p=0;h.has(d.Tc)&&(p=Number(h.get(d.Tc)));p+=100;h.set(d.Tc,""+p);if(p>=k){var r=en(f.target,"gtm.elementVisibility",[h.o]),t=ee(f.target);r["gtm.visibleRatio"]=Math.round(1E3*t)/10;r["gtm.visibleTime"]=k;r["gtm.visibleFirstTime"]=Number(h.get(d.Ld));r["gtm.visibleLastTime"]=Number(h.get(d.Qc));
Ro(r);m()}}}if(!h.has(d.Tb)&&(0==k&&n(),!h.has(d.Bb))){var q=R("self").setInterval(n,100);h.set(d.Tb,q)}}function c(f){f.has(d.Tb)&&(R("self").clearInterval(Number(f.get(d.Tb))),f.s(d.Tb))}var d={Tb:"polling-id-",Ld:"first-on-screen-",Qc:"recent-on-screen-",Tc:"total-visible-time-",Bb:"has-fired-"},e=function(f,h){this.element=f;this.o=h};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.o)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.o)};e.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.o,h)};e.prototype.s=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.o)};(function(f){Z.__evl=f;Z.__evl.h="evl";Z.__evl.m=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var y=!1,w=null;if("CSS"===m){try{w=Xd(n)}catch(D){ld(46)}y=!!w&&u.length!=w.length}else if("ID"===m){var z=B.getElementById(n);z&&(w=[z],y=1!=u.length||u[0]!==z)}w||(w=[],y=0<u.length);if(y){for(var A=0;A<u.length;A++){var C=
new e(u[A],t);c(C)}u=[];for(var F=0;F<w.length;F++)u.push(w[F]);0<=x&&ke(x);0<u.length&&(x=je(k,u,[r]))}}function k(y){var w=new e(y.target,t);y.intersectionRatio>=r?w.has(d.Bb)||b(y,w,p,"ONCE"===v?function(){for(var z=0;z<u.length;z++){var A=new e(u[z],t);A.set(d.Bb,"1");c(A)}ke(x);if(q&&qn)for(var C=0;C<qn.length;C++)qn[C]===h&&qn.splice(C,1)}:function(){w.set(d.Bb,"1");c(w)}):(c(w),"MANY_PER_ELEMENT"===v&&w.has(d.Bb)&&(w.s(d.Bb),w.s(d.Tc)),w.s(d.Qc))}var m=f.vtp_selectorType,n;"ID"===m?n=String(f.vtp_elementId):
"CSS"===m&&(n=String(f.vtp_elementSelector));var q=!!f.vtp_useDomChangeListener,p=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,r=(Number(f.vtp_onScreenRatio)||50)/100,t=f.vtp_uniqueTriggerId,v=f.vtp_firingFrequency,u=[],x=-1;h();q&&rn(h);E(f.vtp_gtmOnSuccess)})}();


var us={};us.macro=function(a){if(xo.Td.hasOwnProperty(a))return xo.Td[a]},us.onHtmlSuccess=xo.Kf(!0),us.onHtmlFailure=xo.Kf(!1);us.dataLayer=zf;us.callback=function(a){qf.hasOwnProperty(a)&&va(qf[a])&&qf[a]();delete qf[a]};us.bootstrap=0;us._spx=!1;function vs(){ef[df.M]=us;Ua(rf,Z.g);Cc=Cc||xo;Dc=Lc}
function ws(){var a=!1;a&&Ei("INIT");xd().s();ef=l.google_tag_manager=l.google_tag_manager||{};fl();
Zg.enable_gbraid_cookie_write=!0;if(ef[df.M]){var b=ef.zones;b&&b.unregisterChild(df.M);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)vc.push(d[e]);for(var f=c.tags||[],h=0;h<f.length;h++)yc.push(f[h]);for(var k=c.predicates||[],m=0;m<k.length;m++)xc.push(k[m]);for(var n=c.rules||[],q=0;q<n.length;q++){for(var p=n[q],r={},t=
0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);wc.push(r)}Ac=Z;Bc=En;vs();wo();qi=!1;ri=0;if("interactive"==B.readyState&&!B.createEventObject||"complete"==B.readyState)ti();else{Gb(B,"DOMContentLoaded",ti);Gb(B,"readystatechange",ti);if(B.createEventObject&&B.documentElement.doScroll){var v=!0;try{v=!l.frameElement}catch(z){}v&&ui()}Gb(l,"load",ti)}tn=!1;"complete"===B.readyState?vn():Gb(l,"load",vn);Gj&&l.setInterval(Aj,864E5);google_tag_manager_external.postscribe.installPostscribe();of=(new Date).getTime();if(a){var w=Fi("INIT");}}}
(function(a){if(!l["__TAGGY_INSTALLED"]){var b=!1;if(B.referrer){var c=re(B.referrer);b="cct.google"===oe(c,"host")}if(!b){var d=Qf("googTaggyReferrer");b=d.length&&d[0].length}b&&(l["__TAGGY_INSTALLED"]=!0,Cb("https://cct.google/taggy/agent.js"))}var f=function(){var n=l["google.tagmanager.debugui2.queue"];n||(n=[],l["google.tagmanager.debugui2.queue"]=n,Cb("https://www.googletagmanager.com/debug/bootstrap"));var q={messageType:"CONTAINER_STARTING",data:{scriptSource:vb,containerProduct:"GTM",debug:!1}};q.data.resume=function(){a()};df.wg&&(q.data.initialPublish=!0);n.push(q)},h="x"===pe(l.location,"query",!1,void 0,"gtm_debug");if(!h&&B.referrer){var k=re(B.referrer);h="tagassistant.google.com"===oe(k,"host")}if(!h){var m=Qf("__TAG_ASSISTANT");h=m.length&&m[0].length}l.__TAG_ASSISTANT_API&&(h=!0);h&&vb?f():a()})(ws);

})()
