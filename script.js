document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita o recarregamento da página

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      message.style.color = "green";
      message.textContent = "✅ Login realizado com sucesso!";
      console.log("Token recebido:", data.token);
    } else {
      message.style.color = "red";
      message.textContent = "❌ Erro: " + (data.error || "Email ou senha inválidos.");
    }
  } catch (error) {
    message.style.color = "red";
    message.textContent = "❌ Erro de conexão com o servidor.";
  }
});