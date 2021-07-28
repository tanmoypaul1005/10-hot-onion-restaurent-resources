import React from 'react';
import logo from '../../images/logo.png';
import './footer.css';
const Footer = () => {
    return (
        <div className="body">
        <div className="footer">
            <div className="col-md-6"><img src={logo} width="140" height="45"></img>
            </div>

           
            <div className="col-md-3 "> 
            <ul> 
                    <p>About Online lood</p>
                    <p>Read Our Blog</p>
                    <p>Sing up to deliver</p>
                    <p>Add your restaurants</p>
                    </ul></div>

               <div className="col-md-3 ">     
               <ul>
                    <p>Get Help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </ul></div>
                
            </div> 
            <footer className="footer">
            <div><p>Copyright © Online Food</p></div>    
            </footer>   
            </div>
           
       
        
    );
};

export default Footer;