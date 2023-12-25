if (sessionStorage.getItem("isLogin") === "true") {

    const apiUrls = 'http://localhost:3000/users'

    var userId = sessionStorage.getItem("userID");
    var userImg = sessionStorage.getItem("userImg");
    var fullName = sessionStorage.getItem("FName") + " " + sessionStorage.getItem("LName");

    // console.log(userImg);

    function loadProfile() {
        var html = `<img src="images/user/`;

        if (userImg !== "user.jpg") {
            html += `${userImg}`;
        } else {
            html += 'user.jpg';
        }

        html += `" class="profile-pic rounded-circle img-fluid" alt="user">
        <div class="p-image">
        <i class="ri-pencil-line upload-button"></i>
        <input id="imageUrl" class="file-upload" type="file" accept="image/*">
        </div>`;

        $('#profileContainer').html(html);

        $('#userName').val(fullName)

    }
    loadProfile();


    function updateUser(e) {
        e.preventDefault();
        var newFullName = $('#userName').val().trim();
        const imagePath = $('#imageUrl').val();
        const imageName = imagePath.split(/(\\|\/)/g).pop();

        
        if((imageName === userImg || imageName === "") && (fullName === newFullName || newFullName == "")){
            alert("Profile data is not changed or name may be empty");
        }else {
            const nameArr = newFullName.split(" ");

            if(nameArr.length < 2){
                alert("Please enter both your first name and last name");
            }else{
                var fName = nameArr[0];
                var lName = nameArr[1];
                console.log(fName, lName, userId);


                var img;
                
                if(imageName === ""){
                    img = userImg;
                }else{
                    img = imageName;
                }
    
                axios.patch(`${apiUrls}/${userId}`, {regFName: fName, regLName: lName, imageUrl: img})
                .then(()=>{
                    sessionStorage.setItem("FName", fName);
                    sessionStorage.setItem("LName", lName);
                    sessionStorage.setItem("userImg", img);
                    alert("Your profile data is updated..");
                    loadProfile();
                }).catch(err=>{
                    console.log("error while updating user profile", err);
                })

            }
    
        }
    }

}