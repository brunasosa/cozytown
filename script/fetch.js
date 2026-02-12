const url = "json/forum_messages.json";
const container = document.getElementById("container");

function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `
    <div class="forummessageContainer">
    <img src="" class="profilepicture" alt="">
    <p> ${item.username}: ${item.message} </p>
    </div>`;
  }
}

    fetch(url)
    .then(response => response.json())
    .then(data => {
        messages = data;
        //console.log(data.general)
        //showData(data.general);
    })
    .catch(error => {
        console.error("Error fetch", error);
    });

    
 function showMessages(forum){
    for (const item of messages.forum) {
    container.innerHTML += `
    <div class="forummessageContainer">
    <img src="" class="profilepicture" alt="">
    <p> ${item.username}: ${item.message} </p>
    </div>`;
  }
 }

