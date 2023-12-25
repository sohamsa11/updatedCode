
const apiUrl = 'http://localhost:3000';
var isLogin = sessionStorage.getItem("isLogin");

function getLatestContent() {
    var userId;
    if (isLogin === "true") {
        userId = sessionStorage.getItem('userID');

        // get action shows data
        axios.get(apiUrl + "/tvShow-content?category=action").then(actionShowRes => {
            //console.log(actionShowRes.data);

            axios.get(apiUrl + "/favTVShow").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.TVShowId);
                    }
                });

                // console.log(contentId);

                var actionShowHtml = ``;

                for (var i = 0; i < actionShowRes.data.length; i++) {
                    actionShowHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${actionShowRes.data[i].id}">
                                 <img src="images/${actionShowRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${actionShowRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${actionShowRes.data[i].minAge}+</div>
                                    <span class="text-white">${actionShowRes.data[i].season}</span>
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

                    if (isPresent(contentId, actionShowRes.data[i].id) === true) {
                        actionShowHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${actionShowRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
                    } else {
                        actionShowHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${actionShowRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
                    }

                    actionShowHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
                }
                $("#actionShowsContainer").html(actionShowHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get comedy shows data
        axios.get(apiUrl + "/tvShow-content?category=comedy").then(comedyShowRes => {
            //   console.log(comedyShowRes.data);

            axios.get(apiUrl + "/favTVShow").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.TVShowId);
                    }
                });

                // console.log(contentId);

                var comedyShowHtml = ``;

                for (var i = 0; i < comedyShowRes.data.length; i++) {
                    comedyShowHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${comedyShowRes.data[i].id}">
                                 <img src="images/${comedyShowRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${comedyShowRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${comedyShowRes.data[i].minAge}+</div>
                                    <span class="text-white">${comedyShowRes.data[i].duration}</span>
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

                    if (isPresent(contentId, comedyShowRes.data[i].id) === true) {
                        comedyShowHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${comedyShowRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
                    } else {
                        comedyShowHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${comedyShowRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
                    }

                    comedyShowHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
                }
                $("#comedyShowsContainer").html(comedyShowHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get classic show data
        axios.get(apiUrl + "/tvShow-content?category=classic").then(classicShowRes => {
            //   console.log(classicShowRes.data);

            axios.get(apiUrl + "/favTVShow").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.TVShowId);
                    }
                });


                // console.log(contentId);

                var classicMovieHtml = ``;

                for (var i = 0; i < classicShowRes.data.length; i++) {
                    classicMovieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${classicShowRes.data[i].id}">
                                 <img src="images/${classicShowRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${classicShowRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${classicShowRes.data[i].minAge}+</div>
                                    <span class="text-white">${classicShowRes.data[i].season}Season</span>
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

                    if (isPresent(contentId, classicShowRes.data[i].id) === true) {
                        classicMovieHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${classicShowRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
                    } else {
                        classicMovieHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${classicShowRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
                    }

                    classicMovieHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
                }
                $("#classShowContainer").html(classicMovieHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });


    } else {

        // get action shows data
        axios.get(apiUrl + "/tvShow-content?category=action").then(actionShowRes => {
            //   console.log(actionShowRes.data);

            axios.get(apiUrl + "/favTVShow").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.TVShowId);
                    }
                });


                // console.log(contentId);

                var actionShowHtml = ``;

                for (var i = 0; i < actionShowRes.data.length; i++) {
                    actionShowHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${actionShowRes.data[i].id}">
                                 <img src="images/${actionShowRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${actionShowRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${actionShowRes.data[i].minAge}+</div>
                                    <span class="text-white">${actionShowRes.data[i].season}Season</span>
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
                $("#actionShowsContainer").html(actionShowHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get comedy show data
        axios.get(apiUrl + "/tvShow-content?category=comedy").then(comedyShowRes => {
            //   console.log(comedyShowRes.data);

            axios.get(apiUrl + "/favTVShow").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.TVShowId);
                    }
                });


                // console.log(contentId);

                var comedyShowHtml = ``;

                for (var i = 0; i < comedyShowRes.data.length; i++) {
                    comedyShowHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${comedyShowRes.data[i].id}">
                                 <img src="images/${comedyShowRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${comedyShowRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${comedyShowRes.data[i].minAge}+</div>
                                    <span class="text-white">${comedyShowRes.data[i].duration}</span>
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
                $("#comedyShowsContainer").html(comedyShowHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get classic shows data
        axios.get(apiUrl + "/tvShow-content?category=classic").then(classicShowRes => {
            //   console.log(classicShowRes.data);

            axios.get(apiUrl + "/favTVShow").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.TVShowId);
                    }
                });


                // console.log(contentId);

                var classicMovieHtml = ``;

                for (var i = 0; i < classicShowRes.data.length; i++) {
                    classicMovieHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${classicShowRes.data[i].id}">
                                 <img src="images/${classicShowRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${classicShowRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${classicShowRes.data[i].minAge}+</div>
                                    <span class="text-white">${classicShowRes.data[i].duration}</span>
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
                $("#classShowContainer").html(classicMovieHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });
    }

}

getLatestContent();

// add To favorite show
function addToFavoriteMovie(TVShowId, userId) {

    axios.post("http://localhost:3000/favTVShow", { TVShowId, userId }).then((response) => {

        alert("Successfully added to your favorite list", response.data);
    }).catch(error => {
        console.log("Error while adding to favorite ", error);
    })
}

// remove favorite show
function removeFromFavoriteMovie(TVShowId, userId) {

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


function isPresent(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true;
        }
    }
    return false;
}
