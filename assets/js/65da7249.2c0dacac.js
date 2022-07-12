"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[875],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),b=i,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6073:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return b}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},s="GitHub Actions",l={unversionedId:"ci-cd-integration/github-actions",id:"ci-cd-integration/github-actions",title:"GitHub Actions",description:"Integrate as a step in GitHub Actions. Scribe includes 2 elements in this action:",source:"@site/docs/ci-cd-integration/github-actions.md",sourceDirName:"ci-cd-integration",slug:"/ci-cd-integration/github-actions",permalink:"/docosaurus-scribe/docs/ci-cd-integration/github-actions",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to generate an SBOM",permalink:"/docosaurus-scribe/docs/gensbomcli"},next:{title:"Jenkins",permalink:"/docosaurus-scribe/docs/ci-cd-integration/jenkins"}},u={},p=[],m={toc:p};function b(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("p",null,"Integrate as a step in GitHub Actions. Scribe includes 2 elements in this action:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"gensbom")," - the tool creating the ",(0,a.kt)("em",{parentName:"p"},"SBOM")," and\n",(0,a.kt)("em",{parentName:"p"},"valint")," - the tool getting the report."),(0,a.kt)("p",null,"Both tools have other capabilites and CLI option but the simplest integration is to call",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"gensbom")," to create an ",(0,a.kt)("em",{parentName:"p"},"SBOM")," of the repository and the final image and then, call ",(0,a.kt)("em",{parentName:"p"},"valint"),(0,a.kt)("br",{parentName:"p"}),"\n","to get Scribe's integrity report of the result."),(0,a.kt)("p",null,"Use default configuration path ",(0,a.kt)("inlineCode",{parentName:"p"},".gensbom.yaml")," to make sure you have set all the input parameters you need.",(0,a.kt)("br",{parentName:"p"}),"\n","At minimum, you need to set the scribe ",(0,a.kt)("inlineCode",{parentName:"p"},"clientid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clientsecret"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  scribe-clientid:\n    description: 'Scribe client id' \n  scribe-clientsecret:\n    description: 'Scribe access token' \n")),(0,a.kt)("p",null,"Here's usage example for generating an SBOM in GitHub workflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"- name: Generate cyclonedx json SBOM\n  uses: scribe-security/actions/gensbom/bom@master\n  with:\n    target: '<target_name:tag>'\n    verbose: 2\n")),(0,a.kt)("p",null,"Here's usage example for calling Scribe's report in GitHub workflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"- name: Valint - download report\n  id: valint_report\n  uses: scribe-security/actions/valint/report@master\n  with:\n      verbose: 2\n      scribe-enable: true\n      scribe-clientid: ${{ inputs.clientid }}\n      scribe-clientsecret: ${{ inputs.clientsecret }}\n")))}b.isMDXComponent=!0}}]);