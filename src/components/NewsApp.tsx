import React, { useState, useEffect } from "react";

import Dropdown from "./Dropdown";

import { fetchNews } from "../api";
import "./index.css";

const NewsApp: React.FC = () => {
  const [newsData, setNewsData] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("Light");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [duration, setDuration] = useState("");

  // Fetch news data from the News API (You'll need to implement this)

  const getNews = async () => {
    try {
      setLoading(true);
      let params = {
        q: query,
        from: duration,
        sortBy: sortBy,
        language: language,
      };
      let news = await fetchNews(params);

      setNewsData(news.data.articles);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch news data here and update the 'newsData' state.
    getNews();
  }, [language]);

  return (
    <div className="news_app">
      <div className="dropdowns_container">
        <div>
          <Dropdown
            selectedValue={language}
            onChange={(newValue: string) => setLanguage(newValue)}
            label="Language"
            options={["en", "ar"]}
          />
        </div>
        <div>
          <Dropdown
            selectedValue={theme}
            onChange={(newValue: string) => setTheme(newValue)}
            label="Theme"
            options={["Light", "Dark"]}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsApp;
