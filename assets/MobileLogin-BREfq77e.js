import{d as I,ai as M,P as d,k as z,W as p,o as y,c as A,b as m,B as e,m as o,D as i,f as F,g as L,ak as _}from"./index-untXIC5m.js";import{l as S,E as U,a as q,b as P,c as $}from"./login-BiIaXUQD.js";import{a as D,E as O}from"./el-button-RZyaAOMD.js";import"./el-badge-QthoRExF.js";import"./aria-D7INUw58.js";import"./typescript-Bp3YSIOJ.js";import"./index-AXqGUoIl.js";const T=m("div",null,[m("h1",{style:{"margin-bottom":"0"}},"手机号登录"),m("p",{style:{"margin-top":"0",color:"#848486"}},"MORECUP的小伙伴，请输入您的手机号登录")],-1),W={style:{"margin-top":"3rem"}},Z=I({__name:"MobileLogin",setup(j){const h=M(),n=d({mobile:"",verifyCode:""}),f=z(),C=d({phoneNumber:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[345678]\d{9}$/,message:"请输入正确的手机",trigger:"blur"}],verifyCode:[{required:!0,message:"请输入密码",trigger:"blur"},{len:4,message:"请输入正确的验证码",trigger:"blur"}]}),l=d({show:!1,msg:""}),b=()=>{l.show=!1,l.msg=""},v=()=>{_.push({name:"AccountLogin"})},k=()=>{console.log("sendVerifyCode")},V=async r=>{r&&await r.validate(t=>{t&&w()})},w=()=>{S(n).then(r=>{if(r.code!=="0"){l.show=!0,l.msg=r.msg;return}h.setUserPermissions(r.data);let t=_.currentRoute.value.query.to;t||(t="/"),_.replace({path:t})})};return(r,t)=>{const E=p("Iphone"),u=D,g=U,s=q,x=p("Message"),c=O,B=p("Right"),N=P,R=$;return y(),A("div",null,[T,m("div",W,[e(N,{model:n,rules:C,ref_key:"ruleFormRef",ref:f},{default:o(()=>[e(s,{prop:"phoneNumber"},{default:o(()=>[e(g,{size:"large",modelValue:n.mobile,"onUpdate:modelValue":t[0]||(t[0]=a=>n.mobile=a),placeholder:"请输入您的手机号"},{prefix:o(()=>[e(u,{class:"el-input__icon"},{default:o(()=>[e(E)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{prop:"verifyCode"},{default:o(()=>[e(g,{size:"large",modelValue:n.verifyCode,"onUpdate:modelValue":t[1]||(t[1]=a=>n.verifyCode=a),placeholder:"请输入短信验证码"},{prefix:o(()=>[e(u,{class:"el-input__icon"},{default:o(()=>[e(x)]),_:1})]),suffix:o(()=>[i(" | "),e(c,{type:"primary",onClick:k,link:""},{default:o(()=>[i("发送验证码")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:o(()=>[e(c,{style:{width:"100%"},type:"primary",size:"large",round:"",onClick:t[2]||(t[2]=a=>V(f.value))},{default:o(()=>[i("登录")]),_:1})]),_:1}),e(s,null,{default:o(()=>[e(c,{onClick:v,style:{width:"100%"},type:"primary",size:"large",link:""},{default:o(()=>[i(" 账号密码登录"),e(u,null,{default:o(()=>[e(B)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"]),l.show?(y(),F(R,{key:0,title:"登录失败",description:l.msg,type:"error","show-icon":"",onClose:b},null,8,["description"])):L("",!0)])])}}});export{Z as default};