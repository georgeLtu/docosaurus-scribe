"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[6698],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8543:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:5},c="sign Command",s={unversionedId:"cli-tool/sign-command",id:"cli-tool/sign-command",title:"sign Command",description:"You can use the \u2018sign\u2019 command to cryptographically sign a statement created by Scribe's CLI tool and turn it into an attestation. The command accepts as a target a specific SBOM or statement file.",source:"@site/docs/cli-tool/sign-command.md",sourceDirName:"cli-tool",slug:"/cli-tool/sign-command",permalink:"/docosaurus-scribe/docs/cli-tool/sign-command",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli-tool/sign-command.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"find Command",permalink:"/docosaurus-scribe/docs/cli-tool/find-command"},next:{title:"verify Command",permalink:"/docosaurus-scribe/docs/cli-tool/verify-command"}},u={},d=[],m={toc:d};function p(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sign-command"},"sign Command"),(0,i.kt)("p",null,"You can use the \u2018sign\u2019 command to cryptographically sign a statement created by Scribe's CLI tool and turn it into an attestation. The command accepts as a target a specific SBOM or statement file."),(0,i.kt)("p",null,"If you do not provide a specific file, the command will search for that image\u2019s SBOM or statement in the bomber cahce (default \u2018tmp/scribe). "),(0,i.kt)("p",null,"Note that in order to sign a statement or an SBOM, by default bomber expects you to be online and it would use the library sigstore to get your credentials \u2013 either GitHub, Google or, Microsoft credentials.  You would be requested to log in to sigstore in order to successfully sign the attestation.\n",(0,i.kt)("img",{loading:"lazy",alt:"Sigstore link",src:n(1275).Z,width:"1804",height:"195"})),(0,i.kt)("img",{src:"../../img/cli/sigstore_login.png",alt:"Sigstore login",width:"600"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Once you have logged in using your preferred method, you\u2019d receive a code representing your credentials that you need to copy to the CLI. "),(0,i.kt)("img",{src:"../../img/cli/sigstore_login_code.png",alt:"Sigstore login code",width:"350"}),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Signing success",src:n(8683).Z,width:"1334",height:"132"}),"  "),(0,i.kt)("p",null,"The verification code created is a one-time use code so there is no need to save it."),(0,i.kt)("p",null,"Here are some examples to using this command:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Scribe sign file:./sbom.json")," - sign the specified SBOM or statement file. The file needs to have been created by bomber. If the file doesn\u2019t exist nothing will happen."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Scribe sign docker:yourrepo/yourimage:tag")," - explicitly use the Docker daemon\n",(0,i.kt)("inlineCode",{parentName:"p"},"Scribe sign docker-archive:path/to/yourimage.tar"),' - use a tarball from disk for archives created from "docker save"\n',(0,i.kt)("inlineCode",{parentName:"p"},"Scribe sign oci-archive:path/to/yourimage.tar")," - use a tarball from disk for OCI archives (from Skopeo or otherwise)\n",(0,i.kt)("inlineCode",{parentName:"p"},"Scribe sign dir:path/to/yourproject")," - read directly from a path on disk (any directory)\n",(0,i.kt)("inlineCode",{parentName:"p"},"Scribe sign registry:yourrepo/yourimage:tag")," - pull image directly from a registry (no container runtime required)"),(0,i.kt)("p",null,"Here are the flags relevant to the \u2018sign\u2019 command."),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Short"),(0,i.kt)("th",{width:"18%"},"Full Flag"),(0,i.kt)("th",null,"Format"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"-C"),(0,i.kt)("td",null,"--context-type"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,'The context of the bomber\u2019s run \u2013 what is the source of the CLI tool. The current options are Jenkins, GitHub, and Local. The default is "Local" and it\u2019s added to the attestation created.')),(0,i.kt)("tr",null,(0,i.kt)("td",null,"-o"),(0,i.kt)("td",null,"--format"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,'The format searched for. The options are cyclonedx-json, cyclonedx-xml, attest-cyclonedx-json, and statement-cyclonedx-json. The default is "cyclonedx-json".')),(0,i.kt)("tr",null,(0,i.kt)("td",null,"-f"),(0,i.kt)("td",null,"--force"),(0,i.kt)("td",null),(0,i.kt)("td",null,"Force an overwrite so that even if the destination (by default the cache) already includes an SBOM for the requested image or directory, bomber will still run and create a new SBOM.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"-i"),(0,i.kt)("td",null,"--input-format"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,'Sbom input format, options are cyclonedx-json and cyclonedx-xml. Thee default is "cyclonedx-json".')),(0,i.kt)("tr",null,(0,i.kt)("td",null,"-n"),(0,i.kt)("td",null,"--name"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"Custom project name to be added to the attestation.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"-h"),(0,i.kt)("td",null,"--help"),(0,i.kt)("td",null),(0,i.kt)("td",null,"Presents all the help information for the \u2018find\u2019 command."))))}p.isMDXComponent=!0},8683:function(e,t,n){t.Z=n.p+"assets/images/sign_success-778470b8cb4c9ef3456ab439a87a3b2b.png"},1275:function(e,t,n){t.Z=n.p+"assets/images/sigstore_link-c4fb8e3ca0f35228f41af0610fa04f72.png"}}]);