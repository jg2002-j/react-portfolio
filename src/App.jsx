import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import FeaturedProject from "./components/FeaturedProject";
import Project from "./components/Project";
import ContactPage from "./pages/ContactPage";

function App() {
	return (
		<>
			<Header />
			<HomePage />
			<ProjectsPage />
			<FeaturedProject />
			<Project />
			<ContactPage />
		</>
	);
}

export default App;