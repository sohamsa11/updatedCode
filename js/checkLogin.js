var isLogin = sessionStorage.getItem("isLogin");

if(isLogin !== "true"){
    window.location.replace("index.html");
}