

const apiUrl = 'http://localhost:3000';
var isLogin = sessionStorage.getItem("isLogin");


function getLatestContent() {
    var userId;
    if (isLogin === "true") {
        userId = sessionStorage.getItem('userID');

        // get hindi music data
        axios.get(apiUrl + "/music-content?category=hindi").then(hindiMusicRes => {
           console.log(hindiMusicRes.data);

            axios.get(apiUrl + "/favMusic").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.musicId);
                    }
                });

                // console.log(contentId);

                var hindiMusicHtml = ``;

                for (var i = 0; i < hindiMusicRes.data.length; i++) {
                    hindiMusicHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${hindiMusicRes.data[i].id}">
                                 <img src="images/${hindiMusicRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${hindiMusicRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${hindiMusicRes.data[i].duration}</div>
                                    <span class="text-white">${hindiMusicRes.data[i].singer}</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <span class="btn btn-hover iq-button">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                       Play
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

                    if (isPresent(contentId, hindiMusicRes.data[i].id) === true) {
                        hindiMusicHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${hindiMusicRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
                    } else {
                        hindiMusicHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${hindiMusicRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
                    }

                    hindiMusicHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
                }

                $("#hindiMusicId").html(hindiMusicHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })

        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get english music data
        axios.get(apiUrl + "/music-content?category=english").then(engMusicData => {
            //   console.log(engMusicData.data);

            axios.get(apiUrl + "/favMusic").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.musicId);
                    }
                });


                // console.log(contentId);

                var engMusicHtml = ``;

                for (var i = 0; i < engMusicData.data.length; i++) {
                    engMusicHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${engMusicData.data[i].id}">
                                 <img src="images/${engMusicData.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${engMusicData.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${engMusicData.data[i].duration}</div>
                                    <span class="text-white">${engMusicData.data[i].singer}</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <span class="btn btn-hover iq-button">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                       Play
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

                    if (isPresent(contentId, engMusicData.data[i].id) === true) {
                        engMusicHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${engMusicData.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
                    } else {
                        engMusicHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${engMusicData.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
                    }

                    engMusicHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
                }
                $("#englishMusicId").html(engMusicHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get marathi movie data
        axios.get(apiUrl + "/music-content?category=marathi").then(marathiMusicRes => {
            //   console.log(marathiMusicRes.data);

            axios.get(apiUrl + "/favMusic").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.musicId);
                    }
                });

                // console.log(contentId);

                var marathiMusicHtml = ``;

                for (var i = 0; i < marathiMusicRes.data.length; i++) {
                    marathiMusicHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${marathiMusicRes.data[i].id}">
                                 <img src="images/${marathiMusicRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${marathiMusicRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${marathiMusicRes.data[i].duration}</div>
                                    <span class="text-white">${marathiMusicRes.data[i].singer}</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <span class="btn btn-hover iq-button">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                       Play
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

                    if (isPresent(contentId, marathiMusicRes.data[i].id) === true) {
                        marathiMusicHtml += `<span title="Remove from favorite" onclick="removeFromFavoriteMovie(${marathiMusicRes.data[i].id}, ${userId})" style="background: red; color: white; "><i class="ri-heart-fill"></i></span>`;
                    } else {
                        marathiMusicHtml += `<span title="Add to favorite" onclick="addToFavoriteMovie(${marathiMusicRes.data[i].id}, ${userId})" ><i class="ri-heart-fill"></i></span>`;
                    }

                    marathiMusicHtml += `</li>

                                 </ul>
                              </div>
                           </div>
                           </a>
                        </li>
                `;
                }
                $("#marathiMusicId").html(marathiMusicHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });
        
    } else {

        // get hindi music data
        axios.get(apiUrl + "/music-content?category=hindi").then(hindiMusicRes => {
            //console.log(hindiMusicRes.data);

            axios.get(apiUrl + "/favMusic").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.musicId);
                    }
                });

                // console.log(contentId);

                var hindiMusicHtml = ``;

                for (var i = 0; i < hindiMusicRes.data.length; i++) {
                    hindiMusicHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${hindiMusicRes.data[i].id}">
                                 <img src="images/${hindiMusicRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${hindiMusicRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${hindiMusicRes.data[i].duration}</div>
                                    <span class="text-white">${hindiMusicRes.data[i].singer}</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <span class="btn btn-hover iq-button">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                       Play
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
                $("#hindiMusicId").html(hindiMusicHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get english music data
        axios.get(apiUrl + "/music-content?category=english").then(engMusicData => {
            //   console.log(engMusicData.data);

            axios.get(apiUrl + "/favMusic").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.musicId);
                    }
                });


                // console.log(contentId);

                var engMusicHtml = ``;

                for (var i = 0; i < engMusicData.data.length; i++) {
                    engMusicHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${engMusicData.data[i].id}">
                                 <img src="images/${engMusicData.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${engMusicData.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${engMusicData.data[i].duration}+</div>
                                    <span class="text-white">${engMusicData.data[i].singer}</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <span class="btn btn-hover iq-button">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                       Play
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
                $("#englishMusicId").html(engMusicHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });

        // get marathi music data
        axios.get(apiUrl + "/music-content?category=marathi").then(marathiMusicRes => {
            //   console.log(marathiMusicRes.data);

            axios.get(apiUrl + "/favMusic").then(favRes => {

                var contentId = [];
                favRes.data.forEach(element => {
                    if (userId == element.userId) {
                        contentId.push(element.musicId);
                    }
                });

                // console.log(contentId);

                var marathiMusicHtml = ``;

                for (var i = 0; i < marathiMusicRes.data.length; i++) {
                    marathiMusicHtml += `
                <li class="slide-item">

                           <div class="block-images position-relative">
                              <div class="img-box">
                              <input type="hidden" id="content-id" value="${marathiMusicRes.data[i].id}">
                                 <img src="images/${marathiMusicRes.data[i].imgName}" class="img-fluid" alt="">
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="movie-details.html">${marathiMusicRes.data[i].title}</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <div class="badge badge-secondary p-1 mr-2">${marathiMusicRes.data[i].duration}</div>
                                    <span class="text-white">${marathiMusicRes.data[i].singer}</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <span class="btn btn-hover iq-button">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                       Play
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
                $("#marathiMusicId").html(marathiMusicHtml);

            }).catch(error => {
                console.log("Error while getting fav data", error);
            })
        }).catch(error => {
            console.error('Error fetching content details: ', error);
        });
    }

}

getLatestContent();

// add To favorite music
function addToFavoriteMovie(musicId, userId) {

    axios.post("http://localhost:3000/favMusic", { musicId, userId }).then((response) => {

        alert("Successfully added to your favorite list", response.data);
    }).catch(error => {
        console.log("Error while adding to favorite ", error);
    })
}
// remove favorite music
function removeFromFavoriteMovie(musicId, userId) {

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
