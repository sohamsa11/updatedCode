

const apiUrl = 'http://localhost:3000';


function getFavContent() {
   var isLogin = sessionStorage.getItem("isLogin");
   var userId;
   if(isLogin === "true"){
      userId = sessionStorage.getItem('userID');
   }

   // get fav movie data
   axios.get(apiUrl+"/favMovie").then(favRes =>{
        var movieData = [];
        favRes.data.forEach(element => {
            if (userId == element.userId) {
                movieData.push(element.movieId);
            }
         });

         if(movieData.length === 0){
            $("#favMovieContainer").html('<p class="ml-4">No favorite Movie found..</p>');
         }else{
             axios.get(apiUrl+"/movie-content").then(movieRes=>{
    
                var favMovieHtml = '';
    
                movieRes.data.forEach(element => {
                    if (isPresent(movieData, element.id) === true){
                        favMovieHtml += `
                        <li class="slide-item">
                                        <div class="block-images position-relative">
                                            <div class="img-box">
                                                <img src="images/${element.imgName}" class="img-fluid" alt="">
                                            </div>
                                            <div class="block-description">
                                                <h6 class="iq-title"><a href="show-details.html">${element.title}</a></h6>
                                                <div class="movie-time d-flex align-items-center my-2">
                                                    <div class="badge badge-secondary p-1 mr-2">${element.minAge}+</div>
                                                    <span class="text-white">${element.duration}</span>
                                                </div>
                                                <div class="hover-buttons">
                                                    <span class="btn btn-hover"><i class="fa fa-play mr-1"
                                                            aria-hidden="true"></i>
                                                        Watch Now
                                                    </span> 
                                                </div>
                                            </div>
                                            <div class="block-social-info">
                                                <ul class="list-inline p-0 m-0 music-play-lists">
                                                    <li><span onclick="removeFromFavoriteMovie(${element.id}, ${userId})" class="trash-btn-span"><i class="fa fa-trash-o"></i></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                        `;
                    }
                });
    
                $("#favMovieContainer").html(favMovieHtml);
                
             });
         }

   });


   // get fav TV Show data
   axios.get(apiUrl+"/favTVShow").then(favRes =>{
        var TVShowData = [];
        favRes.data.forEach(element => {
            if (userId == element.userId) {
                TVShowData.push(element.TVShowId);
            }
         });

         if(TVShowData.length === 0){
            $("#favTVShowContainer").html('<p class="ml-4">No favorite TV show found..</p>');
         }else{
             axios.get(apiUrl+"/tvShow-content").then(TVShowRes=>{
    
                var favTVShowHtml = '';
    
                TVShowRes.data.forEach(element => {
                    if (isPresent(TVShowData, element.id) === true){
                        favTVShowHtml += `
                        <li class="slide-item">
                                        <div class="block-images position-relative">
                                            <div class="img-box">
                                                <img src="images/${element.imgName}" class="img-fluid" alt="">
                                            </div>
                                            <div class="block-description">
                                                <h6 class="iq-title"><a href="show-details.html">${element.title}</a></h6>
                                                <div class="movie-time d-flex align-items-center my-2">
                                                    <div class="badge badge-secondary p-1 mr-2">${element.minAge}+</div>
                                                    <span class="text-white"> ${element.season} Seasons</span>
                                                </div>
                                                <div class="hover-buttons">
                                                    <span class="btn btn-hover"><i class="fa fa-play mr-1"
                                                            aria-hidden="true"></i>
                                                        Watch Now
                                                    </span> 
                                                </div>
                                            </div>
                                            <div class="block-social-info">
                                                <ul class="list-inline p-0 m-0 music-play-lists">
                                                    <li><span onclick="removeFromFavoriteTVshow(${element.id}, ${userId})" class="trash-btn-span"><i class="fa fa-trash-o"></i></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                        `;
                    }
                });
    
                $("#favTVShowContainer").html(favTVShowHtml);
                
             });
         }


   });

   // get Music Show data
   axios.get(apiUrl+"/favMusic").then(favRes =>{
        var musicData = [];
        favRes.data.forEach(element => {
            if (userId == element.userId) {
                musicData.push(element.musicId);
            }
         });

         if(musicData.length === 0){
            $("#favMusicContainer").html('<p class="ml-4">No favorite music found..</p>');
         }else{
             
             axios.get(apiUrl+"/music-content").then(musicRes=>{
    
                var musicHtml = '';
    
                musicRes.data.forEach(element => {
                    if (isPresent(musicData, element.id) === true){
                        musicHtml += `
                        <li class="slide-item">
                                        <div class="block-images position-relative">
                                            <div class="img-box">
                                                <img src="images/${element.imgName}" class="img-fluid" alt="">
                                            </div>
                                            <div class="block-description">
                                                <h6 class="iq-title"><a href="movie-details.html">${element.title}</a></h6>
                                                <div class="movie-time d-flex align-items-center my-2">
                                                <div class="badge badge-secondary p-1 mr-2">${element.duration}</div>
                                                <span class="text-white">Singer: ${element.singer}</span>
                                                </div>
                                                <div class="hover-buttons">
                                                <span class="btn btn-hover iq-button">
                                                    <i class="fa fa-play" aria-hidden="true"></i>
                                                </span>
                                                </div>
                                            </div>
                                            <div class="block-social-info">
                                                <ul class="list-inline p-0 m-0 music-play-lists">
                                                    <li><span onclick="removeFromFavoriteMusic(${element.id}, ${userId})" class="trash-btn-span"><i class="fa fa-trash-o"></i></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                        `;
                    }
                });
    
                $("#favMusicContainer").html(musicHtml);
                
             }).catch(err=>{
                console.log("Error in fav music data getting ", error);
             });
         }


   });

}

getFavContent();

// remove favorite movie
function removeFromFavoriteMovie(movieId, userId) {

   axios.get(apiUrl + "/favMovie").then(favRes => {

      favRes.data.forEach(element => {
         if (element.movieId == movieId && element.userId == userId) {
            axios.delete(`${apiUrl}/favMovie/${element.id}`).then(deleteRes => {
               alert("Successfully removed from your favorite list", deleteRes.data);
            }).catch(error => {
               console.log("Error while removing to favorite ", error);
            })
         }
      });

   })
}

// Remove favorite Tvshow
function removeFromFavoriteTVshow(TVShowId, userId) {

   axios.get(apiUrl + "/favTVShow").then(favRes => {

      favRes.data.forEach(element => {
         if (element.TVShowId == TVShowId && element.userId == userId) {
            axios.delete(`${apiUrl}/favTVShow/${element.id}`).then(deleteRes => {
               alert("Successfully removed from your favorite list", deleteRes.data);
            }).catch(error => {
               console.log("Error while removing to favorite ", error);
            })
         }
      });

   })
}

// Remove favorite music
function removeFromFavoriteMusic(musicId, userId) {

   axios.get(apiUrl + "/favMusic").then(favRes => {

      favRes.data.forEach(element => {
         if (element.musicId == musicId && element.userId == userId) {
            axios.delete(`${apiUrl}/favMusic/${element.id}`).then(deleteRes => {
               alert("Successfully removed from your favorite list", deleteRes.data);
            }).catch(error => {
               console.log("Error while removing to favorite ", error);
            })
         }
      });

   })
}

function isPresent(arr, ele) {
   for (var i = 0; i < arr.length; i++) {
      if (arr[i] === ele) {
         return true;
      }
   }
   return false;
}
