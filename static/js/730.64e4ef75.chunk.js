"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[730],{7730:function(e,n,t){t.r(n),t.d(n,{default:function(){return ge}});var r,a=t(6907),o=t(9439),l=t(2791),i=t(9434),c=t(208),u=t(1686),d=t.n(u),s=t(6916),f=function(e){return e.contacts.items},p=function(e){return e.filter},x=function(e){return e.contacts.error},h=function(e){return e.contacts.isLoading},m=(0,s.P1)([f,p],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),b=["title","titleId"];function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function v(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function C(e,n){var t=e.title,a=e.titleId,o=v(e,b);return l.createElement("svg",g({width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},o),t?l.createElement("title",{id:a},t):null,r||(r=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8ZM13.506 11.5648C14.4282 10.6577 15 9.39565 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 9.39827 5.57396 10.6625 6.49914 11.5699C3.74942 12.5366 2 14.6259 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 15.2701 5.93073 13 10 13C11.9542 13 13.4554 13.5451 14.4579 14.2992C14.8992 14.6311 15.5262 14.5425 15.8581 14.1011C16.1901 13.6598 16.1015 13.0328 15.6601 12.7008C15.0431 12.2368 14.3206 11.851 13.506 11.5648ZM19 14.5C19.5523 14.5 20 14.9477 20 15.5V18H22.5C23.0523 18 23.5 18.4477 23.5 19C23.5 19.5523 23.0523 20 22.5 20H20V22.5C20 23.0523 19.5523 23.5 19 23.5C18.4477 23.5 18 23.0523 18 22.5V20H15.5C14.9477 20 14.5 19.5523 14.5 19C14.5 18.4477 14.9477 18 15.5 18H18V15.5C18 14.9477 18.4477 14.5 19 14.5Z"})))}var j,y,Z,w,O,P=l.forwardRef(C),k=(t.p,t(168)),A=t(2360),E=A.ZP.form(j||(j=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),L=A.ZP.input(y||(y=(0,k.Z)(["\n  padding: 10px;\n  margin-bottom: 10px;\n  border-radius: 6px;\n  border: none;\n  outline: 0;\n  background-color: #fff;\n  box-shadow: 0 1px 6px 0 #20212447;\n"]))),S=A.ZP.button(Z||(Z=(0,k.Z)(["\n  > svg {\n    width: 40px;\n    height: 30px;\n    fill: #02ba52;\n  }\n  /* padding: 10px 20px; */\n  margin-top: 5px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n  :hover {\n    background-color: #1677ff;\n    > svg {\n      fill: #fff;\n    }\n  }\n"]))),I=A.ZP.p(w||(w=(0,k.Z)(["\n  /* padding: 10px 20px; */\n  margin-bottom: 15px;\n"]))),N=t(3329),z=function(){var e=(0,i.I0)(),n=(0,i.v9)(f),t=(0,l.useState)(""),r=(0,o.Z)(t,2),a=r[0],u=r[1],s=(0,l.useState)(""),p=(0,o.Z)(s,2),x=p[0],h=p[1];return(0,N.jsxs)(E,{onSubmit:function(t){t.preventDefault();var r={name:a,number:x};if(n.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})))d().Report.warning("Alert","Contact with name ".concat(r.name," already exists!"),"Ok");else{var o=n.find((function(e){var n=e.number;return r.number.replace(/\D/g,"")===n.replace(/\D/g,"")}));o?d().Report.warning("Alert","Number ".concat(r.number," is already in contacts!"),"Ok"):(e((0,c.uK)(r)),u(""),h(""))}},children:[(0,N.jsx)(I,{children:"Name"}),(0,N.jsx)(L,{type:"text",name:"name",placeholder:"Enter name",value:a,onChange:function(e){u(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,N.jsx)(I,{children:"Number"}),(0,N.jsx)(L,{type:"tel",name:"number",placeholder:"Enter phone number",value:x,onChange:function(e){h(e.target.value)},pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number format could be: +1 555 1234567 or 555 1234567.",required:!0}),(0,N.jsx)(S,{type:"submit",children:(0,N.jsx)(P,{})})]})},M=t(4664),R=t(3521),_=t(7027),B=t(5820),H=t(9519),q=t(7309),V=t(2639),D=["title","titleId"];function F(){return F=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},F.apply(this,arguments)}function T(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function J(e,n){var t=e.title,r=e.titleId,a=T(e,D);return l.createElement("svg",F({width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),t?l.createElement("title",{id:r},t):null,O||(O=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5ZM13.506 11.5648C14.4282 10.6578 15 9.39566 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 9.39827 5.57396 10.6625 6.49914 11.5699C3.74942 12.5366 2 14.6259 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 15.2701 5.93073 13 10 13C11.5647 13 12.8409 13.3499 13.8011 13.8767C14.2853 14.1424 14.8932 13.9652 15.1588 13.481C15.4245 12.9968 15.2473 12.3889 14.7631 12.1233C14.3732 11.9094 13.9535 11.7221 13.506 11.5648ZM15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L19 17.5858L21.2929 15.2929C21.6834 14.9024 22.3166 14.9024 22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L20.4142 19L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L19 20.4142L16.7071 22.7071C16.3166 23.0976 15.6834 23.0976 15.2929 22.7071C14.9024 22.3166 14.9024 21.6834 15.2929 21.2929L17.5858 19L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929Z"})))}var K,Y=l.forwardRef(J),$=(t.p,["title","titleId"]);function G(){return G=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(this,arguments)}function Q(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function U(e,n){var t=e.title,r=e.titleId,a=Q(e,$);return l.createElement("svg",G({fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),t?l.createElement("title",{id:r},t):null,K||(K=l.createElement("path",{d:"M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"})))}var W,X,ee,ne,te,re=l.forwardRef(U),ae=(t.p,A.ZP.li(W||(W=(0,k.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 10px;\n  background-color: #f5f6f7;\n  padding-left: 10px;\n  border-radius: 7px;\n"])))),oe=A.ZP.span(X||(X=(0,k.Z)(["\n  margin-right: 10px;\n"]))),le=A.ZP.a(ee||(ee=(0,k.Z)(["\n  cursor: pointer;\n  color: #1677ff;\n  :hover {\n    text-decoration: underline;\n  }\n"]))),ie=A.ZP.button(ne||(ne=(0,k.Z)(["\n  @media only screen and (max-width: 600px) {\n    margin-right: 10px;\n  }\n  > svg {\n    width: 30px;\n    height: 22px;\n    fill: #f50505;\n  }\n  padding: 3px 10px 0 10px;\n  margin-left: 5px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n  :hover {\n    background-color: #1677ff;\n    > svg {\n      fill: #fff;\n    }\n  }\n"]))),ce=A.ZP.button(te||(te=(0,k.Z)(["\n  > svg {\n    width: 30px;\n    height: 22px;\n    fill: #051df5;\n  }\n  padding: 3px 10px 0 10px;\n  margin-left: 20px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n  :hover {\n    background-color: #1677ff;\n    > svg {\n      fill: #fff;\n    }\n  }\n"])));var ue=function(e){var n=e.contact,t=(0,i.I0)(),r=(0,l.useState)(!1),a=(0,o.Z)(r,2),u=a[0],d=a[1],s=(0,l.useState)(n.name),f=(0,o.Z)(s,2),p=f[0],x=f[1],h=(0,l.useState)(n.number),m=(0,o.Z)(h,2),b=m[0],g=m[1],v=function(){t((0,c.GK)(n.id))},C=function(){d(!1)};return(0,N.jsxs)(ae,{children:[(0,N.jsx)(oe,{children:n.name}),(0,N.jsx)(le,{href:"tel:".concat(n.number),children:n.number}),(0,N.jsx)(ce,{onClick:function(){d(!0)},children:(0,N.jsx)(re,{})}),(0,N.jsx)(B.Z,{title:"Delete the contact",description:"Are you sure to delete this contact?",onConfirm:function(e){v(e.target.value),_.ZP.success("Click on Yes")},onCancel:function(e){console.log(e),_.ZP.error("Click on No")},okText:"Yes",cancelText:"No",children:(0,N.jsx)(ie,{danger:!0,children:(0,N.jsx)(Y,{})})}),(0,N.jsx)(H.Z,{open:u,onCancel:C,footer:[(0,N.jsx)(q.ZP,{onClick:C,children:"Cancel"},"cancel"),(0,N.jsx)(q.ZP,{onClick:function(){d(!1),t((0,c.xt)({id:n.id,name:p,number:b}))},children:"Save"},"save")],children:(0,N.jsxs)("div",{className:"modal-content",children:[(0,N.jsx)("label",{children:"New Name:"}),(0,N.jsx)(V.Z,{type:"text",value:p,onChange:function(e){x(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,N.jsx)("label",{children:"New Number:"}),(0,N.jsx)(V.Z,{type:"text",value:b,onChange:function(e){g(e.target.value)},pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number format could be: +1 555 1234567 or 555 1234567.",required:!0})]})})]})};var de,se,fe=function(){var e=(0,i.v9)(m),n=(0,i.v9)(x),t=(0,i.v9)(h),r=(0,i.I0)();return(0,l.useEffect)((function(){r((0,c.yF)())}),[r]),(0,N.jsx)("ul",{children:t&&!n?(0,N.jsx)(R.a,{}):0!==e.length||n?e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,N.jsx)(ue,{contact:{id:n,name:t,number:r}},n)})):(0,N.jsx)(M.Z,{})})},pe=t(3728),xe=t(6895),he=(0,A.ZP)(V.Z)(de||(de=(0,k.Z)(["\n  width: auto;\n  padding: 5px;\n  border-radius: 6px;\n  border: none;\n  outline: 0;\n  background-color: #fff;\n  box-shadow: 0 1px 6px 0 #20212447;\n"]))),me=A.ZP.h3(se||(se=(0,k.Z)(["\n  color: #2e2d2dbc;\n"])));var be=function(){var e=(0,i.I0)(),n=(0,i.v9)(p);return(0,i.v9)(f).length<1?(0,N.jsx)(me,{children:"Add your first contact"}):(0,N.jsx)(he,{type:"text",name:"filter",placeholder:"Search by name",value:n,onChange:function(n){e((0,xe.T)(n.target.value.trim()))},prefix:(0,N.jsx)(pe.Vph,{})})};var ge=function(){return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(a.B6,{children:[(0,N.jsx)(a.ql,{children:(0,N.jsx)("title",{children:"Phonebook\ud83d\udcf1"})}),(0,N.jsx)(z,{}),(0,N.jsx)("h2",{children:"Contacts"}),(0,N.jsx)(be,{}),(0,N.jsx)(fe,{})]})})}}}]);
//# sourceMappingURL=730.64e4ef75.chunk.js.map