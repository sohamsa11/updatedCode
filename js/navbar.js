var isLogin = sessionStorage.getItem("isLogin");

if(isLogin === "true"){
   var userImg = sessionStorage.getItem("userImg");
   var navHtml = `<li class="nav-item nav-icon">
   <a href="#" class="search-toggle device-search">
       <i class="ri-search-line"></i>
   </a>
   <div class="search-box iq-search-bar d-search">
      <form onsubmit="submitSearch(event)" action="#" class="searchbox">
          <div class="form-group position-relative">
              <input id="searchInput" type="text" class="text search-input font-size-12" placeholder="type here to search..."
                  onkeydown="handleSearch(event)">
          </div>
      </form>
  </div>
</li>
         <li class="nav-item nav-icon">
            <a href="#" class="search-toggle" data-toggle="search-toggle">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" class="noti-svg">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                     d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
               </svg>
               <span class="bg-danger dots"></span>
            </a>
            <div class="iq-sub-dropdown">
               <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body">
                     <a href="#" class="iq-sub-card">
                        <div class="media align-items-center">
                           <img src="images/notify/thumb-1.jpg" class="img-fluid mr-3" alt="streamit" />
                           <div class="media-body">
                              <h6 class="mb-0 ">Boot Bitty</h6>
                              <small class="font-size-12"> just now</small>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="iq-sub-card">
                        <div class="media align-items-center">
                           <img src="images/notify/thumb-2.jpg" class="img-fluid mr-3" alt="streamit" />
                           <div class="media-body">
                              <h6 class="mb-0 ">The Last Breath</h6>
                              <small class="font-size-12">15 minutes ago</small>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="iq-sub-card">
                        <div class="media align-items-center">
                           <img src="images/notify/thumb-3.jpg" class="img-fluid mr-3" alt="streamit" />
                           <div class="media-body">
                              <h6 class="mb-0 ">The Hero Camp</h6>
                              <small class="font-size-12">1 hour ago</small>
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </li>
         <li class="nav-item nav-icon">
            <a href="#" class="iq-user-dropdown search-toggle p-0 d-flex align-items-center" data-toggle="search-toggle">
               <img src="images/user/${userImg}" class="img-fluid avatar-40 rounded-circle" alt="user">
            </a>
            <div class="iq-sub-dropdown iq-user-dropdown">
               <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 pl-3 pr-3">
                     <a href="manage-profile.html" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                           <div class="right-icon">
                              <i class="ri-file-user-line text-primary"></i>
                           </div>
                           <div class="media-body ml-3">
                              <h6 class="my-0 ">Manage Profile</h6>
                           </div>
                        </div>
                     </a>
                     <a href="setting.html" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                           <div class="right-icon">
                              <i class="ri-settings-4-line text-primary"></i>
                           </div>
                           <div class="media-body ml-3">
                              <h6 class="my-0 ">Settings</h6>
                           </div>
                        </div>
                     </a>
                     <a href="#" onclick="logout()" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                           <div class="right-icon">
                              <i class="ri-logout-circle-line text-primary"></i>
                           </div>
                           <div class="media-body ml-3">
                              <h6 class="my-0 ">Logout</h6>
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </li>
         <li class="nav-item nav-icon">
            <a href="fav.html" class="btn btn-hover iq-button login-signupBtn mr-3"><i
               class="fa fa-star mr-2" aria-hidden="true"></i>Favorite </a>
         </li>`;

   $('#navFunc').html(navHtml);
}else{
   var navHtml = `<li class="nav-item nav-icon">
   <a href="#" class="search-toggle device-search">
       <i class="ri-search-line"></i>
   </a>
   <div class="search-box iq-search-bar d-search">
      <form onsubmit="submitSearch(event)" action="#" class="searchbox">
          <div class="form-group position-relative">
              <input id="searchInput" type="text" class="text search-input font-size-12" placeholder="type here to search..."
                  onkeydown="handleSearch(event)">
          </div>
      </form>
  </div>
</li>
<li class="nav-item nav-icon">
<a href="login.html" class="btn btn-hover iq-button login-signupBtn mr-3"><i
      class="fa fa-sign-in mr-2" aria-hidden="true"></i>Login</a>
<a href="sign-up.html" class="btn btn-hover iq-button login-signupBtn"><i
      class="fa fa-sign-out mr-2" aria-hidden="true"></i>Register</a>
</li>`;
   $('#navFunc').html(navHtml);
}
