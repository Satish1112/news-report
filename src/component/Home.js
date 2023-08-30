import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { Grid } from "@mui/material";
import Welcome from "./Welcome";

function Home() {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=dc9688cc42d5482ea2b3c52e590fb4e5"
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };
  useEffect(() => {
    getNews();
  }, []);
  console.log(news[0]);
  return (
    <div style={{ padding: "20px" }}>
      <Welcome news={news} />
      <div style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          {news.map((data) => {
            return (
              <Grid item xs={3}>
                <NewsCard data={data} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
