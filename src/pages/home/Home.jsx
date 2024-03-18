import "./style.scss" ;
import HeroBanner from "./heroBanner/HomeBanner" ;
import Trending from "./trending/Trending";
const Home = () => {
  return (
    <div className="heroName">
     <HeroBanner/>
     <Trending/>  
    </div>
  )
}

export default Home;
