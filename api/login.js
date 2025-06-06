// api/login.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { email, password } = req.body;

  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ token: data.token });
    } else {
      return res.status(400).json({ error: data.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
}