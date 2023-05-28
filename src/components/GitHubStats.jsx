import { Box } from "@chakra-ui/react";
import Graph from "./home/github_graph/Graph";
import "./GitHubStats.css"
import Aos from "aos";
import { useEffect } from "react";


const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth
    );
  });
};

const GitHubStats = () => {

useEffect(() => {
  Aos.init({duration:2000})  
}, [])

  return (
    <>
      <Box id="github_section" display={'flex'} flexDirection="column">
        <Graph />
        {/* <h2 className="section_heading" style={{color:'white', fontSize:'20px'}}>GitHub Stats</h2> */}
        <div>
          {/* Streak Status */}
          <h2
            className="section_heading"
            style={{ color: 'white', fontSize: '20px' }}
          >
            GitHub Stats
          </h2>

          <Box
            className="stats_container"
            display={'flex'}
            alignItem="center"
             justifyContent={'space-evenly'}

          >
            <img
              data-aos="fade-up"
              src="https://camo.githubusercontent.com/09fb7b308850437c299e9f108bac94c396402a28463b9386c030bb5842373d18/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6d6f686974643432372673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
              alt="Github stats"
            />
            <img
              data-aos="fade-up"
              src="https://camo.githubusercontent.com/eb946297038cabf892c02dd2599c89ed152ee850b5bdc9fe9f686b589a4853b7/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6d6f686974643432372673686f775f69636f6e733d74727565266c6f63616c653d656e"
              alt="Github Stats"
            />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default GitHubStats;