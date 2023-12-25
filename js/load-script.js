

const apiUrl = 'http://localhost:3000';
var isLogin = sessionStorage.getItem("isLogin");

function getLatestContent() {
   var userId;
   if(isLogin === "true"){
      userId = sessionStorage.getItem('userID');

      // var userId = 1;

   // get movie data
   axios.get("http://localhost:3000/movie-content").then(movieRes => {
      // console.log(response.data);


      axios.get(apiUrl + "/favMovie").then(favRes => {

         var contentId = [];
         favRes.data.forEach(element => {
            if (userId == element.userId) {
               contentId.push(element.movieId);
            }
         });


         // console.log(contentId);

         var movieHtml = ``;
         var len = movieRes.data.length;
         if (movieRes.data.length >= 5) {
            len = 5;
         }

         for (var i = 0; i < len; i++) {
            movieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${movieRes.data[i].id}">
                                 <img src="images/${movieRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${movieRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${movieRes.data[i].minAge}+</div>
                                    <span class="text-white">${movieRes.data[i].duration}</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <span class="btn btn-hover iq-button">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                       Watch Now  
                                    </span>
                                 </div>
                              </div>

                              <div class="block-social-info">
                                 <ul class="list-inline p-0 m-0 music-play-lists">
                                    <li class="share">
                                       <span><i class="ri-share-fill"></i></span>
                                       <div class="share-box">
                                          <div class="d-flex align-items-center">
                                             <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                target="_blank" rel="noopener noreferrer" class="share-ico"
                                                tabindex="0"><i class="ri-facebook-fill"></i></a>
                                             <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                target="_blank" rel="noopener noreferrer" class="share-ico"
                                                tabindex="0"><i class="ri-twitter-fill"></i></a>
                                             <a href="#"
                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                class="share-ico iq-copy-link" tabindex="0"><i
                                                   class="ri-links-fill"></i></a>
                                          </div>
                                       </div>
                                    </li>
                                    <li>`;

            if (isPresent(contentId, movieRes.data[i].id) === true) {
               movieHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${movieRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
            } else {
               movieHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${movieRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
            }

            movieHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
         }
         $("#latestMovieContainer").html(movieHtml);

      }).catch(error => {
         console.log("Error while getting fav data", error);
      })
   }).catch(error => {
      console.error('Error fetching content details: ', error);
   });

   // get TVShow data
   axios.get("http://localhost:3000/tvShow-content").then(TVshowRes => {
      // console.log(response.data);


      axios.get(apiUrl + "/favTVShow").then(favRes => {

         var contentId = [];
         favRes.data.forEach(element => {
            if (userId == element.userId) {
               contentId.push(element.TVShowId);
            }
         });

         // console.log(contentId);

         var tvShowHtml = ``;
         var len = TVshowRes.data.length;
         if (TVshowRes.data.length >= 5) {
            len = 5;
         }

         for (var i = 0; i < len; i++) {
            tvShowHtml += `<li class="slide-item">

            <div class="block-images position-relative">
               <div class="img-box">
                  <img src="images/${TVshowRes.data[i].imgName}" class="img-fluid" alt="">
               </div>
               <div class="block-description">
                  <h6 class="iq-title"><a href="movie-details.html">${TVshowRes.data[i].title}</a></h6>
                  <div class="movie-time d-flex align-items-center my-2">
                     <div class="badge badge-secondary p-1 mr-2">${TVshowRes.data[i].minAge}+</div>
                     <span class="text-white"> ${TVshowRes.data[i].season} Seasons</span>
                  </div>
                  <div class="hover-buttons">
                     <span class="btn btn-hover iq-button" onclick="redirectToShowDetails(${TVshowRes.data[i].id})">
                        <i class="fa fa-play mr-1" aria-hidden="true"></i>
                        Watch Now
                     </span>
                  </div>
               </div>

               <div class="block-social-info">
                  <ul class="list-inline p-0 m-0 music-play-lists">
                     <li class="share">
                        <span><i class="ri-share-fill"></i></span>
                        <div class="share-box">
                           <div class="d-flex align-items-center">
                              <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                 target="_blank" rel="noopener noreferrer" class="share-ico"
                                 tabindex="0"><i class="ri-facebook-fill"></i></a>
                              <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                 target="_blank" rel="noopener noreferrer" class="share-ico"
                                 tabindex="0"><i class="ri-twitter-fill"></i></a>
                              <a href="#"
                                 data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                 class="share-ico iq-copy-link" tabindex="0"><i
                                    class="ri-links-fill"></i></a>
                           </div>
                        </div>
                     </li>
                     <li>`;

            if (isPresent(contentId, TVshowRes.data[i].id) === true) {
               tvShowHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteTVshow(${TVshowRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
            } else {
               tvShowHtml += `<span title="Add to favorite" onclick="addToFavoriteTVshow(${TVshowRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
            }

            tvShowHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;

         }
         $("#latestTVShowContainer").html(tvShowHtml);

      }).catch(error => {
         console.log("Error while getting fav  data", error);
      })

   }).catch(error => {
      console.error('Error fetching content details: ', error);
   });

   // get music data
   axios.get("http://localhost:3000/music-content").then(musicRes => {
      // console.log(response.data);


      axios.get(apiUrl + "/favMusic").then(favRes => {

         var contentId = [];
         favRes.data.forEach(element => {
            if (userId == element.userId) {
               contentId.push(element.musicId);
            }
         });


         // console.log(contentId);

         var musicHtml = ``;
         var len = musicRes.data.length;
         if (musicRes.data.length >= 5) {
            len = 5;
         }

         for (var i = 0; i < len; i++) {
            musicHtml += `<li class="slide-item">

            <div class="block-images position-relative">
               <div class="img-box">
                  <img src="images/${musicRes.data[i].imgName}" class="img-fluid" alt="">
               </div>
               <div class="block-description">
                  <h6 class="iq-title"><a href="movie-details.html">${musicRes.data[i].title}</a></h6>
                  <div class="movie-time d-flex align-items-center my-2">
                  <div class="badge badge-secondary p-1 mr-2">${musicRes.data[i].duration}</div>
                  <span class="text-white">Singer: ${musicRes.data[i].singer}</span>
                  </div>
                  <div class="hover-buttons">
                  <span class="btn btn-hover iq-button">
                     <i class="fa fa-play" aria-hidden="true"></i>
                  </span>
                  </div>
               </div>

               <div class="block-social-info">
                  <ul class="list-inline p-0 m-0 music-play-lists">
                     <li class="share">
                        <span><i class="ri-share-fill"></i></span>
                        <div class="share-box">
                           <div class="d-flex align-items-center">
                              <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                 target="_blank" rel="noopener noreferrer" class="share-ico"
                                 tabindex="0"><i class="ri-facebook-fill"></i></a>
                              <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                 target="_blank" rel="noopener noreferrer" class="share-ico"
                                 tabindex="0"><i class="ri-twitter-fill"></i></a>
                              <a href="#"
                                 data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                 class="share-ico iq-copy-link" tabindex="0"><i
                                    class="ri-links-fill"></i></a>
                           </div>
                        </div>
                     </li>
                     <li>`;

            if (isPresent(contentId, musicRes.data[i].id) === true) {
               musicHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMusic(${musicRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
            } else {
               musicHtml += `<span title="Add to favorite" onclick="addToFavoriteMusic(${musicRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
            }

            musicHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;

         }
         $("#latestMusicContainer").html(musicHtml);

      }).catch(error => {
         console.log("Error while getting fav  data", error);
      })

   }).catch(error => {
      console.error('Error fetching content details: ', error);
   });


   }else{

      // var userId = 1;

   // get movie data
   axios.get("http://localhost:3000/movie-content").then(movieRes => {
      // console.log(response.data);

      var movieHtml = ``;
         var len = movieRes.data.length;
         if (movieRes.data.length >= 5) {
            len = 5;
         }

         for (var i = 0; i < len; i++) {
            movieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${movieRes.data[i].id}">
                                 <img src="images/${movieRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${movieRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${movieRes.data[i].minAge}+</div>
                                    <span class="text-white">${movieRes.data[i].duration}</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <span class="btn btn-hover iq-button">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                       Watch Now
                                    </span>
                                 </div>
                              </div>

                              <div class="block-social-info">
                                 <ul class="list-inline p-0 m-0 music-play-lists">
                                    <li class="share">
                                       <span><i class="ri-share-fill"></i></span>
                                       <div class="share-box">
                                          <div class="d-flex align-items-center">
                                             <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                target="_blank" rel="noopener noreferrer" class="share-ico"
                                                tabindex="0"><i class="ri-facebook-fill"></i></a>
                                             <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                target="_blank" rel="noopener noreferrer" class="share-ico"
                                                tabindex="0"><i class="ri-twitter-fill"></i></a>
                                             <a href="#"
                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                class="share-ico iq-copy-link" tabindex="0"><i
                                                   class="ri-links-fill"></i></a>
                                          </div>
                                       </div>
                                    </li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
         }
         $("#latestMovieContainer").html(movieHtml);
      
   }).catch(error => {
      console.error('Error fetching content details: ', error);
   });

   // get TVShow data
   axios.get("http://localhost:3000/tvShow-content").then(TVshowRes => {
      // console.log(response.data);
      var tvShowHtml = ``;
         var len = TVshowRes.data.length;
         if (TVshowRes.data.length >= 5) {
            len = 5;
         }

         for (var i = 0; i < len; i++) {
            tvShowHtml += `<li class="slide-item">

            <div class="block-images position-relative">
               <div class="img-box">
                  <img src="images/${TVshowRes.data[i].imgName}" class="img-fluid" alt="">
               </div>
               <div class="block-description">
                  <h6 class="iq-title"><a href="movie-details.html">${TVshowRes.data[i].title}</a></h6>
                  <div class="movie-time d-flex align-items-center my-2">
                     <div class="badge badge-secondary p-1 mr-2">${TVshowRes.data[i].minAge}+</div>
                     <span class="text-white"> ${TVshowRes.data[i].season} Seasons</span>
                  </div>
                  <div class="hover-buttons">
                     <span class="btn btn-hover iq-button" onclick="redirectToShowDetails(${TVshowRes.data[i].id})">
                        <i class="fa fa-play mr-1" aria-hidden="true"></i>
                        Watch Now
                     </span>
                  </div>
               </div>

               <div class="block-social-info">
                  <ul class="list-inline p-0 m-0 music-play-lists">
                     <li class="share">
                        <span><i class="ri-share-fill"></i></span>
                        <div class="share-box">
                           <div class="d-flex align-items-center">
                              <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                 target="_blank" rel="noopener noreferrer" class="share-ico"
                                 tabindex="0"><i class="ri-facebook-fill"></i></a>
                              <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                 target="_blank" rel="noopener noreferrer" class="share-ico"
                                 tabindex="0"><i class="ri-twitter-fill"></i></a>
                              <a href="#"
                                 data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                 class="share-ico iq-copy-link" tabindex="0"><i
                                    class="ri-links-fill"></i></a>
                           </div>
                        </div>
                     </li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;

         }
         $("#latestTVShowContainer").html(tvShowHtml);

   }).catch(error => {
      console.error('Error fetching content details: ', error);
   });

   // get music data
   axios.get("http://localhost:3000/music-content").then(musicRes => {
      // console.log(response.data);

      var musicHtml = ``;
         var len = musicRes.data.length;
         if (musicRes.data.length >= 5) {
            len = 5;
         }

         for (var i = 0; i < len; i++) {
            musicHtml += `<li class="slide-item">

            <div class="block-images position-relative">
               <div class="img-box">
                  <img src="images/${musicRes.data[i].imgName}" class="img-fluid" alt="">
               </div>
               <div class="block-description">
                  <h6 class="iq-title"><a href="movie-details.html">${musicRes.data[i].title}</a></h6>
                  <div class="movie-time d-flex align-items-center my-2">
                  <div class="badge badge-secondary p-1 mr-2">${musicRes.data[i].duration}</div>
                  <span class="text-white">Singer: ${musicRes.data[i].singer}</span>
                  </div>
                  <div class="hover-buttons">
                  <span class="btn btn-hover iq-button">
                     <i class="fa fa-play" aria-hidden="true"></i>
                  </span>
                  </div>
               </div>

               <div class="block-social-info">
                  <ul class="list-inline p-0 m-0 music-play-lists">
                     <li class="share">
                        <span><i class="ri-share-fill"></i></span>
                        <div class="share-box">
                           <div class="d-flex align-items-center">
                              <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                 target="_blank" rel="noopener noreferrer" class="share-ico"
                                 tabindex="0"><i class="ri-facebook-fill"></i></a>
                              <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                 target="_blank" rel="noopener noreferrer" class="share-ico"
                                 tabindex="0"><i class="ri-twitter-fill"></i></a>
                              <a href="#"
                                 data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                 class="share-ico iq-copy-link" tabindex="0"><i
                                    class="ri-links-fill"></i></a>
                           </div>
                        </div>
                     </li>

                  </ul>
               </div>
            </div>
            </a>
         </li>
                `;

         }
         $("#latestMusicContainer").html(musicHtml);

   }).catch(error => {
      console.error('Error fetching content details: ', error);
   });

   }
   
}

getLatestContent();

// add To favorite movie
function addToFavoriteMovie(movieId, userId) {

   axios.post("http://localhost:3000/favMovie", { movieId, userId }).then((response) => {
      alert("Successfully added to your favorite list", response.data);
   }).catch(error => {
      console.log("Error while adding to favorite ", error);
   })
}
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

// add To favorite TV Show
function addToFavoriteTVshow(TVShowId, userId) {

   axios.post("http://localhost:3000/favTVShow", { TVShowId, userId }).then((response) => {
      alert("Successfully added to your favorite list", response.data);
   }).catch(error => {
      console.log("Error while adding to favorite ", error);
   })
}

// Remove favorite movie
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

// add To favorite TV Show
function addToFavoriteMusic(musicId, userId) {

   axios.post("http://localhost:3000/favMusic", { musicId, userId }).then((response) => {
      alert("Successfully added to your favorite list", response.data);
   }).catch(error => {
      console.log("Error while adding to favorite ", error);
   })
}

// Remove favorite movie
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

function redirectToShowDetails(data) {
   // alert("click")
   // Encode data to be passed in the URL
   const encodedData = encodeURIComponent(data);

   // Redirect to the second page with the data as a query parameter
   window.location.href = `show-details.html?id=${encodedData}`;
}