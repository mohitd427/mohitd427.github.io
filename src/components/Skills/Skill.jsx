import CarouselSlider from "./CarouselSlider";
import "./Skill.css"

export function Skills()
{
    return(
        <>
            <div id="skills">
                <h1 style={{color:'white', fontSize:'20px'}}>My Technical Skills</h1>
                <CarouselSlider/>
            </div>
        </>
    );
}