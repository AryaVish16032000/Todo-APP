var chats=[];
var stringydata=localStorage.getItem("chats");
var leftdiv=document.getElementById("leftdiv");
if (stringydata)
{
  chats=JSON.parse(stringydata);
  chats.forEach(function(chattry){
var value=chattry.value;
var chat_Container=document.createElement("div");
var chat_label=document.createElement("label");
var deletechat=document.createElement("button");
var checkbutton=document.createElement("button");
deletechat.setAttribute("class", "deletebutton");
checkbutton.setAttribute("class", "checkbutton");
deletechat.innerHTML="Delete";
checkbutton.innerHTML="Mark";
if (chattry.mark)
{
checkbutton.style.background="#009933";
checkbutton.innerHTML="completed";
}

deletechat.addEventListener("click",function(){
leftdiv.removeChild(chat_Container);
c=chats.indexOf(chattry);
chats.splice(c,1);
var stringform=JSON.stringify(chats);
localStorage.setItem("chats", stringform);
});
checkbutton.addEventListener("click",function(){
checkbutton.style.background="#009933";
checkbutton.innerHTML="completed";
chattry.mark=true;
var stringform=JSON.stringify(chats)
localStorage.setItem("chats", stringform)
;});

var chat_h1=document.createElement("h1");
chat_h1.innerHTML=`${value}`;
chat_h1.style.fontSize="10px";
chat_Container.appendChild(chat_label);
chat_Container.appendChild(chat_h1);
chat_Container.appendChild(deletechat);
chat_Container.appendChild(checkbutton);
leftdiv.appendChild(chat_Container);
  });
}
/////////////////////////////////////////////////////////////////////
var rightdiv=document.getElementById("rightdiv");
var input=document.getElementById("input");
input.addEventListener("keyup",function(event){
if (event.keyCode===13)
{
var value=input.value;
var chattry={}
var chat_Container=document.createElement("div");
var chat_label=document.createElement("label");
var deletechat=document.createElement("button");
var checkbutton=document.createElement("button");
deletechat.setAttribute("class", "deletebutton");
checkbutton.setAttribute("class", "checkbutton");
deletechat.innerHTML="Delete";
checkbutton.innerHTML="Mark";

deletechat.addEventListener("click",function(){
leftdiv.removeChild(chat_Container);
c=chats.indexOf(chattry);
chats.splice(c,1); ByteLengthQueuingStrategy
var stringform=JSON.stringify(chats);
localStorage.setItem("chats", stringform);
});

checkbutton.addEventListener("click",function(){
checkbutton.style.background="#009933";
checkbutton.innerHTML="completed";
chattry.mark=true;
var stringform=JSON.stringify(chats)
localStorage.setItem("chats", stringform)
;});

var chat_h1=document.createElement("h1");
chat_h1.innerHTML=`${value}`;
chat_h1.style.fontSize="10px";

chat_Container.appendChild(chat_h1);
chat_Container.appendChild(deletechat);
chat_Container.appendChild(checkbutton);
leftdiv.appendChild(chat_Container);
chattry.value=value;
chattry.mark=false;
chats.push(chattry)
var stringform=JSON.stringify(chats)
localStorage.setItem("chats", stringform)
input.value="";

}

})