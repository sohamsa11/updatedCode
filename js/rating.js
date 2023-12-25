var isLogin = sessionStorage.getItem("isLogin");


if (isLogin === "true") {
    $("#ratingContainer").html(`<div class="row align-items-center">
        <div class="col-lg-12 ">
           <span style="font-size: 20px;">Rate Movie: </span>
           <i class="fas fa-star star" value="1"></i>
           <i class="fas fa-star star" value="2"></i>
           <i class="fas fa-star star" value="3"></i>
           <i class="fas fa-star star" value="4"></i>
           <i class="fas fa-star star" value="5"></i>
        </div>
     </div>`);
}

var contentId = parseInt($("#contentId").val());
// getDataFromURL();
// async function getDataFromURL() {
//     const urlParams = new URLSearchParams(window.location.search);
//     contentId = parseInt(urlParams.get('id'));
// }
// console.log(contentId);


const stars = document.querySelectorAll(".star");

var userId = parseInt(sessionStorage.getItem("userID")); // Assuming a default user ID

document.addEventListener("DOMContentLoaded", () => {


    fetchRating();
    fetchAvgRating(); // Fetch the existing rating on page load

});

stars.forEach((star, index) => {
    star.addEventListener("click", (event) => {
        event.preventDefault();
        stars.forEach((star, index2) => {
            index >= index2
                ? star.classList.add("active")
                : star.classList.remove("active");
        });
        countStar();
        sendRating();
    });
});


function countStar() {
    const count = document.querySelectorAll(".active");
    cntStar = count.length - 1;

    // console.log(cntStar);
}


function fetchRating() {
    axios.get("http://localhost:3000/ratingsdata", {
        params: {
            userId: userId,
            contentId: contentId,
        },
    }).then(response => {
        // console.log(response.data);
        var fetchedRating = response.data[0].ratingpoints;
        // Update the stars based on the fetched rating


        updateStars(fetchedRating);

    }).catch((error) => {
        console.error("Error fetching rating:", error);
    });
}

function updateStars(rating) {
    stars.forEach((star, index) => {
        index < rating
            ? star.classList.add("active")
            : star.classList.remove("active");
    });
}

function sendRating() {

    axios.get("http://localhost:3000/ratingsdata", {
        params: {
            userId: userId,
            contentId: contentId,
        },
    }).then((response) => {
        // console.log(response.data);
        if (response.data.length > 0) {
            var ratingId = response.data[0].id;


            axios.patch("http://localhost:3000/ratingsdata/" + ratingId, { ratingpoints: cntStar }).then(res => {
                alert("Rating updated to " + cntStar + " /5");
            }).catch((error) => {
                console.error("Error sending rating:", error);
            });

        } else {

            axios
                .post("http://localhost:3000/ratingsdata", {
                    userId: userId,
                    contentId: contentId,
                    ratingpoints: cntStar,
                })
                .then((response) => {
                    // console.log(response.data);
                    alert(cntStar + "/5 Rating sent successfully!");

                    // After sending the rating, update stars based on the new rating
                    // updateStars(cntStar);

                    updateStars(cntStar);
                })
                .catch((error) => {
                    console.error("Error sending rating:", error);
                });

        }
    })


}





function calculateAverageRating(ratings) {
    if (Array.isArray(ratings) && ratings.length > 0) {
        let sumRating = 0;
        ratings.forEach((data) => {
            sumRating += data.ratingpoints || 0;
        });
        // console.log(sumRating);
        // console.log(ratings.length);
        return sumRating / ratings.length;
    } else {
        console.error("Invalid or empty ratings data");
        return 0; // or any default value you want to return for an empty or invalid case
    }
}

function fetchAvgRating() {
    axios
        .get("http://localhost:3000/ratingsdata", {
            params: {
                contentId: contentId,
            },
        })
        .then((response) => {
            const responseData = response.data;

            const averageRating = calculateAverageRating(responseData);
            const roundedRating = averageRating.toFixed(2); // Rounds to 2 decimal places
            document.getElementById('displayrating').innerHTML = '<p style="font-size: 22x;">IMDb Rating : ' + roundedRating + ' / 5 </p>';

            // console.log("Average Rating:", averageRating);

            // Continue with the rest of your code
            //updateStars(averageRating);
        })
        .catch((error) => {
            console.error("Error fetching rating:", error);
        });
}
