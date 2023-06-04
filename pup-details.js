// Off Loading Local Storage Created In index.js
window.onload = () => {
    let puppyName = localStorage.getItem("puppyName");
    let pupId = localStorage.getItem("pupId");
    let teamId = localStorage.getItem("teamId")
    let breed = localStorage.getItem("breed");
    let status = localStorage.getItem("status");
    // let pupPic = localStorage.getItem("pic")

    //Grabbed Container from pup-details.html
    let pupDetailCard = document.getElementById("pupdetails")

    // Created new container w/ name
    let newElement = document.createElement("div")
    newElement.innerText = puppyName
    newElement.classList.add("ind-pup-card");

    // Created new container with rest of details
    let detailCon = document.createElement("ul");
    detailCon.classList.add("pup-details")

    // Created bullet for pupID for detailCon
    let pupIdBullet = document.createElement("li")
    pupIdBullet.innerText = `ID: ${pupId}`

    // Created bullet for teamId for detailCon
    let team = document.createElement("li");
    team.innerText = `Team Id: ${teamId}`;

     // Created bullet for breed for detailCon
    let pupBreed = document.createElement("li")
    pupBreed.innerText = `Breed: ${breed}`

    // Created bullet for pupID for detailCon
    let pupStatus = document.createElement("li")
    pupStatus.innerText = `Status: ${status}`


    // Images -- got it in local storage but couldnt figure out to render to the page. All it shows is a small image icon.
        // let pupImg = document.createElement("img");
        // pupImg.src = JSON.stringify(pupPic)
        // pupImg.classList.add("pup-pic");

    


    // let backButton = document.createElement("button");
    // // backButton.classList.add("back-button");
    // // backButton.innerText = "Back To All Pups"
    // let backButton = document.createElement("button");
    // backButton.addEventListener("click", function () {
        // const backPage = href="index.html"
        // window.history.go(backPage)
        // backButton.classList.add("back-button");
        // backButton.innerText = "Back To All Pups"
        // backButton.style.border = "solid black"
   
     // APPENDS
     pupDetailCard.appendChild(newElement)  
     newElement.appendChild(detailCon)  
     detailCon.appendChild(pupIdBullet)
     detailCon.appendChild(team)
     detailCon.appendChild(pupBreed)
     detailCon.appendChild(pupStatus)
    //  pupDetailCard.appendChild(pupImg)
   
    
  }   


// reader.onload = () => {
//       let pupPic = localStorage.getItem("pic")
    
    
//     // Images
//     let pupImg = document.createElement("img");
//     pupImg.src = pupImg.src.pupPic; 
//     pupImg.classList.add("pup-pic");

//       pupDetailCard.appendChild(pupImg)
// }



            