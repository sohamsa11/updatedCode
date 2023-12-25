
const apiUrl = 'http://localhost:3000';
var isLogin = sessionStorage.getItem("isLogin");

function getLatestContent() {
    var userId;
    if (isLogin === "true") {
        userId = sessionStorage.getItem('user-id');

        // get action movie data
        axios.get(apiUrl + "/movie-content?category=action").then(actionMovieRes => {
            //   console.log(actionMovieRes.data);

            axios.get(apiUrl + "/favMovie").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.movieId);
                    }
                });

                // console.log(contentId);

                var actionMovieHtml = ``;

                for (var i = 0; i < actionMovieRes.data.length; i++) {
                    actionMovieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${actionMovieRes.data[i].id}">
                                 <img src="images/${actionMovieRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${actionMovieRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${actionMovieRes.data[i].minAge}+</div>
                                    <span class="text-white">${actionMovieRes.data[i].duration}</span>
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

                    if (isPresent(contentId, actionMovieRes.data[i].id) === true) {
                        actionMovieHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${actionMovieRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
                    } else {
                        actionMovieHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${actionMovieRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
                    }

                    actionMovieHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
                }
                $("#actionMovieContainer").html(actionMovieHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get comedy movie data
        axios.get(apiUrl + "/movie-content?category=comedy").then(comedyMovieRes => {
            //   console.log(comedyMovieRes.data);

            axios.get(apiUrl + "/favMovie").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.movieId);
                    }
                });


                // console.log(contentId);

                var comedyMovieHtml = ``;

                for (var i = 0; i < comedyMovieRes.data.length; i++) {
                    comedyMovieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${comedyMovieRes.data[i].id}">
                                 <img src="images/${comedyMovieRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${comedyMovieRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${comedyMovieRes.data[i].minAge}+</div>
                                    <span class="text-white">${comedyMovieRes.data[i].duration}</span>
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

                    if (isPresent(contentId, comedyMovieRes.data[i].id) === true) {
                        comedyMovieHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${comedyMovieRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
                    } else {
                        comedyMovieHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${comedyMovieRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
                    }

                    comedyMovieHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
                }
                $("#comedyMovieContainer").html(comedyMovieHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get classic movie data
        axios.get(apiUrl + "/movie-content?category=classic").then(classicMovieRes => {
            //   console.log(classicMovieRes.data);

            axios.get(apiUrl + "/favMovie").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.movieId);
                    }
                });


                // console.log(contentId);

                var classicMovieHtml = ``;

                for (var i = 0; i < classicMovieRes.data.length; i++) {
                    classicMovieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${classicMovieRes.data[i].id}">
                                 <img src="images/${classicMovieRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${classicMovieRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${classicMovieRes.data[i].minAge}+</div>
                                    <span class="text-white">${classicMovieRes.data[i].duration}</span>
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

                    if (isPresent(contentId, classicMovieRes.data[i].id) === true) {
                        classicMovieHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${classicMovieRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
                    } else {
                        classicMovieHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${classicMovieRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
                    }

                    classicMovieHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
                }
                $("#classicMovieContainer").html(classicMovieHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });


    } else {

        // get action movie data
        axios.get(apiUrl + "/movie-content?category=action").then(actionMovieRes => {
            //   console.log(actionMovieRes.data);

            axios.get(apiUrl + "/favMovie").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.movieId);
                    }
                });


                // console.log(contentId);

                var actionMovieHtml = ``;

                for (var i = 0; i < actionMovieRes.data.length; i++) {
                    actionMovieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${actionMovieRes.data[i].id}">
                                 <img src="images/${actionMovieRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${actionMovieRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${actionMovieRes.data[i].minAge}+</div>
                                    <span class="text-white">${actionMovieRes.data[i].duration}</span>
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
                $("#actionMovieContainer").html(actionMovieHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get comedy movie data
        axios.get(apiUrl + "/movie-content?category=comedy").then(comedyMovieRes => {
            //   console.log(comedyMovieRes.data);

            axios.get(apiUrl + "/favMovie").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.movieId);
                    }
                });


                // console.log(contentId);

                var comedyMovieHtml = ``;

                for (var i = 0; i < comedyMovieRes.data.length; i++) {
                    comedyMovieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${comedyMovieRes.data[i].id}">
                                 <img src="images/${comedyMovieRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${comedyMovieRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${comedyMovieRes.data[i].minAge}+</div>
                                    <span class="text-white">${comedyMovieRes.data[i].duration}</span>
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
                $("#comedyMovieContainer").html(comedyMovieHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get classic movie data
        axios.get(apiUrl + "/movie-content?category=classic").then(classicMovieRes => {
            //   console.log(classicMovieRes.data);

            axios.get(apiUrl + "/favMovie").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.movieId);
                    }
                });


                // console.log(contentId);

                var classicMovieHtml = ``;

                for (var i = 0; i < classicMovieRes.data.length; i++) {
                    classicMovieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${classicMovieRes.data[i].id}">
                                 <img src="images/${classicMovieRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${classicMovieRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${classicMovieRes.data[i].minAge}+</div>
                                    <span class="text-white">${classicMovieRes.data[i].duration}</span>
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
                $("#classicMovieContainer").html(classicMovieHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
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

function isPresent(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true;
        }
    }
    return false;
}
