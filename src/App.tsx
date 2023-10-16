import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";
import axios from "axios";

const url = "https://newsapi.org/docs/endpoints/everything";

interface News {
  title: string;
  description: string;
  author: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}
function NewsApp() {
  const [news, setNews] = useState([] as News[]);
  console.log("news: ", news);
  const [language, setLanguage] = useState("en");
  const [search, setSearch] = useState("");

  const handleLanguageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setLanguage(event.target.value as string);
  };

  const handleSearch = () => {
    axios
      // .get(`http://localhost:5000/news?language=${language}&q=${search}`)
      .get(url)
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Multi-Lingual News App
      </Typography>
      <br />
      <br />
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />

      <TextField
        select
        label="Language"
        variant="outlined"
        fullWidth
        value={language}
        onChange={handleLanguageChange}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar">Arabic</MenuItem>
      </TextField>
      <br />
      <br />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>

      <br />
      <br />
      <Paper>
        {news.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </Paper>
    </Container>
  );
}

export default NewsApp;
