document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  const spinner = document.getElementById("spinner");

  message.textContent = "";
  spinner.style.display = "block";

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    spinner.style.display = "none";

    if (response.ok) {
      window.location.href = Window.location.oringin + "bem-vindo.html";
    } else {
      message.style.color = "tomato";
      message.textContent = "❌ Erro: " + (data.error || "Credenciais inválidas.");
    }
  } catch (error) {
    spinner.style.display = "none";
    message.style.color = "red";
    message.textContent = "Erro de conexão. Tente novamente.";
  }
});