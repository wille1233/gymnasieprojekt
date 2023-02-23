document.querySelector(".submit").addEventListener("click", handleSubmit);
document.querySelector(".password").addEventListener("keyup", handleKeyPress);

async function handleSubmit(event) {
  const password = document.querySelector(".password").value;
  checkPassword(password);
}

function loading() {
  
  
}

function stopLoading() {
  
}

function handleKeyPress(event) {
  const key = event.keyCode;
  const password = document.querySelector(".password").value;

  if (key === 13) {
    checkPassword(password);
  }

  if (password.trim() === "") {
    const dot = document.querySelector(".dot");
    dot.style.setProperty('--left', `0%`);
  }
}

async function checkPassword(password) {
  if (password.trim() === "") {
    return;
  }

  const element = document.querySelector(".submit");

  element.innerHTML = "Testa!<div class='activity-indicator'></div>";
  element.style.color = "#00000000";

  const params = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: password
    })
  }

  const dot = document.querySelector(".dot");

  const response = await fetch("/check", params);
  const { status, data } = await response.json();

  if (status === "OK") {
    const percentage = data.strength * 20;
    dot.style.setProperty('--left', `${percentage}%`);
    
    element.innerHTML = "Testa!";
    element.style.color = "#fff";
  }
}