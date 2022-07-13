"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[536],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9954:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=["components"],a={sidebar_position:3},s="Other CI Systems",l={unversionedId:"ci-cd-integration/general",id:"ci-cd-integration/general",title:"Other CI Systems",description:"In order to integrate our tools into any other CI/CD pipeline you'll need to download the two tools, gensbom and valint. Once you have the tools you can implement their CLI commands in any any pipeline you want.",source:"@site/docs/ci-cd-integration/general.md",sourceDirName:"ci-cd-integration",slug:"/ci-cd-integration/general",permalink:"/docosaurus-scribe/docs/ci-cd-integration/general",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Jenkins",permalink:"/docosaurus-scribe/docs/ci-cd-integration/jenkins"},next:{title:"Detecting CVEs",permalink:"/docosaurus-scribe/docs/cves"}},u={},p=[{value:"Download the tools",id:"download-the-tools",level:2},{value:"Get the <em>SBOMs</em>",id:"get-the-sboms",level:2},{value:"Get the integrity report",id:"get-the-integrity-report",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"other-ci-systems"},"Other CI Systems"),(0,o.kt)("p",null,"In order to integrate our tools into any other CI/CD pipeline you'll need to download the two tools, gensbom and valint. Once you have the tools you can implement their CLI commands in any any pipeline you want."),(0,o.kt)("h2",{id:"download-the-tools"},"Download the tools"),(0,o.kt)("p",null,"Get the gensbom tool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl https://www.scribesecurity.com/getscribe | sh\n")),(0,o.kt)("p",null,"Get the valint tool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl https://www.scribesecurity.com/getscribe | sh\n")),(0,o.kt)("h2",{id:"get-the-sboms"},"Get the ",(0,o.kt)("em",{parentName:"h2"},"SBOMs")),(0,o.kt)("p",null,"Generate an ",(0,o.kt)("em",{parentName:"p"},"SBOM")," for your source code. The credentials can be copied from your ",(0,o.kt)("a",{href:"https://mui.production.scribesecurity.com/install-scribe"},"CLI page"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gensbom bom dir:<path> --scribe.clientid=****** -P --scribe.clientsecret=****** --name=scribe \\\n --scribe.loginurl=https://scribesecurity-staging.us.auth0.com \\ \n --scribe.auth.audience=api.staging.scribesecurity.com \\\n --scribe.url https://api.staging.scribesecurity.com \\ \n -E -f -v\n")),(0,o.kt)("p",null,"Generate an ",(0,o.kt)("em",{parentName:"p"},"SBOM")," for your final image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gensbom bom <your_docker_repository:tag> --scribe.clientid=****** -P --scribe.clientsecret=****** --name=scribe \\\n --scribe.loginurl=https://scribesecurity-staging.us.auth0.com \\ \n --scribe.auth.audience=api.staging.scribesecurity.com \\\n --scribe.url https://api.staging.scribesecurity.com \\ \n -E -f -v\n")),(0,o.kt)("h2",{id:"get-the-integrity-report"},"Get the integrity report"),(0,o.kt)("p",null,"In this example the report will be downloaded into 'scribe/valint'. The credentials can be copied from your ",(0,o.kt)("a",{href:"https://mui.production.scribesecurity.com/install-scribe"},"CLI page"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"valint report -U \\\n --scribe.clientid=****** -P --scribe.clientsecret=****** --output-directory scribe/valint \\\n --scribe.loginurl=https://scribesecurity-staging.us.auth0.com \\ \n --scribe.auth.audience=api.staging.scribesecurity.com \\\n --scribe.url https://api.staging.scribesecurity.com \\ \n -vv\n")))}m.isMDXComponent=!0}}]);