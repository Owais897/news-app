import React, { useState, useEffect, useCallback } from "react";
import NewsCard from "./Card";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
import { fetchNews } from "../api";
import "./index.css";
import Chips from "./Chips";
import Lang from "../utils/i18n";
import { useTranslation } from "react-i18next";

const NewsApp: React.FC = () => {
  const [newsData, setNewsData] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("apple");
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { t } = useTranslation();

  const getNews = useCallback(async () => {
    try {
      setLoading(true);
      let news = await fetchNews(query);

      setNewsData(news.data.articles);
    } catch (error) {
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage, query]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  useEffect(() => {
    setQuery(t("chips:value.0"));
  }, [currentLanguage, t]);

  return (
    <div className="news_app">
      <div className="dropdowns_container">
        <div>
          <Dropdown
            selectedValue={currentLanguage}
            onChange={(langId: string) => {
              Lang.set(langId);
            }}
            label={t("dropdown:label")} //"Language"
            options={Object.keys(Lang.langs).map((lang) => ({
              label: Lang.langs[lang].title,
              value: lang,
            }))}
          />
        </div>
      </div>

      <div className="chips_container">
        <Chips onSearch={setQuery} query={query} />
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
