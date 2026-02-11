const url = "json/forum_messages.json";
const container = document.getElementById("container");

function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `
    <img src="" class="profilepicture" alt="">
    <p> ${item.username}: ${item.message} </p>`;
  }
}


    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.general)
        showData(data.general);
    })
    .catch(error => {
        console.error("Error fetch", error);
    });

