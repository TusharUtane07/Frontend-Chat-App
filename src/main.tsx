import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Messages from "./pages/Messages.tsx";
import Call from "./pages/Call.tsx";
import Profile from "./pages/Profile.tsx";
import Groups from "./pages/Groups.tsx";
import Settings from "./pages/Settings.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Messages />} />
			<Route path="call" element={<Call />} />
			<Route path="groups" element={<Groups />} />
			<Route path="settings" element={<Settings />} />
			<Route path="profile/:userid" element={<Profile />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
