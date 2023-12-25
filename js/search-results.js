document.addEventListener('DOMContentLoaded', function() {
   const searchResultsContainer = document.getElementById('searchResults');

   function displayNotFoundMessage(elementId, message) {
      const errorElement = document.getElementById(elementId);
      if (errorElement) {
          errorElement.innerHTML = message;
      }
  }

   function displaySearchResultsMovie(results) {

       var movieSearchHtml = '';

       for(let i=0; i<results.length; i++){
           movieSearchHtml += `
           <li class="slide-item">a
                      <div class="block-images position-relative">
                         <div class="img-box">
                         <input type="hidden" id="content-id" value="${results[i].id}">
                            <img src="images/${results[i].imgName}" class="img-fluid" alt="">
                         </div>
                         <div class="block-description">
                            <h6 class="iq-title"><a href="movie-details.html">${results[i].title}</a></h6>
                            <div class="movie-time d-flex align-items-center my-2">
                               <div class="badge badge-secondary p-1 mr-2">${results[i].minAge}+</div>
                               <span class="text-white">${results[i].duration}</span>
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
       $("#searchMovieResult").html(movieSearchHtml)
   }
   function displaySearchResultsMusic(results) {

       var musicSearchHtml = '';

       for(let i=0; i<results.length; i++){
           musicSearchHtml += `
           <li class="slide-item">
                      <div class="block-images position-relative">
                         <div class="img-box">
                         <input type="hidden" id="content-id" value="${results[i].id}">
                            <img src="images/${results[i].imgName}" class="img-fluid" alt="">
                         </div>
                         <div class="block-description">
                            <h6 class="iq-title"><a href="movie-details.html">${results[i].title}</a></h6>
                            <div class="movie-time d-flex align-items-center my-2">
                               <div class="badge badge-secondary p-1 mr-2">${results[i].minAge}+</div>
                               <span class="text-white">${results[i].duration}</span>
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
       $("#searchMusicResult").html(musicSearchHtml)
   }
   function displaySearchResultsTv(results) {

       var tvSearchHtml = '';

       for(let i=0; i<results.length; i++){
           tvSearchHtml += `
           <li class="slide-item">
                      <div class="block-images position-relative">
                         <div class="img-box">
                         <input type="hidden" id="content-id" value="${results[i].id}">
                            <img src="images/${results[i].imgName}" class="img-fluid" alt="">
                         </div>
                         <div class="block-description">
                            <h6 class="iq-title"><a href="movie-details.html">${results[i].title}</a></h6>
                            <div class="movie-time d-flex align-items-center my-2">
                               <div class="badge badge-secondary p-1 mr-2">${results[i].minAge}+</div>
                               <span class="text-white">${results[i].duration}</span>
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
       $("#searchTvResult").html(tvSearchHtml)
   }

   function fetchSearchResults(searchQuery) {
       // Fetch search results from multiple endpoints
       const movieUrl = `http://localhost:3000/movie-content?q=${searchQuery}`;
       const tvShowUrl = `http://localhost:3000/tvShow-content?q=${searchQuery}`;
       const musicUrl = `http://localhost:3000/music-content?q=${searchQuery}`;

       const movieData = axios.get(movieUrl);
       const tvShowData = axios.get(tvShowUrl);
       const musicData = axios.get(musicUrl);

       Promise.all([movieData, tvShowData, musicData])
           .then(function(response) {
               const [movieResults, tvShowResults, musicResults] = response;
               

               const movResult = movieResults.data;
               const tvResult = tvShowResults.data;
               const musicResult = musicResults.data;


               const filteredResultsMovie = movResult.filter(function(result) {
                   const titleMatch = result.title.toLowerCase().includes(searchQuery.toLowerCase());
                   const tagsMatch = result.category.toLowerCase().includes(searchQuery.toLowerCase());

                   return titleMatch || tagsMatch;
               });
               const filteredResultsTv = tvResult.filter(function(result) {
                   const titleMatch = result.title.toLowerCase().includes(searchQuery.toLowerCase());
                   const tagsMatch = result.category.toLowerCase().includes(searchQuery.toLowerCase());

                   return titleMatch || tagsMatch;
               });
               const filteredResultsMusic = musicResult.filter(function(result) {
                   const titleMatch = result.title.toLowerCase().includes(searchQuery.toLowerCase());
                   const tagsMatch = result.category.toLowerCase().includes(searchQuery.toLowerCase());

                   return titleMatch || tagsMatch;
               });



               console.log(filteredResultsMovie);
               if (filteredResultsMovie.length === 0) {
                  displayNotFoundMessage('movieNotFound', 'No movie found.');
              } else {
                  // Call function for displaying movie results
                  displaySearchResultsMovie(filteredResultsMovie);
              }
          
              // Check if music results are empty and display a separate message if no music results are found
              if (filteredResultsMusic.length === 0) {
                  displayNotFoundMessage('musicNotFound', 'No music found.');
              } else {
                  // Call function for displaying music results
                  displaySearchResultsMusic(filteredResultsMusic);
              }
          
              // Check if TV show results are empty and display a separate message if no TV show results are found
              if (filteredResultsTv.length === 0) {
                  displayNotFoundMessage('tvNotFound', 'No TV show found.');
              } else {
                  // Call function for displaying TV show results
                  displaySearchResultsTv(filteredResultsTv);
              }
           })
           .catch(function(error) {
               console.error('Error fetching search results:', error);
           });
   }

   // Retrieve the search query parameter from the URL
   const urlParams = new URLSearchParams(window.location.search);
   const searchQuery = urlParams.get('query');

   if (searchQuery) {
       fetchSearchResults(searchQuery); // Fetch and display search results
   } else {
       console.log('No search query provided.');
   }
});