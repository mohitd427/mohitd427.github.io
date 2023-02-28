import CarouselSlider from './CarouselSlider';
import './Skill.css';

export function Skills() {
  return (
    <>
      <div className="skills_title">
        <h1 style={{ color: 'white', fontSize: '20px' }}>
          My Technical Skills
        </h1>
          </div>
          
      <div id="skills" >
        <div>
          <img
            src="https://img.icons8.com/color/512/javascript.png"
            alt="JavaScriptlogo"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/ultraviolet/512/react.png"
            alt="Reactlogo"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/color/512/redux.png"
            alt="Reduxlogo"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/color/512/html-5.png"
            alt="HTMLlogo"
          />
        </div>
        <div>
          <img src="https://img.icons8.com/color/512/css3.png" alt="CSSlogo" />
        </div>
        <div>
          <img
            src="https://img.icons8.com/color/512/typescript.png"
            alt="TypeScript"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/color/512/chakra-ui.png"
            alt="ChakraUilogo"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/fluency/512/node-js.png"
            alt="NodeJslogo"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/ios/2x/express-js.png"
            alt="ExpressJslogo"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/color/512/mongodb.png"
            alt="MongoDblogo"
          />
        </div>
        <div>
          <img src="https://img.icons8.com/color/512/git.png" alt="Gitlogo" />
        </div>
        <div>
          <img src="https://img.icons8.com/color/512/npm.png" alt="Npmlogo" />
        </div>
      </div>
    </>
  );
}
