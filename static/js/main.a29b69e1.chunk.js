(window["webpackJsonpbudget-planner-homework"]=window["webpackJsonpbudget-planner-homework"]||[]).push([[0],{29:function(e,n,t){e.exports=t(49)},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(10),u=t.n(o),l=t(3),c=t(1),i=t(2),p=t(8),s=t(22),b=t.n(s);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f="GET_BUDGET",g="ADD_EXPENSE",v="DELETE_EXPENSE",x=t(11),h=t(12),E=t(14),y=t(13),O=t(15);function j(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return j=function(){return e},e}var w=i.a.form(j()),P=function(e){var n=e.onSubmit,t=e.children;return a.a.createElement(w,{onSubmit:n},t)},S=P;function k(){var e=Object(c.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return k=function(){return e},e}P.defaultProps={onSubmit:function(){return null}};var C=i.a.label(k(),(function(e){return e.customStyles})),D=function(e){var n=e.children,t=e.customStyles;return a.a.createElement(C,{customStyles:t},n)};function B(){var e=Object(c.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return B=function(){return e},e}var z=i.a.input(B()),A=function(e){var n=e.type,t=e.value,r=e.onChange,o=e.name;return a.a.createElement(z,{type:n,value:t,onChange:r,name:o})},T=A;function F(){var e=Object(c.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n  &[disabled] {\n    pointer-events: none;\n    background-color: #bdbdbd;\n  }\n"]);return F=function(){return e},e}A.defaultProps={type:"text",value:"",name:"",onChange:function(){return null}};var N=i.a.button(F()),_=function(e){var n=e.type,t=e.label,r=e.onClick,o=e.disable;return a.a.createElement(N,{type:n,onClick:r,disabled:o},t)},G=_;_.defaultProps={type:"button",label:"",onClick:function(){return null},disable:!1};var J=function(e){function n(){var e,t;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(a)))).state={value:0},t.handleChange=function(e){t.setState({value:Number(e.target.value)})},t.handleSubmit=function(e){e.preventDefault(),t.props.getBudget(t.state.value),t.setState({value:0})},t}return Object(O.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.state.value,n=e<=0;return a.a.createElement(S,{onSubmit:this.handleSubmit},a.a.createElement(D,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",a.a.createElement(T,{type:"number",value:e,onChange:this.handleChange})),a.a.createElement(G,{label:"Save",type:"submit",disable:n}))}}]),n}(r.Component),X={getBudget:function(e){return{type:f,payload:e}}},I=Object(l.b)(null,X)(J);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var R=function(e){function n(){var e,t;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(a)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(p.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addExpense(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t.state)),t.setState({name:"",amount:0})},t}return Object(O.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.amount,r=t<=0||!n;return a.a.createElement(S,{onSubmit:this.handleSubmit},a.a.createElement(D,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense name",a.a.createElement(T,{type:"text",name:"name",value:n,onChange:this.handleChange})),a.a.createElement(D,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense amount",a.a.createElement(T,{type:"number",name:"amount",value:t,onChange:this.handleChange})),a.a.createElement(G,{label:"Add",type:"submit",disable:r}))}}]),n}(r.Component),U={addExpense:function(e){return{type:g,payload:m({id:b.a.generate()},e)}}},W=Object(l.b)(null,U)(R);function $(){var e=Object(c.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return $=function(){return e},e}var q=i.a.table($()),H=function(e){var n=e.items,t=e.deleteExpense;return a.a.createElement(a.a.Fragment,null,n.length>0&&a.a.createElement(q,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Expense name"),a.a.createElement("th",null,"Expense amount"),a.a.createElement("th",null))),a.a.createElement("tbody",null,n.map((function(e){var n=e.id,r=e.name,o=e.amount;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,r),a.a.createElement("td",null,o),a.a.createElement("td",null,a.a.createElement(G,{label:"Delete",onClick:function(){return t(n)}})))})))))},K={deleteExpense:function(e){return{type:v,payload:e}}},M=Object(l.b)((function(e){return{items:e.expenses}}),K)(H);function Q(){var e=Object(c.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return Q=function(){return e},e}function V(){var e=Object(c.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return V=function(){return e},e}function Y(){var e=Object(c.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return Y=function(){return e},e}var Z=i.a.div(Y(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),ee=i.a.p(V()),ne=i.a.p(Q()),te=function(e){var n=e.label,t=e.value,r=e.isPositive;return a.a.createElement(Z,{isPositive:r},a.a.createElement(ee,null,n),a.a.createElement(ne,null,t,"\xa0$"))},re=te;function ae(){var e=Object(c.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ae=function(){return e},e}te.defaultProps={isPositive:!1};var oe=i.a.section(ae()),ue=function(e){var n=e.budget,t=e.expenses,r=e.balance;return a.a.createElement(oe,null,a.a.createElement(re,{label:"Budget",value:n,isPositive:!0}),a.a.createElement(re,{label:"Expenses",value:t}),a.a.createElement(re,{label:"Balance",value:r,isPositive:r>=0}))},le=Object(l.b)((function(e){return{budget:e.budget,expenses:e.expenses.reduce((function(e,n){return e+ +n.amount}),0),balance:e.budget-e.expenses.reduce((function(e,n){return e+ +n.amount}),0)}}))(ue);function ce(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return ce=function(){return e},e}var ie=i.a.div(ce()),pe=function(){return a.a.createElement(ie,null,a.a.createElement(I,null),a.a.createElement(le,null),a.a.createElement(W,null),a.a.createElement(M,null))},se=t(6),be=t(25),de=t(26),me=Object(se.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case f:return r;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case g:return[].concat(Object(de.a)(e),[r]);case v:return e.filter((function(e){return e.id!==r}));default:return e}}}),fe=Object(se.createStore)(me,Object(be.composeWithDevTools)());t(48);u.a.render(a.a.createElement(l.a,{store:fe},a.a.createElement(pe,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a29b69e1.chunk.js.map