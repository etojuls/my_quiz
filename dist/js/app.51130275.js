(function(){"use strict";var e={7182:function(e,t,s){var n=s(9242),r=s(3396);const i={class:"quiz"},o={class:"quiz__container"},u=(0,r._)("div",{class:"quiz__heading"}," My first quiz. ",-1);function c(e,t,s,n,c,l){const a=(0,r.up)("app-questions"),q=(0,r.up)("app-reult");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",o,[u,c.questionsAnswered<c.questions.length?((0,r.wg)(),(0,r.j4)(a,{key:0,questions:c.questions,questionsAnswered:c.questionsAnswered,onQuestionAnswered:l.questionAnswered},null,8,["questions","questionsAnswered","onQuestionAnswered"])):((0,r.wg)(),(0,r.j4)(q,{key:1,questionCorrect:c.questionCorrect,questionsAnswered:c.questionsAnswered,questions:c.questions,onQuizReset:l.quizReset},null,8,["questionCorrect","questionsAnswered","questions","onQuizReset"]))])])}var l=s(7139);const a={class:"quiz__title"},q={class:"quiz__items"},w=["onClick"];function d(e,t,s,i,o,u){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)((0,r._)("div",{class:"quiz__count"},(0,l.zw)(s.questionsAnswered+1)+" out of "+(0,l.zw)(s.questions.length),513),[[n.F8,s.questionsAnswered<s.questions.length]]),(0,r._)("div",{class:"quiz__progressbar",style:(0,l.j5)({width:100*(s.questionsAnswered+1)/s.questions.length+"%"})},null,4),(0,r.Wm)(n.W3,{name:"list",tag:"ul",class:"quiz__questions"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.questions,((e,t)=>(0,r.wy)(((0,r.wg)(),(0,r.iD)("li",{class:"quiz__question",key:e},[(0,r._)("div",a,(0,l.zw)(e.title),1),(0,r._)("ul",q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.answer,(e=>((0,r.wg)(),(0,r.iD)("li",{class:"quiz__item",key:e,onClick:t=>u.onQuestionAnswered(e)},(0,l.zw)(e.answer),9,w)))),128))])])),[[n.F8,s.questionsAnswered===t]]))),128))])),_:1})],64)}var f={emits:["question-answered"],props:{questions:{required:!0,type:Object},questionsAnswered:{required:!0,type:Number}},methods:{onQuestionAnswered(e){this.$emit("question-answered",e)}}},_=s(89);const p=(0,_.Z)(f,[["render",d]]);var h=p;const z={class:"quiz-result"},g={key:0,class:"quiz-result__title"},v=(0,r._)("span",{class:"quiz-result__title-green"},"Congrats!",-1),y={key:1,class:"quiz-result__title"},A=(0,r._)("span",{class:"quiz-result__title-yellow"},"Well done!",-1),m={key:2,class:"quiz-result__title"},b=(0,r._)("span",{class:"quiz-result__title-red"},"You can do better!",-1);function C(e,t,s,n,i,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",z,[s.questionCorrect===s.questions.length?((0,r.wg)(),(0,r.iD)("div",g,[v,(0,r.Uk)(" Your score is "+(0,l.zw)(s.questionCorrect)+" out of "+(0,l.zw)(s.questions.length),1)])):s.questionCorrect<s.questions.length&&s.questionCorrect>1?((0,r.wg)(),(0,r.iD)("div",y,[A,(0,r.Uk)(" Your score is "+(0,l.zw)(s.questionCorrect)+" out of "+(0,l.zw)(s.questions.length),1)])):((0,r.wg)(),(0,r.iD)("div",m,[b,(0,r.Uk)(" Your score is "+(0,l.zw)(s.questionCorrect)+" out of "+(0,l.zw)(s.questions.length),1)]))]),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>o.onQuizReset&&o.onQuizReset(...e)),class:"quiz-result__btn"},"RESET THE QUIZ")],64)}var k={emits:["quiz-reset"],props:{questionCorrect:{required:!0,type:Number},questions:{required:!0,type:Object}},methods:{onQuizReset(e){this.$emit("quizReset",e)}}};const O=(0,_.Z)(k,[["render",C]]);var j=O,Q={components:{AppQuestions:h,AppReult:j},name:"app",data(){return{questionsAnswered:0,questionCorrect:0,questions:[{title:"How much is 2+2",answer:[{answer:1,correct:!1},{answer:2,correct:!1},{answer:3,correct:!1},{answer:4,correct:!0}]},{title:'What letter is missing in the word "C_t?',answer:[{answer:"A",correct:!0},{answer:"O",correct:!1},{answer:"E",correct:!1},{answer:"I",correct:!1}]},{title:"What planet do we live on",answer:[{answer:"Mars",correct:!1},{answer:"Jupiter",correct:!1},{answer:"Earth",correct:!0},{answer:"Venus",correct:!1}]}]}},methods:{questionAnswered(e){e.correct&&(this.questionCorrect++,console.log(this.questionCorrect)),this.questionsAnswered++,console.log(this.questionsAnswered)},quizReset(){this.questionsAnswered=0,this.questionCorrect=0}}};const D=(0,_.Z)(Q,[["render",c]]);var R=D;(0,n.ri)(R).mount("#app")}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,n,r,i){if(!n){var o=1/0;for(a=0;a<e.length;a++){n=e[a][0],r=e[a][1],i=e[a][2];for(var u=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(s.O).every((function(e){return s.O[e](n[c])}))?n.splice(c--,1):(u=!1,i<o&&(o=i));if(u){e.splice(a--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[n,r,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,o=n[0],u=n[1],c=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in u)s.o(u,r)&&(s.m[r]=u[r]);if(c)var a=c(s)}for(t&&t(n);l<o.length;l++)i=o[l],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(a)},n=self["webpackChunkmy_quiz"]=self["webpackChunkmy_quiz"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(7182)}));n=s.O(n)})();
//# sourceMappingURL=app.51130275.js.map