import "./style.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  const queryHandler = (e) => {
    if (e.key == "Enter" && query.length != 0) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)].backdrop_path;
    setBackGround(bg);
  }, [data]);

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className="heroBannerContent">
        <span className="title">Welcome.</span>
        <span className="subTitle">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search for a movie or tv show...."
            onKeyUp={(e) => queryHandler(e)}
            onChange={(e) => setQuery(e.target.value)}
            name="search"
          />
          <button>Search</button>
        </div>
      </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
