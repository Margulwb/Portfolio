(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,function(e,t,c){},,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(10),i=c.n(n),o=(c(19),c(4)),l=(c(20),c.p+"static/media/me.6bf1aa58.JPG"),r=c(1);function j(e){return Object(r.jsxs)("div",{className:"row mt-5 about-me",children:[Object(r.jsx)("div",{className:"col-sm col-md-4 about-me__picture py-5",children:Object(r.jsx)("div",{className:"about-me__border-image",children:Object(r.jsx)("img",{src:l,alt:"Maciej Gurgul",className:"about-me__img img-fluid shadow-lg"})})}),Object(r.jsxs)("div",{className:"col-sm col-md about-me__text p-5 d-flex flex-column",children:[Object(r.jsx)("div",{className:"about-me__headline shadow-lg mb-3 fs-1 p-1",children:e.content.heading}),Object(r.jsx)("div",{className:"about-me__information shadow-lg p-1",children:e.content.aFewWordAboutMe})]})]})}var b=c(11);c(22);function m(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;s(e>100)})),Object(r.jsx)("div",{className:"button-scroll-up shadow-lg",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:c?"block":"none"},children:Object(r.jsx)("span",{className:"button-scroll-up__icon",children:Object(r.jsx)(b.a,{size:"2em"})})})}c(23);var d=c(3),h=c(12);function u(e){return Object(r.jsxs)("div",{className:"row mt-5 py-3 footer",id:"footer",children:[Object(r.jsx)("h2",{className:"footer__h2",children:e.content.heading}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"footer__hr"})}),Object(r.jsxs)("div",{className:"footer__links",children:[Object(r.jsxs)("a",{href:"https://github.com/Margulwb",className:"footer__link",children:[Object(r.jsx)("span",{className:"footer__icon",children:Object(r.jsx)(d.c,{})})," GitHub"]}),Object(r.jsxs)("a",{href:"mailto:maciejgurgul01@gmail.com",className:"footer__link",children:[Object(r.jsx)("span",{className:"footer__icon",children:Object(r.jsx)(h.a,{})})," Mail"]}),Object(r.jsxs)("a",{href:"mhttps://www.linkedin.com/in/maciej-gurgul-935904213/",className:"footer__link",children:[Object(r.jsx)("span",{className:"footer__icon",children:Object(r.jsx)(d.f,{})})," Linkedin"]})]})]})}c(24);var O=c.p+"static/media/legbook.0174e303.PNG",x=c.p+"static/media/valorantdamage.133c33b6.PNG",g=c.p+"static/media/quiz.a1320754.PNG";function p(e){return Object(r.jsxs)(r.Fragment,{children:["LegBook"===e&&Object(r.jsx)("img",{src:O,alt:"LegBook",className:"project-box__hyperlink-img"}),"Valorant Damage"===e&&Object(r.jsx)("img",{src:x,alt:"ValorantDamage",className:"project-box__hyperlink-img"}),"Quiz"===e&&Object(r.jsx)("img",{src:g,alt:"Quiz",className:"project-box__hyperlink-img"})]})}var f=c(7);function v(e){return Object(r.jsx)(r.Fragment,{children:e.projects.map((function(e){var t=e.id,c=e.name,a=e.liveLink,s=e.githube;return Object(r.jsxs)("div",{className:"col-md-6 row project-box",children:[Object(r.jsx)("div",{className:"project-box__name mt-3",children:Object(r.jsxs)("h2",{className:"project-box__name-h2",children:[c,Object(r.jsx)("a",{href:s,className:"project-box__name-h2--githube",children:Object(r.jsx)(d.c,{})}),Object(r.jsx)("a",{href:a,className:"project-box__name-h2--live",children:Object(r.jsx)(f.b,{})})]})}),Object(r.jsx)("div",{className:"row mb-4",children:Object(r.jsx)("div",{className:"hr"})}),Object(r.jsxs)("div",{className:"project-box__hyperlink",children:[Object(r.jsx)("a",{href:a,children:p(c)}),Object(r.jsx)("div",{className:"project-box__hyperlink--icon",children:Object(r.jsx)(f.a,{})})]})]},t)}))})}function _(e){return Object(r.jsxs)("div",{className:"row mt-5 pt-3",id:"my-projects",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("h1",{className:"h1",children:e.content.heading})}),Object(r.jsx)("div",{className:"row d-flex justify-content-center",children:Object(r.jsx)(v,{projects:[{id:1,name:"LegBook",liveLink:"https://upbeat-babbage-8e977d.netlify.app",githube:"https://github.com/Margulwb/LegBook"},{id:2,name:"Valorant Damage",liveLink:"https://trusting-turing-9fd24d.netlify.app",githube:"https://github.com/Margulwb/Valorant-Damage"},{id:3,name:"Quiz",liveLink:"https://gallant-shockley-b8919f.netlify.app/",githube:"https://github.com/Margulwb/Quiz"}]})})]})}c(5);var k=c(8);function N(){var e="clicked",t=Object(a.useState)(),c=Object(o.a)(t,2),s=c[0],n=c[1],i=document.querySelector("#root"),l="light",j="dark";localStorage&&(s=localStorage.getItem("theme")),s===l||s===j?i.classList.add(s):i.classList.add(l);return Object(r.jsx)("button",{id:"darkMode",onClick:function(t){return function(t){s===j?(i.classList.replace(j,l),t.target.classList.remove(e),localStorage.setItem("theme","light"),n(l)):(i.classList.replace(l,j),t.target.classList.add(e),localStorage.setItem("theme","dark"),n(j))}(t)},className:"action-button shadow-sm theme-switch ".concat("dark"===s?e:""),children:Object(r.jsx)("div",{className:"theme-switch__icon",children:s===j?Object(r.jsx)(k.a,{size:"1.5em"}):Object(r.jsx)(k.b,{size:"1.5em"})})})}function w(e){return Object(r.jsxs)("ul",{className:"menu__links",children:[Object(r.jsx)("li",{className:"menu__link",onClick:function(){return e.callbackIsOpen()},children:Object(r.jsx)("a",{href:"#tech-stack",children:"Tech Stack"})}),Object(r.jsx)("li",{className:"menu__link",onClick:function(){return e.callbackIsOpen()},children:Object(r.jsx)("a",{href:"#my-projects",children:"My Projects"})}),Object(r.jsx)("li",{className:"menu__link",onClick:function(){return e.callbackIsOpen()},children:Object(r.jsx)("a",{href:"#footer",children:"Contact"})})]})}function y(){return Object(r.jsx)("nav",{className:"menu",children:Object(r.jsx)(w,{callbackIsOpen:function(){return console.log()}})})}var S=c(13),z=c(14);function L(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(r.jsx)(S.a,{className:"menu-mobile__hamburger",size:"2em",color:"black",onClick:function(){return s(!c)}}),i=Object(r.jsx)(z.a,{className:"menu-mobile__hamburger",size:"2em",color:"black",onClick:function(){return s(!c)}});return Object(r.jsxs)("nav",{className:"menu-mobile",children:[c?i:n,c&&Object(r.jsx)(w,{callbackIsOpen:function(){return s(!1)}})]})}function M(e){var t=e.language,c=e.callback;return Object(r.jsxs)("button",{onClick:c,className:"action-button shadow-sm language-switch d-flex justify-content-around",children:[Object(r.jsx)("div",{className:"language-switch__label",children:t}),Object(r.jsx)("div",{className:"language-switch__icon",children:Object(r.jsx)(d.e,{})})]})}function F(e){var t=e.language,c=e.switchLanguagecallback;return Object(r.jsxs)("div",{className:"row pt-2 nav-bar",children:[Object(r.jsxs)("div",{className:"col d-flex justify-content-start",children:[Object(r.jsx)(y,{}),Object(r.jsx)(L,{})]}),Object(r.jsxs)("div",{className:"col d-flex justify-content-end",children:[Object(r.jsx)(M,{language:t,callback:c}),Object(r.jsx)(N,{})]})]})}function C(e){var t={en:{aboutMe:{heading:"Hi, I'm Maciek",aFewWordAboutMe:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"I am an ambitious 20 years old who wants to become the best Front-End developer."}),Object(r.jsx)("p",{children:"I've always been curious about how games and apps work with a main interest on how the development process looks like."}),Object(r.jsx)("span",{children:"Creating pages from a visual point of view is not my strong point, because my favorite part of creating a page is logic in JS."})]})},techStack:{heading:"Tech Stack"},myProject:{heading:"My Projects"},footer:{heading:"Contact"}},pl:{aboutMe:{heading:"Cze\u015b\u0107, tutaj Maciek",aFewWordAboutMe:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Jestem ambitnym 20 latkiem, kt\xf3ry chce zosta\u0107 najlepszym Front-End developerem."}),Object(r.jsx)("p",{children:"Zawsze by\u0142em ciekaw jak dzia\u0142aj\u0105 gry i aplikacje, a najbardziej interesowa\u0142o mnie jak wygl\u0105da proces ich tworzenia."}),Object(r.jsx)("span",{children:"Tworzenie stron z wizualnego punktu widzenia nie jest moj\u0105 mocn\u0105 stron\u0105, poniewa\u017c moj\u0105 ulubion\u0105 cz\u0119\u015bci\u0105 tworzenia stron jest logika w JS."})]})},techStack:{heading:"Poznane Technologie"},myProject:{heading:"Moje Projekty"},footer:{heading:"Kontakt"}}};return"EN"===e?t.en:"PL"===e?t.pl:void 0}c(25);var P=c(9);function E(e){return"FaHtml5"===e?Object(r.jsx)(d.d,{color:"#e44d26"}):"FaCss3Alt"===e?Object(r.jsx)(d.b,{color:"#264de4"}):"SiJavascript"===e?Object(r.jsx)(P.b,{color:"#f7e018"}):"FaSass"===e?Object(r.jsx)(d.h,{color:"#ce679a"}):"FaReact"===e?Object(r.jsx)(d.g,{color:"#61dafb"}):"SiGit"===e?Object(r.jsx)(P.a,{color:"#f34e28"}):"FaBootstrap"===e?Object(r.jsx)(d.a,{color:"#6c10f4"}):void 0}function I(e){return Object(r.jsx)("div",{className:"technologies",children:e.technologies.map((function(e){var t=e.id,c=e.name,a=e.image;return Object(r.jsxs)("li",{className:"technologies__li pt-4 shadow-sm",children:[Object(r.jsx)("div",{className:"technologies__icon",children:E(a)}),Object(r.jsx)("div",{className:"technologies__name",children:c})]},t)}))})}function T(e){return Object(r.jsxs)("div",{className:"row my-5 pt-1",id:"tech-stack",children:[Object(r.jsx)("div",{className:"row mb-4",children:Object(r.jsx)("h1",{className:"h1 ",children:e.content.heading})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)(I,{technologies:[{id:1,name:"HTML",image:"FaHtml5"},{id:2,name:"CSS",image:"FaCss3Alt"},{id:4,name:"JS",image:"SiJavascript"},{id:3,name:"SASS",image:"FaSass"},{id:5,name:"REACT",image:"FaReact"},{id:7,name:"BOOTSTRAP",image:"FaBootstrap"},{id:6,name:"GIT",image:"SiGit"}]})})]})}var G=c(30);c(26);function J(){var e=Object(G.a)().y,t=Object(a.useState)(0),c=Object(o.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){var t=document.documentElement.scrollHeight-document.documentElement.clientHeight;n(e/t*100)}),[e]),Object(r.jsx)("div",{className:"scroll-bar",children:Object(r.jsx)("div",{className:"scroll-bar__indicator",style:{width:"".concat(s,"%")}})})}function A(){var e=Object(a.useState)("PL"),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(C("EN")),i=Object(o.a)(n,2),l=i[0],b=i[1];return Object(r.jsxs)("div",{className:"container-xxl",children:[Object(r.jsx)(J,{}),Object(r.jsx)(F,{switchLanguagecallback:function(){s("EN"===c?"PL":"EN"),b(C(c))},language:c}),Object(r.jsx)(j,{content:l.aboutMe}),Object(r.jsx)(T,{content:l.techStack}),Object(r.jsx)(_,{content:l.myProject}),Object(r.jsx)(u,{content:l.footer}),Object(r.jsx)(m,{})]})}c(27);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.928c38cb.chunk.js.map