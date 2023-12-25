const apiUrls = 'http://localhost:3000/users'

$(document).ready(function () {

    var notSameError = $("#notSameError");
    var passError = $("#passError");
    var flag = true;

    $('#newPassword').keyup(() => {
        if (IsValidPass($('#newPassword').val()) == false) {
            passError.text("Password must have special char and a number");
            flag = false;
        } else {
            passError.text("");
            flag = true;
        }
        
      })
      
      $('#confirmPassword').keyup(() => {
        if ($('#newPassword').val() !== $('#confirmPassword').val()) {
            notSameError.text("Please enter same password");
            flag = false;
        } else {
            notSameError.text("");
            flag = true;
        }  
      })



    $('#updatePassword').submit(function (event) {
        event.preventDefault();

        const oldPassword = $("#oldPassword").val();
        const newPassword = $("#newPassword").val();

        // console.log(oldPassword, newPassword);

        sessionStorage.setItem("oldPassword", oldPassword);
        sessionStorage.setItem("newPassword", newPassword);
        const userID = sessionStorage.getItem("userID");

        // console.log(userID);

        if (flag == true) {

        axios.get('http://localhost:3000/users')
            .then(response => {
                var flag = 0;
                response.data.forEach(element => {
                    if(element.id == userID){
                        // console.log("User ID matched");
                        if(element.regPassword === oldPassword){
                            // console.log("User Password matched");


                            updatePassword(userID, newPassword);
                            // console.log("Password updated successfull");
                            alert("Password updated successfully!!");
                            $("#oldPassword").val("");
                            $("#newPassword").val("");
                            $("#confirmPassword").val("");
                            // window.location.replace("index.html");
                        }else{
                            $("#wrongPassword").text("Please enter correct old password.");
                            $("#oldPassword").val("");
                        }
                        flag = 1;
                    }
                });
                if(flag == 0){
                    $("#wrongPassword").text("Username is not found. Please register to login.");
                }

            })

            .catch(error => {
                console.error('Login failed:', error);
            });
        }

    });
});

function updatePassword(userId, newPassword){
    axios.patch(`${apiUrls}/${userId}`, {regPassword: newPassword}).then(response =>{
        console.log('Username updated successfully: ', response.data);
    }).catch(error =>{
        console.error('Error updating username: ', error);
    });
}

function IsValidPass(password) {
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(password)) {
        return false;
    }
    else {
        return true;
    }
}