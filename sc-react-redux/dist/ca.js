import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


class Carousels extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      
    }
  }
    componentDidMount(){
      console.log("The carousel is here");
    }
    render(){
      return(
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}
});

ReactDOM.render(<ControlledCarousel />, mountNode);
      )
    }
}



export default Carousels;
