(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4GNh":function(e,t,n){"use strict";n("2B1R"),n("+2oP"),n("DQNa"),n("07d7"),n("JfAA");var a,o=n("VkAN"),i=n.n(o),r=n("gcR/"),c=n.n(r),l=(n("q1tI"),n("17x9"),n("Dugd")),d=n.n(l),s=n("XMNT"),m=n.n(s),u=n("rNEd"),p=(n("zHFu"),n("Jqp9")),f=n("wXC7"),h=n.n(f),g=n("nxVm"),b=n.n(g),y=Object(p.css)("font-family:",h.a.font.serifBase,";font-style:italic;font-size:",h.a.font.size(17),";line-height:",h.a.font.size(24),";width:",h.a.breakpoint.mobileFullWidth,";max-width:",h.a.breakpoint.textBodyWidth,"px;margin:1rem auto ",h.a.font.size(12),";",h.a.breakpoint.medium,"{font-size:",h.a.font.size(19),";line-height:",h.a.font.size(28),";margin-bottom:",h.a.font.size(20),";}",h.a.breakpoint.extraLarge,"{width:",h.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",h.a.breakpoint.textBodyWidthExtralarge,"px;}",b.a,";"),v=Object(p.css)("margin-bottom:1rem;"),w=Object(p.css)("font-weight:",h.a.font.weight.bold,";"),x=Object(p.css)(y," font-weight:",h.a.font.weight.bold,";"),k=Object(p.css)("margin-top:1px;"),I=function(e){var t=e.data;return t&&t.addendums?c()("div",{className:y},void 0,t.addendums.map((function(e){return c()("div",{className:v},e.legacyHtmlBody,c()("strong",{className:w},void 0,"EDITORS_NOTE"===(t=e.type)?"Editors’ Note":t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),":")," ",c()(m.a,{className:x},void 0,e.publicationDate),e.body.content?e.body.content.map((function(e,t){return c()(u.a,{data:e},t.toString())})):c()("div",{className:k,dangerouslySetInnerHTML:{__html:e.legacyHtmlBody?e.legacyHtmlBody:e.body.text}}));var t}))):null};I.displayName="Addendum",I.defaultProps={data:void 0},I.fragments={data:d()(a||(a=i()(["\n    fragment Addendum_data on CreativeWork {\n      addendums {\n        type\n        publicationDate\n        legacyHtmlBody\n        body {\n          text\n          content {\n            ...ParagraphBlock_data\n          }\n        }\n      }\n    }\n    ","\n  "])),u.a.fragments.data)};t.a=I},"7r5p":function(e,t,n){"use strict";var a=n("gcR/"),o=n.n(a),i=(n("q1tI"),n("Jqp9")),r=n("hU1o"),c=n("/giM"),l=n("znry"),d=Object(i.css)("margin-top:100px;margin-bottom:400px;position:relative;"),s=Object(i.css)("> div{border:2px solid rgba(100,100,100,1);border-color:rgba(100,100,100,1) transparent transparent;}"),m=o()("div",{}),u=o()("div",{}),p=function(){var e=Object(r.a)().fastlyAbraConfig;return Object(l.b)(e)?o()("div",{className:Object(i.cx)(c.d,d)},void 0,o()("div",{className:Object(i.cx)(c.e,s)},void 0,m,u)):null};p.displayName="OceanSpinner",t.a=p},IzdK:function(e,t,n){"use strict";n.r(t),n.d(t,"showReviewMetaFooter",(function(){return oe})),n.d(t,"suppressInfobox",(function(){return ie})),n.d(t,"getBottomOfArticleTopRelativeToDocument",(function(){return ce})),n.d(t,"footerBlockQuery",(function(){return de}));var a,o=n("gcR/"),i=n.n(o),r=n("VkAN"),c=n.n(r),l=n("lSNA"),d=n.n(l),s=n("q1tI"),m=n.n(s),u=(n("17x9"),n("hHXl")),p=n("Dugd"),f=n.n(p),h=n("X6oL"),g=n("ZKN5"),b=n("74vb"),y=n.n(b),v=n("pCca");function w(e){var t=e.article,n=Object(h.useTracking)().trackEvent,a=Object(v.a)().deviceType;return i()(y.a,{article:t,deviceType:a,trackClick:function(e){n({event:"moduleInteraction",eventData:{pagetype:"article",trigger:"module",type:"click"},module:{name:"review",context:"",label:"",region:"review-footer",element:{name:"restaurant"===e?"reserve-a-table":"find-tickets",label:"restaurant"===e?"Reserve A Table":"Find Tickets",url:""}}})},trackCall:function(){n({event:"moduleInteraction",eventData:{pagetype:"article",trigger:"module",type:"click"},module:{name:"review",context:"",label:"",region:"review-footer",element:{name:"call",label:"Call",url:""}}})}})}w.displayName="ReviewFooter",w.fragments={article:f()(a||(a=c()(["\n    fragment ReviewFooter_article on Article {\n      id\n      compatibility {\n        isDiningReview\n        isMovieReview\n      }\n      reviewItems {\n        overrideLabel\n        isCriticsPick\n        subject {\n          __typename\n          ... on Restaurant {\n            id\n            name\n            contactDetails {\n              addresses {\n                crossStreet\n                neighborhood\n                address {\n                  streetAddress\n                }\n              }\n              phoneNumbers {\n                type\n                number\n              }\n            }\n            accessibilityDescription\n            takesReservations\n            reservationsUrl\n            reservationsNote\n            rating\n            atmosphere\n            openStatus\n            priceCategory\n            wineList\n            recommendedDishes\n            soundLevel\n            alcoholDescription\n            openHours\n            coordinates {\n              latitude\n              longitude\n            }\n            website\n            lastModified\n            singlePlatformId\n          }\n          ... on Movie {\n            title\n            movieRating: rating\n            runtimeUS\n            ticketUrl\n            directors\n            writers\n            genres\n            movieCast: cast {\n              actor\n            }\n            imdbId\n          }\n          ... on TheaterEvent {\n            creators\n            lastModified\n            cast\n            category\n            genre\n            runtime\n            openRun\n            openDate\n            startDate\n            stopDate\n            ticketInfo {\n              website\n            }\n            theaterShow {\n              updated\n              showDate\n              showTime\n              description\n            }\n            venue {\n              name\n              url\n              coordinates {\n                longitude\n                latitude\n              }\n              contactDetails {\n                addresses {\n                  neighborhood\n                  address {\n                    streetAddress\n                  }\n                }\n                phoneNumbers {\n                  number\n                }\n              }\n            }\n            performance {\n              name\n            }\n          }\n        }\n      }\n    }\n  "])))};var x,k=w,I=n("7r5p"),O=n("HT5m"),N=(n("2B1R"),n("bFGc")),T=n.n(N),B=(n("yWo2"),n("Jqp9")),E=n("wXC7"),D=n.n(E),j=Object(B.css)("margin-left:20px;margin-right:20px;",D.a.breakpoint.small,"{width:",D.a.breakpoint.mobileFullWidth,";max-width:",D.a.breakpoint.textBodyWidth,"px;margin:1.5rem auto 1em;}",D.a.breakpoint.extraLarge,"{width:",D.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",D.a.breakpoint.textBodyWidthExtralarge,"px;margin:1.5rem auto 1em;}",D.a.print,";"),R=function(e){var t=e.data;return!!(t&&t.bylines&&t.bylines.length>0)&&i()("div",{className:j},void 0,function(e){var t=0;return e.bylines.map((function(e){return e&&e.creators&&e.creators.length>0?e.creators.map((function(e){var n=null,a=null;return e.contactDetails&&e.contactDetails.socialMedia&&e.contactDetails.socialMedia.map((function(e){return"twitter"===e.type?n=e.account:"facebook"===e.type&&(a=e.account),!0})),e.legacyData&&e.legacyData.htmlShortBiography?(t+=1,i()(T.a,{htmlShortBiography:e.legacyData.htmlShortBiography,twitter:n,facebook:a},t)):null})):null}))}(t))};R.fragments={data:f()(x||(x=c()(["\n    fragment Bio_data on CreativeWork {\n      bylines {\n        creators {\n          ... on Person {\n            id\n            contactDetails {\n              socialMedia {\n                type\n                account\n              }\n            }\n            legacyData {\n              htmlShortBiography\n            }\n          }\n        }\n      }\n    }\n  "])))};var A,S=R,W=n("4GNh"),M=(n("ma9I"),n("nxVm")),z=n.n(M),H=Object(B.css)("font-family:",D.a.font.franklinBase,";font-size:",D.a.font.size(14),";line-height:",D.a.font.size(20),";color:",D.a.color.gray20,";margin:2rem auto 1rem;width:",D.a.breakpoint.mobileFullWidth,";max-width:",D.a.breakpoint.textBodyWidth,"px;p{margin-bottom:1rem;}a{text-decoration:underline;text-decoration-color:",D.a.color.gray50,";}a:hover,a:focus{color:",D.a.color.gray30,";text-decoration:none;}em{font-style:italic;}strong{font-weight:bold;}",D.a.breakpoint.medium,"{font-size:",D.a.font.size(15),";line-height:",D.a.font.size(22),";a{text-decoration:none;border-bottom:1px solid ",D.a.color.gray50,";}a:hover,a:focus{color:",D.a.color.gray30,";border-bottom:1px solid ",D.a.color.white,";}}",D.a.breakpoint.extraLarge,"{width:",D.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",D.a.breakpoint.textBodyWidthExtralarge,"px;}",z.a,";"),P=function(e){var t=e.data,n=e.suppressInfobox;if(!t||!t.legacy||""===t.legacy.htmlExtendedAuthorOrArticleInformation&&""===t.legacy.htmlInfoBox||n&&""===t.legacy.htmlExtendedAuthorOrArticleInformation||t.compatibility&&t.compatibility.isOak)return null;var a="".concat(t.legacy.htmlExtendedAuthorOrArticleInformation).concat(n?"":" ".concat(t.legacy.htmlInfoBox));return i()("div",{className:H,dangerouslySetInnerHTML:{__html:a}})};P.displayName="ExtendedInformation",P.fragments={data:f()(A||(A=c()(["\n    fragment ExtendedInformation_data on Article {\n      id\n      compatibility {\n        isOak\n      }\n      legacy {\n        htmlExtendedAuthorOrArticleInformation\n        htmlInfoBox\n      }\n    }\n  "])))},P.defaultProps={data:void 0,suppressInfobox:!1};var _,C=P,L=n("tqOg"),F=n.n(L),Y=Object(B.css)("width:",D.a.breakpoint.mobileFullWidth,";max-width:",D.a.breakpoint.textBodyWidth,"px;",D.a.breakpoint.extraLarge,"{width:",D.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",D.a.breakpoint.textBodyWidthExtralarge,"px;}",z.a,";"),J=function(e){var t=e.data;if(!t||!t.legacy||!t.legacy.reviewInformation)return null;var n="".concat(t.legacy.reviewInformation);return i()(F.a,{html:n,className:Y})};J.displayName="ReviewInformation",J.defaultProps={data:void 0},J.fragments={data:f()(_||(_=c()(["\n    fragment ReviewInformation_data on Article {\n      id\n      legacy {\n        reviewInformation\n      }\n    }\n  "])))};var q,Z=J,U=(n("yq1k"),n("DQNa"),n("dlEz")),V=n("rI8Z"),Q=Object(B.css)("font-family:",D.a.font.franklinBase,";font-size:",D.a.font.size(12),";line-height:",D.a.font.size(16),";width:",D.a.breakpoint.mobileFullWidth,";max-width:",D.a.breakpoint.textBodyWidth,"px;margin:0 auto 1em;color:",D.a.color.gray30,";a{color:",D.a.color.gray30,";text-decoration:underline;}a:hover{text-decoration:none;}",D.a.breakpoint.extraLarge,"{width:",D.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",D.a.breakpoint.textBodyWidthExtralarge,"px;}",z.a,";@media print{span{display:none;}}"),X=Object(B.css)("font-weight:",D.a.font.weight.medium,";display:inline;"),G={ofTheSundayMagazine:" of the Sunday Magazine",oftheSundayBookReview:" of the Sunday Book Review",ofTMagazine:" of T Magazine",ofEducationLife:" of Education Life",oftheNewYorkEdition:" of the New York edition",oftheNationaledition:" of the National edition",inTheInternationalNewYorkTimes:" in The New York Times International Edition",inTheInternationalHeraldTribune:" in The International Herald Tribune",aVersionOf:"A version of this article appears in print on ",onPage:", Page ",onSection:", Section ",ofThe:void 0,withTheHeadline:" with the headline: ",links:'. <a href="http://www.nytreprints.com/">Order Reprints</a> | <a href="https://www.nytimes.com/section/todayspaper">Today’s Paper</a> | <a href="https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html?campaignId=48JQY">Subscribe</a>'},K=function(e){var t,n=e.data;if(n&&n.printInformation&&n.printInformation.publicationDate&&(n.printInformation.section||n.printInformation.edition)&&"The New York Times on the Web"!==n.printInformation.edition&&n.source&&n.source.displayName){var a=n.source.displayName,o=n.printInformation,r=o.publicationDate,c=o.section,l=o.page,d=o.edition,s=o.headline,m=function(e,t,n){var a="",o=!0,i=!0;switch(e){case"MM":a=G.ofTheSundayMagazine,o=!1;break;case"BR":a=G.oftheSundayBookReview,o=!1;break;case"M2":a=G.ofTMagazine,o=!1;break;case"ED":a=G.ofEducationLife,o=!1;break;default:switch(a=function(e){return["NewYork","altNewYork","SundayAdvance","LongIsland","Westchester","Connecticut","NewJersey","ManhattanBronx","ZonedLI","ZonedWC","ZonedCN","ZonedNJ","ZonedJN","ZonedJC","ZonedMB","ZonedBC","DTNewYork","The New York Times on the Web"].includes(e)}(t)?G.oftheNewYorkEdition:G.oftheNationaledition,n){case"International New York Times":a=G.inTheInternationalNewYorkTimes,i=!1;break;case"Global":case"International Herald Tribune":a=G.inTheInternationalHeraldTribune,i=!1}}return{printEdition:a,showSection:o,showHeadline:i}}(c,d,a),u=m.printEdition,p=m.showSection,f=m.showHeadline;return i()("div",{className:Q},void 0,G.aVersionOf,i()(U.a,{className:X,unix:(t=r,new Date(t).getTime()/1e3),formatter:"abbreviated-date"}),l&&p&&G.onSection,l&&p&&c,l&&G.onPage,l&&+l,G.ofThe,u,f&&s&&G.withTheHeadline,f&&s&&s,Object(V.a)(G.links))}return null};K.defaultProps={data:void 0},K.fragments={data:f()(q||(q=c()(["\n    fragment PrintInformation_data on Article {\n      id\n      source {\n        id\n        displayName\n      }\n      printInformation {\n        section\n        page\n        publicationDate\n        edition\n        headline @stripHtml\n      }\n    }\n  "])))};var $,ee=K;n("4l63");function te(e){var t=e.offsetHeight,n=getComputedStyle(e);return t+=parseInt(n.marginTop,10)+parseInt(n.marginBottom,10)}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e){var t=e.article,n=t&&t.reviewItems&&t.reviewItems.length>0;return!!(n&&t&&t.compatibility&&!t.compatibility.isArtReview&&!t.compatibility.isBookReview||n)}function ie(e){var t=e.article,n=t&&t.reviewItems&&t.reviewItems.length>0;return!!(n&&t&&t.compatibility&&(t.compatibility.isTheaterReview||t.compatibility.isDiningReview)||n)}var re={event:"impression",module:{name:"article_complete",context:"",label:"",region:"article_complete"}};function ce(e,t){return e.offsetTop+t.offsetTop}function le(e){var t=function e(t,n){return(t.tagName||"").toLowerCase()===n?t:t.parentNode?e(t.parentNode,n):void 0}(e,"article")||{},n={top:t.offsetTop,height:te(t)},a={top:ce(t,e),height:te(e)},o={scrollTop:Math.round(document.documentElement.scrollTop||document.body.scrollTop||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0),width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),documentHeight:Math.max(document.documentElement.scrollHeight||0),article:n,bottomOfArticle:a};return ae(ae({},re),{},{viewport:o})}var de=f()($||($=c()(["\n  query FooterBlockQuery($id: String!) {\n    anyWork(id: $id) {\n      ... on Article {\n        id\n        compatibility {\n          isOak\n          isArtReview\n          isBookReview\n          isTheaterReview\n          isDiningReview\n        }\n        reviewItems {\n          __typename\n        }\n        ...ReviewInformation_data\n        ...Addendum_data\n        ...ReviewFooter_article\n        ...Bio_data\n        ...ExtendedInformation_data\n        ...PrintInformation_data\n        ...OakBodyShareToolbar_share\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),Z.fragments.data,W.a.fragments.data,k.fragments.article,S.fragments.data,C.fragments.data,ee.fragments.data,O.b.fragments.share),se=i()(I.a,{});function me(e){var t,n=e.data,a=e.hasLoadedBelowFold,o=Object(h.useTracking)({module:{region:"footer"}}),r=o.Track,c=o.trackEvent,l=Object(s.useRef)(null),d=Object(s.useRef)(null),u=Object(s.useRef)(!1),p=function(){d.current=new IntersectionObserver((function(e){var t;!u.current&&e&&e[0]&&e[0].isIntersecting&&(u.current=!0,d.current.disconnect(),d.current=null,t=le(l.current),c(t))}),{threshold:0}),d.current.observe(l.current)};if(Object(s.useEffect)((function(){return p(),function(){d.current&&(d.current.disconnect(),d.current=null)}}),[]),null==n||!n.anyWork||n.loading)t=null;else{var f=n.anyWork,g=oe({article:f}),b=ie({article:f});t=i()(r,{},void 0,!a&&se,i()(Z,{data:f}),i()(W.a,{data:f}),g&&i()(k,{article:f}),f&&f.compatibility.isOak&&i()(S,{data:f}),i()(C,{data:f,suppressInfobox:b}),i()(ee,{data:f}),i()(O.b,{share:f,position:O.a.BOTTOM}))}return m.a.createElement("div",{className:"bottom-of-article",ref:l},t)}me.displayName="FooterBlock",me.defaultProps={data:{},article:{},hasLoadedBelowFold:!1};t.default=Object(g.a)(Object(u.graphql)(de,{options:function(e){return{variables:{id:e.article.url},fetchPolicy:"cache-first",partialRefetch:!0,ssr:!1}}})(me))}}]);
//# sourceMappingURL=footerBlock-7d0475cc7851996f0093.js.map