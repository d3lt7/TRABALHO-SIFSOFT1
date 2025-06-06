document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  message.style.color = "white";
  message.textContent = "Carregando...";

  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      message.style.color = "lightgreen";
      message.textContent = "✅ Login realizado com sucesso!";
      console.log("Token:", data.token);
    } else {
      message.style.color = "tomato";
      message.textContent = "❌ Erro: " + (data.error || "Credenciais inválidas.");
    }
  } catch (error) {
    message.style.color = "red";
    message.textContent = "Erro de conexão. Tente novamente.";
  }
});