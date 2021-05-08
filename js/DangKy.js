function checkValidateUserName() {
    var userName = document.getElementById("userName").value;
    if (userName.trim() == "") {
      // document.getElementById("error_username").className = "error"
      document.getElementById("error_username").innerHTML =
        "user name khong duoc de trong";
    } else {
      document.getElementById("error_username").innerHTML = "";
    }
  }
  function checkValidateEmail() {
    var email = document.getElementById("email").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.trim() == "") {
      document.getElementById("error_email").innerHTML =
        " email khong duoc de trong";
    }
    else if(!email.match(mailformat)) {
      document.getElementById("error_email").innerHTML =
        " email khong hop le";
    }
    else {
      document.getElementById("error_email").innerHTML = " ";
    }
  }
  function checkvalidatepassword() {
    var password = document.getElementById("password").value;
    if (password.trim() == "") {
      document.getElementById("error_password").innerHTML =
        "password khong duoc de trong";
    } else {
      document.getElementById("error_password").innerHTML = "";
    }
  }

  function register() {
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var isValiDate = false;
    if (userName.trim() == "") {
      isValiDate = true;
      document.getElementById("error_username").innerHTML =
        "user name khong duoc de trong";
      // document.getElementById("error_username").className = "error"
    }
    if (email.trim() == "") {
      isValiDate = true;
      document.getElementById("error_email").innerHTML =
        " email khong duoc de trong";
    }
    if (password.trim() == "") {
      isValiDate = true;
      document.getElementById("error_password").innerHTML =
        "password khong duoc de trong ";
    }
    if (password.length < 6) {
      isValiDate = true;
      if (password.trim() == "") {
        document.getElementById("error_password").innerHTML =
          "password khong duoc de trong ";
      }else{
         document.getElementById("error_password").innerHTML =
        "do dai password phai lon hon 6 ki tu";
      }
     
    }
    if (confirm != password) {
      isValiDate = true;
      document.getElementById("error_confirm").innerHTML =
        "password khong giong nhau";
    }
    if (isValiDate == true) {
      return;
    }

    // if(userName.trim() =="" || email.trim() =="" || password.trim() =="" || confirm.trim() == ""){
    //     console.log("dien du thong tin")
    //     return;

    // }
    // if(password.length<6 ){
    //     console.log("mat khau lon hon 6 ki tu")
    //     return;
    // }
    // if(confirm!=password){
    //     console.log("mat khau khong trung khop")
    //     return;
    // }
  }