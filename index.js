const URL = "https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT"


async function fetchAllPlayers() {
    try {
        const response = await fetch(`${URL}/players`); // fetches the players/main url object
        const translatedData = await response.json();  // this is converting plain english into js.
        const playersData = translatedData.data.players // consoliates translated data + objectname + arrayname
        // console.log(playersData)
        return playersData
       
    } catch (error) {
        console.log(error)
    }
    
}

// fetchAllPlayers()

async function renderAllPlayers() {
    try {
        let puppyContainer = document.getElementById("puppylist");

        const puppyPlayers = await fetchAllPlayers();
        // console.log(puppyPlayers)
        for(let i = 0; i < puppyPlayers.length; i++){
            let currPupObj = puppyPlayers[i];
            
            // Puppy Cards
            let newElement = document.createElement("div");
            newElement.innerText = currPupObj.name;
            newElement.classList.add("puppy-cards");
            
            // Images
            let newImage = document.createElement("img");
            newImage.src = currPupObj.imageUrl; 
            newImage.classList.add("puppy-pics");
            
            // Detail Buttons
           let newButton = document.createElement("button");
           newButton.classList.add("detail-button");
           newButton.innerText = "Pup Details"
           newButton.addEventListener("click", () => {
                localStorage.setItem("puppyName", currPupObj.name);
                localStorage.setItem("pupId", currPupObj.id)
                localStorage.setItem("teamId", currPupObj.teamId);
                localStorage.setItem("breed", currPupObj.breed);
                localStorage.setItem("status", currPupObj.status);
                // localStorage.setItem("pic", currPupObj.imageUrl) I couldnt quite figure out how to get the image to storage in local storage

                window.location.href = "pup-details.html"
           })
            
           
           
           // Appends
            newElement.appendChild(newImage)
            newElement.appendChild(newButton)
            puppyContainer.appendChild(newElement)
         
        }

    } catch (error) {
        console.log(error)
    }

}


// renderAllPlayers()


const init = async () => {
    try {
        const allPlayers = await fetchAllPlayers();

        await renderAllPlayers(allPlayers);
    } catch (error) {
        console.log(error)
    }
}

init()




// Fetch individual player based on ID
// async function fetchPlayer() {
// try {
//     const response = await fetch(`${URL}/players/6183`); // fetch player by ID 6183
//     const result = await response.json(); // this is converting plain english into js.
//     console.log(result)
// } catch (error) {
//     console.log(error)
// }
  
// }


// Fetchs teams
// async function fetchTeams() {
// try {
//     const response = await fetch(`${URL}/teams`);
//     const result =await response.json();
//     console.log(result)
// } catch (error) {
//     console.log(error)
// }
// }






// ADD PLAYER
// try {
//     const response = await fetch(`${URL} {method: "POST", headers: { "Content-Type": "application/json"},
//     body: JSON.stringify({
//         name: "Rufus",
//         breed: "Irish Setter",
//     })
// }`);

// } catch (error) {
    
// }









