(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{107:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return GqlForm_GqlForm})),__webpack_require__.d(__webpack_exports__,"c",(function(){return GqlIdView_GqlIdView})),__webpack_require__.d(__webpack_exports__,"a",(function(){return GqlFilterView_GqlFilterView}));__webpack_require__(18),__webpack_require__(57),__webpack_require__(8);var _templateObject,lib=__webpack_require__(903),useApolloClient=__webpack_require__(898),react=__webpack_require__(0),globals=__webpack_require__(98),jsx_runtime=__webpack_require__(34);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var query=Object(lib.a)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n  query {\n    getUser(username: "tester") {\n      numFollowers\n      numFollowing\n    }\n  }\n']))),GqlFilterView_GqlFilterView=function GqlFilterView(_ref){var children=_ref.children,client=Object(useApolloClient.a)();return Object(react.useEffect)((function(){!function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var result;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,client.query({query:query});case 2:result=_context.sent,console.log(result);case 4:case"end":return _context.stop()}}),_callee)})))()}),[]),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("code",{children:globals.d}),children]})};GqlFilterView_GqlFilterView.displayName="GqlFilterView";try{GqlFilterView_GqlFilterView.displayName="GqlFilterView",GqlFilterView_GqlFilterView.__docgenInfo={description:"Open views into the database objects matching the filter.",displayName:"GqlFilterView",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GqlFilterView.tsx#GqlFilterView"]={docgenInfo:GqlFilterView_GqlFilterView.__docgenInfo,name:"GqlFilterView",path:"src/components/GqlFilterView.tsx#GqlFilterView"})}catch(__react_docgen_typescript_loader_error){}var GqlForm_GqlForm=function GqlForm(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)("div",{children:children})};GqlForm_GqlForm.displayName="GqlForm";try{GqlForm_GqlForm.displayName="GqlForm",GqlForm_GqlForm.__docgenInfo={description:"A live GQL-powered form which loads existing values from the backend and\nupdates the field as necessary. Submitting will update a reference or create\na new one depending on the `method` value.",displayName:"GqlForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GqlForm.tsx#GqlForm"]={docgenInfo:GqlForm_GqlForm.__docgenInfo,name:"GqlForm",path:"src/components/GqlForm.tsx#GqlForm"})}catch(__react_docgen_typescript_loader_error){}var GqlIdView_GqlIdView=function GqlIdView(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)("div",{children:children})};GqlIdView_GqlIdView.displayName="GqlIdView";try{GqlIdView_GqlIdView.displayName="GqlIdView",GqlIdView_GqlIdView.__docgenInfo={description:"Read a piece of data from the backend and display it in a component.",displayName:"GqlIdView",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GqlIdView.tsx#GqlIdView"]={docgenInfo:GqlIdView_GqlIdView.__docgenInfo,name:"GqlIdView",path:"src/components/GqlIdView.tsx#GqlIdView"})}catch(__react_docgen_typescript_loader_error){}try{GqlForm.displayName="GqlForm",GqlForm.__docgenInfo={description:"A live GQL-powered form which loads existing values from the backend and\nupdates the field as necessary. Submitting will update a reference or create\na new one depending on the `method` value.",displayName:"GqlForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#GqlForm"]={docgenInfo:GqlForm.__docgenInfo,name:"GqlForm",path:"src/index.tsx#GqlForm"})}catch(__react_docgen_typescript_loader_error){}try{GqlIdView.displayName="GqlIdView",GqlIdView.__docgenInfo={description:"Read a piece of data from the backend and display it in a component.",displayName:"GqlIdView",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#GqlIdView"]={docgenInfo:GqlIdView.__docgenInfo,name:"GqlIdView",path:"src/index.tsx#GqlIdView"})}catch(__react_docgen_typescript_loader_error){}try{GqlFilterView.displayName="GqlFilterView",GqlFilterView.__docgenInfo={description:"Open views into the database objects matching the filter.",displayName:"GqlFilterView",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#GqlFilterView"]={docgenInfo:GqlFilterView.__docgenInfo,name:"GqlFilterView",path:"src/index.tsx#GqlFilterView"})}catch(__react_docgen_typescript_loader_error){}},148:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return generateTemplates}));__webpack_require__(871),__webpack_require__(14),__webpack_require__(0);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34),generateTemplate=function generateTemplate(Component){return function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component,Object.assign({},args))}},generateTemplates=function generateTemplates(Component,n){return function bindMany(fn,n){for(var bound=new Array(n),i=0;i<n;)bound[i++]=fn.bind({});return bound}(generateTemplate(Component),n)};try{generateTemplate.displayName="generateTemplate",generateTemplate.__docgenInfo={description:"",displayName:"generateTemplate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/utils/templates.tsx#generateTemplate"]={docgenInfo:generateTemplate.__docgenInfo,name:"generateTemplate",path:"src/stories/utils/templates.tsx#generateTemplate"})}catch(__react_docgen_typescript_loader_error){}},506:function(module,exports,__webpack_require__){__webpack_require__(507),__webpack_require__(663),__webpack_require__(664),__webpack_require__(879),__webpack_require__(875),__webpack_require__(882),__webpack_require__(883),__webpack_require__(881),__webpack_require__(877),__webpack_require__(884),__webpack_require__(876),__webpack_require__(878),__webpack_require__(885),module.exports=__webpack_require__(863)},574:function(module,exports){},664:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(218)},863:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(218).configure)([__webpack_require__(864)],module,!1)}).call(this,__webpack_require__(212)(module))},864:function(module,exports,__webpack_require__){var map={"./GqlFilterView.stories.tsx":880,"./GqlForm.stories.tsx":872,"./GqlIdView.stories.tsx":873,"./Setup.stories.mdx":874};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=864},872:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CreateUserForm",(function(){return CreateUserForm})),__webpack_require__.d(__webpack_exports__,"UpdateSettingsForm",(function(){return UpdateSettingsForm})),__webpack_require__.d(__webpack_exports__,"UpdatePostForm",(function(){return UpdatePostForm}));__webpack_require__(23),__webpack_require__(143),__webpack_require__(6),__webpack_require__(309),__webpack_require__(10),__webpack_require__(8),__webpack_require__(21),__webpack_require__(16),__webpack_require__(15),__webpack_require__(17),__webpack_require__(18),__webpack_require__(7),__webpack_require__(27),__webpack_require__(0);var ___WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(107),_utils_templates__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(148),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(34),_excluded=["children"];function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FormExample=function FormExample(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(___WEBPACK_IMPORTED_MODULE_14__.b,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h2",{children:"Example goes here"}),JSON.stringify({children:children,props:props},null,2)]})};FormExample.displayName="FormExample";var _generateTemplates2=function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(Object(_utils_templates__WEBPACK_IMPORTED_MODULE_15__.a)(FormExample,3),3),CreateUserForm=_generateTemplates2[0],UpdateSettingsForm=_generateTemplates2[1],UpdatePostForm=_generateTemplates2[2];__webpack_exports__.default={title:"Use/Edit data with a form",component:___WEBPACK_IMPORTED_MODULE_14__.b}},873:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"UserByUsername",(function(){return UserByUsername})),__webpack_require__.d(__webpack_exports__,"PostByID",(function(){return PostByID}));__webpack_require__(23),__webpack_require__(143),__webpack_require__(6),__webpack_require__(309),__webpack_require__(10),__webpack_require__(8),__webpack_require__(21),__webpack_require__(16),__webpack_require__(15),__webpack_require__(17),__webpack_require__(18),__webpack_require__(7),__webpack_require__(27),__webpack_require__(0);var ___WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(107),_utils_templates__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(148),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(34),_excluded=["children"];function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var IdViewExample=function IdViewExample(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(___WEBPACK_IMPORTED_MODULE_14__.c,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h2",{children:"Example goes here"}),JSON.stringify({children:children,props:props},null,2)]})};IdViewExample.displayName="IdViewExample";var _generateTemplates2=function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(Object(_utils_templates__WEBPACK_IMPORTED_MODULE_15__.a)(IdViewExample,2),2),UserByUsername=_generateTemplates2[0],PostByID=_generateTemplates2[1];__webpack_exports__.default={title:"Use/View single result by ID",component:___WEBPACK_IMPORTED_MODULE_14__.c}},874:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(39),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(130);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,{title:"Setup/Initial Configuration",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"initial-configuration"},"Initial Configuration"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h2",{id:"environment-variables"},"Environment variables"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"You'll most likely want to store your Auth0 and Dgraph data as environment\nvariables, i.e. in a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("code",{parentName:"pre",className:"language-shell"},'# Auth0\nAUTH0_DOMAIN="---"\nAUTH0_CLIENT="---"\n\n# Dgraph Cloud\nDGRAPH_DOMAIN="---"\nDGRAPH_CLIENT="---"\n')),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h2",{id:"add-to-srcapp"},"Add to ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"h2"},"src/App")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"Now, wrap your app with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},"GqlUiProvider"),":"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("code",{parentName:"pre",className:"language-tsx"},"/**\n * Load from process.env. These variable names may vary depending on your setup\n * (i.e., you may need to use NEXT_PUBLIC_ prefixes for domains on NextJS).\n */\nconst {\n  AUTH0_DOMAIN,\n  AUTH0_CLIENT,\n  DGRAPH_DOMAIN,\n  DGRAPH_CLIENT\n} = process.env;\n\nconst config = {\n  auth0: {\n    domain: AUTH0_DOMAIN ?? '',\n    clientKey: AUTH0_CLIENT ?? ''\n  },\n  dgraph: {\n    domain: DGRAPH_DOMAIN ?? '',\n    clientKey: DGRAPH_CLIENT ?? ''\n  }\n}\n\nconst App = () => {\n  return (\n    <GqlUiProvider {...config}>\n      {/* App contents */}\n    </GqlUiProvider>\n  );\n}\n\nexport default App;\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"This library's components will now be able to authenticate its requests to the\nbackend. This will also provide a configured Apollo Client to all children,\nwhich can be accessed with ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},"useApolloClient()"),"."))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Setup/Initial Configuration",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},880:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"UsersByState",(function(){return UsersByState})),__webpack_require__.d(__webpack_exports__,"UsersByAvailability",(function(){return UsersByAvailability}));__webpack_require__(23),__webpack_require__(143),__webpack_require__(6),__webpack_require__(309),__webpack_require__(10),__webpack_require__(8),__webpack_require__(21),__webpack_require__(16),__webpack_require__(15),__webpack_require__(17),__webpack_require__(18),__webpack_require__(7),__webpack_require__(27),__webpack_require__(14),__webpack_require__(0);var src=__webpack_require__(107),ApolloProvider=__webpack_require__(901),globals=(__webpack_require__(25),__webpack_require__(57),__webpack_require__(98)),auth0_react_esm=__webpack_require__(185),context=__webpack_require__(485),HttpLink=__webpack_require__(904),ApolloClient=__webpack_require__(902),inMemoryCache=__webpack_require__(905);var token="",ENDPOINT=(globals.b,"https://"+globals.d+".aws.cloud.dgraph.io"),client_initializeGqlClient=function initializeGqlClient(){var initialState=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,authHeaders={};token&&(authHeaders["X-Auth-Token"]=token,console.log("Token added to Apollo."),console.log({authHeaders:authHeaders})),globals.b&&(authHeaders["Dg-Auth"]=globals.c);var httpLink=new HttpLink.a({uri:ENDPOINT+"/graphql"}),authLink=Object(context.a)((function(_,_ref){var headers=_ref.headers;return{headers:Object.assign({},headers,authHeaders)}})),apolloClient=new ApolloClient.a({link:authLink.concat(httpLink),ssrMode:"undefined"==typeof window,connectToDevTools:!globals.b,cache:new inMemoryCache.a});if(initialState){var existingCache=apolloClient.extract();apolloClient.cache.restore(Object.assign({},existingCache,initialState))}return apolloClient},jsx_runtime=__webpack_require__(34),GqlProvider_AuthenticatedApolloProvider=function AuthenticatedApolloProvider(_ref){var children=_ref.children,client=client_initializeGqlClient(),_useAuth=Object(auth0_react_esm.b)(),isLoading=_useAuth.isLoading,isAuthenticated=_useAuth.isAuthenticated;return console.log("AuthenticatedApolloProvider",{isLoading:isLoading,isAuthenticated:isAuthenticated}),Object(jsx_runtime.jsx)(ApolloProvider.a,{client:client,children:children})};GqlProvider_AuthenticatedApolloProvider.displayName="AuthenticatedApolloProvider";var GqlProvider_GqlProvider=function GqlProvider(_ref2){var children=_ref2.children,auth0=_ref2.auth0;return console.log("render gqlProvider"),Object(jsx_runtime.jsx)(auth0_react_esm.a,{domain:auth0.domain,clientId:auth0.clientKey,redirectUri:globals.a,children:Object(jsx_runtime.jsx)(GqlProvider_AuthenticatedApolloProvider,{children:children})})};GqlProvider_GqlProvider.displayName="GqlProvider";try{GqlProvider_GqlProvider.displayName="GqlProvider",GqlProvider_GqlProvider.__docgenInfo={description:"",displayName:"GqlProvider",props:{auth0:{defaultValue:null,description:"",name:"auth0",required:!0,type:{name:"ClientConfiguration"}},dgraph:{defaultValue:null,description:"",name:"dgraph",required:!0,type:{name:"ClientConfiguration"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GqlProvider.tsx#GqlProvider"]={docgenInfo:GqlProvider_GqlProvider.__docgenInfo,name:"GqlProvider",path:"src/components/GqlProvider.tsx#GqlProvider"})}catch(__react_docgen_typescript_loader_error){}var _process$env=Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}),AUTH0_DOMAIN=_process$env.AUTH0_DOMAIN,AUTH0_CLIENT=_process$env.AUTH0_CLIENT,DGRAPH_DOMAIN=_process$env.DGRAPH_DOMAIN,DGRAPH_CLIENT=_process$env.DGRAPH_CLIENT,GQL_CONFIG={auth0:{domain:null!=AUTH0_DOMAIN?AUTH0_DOMAIN:"",clientKey:null!=AUTH0_CLIENT?AUTH0_CLIENT:""},dgraph:{domain:null!=DGRAPH_DOMAIN?DGRAPH_DOMAIN:"",clientKey:null!=DGRAPH_CLIENT?DGRAPH_CLIENT:""}},templates=__webpack_require__(148),_excluded=["children"];function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var GqlFilterView_stories_FilterViewExample=function FilterViewExample(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)(GqlProvider_GqlProvider,Object.assign({},GQL_CONFIG,{children:Object(jsx_runtime.jsxs)(src.a,{children:[Object(jsx_runtime.jsx)("h2",{children:"Example goes here"}),JSON.stringify({children:children,props:props},null,2)]})}))};GqlFilterView_stories_FilterViewExample.displayName="FilterViewExample";var _generateTemplates2=function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(Object(templates.a)(GqlFilterView_stories_FilterViewExample,2),2),UsersByState=_generateTemplates2[0],UsersByAvailability=_generateTemplates2[1];__webpack_exports__.default={title:"Use/View results by filter",component:src.a}},885:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(23),__webpack_require__(6),__webpack_require__(55),__webpack_require__(448),__webpack_require__(174),__webpack_require__(49),__webpack_require__(861),__webpack_require__(862),__webpack_require__(447);var client_api=__webpack_require__(906),types=__webpack_require__(897),esm=__webpack_require__(5),client=__webpack_require__(218),blocks=__webpack_require__(130);Object(client.addParameters)({viewMode:"docs",docs:{container:blocks.b,page:blocks.c}});var parameters={actions:{argTypesRegex:"^on.*"},options:{storySort:{method:"alphabetical"}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},98:function(module,__webpack_exports__,__webpack_require__){"use strict";var _process$env$AUTH0_DO,_process$env$AUTH0_CL,_process$env$DGRAPH_D,_process$env$DGRAPH_C;__webpack_require__.d(__webpack_exports__,"b",(function(){return PRODUCTION})),__webpack_require__.d(__webpack_exports__,"a",(function(){return HOMEPAGE})),__webpack_require__.d(__webpack_exports__,"d",(function(){return SLASH_IDENTIFIER})),__webpack_require__.d(__webpack_exports__,"c",(function(){return SLASH_CLIENT_KEY}));var PRODUCTION=!0,HOMEPAGE=PRODUCTION?"":"localhost:3000",SLASH_IDENTIFIER=(_process$env$AUTH0_DO=Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).AUTH0_DOMAIN,_process$env$AUTH0_CL=Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).AUTH0_CLIENT,null!==(_process$env$DGRAPH_D=Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).DGRAPH_DOMAIN)&&void 0!==_process$env$DGRAPH_D?_process$env$DGRAPH_D:""),SLASH_CLIENT_KEY=null!==(_process$env$DGRAPH_C=Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).DGRAPH_CLIENT)&&void 0!==_process$env$DGRAPH_C?_process$env$DGRAPH_C:""}},[[506,2,3]]]);