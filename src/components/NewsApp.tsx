import React, { useState, useEffect, useCallback } from "react";
import NewsCard from "./Card";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
import { fetchNews } from "../api";
import "./index.css";
import Chips from "./Chips";

const NewsApp: React.FC = () => {
  const [newsData, setNewsData] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const [query, setQuery] = useState("apple");

  const [sortBy, setSortBy] = useState("");
  const [duration, setDuration] = useState("");

  const getNews = useCallback(async () => {
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
  }, [duration, language, query, sortBy]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  const en = ["apple", "meta", "netflix", "google", "twitter", "tesla"];

  const ar = ["أبل", "ميتا", "نيتفليكس", "جوجل", "تويتر", "تيسلا"];

  return (
    <div className="news_app">
      <div className="dropdowns_container">
        <div>
          <Dropdown
            selectedValue={language}
            onChange={(newValue: string) => {
              setLanguage(newValue);
              setQuery(newValue === "en" ? en[0] : ar[0]);
            }}
            label="Language"
            options={[
              { label: "English", value: "en" },
              { label: "Arabic", value: "ar" },
            ]}
          />
        </div>
      </div>

      <div className="chips_container">
        <Chips
          chips={language === "en" ? en : ar}
          onSearch={setQuery}
          query={query}
        />
      </div>
      <div className="grid_cards">
        {loading ? (
          <Loader />
        ) : (
          newsData.map(
            (article: {
              id: React.Key | null | undefined;
              title: string;
              description: string;
              urlToImage: string;
              url: string;
              publishedAt: string;
            }) => (
              <div className="card">
                <NewsCard
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  articleUrl={article.url}
                  publishedAt={article.publishedAt}
                />
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default NewsApp;
