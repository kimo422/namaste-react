import React from "react";
import ReactDOM from "react-dom/client";

/*
Application Design
* Header
* - Logo
* - Navigation
* Body
* - Search
* - Restaurant container 
*   - Restaurant Card
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/


const Header = () =>{
return (
   <div className="header">
      <div className="logo-container">
         <img className="logo" src ="null"/>
      </div>
      <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Conatct Us</li>
            <li>Cart</li>
         </ul>
      </div>
   </div>
)

};

const AppLayout = () => {
   return(
      <div className="app">
         <Header/>
      </div>
   )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

   