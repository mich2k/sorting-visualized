import React from "react";
import "./css/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
