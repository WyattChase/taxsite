import React from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";


//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
		 
		  <Header />
		  <Main />
		  <Footer />
		</div>
	  );
};

export default Home;
