import { auth } from "./config.js";

import { 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// LOGIN
document.getElementById("loginBtn")?.addEventListener("click", async () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (err) {
    error.textContent = "Correo o contraseña incorrectos";
  }

});

// PROTEGER PÁGINAS
onAuthStateChanged(auth, (user) => {
  if (!user && window.location.pathname.includes("dashboard.html")) {
    window.location.href = "index.html";
  }

});
