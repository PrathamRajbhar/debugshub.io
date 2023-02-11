

document.body.innerHTML += `
<div class="vortex-support">
  <img width="60px" src="https://debugshub.web.app/image/chatbot.gif" id="chatbotToggle">
  <div id="chatbotContainer" style="display: none;">
    <div class="d-flex chat-bot-header">
      <img src="https://debugshub.web.app/image/bot-icon.png" height="50px">
      <div class="chatbot-details">
        <p>Vortex Support</p>
        <p>Online</p>
      </div>
      <button id="exitButton" type="button" class="btn btn-link">
        <i class="fa fa-times-circle"></i>
      </button>
    </div>
    <hr>
    <div id="chatbotHistory"></div>
    <form id="chatbotForm">
      <input class="form-control" id="chatbotInput" type="text" placeholder="Write Your Query">
      <button id="chatbotSubmit" type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</div>
`;
$("#exitButton").click(function () {
  // $("#chatbotContainer").hide();
  $("#chatbotContainer").css("display", "none");

});

function loderview() {
  var div = document.createElement("div");
  div.setAttribute("id", "loader");

  var img = document.createElement("img");

  img.setAttribute("src", "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif");

  div.appendChild(img);
  document.body.appendChild(div);
}
loderview();
setTimeout(function () {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
}, 2000);




