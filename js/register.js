$(document).ready(function () {

  var notSameError = $("#notSameError");
  var mobileError = $("#mobileError");
  var emailError = $("#emailError");
  var passError = $("#passError");
  var flag = true;

$('#regPassword').keyup(() => {
  if (IsValidPass($('#regPassword').val()) == false) {
      passError.text("Password must have special char and a number");
      flag = false;
  } else {
      passError.text("");
      flag = true;
  }
  
})

$('#regCPassword').keyup(() => {
  if ($('#regPassword').val() !== $('#regCPassword').val()) {
      notSameError.text("Please enter same password");
      flag = false;
  } else {
      notSameError.text("");
      flag = true;
  }  
})

$('#regPhone').keyup(() => {
  if($('#regPhone').val().length == 10) {
      mobileError.text("");
      flag = true;
  }
  else if ($('#regPhone').val().length < 10 || $('#regPhone').val().length > 10) {
      mobileError.text("Please enter 10 digit number only");
      flag = false;
  }
})

$('#regEmail').keyup(() => {
  if (IsEmail($('#regEmail').val()) == false) {
      emailError.text("Please enter valid email with .com");
      flag = false;
  } else {
      emailError.text("");
      flag = true;
  }
})




// $(document).ready(function () {
    $('#registrationForm').submit(function (event) {
      event.preventDefault();

      const regFName = $('#regFName').val();
      const regLName = $('#regLName').val();
      const regEmail = $('#regEmail').val();
      const regPhone = $('#regPhone').val();
      const regPassword = $('#regPassword').val();
      const regCPassword = $('#regCPassword').val();
      const imagePath = $('#imageUrl').val();
      const imageName = imagePath.split(/(\\|\/)/g).pop();
      var imageUrl;
      if(imageName === ""){
        imageUrl = "user.jpg";
      }else{
        imageUrl = imageName;
      }
      // console.log('File name:', imageUrl);

      const token = generateToken(); // Replace with your token generation logic
  
      // Save registration data in local storage
      
      if (flag == true) {

      axios.post('http://localhost:3000/users', { regFName,regLName,regEmail,regPhone,regPassword,imageUrl, token})
        .then(response => {
          console.log('Registration successful:', response.data);
          // const userData = { regFName,regLName,regEmail,regPhone,regPassword,regCPassword, token };
          
        //   alert('Registration successful. Please log in.');
          window.location.href = 'login.html';
        })
        
        .catch(error => {
          console.error('Registration failed:', error);
        });
      }
    });
  // });
});
function generateToken() {
    // Replace this with your token generation logic
    return 'dummyToken';
  }

  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
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
