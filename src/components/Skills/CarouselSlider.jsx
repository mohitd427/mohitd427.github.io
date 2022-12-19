import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function CarouselSlider()
{
    return(
        <Carousel responsive={responsive} autoPlay >
            <div><img src="https://img.icons8.com/color/512/javascript.png" alt="JavaScriptlogo" /></div>
            <div><img src="https://img.icons8.com/ultraviolet/512/react.png" alt="Reactlogo" /></div>
            <div><img src="https://img.icons8.com/color/512/redux.png" alt="Reduxlogo" /></div>
            <div><img src="https://img.icons8.com/color/512/html-5.png" alt="HTMLlogo" /></div>
            <div><img src="https://img.icons8.com/color/512/css3.png" alt="CSSlogo" /></div>
            <div><img src="https://img.icons8.com/color/512/typescript.png" alt="TypeScript" /></div>
            <div><img src="https://img.icons8.com/color/512/chakra-ui.png" alt="ChakraUilogo" /></div>
            <div><img src="https://img.icons8.com/fluency/512/node-js.png" alt="NodeJslogo" /></div>
            <div><img src="https://img.icons8.com/ios/2x/express-js.png" alt="ExpressJslogo" /></div>
            <div><img src="https://img.icons8.com/color/512/mongodb.png" alt="MongoDblogo" /></div>
            <div><img src="https://img.icons8.com/color/512/git.png" alt="Gitlogo" /></div>
            <div><img src="https://img.icons8.com/color/512/npm.png" alt="Npmlogo" /></div>
        </Carousel>
        
        
    )
}

export default CarouselSlider;