import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

/* Ce fichier est le point d'entrée principal de l'application React. Il importe les modules nécessaires,
y compris le composant App et les styles globaux. Ensuite, il utilise la fonction createRoot de React 
pour monter l'application dans la div avec l'id "root" dans le fichier index.html. 
Le composant App est enveloppé dans StrictMode pour aider
à identifier les problèmes potentiels dans l'application pendant le développement. */
