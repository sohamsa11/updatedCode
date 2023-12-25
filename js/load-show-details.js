
var id;
async function getDataFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');

    console.log(id);
}

// Call the function when the second page loads
getDataFromURL();
loadDetails();

function loadDetails(){

    axios.get("http://localhost:3000/tvShow-content/"+id).then(response=>{
        // console.log(response.data);
        console.log(response)
        $("#showTitle").text(response.data.title);
        $("#contentId").val(response.data.id);
    //  $("#show-details").html(showDetails);
    })
}