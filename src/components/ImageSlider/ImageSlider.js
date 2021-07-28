import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
    return (
       
        <Carousel className="item">
        <Carousel.Item>
          <img
            className="d-block w-100 h-170"
            src="https://i.imgur.com/oZ3CdMG.png"
            alt="First slide"
          />
        <Carousel.Caption>   
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-170"
            src="https://i.imgur.com/ny5vKeb.png"
            alt="Second slide"
          />
        <Carousel.Caption>  
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>


        <img
            className="d-block w-100 h-170"
            src="https://i.imgur.com/LBdaRhU.png"
            alt="Second slide"
          />
        <Carousel.Caption>  
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>


          
        <img
            className="d-block w-100 h-170"
            src="https://i.imgur.com/lUwBpvN.png"
            alt="Second slide"
          />
        <Carousel.Caption>  
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>


        <img
            className="d-block w-100 h-170"
            src="https://i.imgur.com/CL9QRyH.png"
            alt="Second slide"
          />
        <Carousel.Caption>  
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>



        <img
            className="d-block w-100 h-170"
            src="https://i.imgur.com/qy1MTBp.png"
            alt="Second slide"
          />
        <Carousel.Caption>  
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
   


          <img
            className="d-block w-100 h-170"
            src="https://i.imgur.com/SsOr7Vp.png"
            alt="Third slide"
          />
      
      <Carousel.Caption>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
        


   
  
 
    );
};

export default ImageSlider;