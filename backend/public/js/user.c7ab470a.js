"use strict";(self["webpackChunk_715job"]=self["webpackChunk_715job"]||[]).push([[378],{427:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"body"},[s("div",{staticClass:"main"},[t._m(0),t._m(1),t._m(2),s("div",{staticClass:"forgetPwd"},[t._m(3),s("span",{attrs:{id:"findPwd"}},[s("router-link",{attrs:{to:"/user/findpwd"}},[t._v("비밀번호 찾기")])],1)]),t._m(4)])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"findIdResultHead"},[s("p",[s("strong",[t._v("아이디 찾기 결과")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"resultComment"},[s("p",[s("strong",[t._v("회원님의 학번으로 가입된 아이디가 있습니다.")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"resultIdInfo"},[s("input",{attrs:{type:"text"}})])},function(){var t=this,s=t._self._c;return s("span",{attrs:{id:"forgetPwd"}},[s("p",[t._v("비밀번호가 기억나지 않으세요?")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"loginButton"},[s("form",{attrs:{action:""}},[s("button",[t._v("로그인")])])])}],r={components:{},data(){return{sampleData:""}},setup(){},created(){},mounted(){},unmounted(){},methods:{}},o=r,n=e(1001),l=(0,n.Z)(o,a,i,!1,null,"f2628278",null),d=l.exports},1053:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var a=e(7956),i=e(2095),r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"body"},[s("div",{staticClass:"main"},[t._m(0),s("div",{staticClass:"findContainer"},[s("div",{staticClass:"findButton"},[s("router-link",{attrs:{to:"/user/findid"}},[s(a.Z,{attrs:{outlined:"",id:"findIdButton",outlinedcolor:"black"}},[t._v(" 아이디 찾기 ")])],1)],1),s("div",{staticClass:"findButton"},[s("router-link",{attrs:{to:"/user/findpwd"}},[s(a.Z,{attrs:{id:"findPwdButton",color:"#F1F1F1"}},[t._v(" 비밀번호 찾기 ")])],1)],1)]),s("form",{attrs:{action:"",method:"”post”",enctype:"”multipart/form-data”"}},[s("div",{staticClass:"studentInfoBox"},[s(i.Z,{staticClass:"v_text_input",attrs:{label:"학번"}})],1),s("div",{staticClass:"studentInfoBox"},[s(i.Z,{staticClass:"v_text_input",attrs:{label:"이름"}})],1),s("div",{staticClass:"findIdForm"},[s("router-link",{attrs:{id:"toFindIdResult",to:"/user/findidresult"}},[s("input",{attrs:{type:"submit",value:"아이디 찾기"}})])],1)])])])},o=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"findIdHead"},[s("p",[s("strong",[t._v("아이디 찾기")])])])}],n={components:{},data(){return{sampleData:""}},setup(){},created(){},mounted(){},unmounted(){},methods:{}},l=n,d=e(1001),u=(0,d.Z)(l,r,o,!1,null,"7c8d3c2a",null),c=u.exports},3656:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var a=e(7956),i=e(2095),r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"body"},[s("div",{staticClass:"main"},[t._m(0),s("div",{staticClass:"findContainer"},[s("div",{staticClass:"findButton"},[s("router-link",{attrs:{to:"/user/findid"}},[s(a.Z,{attrs:{id:"findIdButton",color:"#F1F1F1"}},[t._v(" 아이디 찾기 ")])],1)],1),s("div",{staticClass:"findButton"},[s("router-link",{attrs:{to:"/user/findpwd"}},[s(a.Z,{attrs:{outlined:"",id:"findPwdButton",outlinedcolor:"black"}},[t._v(" 비밀번호 찾기 ")])],1)],1)]),s("form",{attrs:{action:"",method:"”post”",enctype:"”multipart/form-data”"}},[s("div",{staticClass:"accountInfoBox"},[s(i.Z,{staticClass:"v_text_input",attrs:{label:"아이디"}})],1),s("div",{staticClass:"accountInfoBox"},[s(i.Z,{staticClass:"v_text_input",attrs:{label:"비밀번호 확인 질문",value:"당신이 졸업한 초등학교는?",readonly:""}})],1),s("div",{staticClass:"accountInfoBox"},[s(i.Z,{staticClass:"v_text_input",attrs:{label:"비밀번호 확인 답변"}})],1),s("div",{staticClass:"findIdForm"},[s("router-link",{attrs:{id:"toFindIdResult",to:"/user/findidresult"}},[s("input",{attrs:{type:"submit",value:"비밀번호 찾기"}})])],1)])])])},o=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"findPwHead"},[s("p",[s("strong",[t._v("비밀번호 찾기")])])])}],n={components:{},data(){return{sampleData:""}},setup(){},created(){},mounted(){},unmounted(){},methods:{}},l=n,d=e(1001),u=(0,d.Z)(l,r,o,!1,null,"2037b54a",null),c=u.exports},584:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var a=e(2095),i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"body"},[s("div",{staticClass:"main"},[s("div",{staticClass:"loginHead"},[t._v("로그인")]),s("div",{staticClass:"loginContents"},[s("div",{staticClass:"idBox"},[s(a.Z,{staticClass:"v_text_input",attrs:{type:"text",id:"id",label:"아이디",autocomplete:"off"},model:{value:t.user.userid,callback:function(s){t.$set(t.user,"userid",s)},expression:"user.userid"}})],1),s("div",{staticClass:"passwordBox"},[s(a.Z,{staticClass:"v_text_input",attrs:{id:"password",label:"비밀번호",type:"password"},model:{value:t.user.password,callback:function(s){t.$set(t.user,"password",s)},expression:"user.password"}})],1),s("div",{staticClass:"loginButton"},[s("button",{on:{click:t.logIn}},[t._v("로그인")]),s("button",{on:{click:t.check}},[t._v("아무거나")])]),s("div",{staticClass:"findButtons"},[s("ul",{staticClass:"findButtonLists"},[s("li",[s("router-link",{attrs:{to:"/user/findid"}},[t._v("아이디 찾기")])],1),s("li",[t._v("|")]),s("li",[s("router-link",{attrs:{to:"/user/findpwd"}},[t._v("비밀번호 찾기")])],1),s("li",[t._v("|")]),s("li",[s("router-link",{attrs:{to:"/user/signup"}},[t._v("회원가입")])],1)])])])])])},r=[],o={data(){return{user:{userid:"",password:""}}},methods:{check(){console.log(this.user.userid)},logIn(t){this.$http.post("/api/users/logIn",{user:this.user}).then((t=>{!0===t.data.success&&alert(t.data.message),!1===t.data.success&&alert(t.data.message)})).catch((t=>{alert(t)}))}}},n=o,l=e(1001),d=(0,l.Z)(n,i,r,!1,null,"eecb4e62",null),u=d.exports},5116:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var a=e(7956),i=e(2095),r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"body"},[s("div",{staticClass:"main"},[t._m(0),s("div",{staticClass:"nameInfo"},[s("div",{staticClass:"studentId"},[s(i.Z,{staticClass:"v_text_input",attrs:{type:"text",id:"studentid",label:"학번",autocomplete:"off"},model:{value:t.user.studentid,callback:function(s){t.$set(t.user,"studentid",s)},expression:"user.studentid"}})],1),s("div",{staticClass:"studentName"},[s(i.Z,{staticClass:"v_text_input",attrs:{type:"text",id:"name",label:"이름",autocomplete:"off"},model:{value:t.user.name,callback:function(s){t.$set(t.user,"name",s)},expression:"user.name"}})],1)]),s("div",{staticClass:"degreeInfo"},[s("div",{staticClass:"positionInfo"},[s("p",[t._v("직책")]),s("div",{staticClass:"degreeButton"},[s("span",[s(a.Z,{attrs:{id:"student",ripple:!1,color:t.bgcolorStudent,width:"87px",height:"51px"},on:{click:t.selectStudent}},[t._v(" 학생 ")])],1),s("span",[s(a.Z,{attrs:{id:"professor",ripple:!1,color:t.bgcolorProfessor,width:"87px",height:"51px"},on:{click:t.selectProfessor}},[t._v(" 교수 ")])],1)])]),s("div",{staticClass:"degreeCourseInfo"},[s("p",[t._v("학위과정")]),s("div",{staticClass:"degreeButton"},[s("span",[s(a.Z,{attrs:{id:"bachelor",ripple:!1,color:t.bgcolorBachelor,width:"87px",height:"51px"},on:{click:t.selectBachelor}},[t._v(" 학사 ")])],1),s("span",[s(a.Z,{attrs:{id:"master",ripple:!1,color:t.bgcolorMaster,width:"87px",height:"51px"},on:{click:t.selectMaster}},[t._v(" 석박사 ")])],1)])])]),s("div",{staticClass:"idInfo"},[s("div",{staticClass:"infoBox"},[s(i.Z,{ref:"userid",staticClass:"v_text_input",staticStyle:{"margin-bottom":"24px"},attrs:{type:"text",id:"id",autocomplete:"off",label:"아이디"},model:{value:t.user.userid,callback:function(s){t.$set(t.user,"userid",s)},expression:"user.userid"}})],1)]),s("div",{staticClass:"passwordInfo"},[s("div",{staticClass:"infoBox"},[s(i.Z,{staticClass:"v_text_input",staticStyle:{"margin-bottom":"24px"},attrs:{type:"password",id:"password",label:"비밀번호"},model:{value:t.user.password,callback:function(s){t.$set(t.user,"password",s)},expression:"user.password"}}),s(i.Z,{staticClass:"v_text_input",staticStyle:{"margin-bottom":"24px"},attrs:{label:"비밀번호 확인",type:"password"}})],1)]),s("div",{staticClass:"passwordVerify"},[s("div",{staticClass:"infoBox"},[s(i.Z,{staticClass:"v_text_input",staticStyle:{"margin-bottom":"24px"},attrs:{id:"password-question",label:"비밀번호 확인 질문",value:"당신이 졸업한 초등학교는?",readonly:""}})],1)]),s("div",{staticClass:"passwordVerify"},[s("div",{staticClass:"infoBox"},[s(i.Z,{staticClass:"v_text_input",staticStyle:{"margin-bottom":"24px"},attrs:{type:"text",id:"password-answer",label:"비밀번호 확인 답변"},model:{value:t.user.passwordanswer,callback:function(s){t.$set(t.user,"passwordanswer",s)},expression:"user.passwordanswer"}})],1)]),s("div",{staticClass:"emailInfo"},[s("div",{staticClass:"infoBox"},[s(i.Z,{staticClass:"v_text_input",attrs:{type:"email",id:"email",label:"이메일"},model:{value:t.user.email,callback:function(s){t.$set(t.user,"email",s)},expression:"user.email"}})],1)]),s("div",{staticClass:"signInButton"},[s(a.Z,{on:{click:t.signUp}},[t._v("회원가입")])],1)])])},o=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"signUpHead"},[s("h6",[t._v("회원가입")])])}],n={components:{},data(){return{bgcolorStudent:"#d9d9d9",bgcolorProfessor:"#d9d9d9",bgcolorBachelor:"#d9d9d9",bgcolorMaster:"#d9d9d9",user:{studentid:"",name:"",position:"",course:"",userid:"",password:"",passwordanswer:"",email:""}}},methods:{signUp(t){this.$http.post("/api/users/signUp",{user:this.user}).then((t=>{!0===t.data.success&&(alert(t.data.message),this.$router.push("/"),console.log("A")),!1===t.data.success&&(alert(t.data.message),this.$refs.userid.focus())})).catch((function(t){alert(t)}))},selectStudent(){"#d9d9d9"===this.bgcolorStudent&&(this.bgcolorStudent="white",this.bgcolorProfessor="#d9d9d9",this.user.position="student")},selectProfessor(){"#d9d9d9"===this.bgcolorProfessor&&(this.bgcolorStudent="#d9d9d9",this.bgcolorProfessor="white",this.user.position="professor")},selectBachelor(){"#d9d9d9"===this.bgcolorBachelor&&(this.bgcolorBachelor="white",this.bgcolorMaster="#d9d9d9",this.user.course="bachelor")},selectMaster(){"#d9d9d9"===this.bgcolorMaster&&(this.bgcolorBachelor="#d9d9d9",this.bgcolorMaster="white",this.user.course="master")}}},l=n,d=e(1001),u=(0,d.Z)(l,r,o,!1,null,"237ef8b7",null),c=u.exports}}]);
//# sourceMappingURL=user.c7ab470a.js.map