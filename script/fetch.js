const url = "json/forum_messages.json";
const container = document.getElementById("container");

function showMessages(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `
    <div class="forummessageContainer">
    <img src="" class="profilepicture" alt="">
    <p> ${item.username}: ${item.message} </p>
    </div>`;
  }
}

function getForumName(name) {
  forumName = name;
  console.log(forumName);
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    switch (forumName) {
      case "general":
        showMessages(data.general);
        break;
      case "pets":
        showMessages(data.pets);
        break;
      case "fashion":
        showMessages(data.fashion);
        break;
      default:
        console.log("Error: Foro no existente");
    }
  })
  .catch(error => {
    console.error("Error fetch", error);
  });