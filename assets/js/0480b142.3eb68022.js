"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[836],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3584:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return f}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},l="FAQ",c={unversionedId:"faq",id:"faq",title:"FAQ",description:"What's integrity",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docosaurus-scribe/docs/faq",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Checking the SBOM for CVEs",permalink:"/docosaurus-scribe/docs/check_cves"},next:{title:"Tutorial Intro",permalink:"/docosaurus-scribe/docs/intro"}},u={},d=[{value:"What&#39;s integrity",id:"whats-integrity",level:2},{value:"What&#39;s an SBOM",id:"whats-an-sbom",level:2},{value:"What&#39;s continuous assurance",id:"whats-continuous-assurance",level:2},{value:"Where can I find the SBOM files if I didn&#39;t spesify a location",id:"where-can-i-find-the-sbom-files-if-i-didnt-spesify-a-location",level:2},{value:"How do I change the output SBOM file location",id:"how-do-i-change-the-output-sbom-file-location",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"whats-integrity"},"What's integrity"),(0,r.kt)("p",null,"Put in simple terms, software integrity is a measure of code and/or files changing along the development life cycle where they're not supposed to.\nHaving evidance demonstrating that your source code, tools, and images were not changed where they were not supposed to would boost confidance in your code/product as well as in your development proccess.  "),(0,r.kt)("h2",{id:"whats-an-sbom"},"What's an SBOM"),(0,r.kt)("p",null,"An SBOM, Softwarre Bill Of Materials, is a list of a software artifact\u2019s components down to the file level. SBOMs are a tool for the receiver or operator of this software to manage risks such as exposure to new and existing vulnerabilities in the open-source dependencies in that software. The SBOM includes information such as the dependencies, versions, package URLs, and file locations."),(0,r.kt)("h2",{id:"whats-continuous-assurance"},"What's continuous assurance"),(0,r.kt)("p",null,"CA (Continuous Assurance) is a concept and a set of solutions in the making, complementary to DevOps discipline\u2019s already familiar concepts of Continuous Integration, Development, and Testing. CA granularly collects evidence about all events in the development life cycle including the product build, and deployment that might affect the eventual software product\u2019s security. It is a means for consumers of software (such as users, buyers, and other risk stakeholders) to control the risk from the products they use. "),(0,r.kt)("p",null,"CA\u2019s immediate outcome is a means to assure that software products were not tampered with and that critical security-related tests were performed during the development, but there is more to be gained from it."),(0,r.kt)("p",null,"To thwart tampering by attackers or vendor cover-ups of under-the-hood components from dubious origin such as from banned countries, CA turns the collected evidence into a tamper-resistant attestation by signing the information cryptographically and storing it in an immutable store in an isolated secure environment. "),(0,r.kt)("p",null,"By making the collected evidence machine-readable, a policy engine can continuously validate the norms or rules set by the risk stakeholder for every product version or update. This way, stakeholders can be assured of a product\u2019s compliance with its security standards. "),(0,r.kt)("h2",{id:"where-can-i-find-the-sbom-files-if-i-didnt-spesify-a-location"},"Where can I find the SBOM files if I didn't spesify a location"),(0,r.kt)("p",null,"The gensbom CLI tool has a default cache location where all created files (SBOMs, statments and attestations) are saved by default. Even if you define a different output path, the file is still saved in the default cache as well. The default gensbom cache is ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/scribe"),".\nYou can change the default location using the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--output-directory")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-d"),". Changing the default directory of the cache means that for that command only, the created file will be saved in that location. As an example, here's how you change the default output directory while creating an SBOM:\n",(0,r.kt)("inlineCode",{parentName:"p"},"gensbom bom alpine:latest --output-directory /tmp/my_directory")),(0,r.kt)("p",null,"Unless you specified a different path you can access all your files in the default cache, in path ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/scribe"),".\nThe files will be grouped by where they came from and then the image or directory name and tag.\nFor example, all files concerning alpine:latest will be found by default in ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/scribe/registry/alpine/latest"),".\nThe image came from the registry and it was an image for alpine/latest."),(0,r.kt)("p",null,"You can change the default cache location permenantly through the configuration file. The configuration file, bomber.yaml, can include multiple fields and set multiple parameters. Configuration fields can be overridden by the CLI for a spesific command."),(0,r.kt)("p",null,"The configuration file should be placed in one of the following locations:",(0,r.kt)("br",{parentName:"p"}),"\n",".bomber.yaml",(0,r.kt)("br",{parentName:"p"}),"\n",".bomber/bomber.yaml",(0,r.kt)("br",{parentName:"p"}),"\n","~/.bomber.yaml",(0,r.kt)("br",{parentName:"p"}),"\n","/bomber/bomber.yaml  "),(0,r.kt)("p",null,"To change the default cahce location set the parameter output-directory to it's new location:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"output-directory: /tmp/my_directory")),(0,r.kt)("h2",{id:"how-do-i-change-the-output-sbom-file-location"},"How do I change the output SBOM file location"),(0,r.kt)("p",null,"To change the output SBOM file location use the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--output-file")," to set the output path. Example:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"gensbom bom alpine:latest --output-file /tmp/file/path/my-first-sbom.json"),"  "),(0,r.kt)("p",null,"To avoid confusion make sure the file suffix ending matches the type of file format that you\u2019re generating - .json for cyclonedx-json or statement-cyclonedx-json, and .xml for cyclonedx-xml."))}f.isMDXComponent=!0}}]);