let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateInput() {
 
    //check username is empty
    if(userName.value.trim()===""){
        onError(userName,"User Name cannot be empty");
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannnot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }
//password
    if(pwd.value.trim()===""){
        onError(pwd,"Password cannot be empty");
    }else{
        onSuccess(pwd);
    }
//Confirm password
    if(conPwd.value.trim()===""){
        onError(conPwd,"Confirm Password cannot be empty");
    }else{
        if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password and Confirm password not matching");
        }
        else
        onSuccess(conPwd);
    }

  
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
})

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    messageEle.innerText=input;   
    parent.classList.remove("error");
    parent.classList.add("success");
}

function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;   
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}