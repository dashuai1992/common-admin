import{B as R,am as U,O as i,r as F,ag as m,o as g,c as S,b as c,L as e,G as t,ah as h,F as z,S as A,ao as p}from"./index-C4SaNNus.js";import{l as N,E as q,a as I,b as M,c as O}from"./login--qyl8xDc.js";import{j as P,p as j}from"./el-button-jLCvRjuT.js";const G=c("div",null,[c("h1",{style:{"margin-bottom":"0"}},"账号密码登录"),c("p",{style:{"margin-top":"0",color:"#848486"}},"MORECUP的小伙伴，请输入您的账号登录")],-1),T={style:{"margin-top":"3rem"}},K=R({__name:"AccountLogin",setup($){const w=U(),n=i({account:"",password:""}),d=F(),y=i({account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),r=i({show:!1,msg:""}),k=()=>{r.show=!1,r.msg=""},V=()=>{p.push({name:"MobileLogin"})},v=async s=>{s&&await s.validate(o=>{o&&C()})},C=()=>{N(n).then(s=>{if(s.code!=="0"){r.show=!0,r.msg=s.msg;return}w.setUserPermissions(s.data);let o=p.currentRoute.value.query.to;o||(o="/"),p.replace({path:o})})};return(s,o)=>{const b=m("User"),u=P,_=q,l=I,E=m("Lock"),f=j,L=m("Right"),x=M,B=O;return g(),S("div",null,[G,c("div",T,[e(x,{model:n,rules:y,ref_key:"ruleFormRef",ref:d},{default:t(()=>[e(l,{prop:"account"},{default:t(()=>[e(_,{size:"large",modelValue:n.account,"onUpdate:modelValue":o[0]||(o[0]=a=>n.account=a),placeholder:"请输入账号"},{prefix:t(()=>[e(u,{class:"el-input__icon"},{default:t(()=>[e(b)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(l,{prop:"password"},{default:t(()=>[e(_,{type:"password",size:"large",modelValue:n.password,"onUpdate:modelValue":o[1]||(o[1]=a=>n.password=a),placeholder:"请输入密码"},{prefix:t(()=>[e(u,{class:"el-input__icon"},{default:t(()=>[e(E)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(l,null,{default:t(()=>[e(f,{style:{width:"100%"},type:"primary",size:"large",round:"",onClick:o[2]||(o[2]=a=>v(d.value))},{default:t(()=>[h("登录")]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(f,{onClick:V,style:{width:"100%"},type:"primary",size:"large",link:""},{default:t(()=>[h(" 手机号登录"),e(u,null,{default:t(()=>[e(L)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"]),r.show?(g(),z(B,{key:0,title:"登录失败",description:r.msg,type:"error","show-icon":"",onClose:k},null,8,["description"])):A("",!0)])])}}});export{K as default};
