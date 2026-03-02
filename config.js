import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getAuth } from 
"https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4VtXbaJrPb2Rg9DxRguVvhQXtiCONPc0",
  authDomain: "registro-de-evidencia-ip.firebaseapp.com",
  projectId: "registro-de-evidencia-ip",
  storageBucket: "registro-de-evidencia-ip.firebasestorage.app",
  messagingSenderId: "1036238743155",
  appId: "1:1036238743155:web:9ea3295cf23de0dfa32c06",
  measurementId: "G-966RC1KP2L"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);