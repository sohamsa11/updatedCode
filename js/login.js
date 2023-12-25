$(document).ready(function () {
    $("#loginForm").submit(function (event) {
      event.preventDefault();
        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();
        console.log(email, password)
        sessionStorage.setItem("name", email);
        $.ajax({
            url: "http://localhost:3000/users",
            type: "get",
            success: function (response) {
              // console.log(response)
                for (let i = 0; i < response.length; i++) {
                    let loginEmail = response[i].regEmail;
                    let loginPassword = response[i].regPassword;
  
                    console.log(loginEmail, loginPassword);
                    var ans = 0
                    if (email == loginEmail) {
                        if (password == loginPassword) {

                            sessionStorage.setItem("isLogin", true);
                            sessionStorage.setItem("FName", response[i].regFName);
                            sessionStorage.setItem("LName", response[i].regLName);
                            sessionStorage.setItem("email", response[i].regEmail);
                            sessionStorage.setItem("userID", response[i].id);
                            sessionStorage.setItem("userImg", response[i].imageUrl);

                            alert("Login Successfull!!!!")
                            ans = 1;
                            window.location.replace("index.html");
                        }
                        else{
                            $("#loginError").text("Please enter correct password.");
                            $("#loginPassword").val("");
                        }
                        ans = 1
                    }
                }

                if(ans == 0){
                    $("#loginError").text("Username is not found. Please register to login.");
                    $("#loginEmail").val("");
                    $("#loginPassword").val("");
                }
            },
            error: function () {
                alert("Error Occur");
            }
        })
    })
  })
