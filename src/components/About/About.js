import React from 'react';
import icon2 from '../../images/ICON/Group 1133.png';
import icon1 from '../../images/ICON/Group 204.png';
import icon3 from '../../images/ICON/Group 245.png';
import img1 from '../../images/Image/adult-blur-blurred-background-687824.png';
import img3 from '../../images/Image/architecture-building-city-2047397.png';
import img2 from '../../images/Image/chef-cook-food-33614.png';
import './About.css';
const About = () => {
    return (
      <section className="features">
            
            <header className="Header text-center">
            <h3>Why You Choose us</h3>
            <p>Barton waited twenty always repair in within do  offending<br/>And delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </header>
            
           
            <div class="row">
            <div className="col-md-4 d-block d-lg-flex">
            <div>
            <img src={img1} width="400" height="300" alt=""></img>
            <div  className="dd">
            
            <img src ={ icon1} width="50" height="50"></img>
            
            <p><small><h5 className="hading">First Delevery</h5>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sunt sapiente ullam debitis animi quos? Totam.  </small></p>
            </div>
            <a className="Learnmore"s href="#demo" data-toggle="collapse">Learn more</a>
            <div id="demo" className="collapse">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum optio, non perspiciatis maxime esse perferendis.</p></div>
            </div></div>
            

            <div className="col-md-4 d-block d-lg-flex">
            <div>
            <img src={img2} width="400" height="380"></img>
            <div  className="dd">
            <img src ={ icon2} width="50" height="50"></img>
            <p><small><h5 className="hading">A Good Auto Response</h5> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sunt sapiente ullam debitis animi quos? Totam, dolore illo sit ipsum, quae doloribus laboriosam non modi </small></p>
            </div>
            <a className="Learnmore" href="#demo" data-toggle="collapse">Learn more</a>
            <div id="demo" className="collapse">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum optio, non perspiciatis maxime esse perferendis.</p></div>
            </div></div>
            
            

            <div className="col-md-4 d-block d-lg-flex">
            <div>
            <img src={img3} width="400" height="300"></img>
            <div  className="dd">
            <img src ={ icon3} width="50" height="50"></img>
            <p><small><h5 className="hading">Home Delevery</h5> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sunt sapiente ullam debitis animi quos? Totam, dolore illo sit ipsum, quae doloribus laboriosam non modi </small></p>
            </div>
            <a className="Learnmore" href="#demo" data-toggle="collapse">Learn more</a>
            <div id="demo" className="collapse">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum optio, non perspiciatis maxime esse perferendis.</p></div>
            </div></div>
            </div>
            
            </section>
            

);
};

export default About;