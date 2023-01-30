//used to call function.
window.addEventListener('DOMContentLoaded', (event) =>{
getVisitorCount();
})


//url was grabbed when I implemented the API via an Azure function.
const functionApi = " ";

//Code below is to grab the JSON that is provided from the API.
const getVisitorCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
    //This function getVisitorCount says, go fetch this funtion from the URL (line 2) that we're providing in functionApi. Then return the Json Response (Line 7).
}