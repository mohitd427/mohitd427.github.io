import Graph from "./home/github_graph/Graph";



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


  return (
    <>
    
    <div id="github_section">
      <h2 className="section_heading" style={{color:'white', fontSize:'20px'}}>GitHub Stats</h2>
      <div>
      <Graph/>
        {/* Streak Status */}
        <div className="stats_container" >
          <img data-aos="fade-up"
            src="https://github-readme-streak-stats.herokuapp.com/?user=vrishabh081&theme=nightowl&border_radius=7"
            alt="Github stats"
          />
          <img data-aos="fade-up"
            src="https://github-readme-stats.vercel.app/api?username=vrishabh081&show_icons=true&theme=tokyonight"
            alt="Github Stats"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default GitHubStats;