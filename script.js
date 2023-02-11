const toggleBtn = document.getElementById("toggle-dark-mode");
const body = document.body;
let card_body = document.getElementsByClassName('card');
let forget = document.getElementById('model-content-forget');
// Check if dark mode is saved in local storage
const darkMode = localStorage.getItem("dark-mode");
if (darkMode === "true") {
  body.classList.add("dark-mode");
  for (let i = 0; i < card_body.length; i++) {
    card_body[i].classList.add("bg-dark");
  }
  // forget.classList.add("bg-dark");
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}
let signout_btn = document.getElementById('signout_btn');
let login_btn = document.getElementById('login_btn');
if (localStorage.getItem('email') != null) {
    console.log('User is logged in');
    signout_btn.style.display = 'block';
    login_btn.style.display = 'none';
}
else {
    console.log('User is not logged in');
    signout_btn.style.display = 'none';
    login_btn.style.display = 'block';
}
function sign_out() {
    localStorage.removeItem('email');
    window.location.reload();
}

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("dark-mode", "true");
    for (let i = 0; i < card_body.length; i++) {
      // forget.style.backgroundColor = "#212529"
      card_body[i].classList.add("bg-dark");
    }
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("dark-mode", "false");
    for (let i = 0; i < card_body.length; i++) {
      card_body[i].classList.remove("bg-dark");
    }
    forget.classList.remove("bg-dark");

  }
}

window.onscroll = function () {
  var nav = document.getElementsByClassName("navbar")[0];
  var navlogo = document.getElementsByClassName("navbar-brand")[0];
  var nav_link = document.getElementsByClassName("nav-link")[0];
  if (window.pageYOffset > 0) {
    // nav.style.backgroundColor = "#4637a3";
    nav.style.background = "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)";
    // nav.style.background = "linear-gradient(45deg, #70dcb4, #3519e3f2";
    nav.style.transition = "background 0.5s ease";
    navlogo.style.display = "none";
    nav.style.color = "white";
  } else {
    // nav.style.backgroundColor = "#222324b8";
    nav.style.background = "#1f1f1fbd"
    nav.style.transition = "background 0.5s ease";
    navlogo.style.display = "block";
    nav.style.color = "";
  }
};

// Add event listener to toggle button
toggleBtn.addEventListener("click", toggleDarkMode);

const head = document.head;
const link = document.createElement("link");

link.rel = "stylesheet";
link.href = "https://use.fontawesome.com/releases/v5.15.1/css/all.css";
link.integrity = "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp";
link.crossOrigin = "anonymous";



head.appendChild(link);


const headlink = document.createElement("link");
// link this link <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
headlink.rel = "stylesheet";
headlink.href = "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;1,400&display=swap";
head.appendChild(headlink);




const chatbotContainer = document.getElementById("chatbotContainer");
const chatbotHistory = document.getElementById("chatbotHistory");
const chatbotForm = document.getElementById("chatbotForm");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSubmit = document.getElementById("chatbotSubmit");
const chatbotToggle = document.getElementById("chatbotToggle");

// fetch("bot.json")
// fetch from url https://raw.githubusercontent.com/abhishek-raj-5/Chatbot/main/bot.json
fetch("bot.json")
  // fetch('https://debugshub.web.app/bot.json')
  .then(response => response.json())
  .then(data => {
    const chatbotQuestions = data;

    chatbotToggle.addEventListener("click", (event) => {
      chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "block" : "none";
    });

    chatbotForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const userQuestion = chatbotInput.value;
      chatbotHistory.innerHTML += `<div>You: ${userQuestion}</div>`;

      let chatbotResponse = "";
      for (const question of chatbotQuestions) {
        if (userQuestion.toLowerCase() === question.question.toLowerCase()) {
          chatbotResponse = question.response;
          break;
        }
      }
      if (!chatbotResponse) {
        chatbotResponse = "Sorry, I don't understand what you're asking.";
      }
      chatbotHistory.innerHTML += `<div>Vortext: ${chatbotResponse}</div>`;

      chatbotInput.value = "";
      chatbotContainer.scrollTop = chatbotContainer.scrollHeight;
    });
  });


  


  // if (localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
  //   sign_in_Btn.style.display = 'none';
  //   sign_up_Btn.style.display = 'block';
  //   console.log('login');
  // }
  // else {
  //   sign_in_Btn.style.display = 'block';
  //   sign_up_Btn.style.display = 'none';
  //   console.log('logout');
  // }
  // function signout_data(){
  //   localStorage.removeItem('email');
  //   localStorage.removeItem('password');
  //   window.location.reload();
  // }
