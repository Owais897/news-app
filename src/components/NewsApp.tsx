import React, { useState, useEffect, useCallback } from "react";
import NewsCard from "./Card";
import { fetchNews } from "../api";
import "./index.css";
import Chips from "./Chips";
import { useTranslation } from "react-i18next";
import { Alert, Card, Snackbar } from "@mui/material";
import CardSkeleton from "./CardSkeleton";
import NoData from "./NoData";

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
    } catch (error: any) {
      if (error?.response?.status === 429) {
        handleClick();
      }
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

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="news_app">
      <div className="chips_container">
        <Chips onSearch={setQuery} query={query} />
      </div>
      <div className="grid_cards">
        {loading ? (
          Array.from(new Array(30)).map((s, i) => <CardSkeleton key={i} />)
        ) : newsData?.length ? (
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
        ) : (
          <Card
            sx={{
              width: "95vw",
              paddingTop: "50px",
              paddingBottom: "50px",
              boxShadow:
                "2px 2px 2px 3px rgba(0,0,0,0.2), 2px 2px 2px 2px rgba(0,0,0,0.14), 2px 2px 3px 2px rgba(0,0,0,0.12)",
              textAlign: "center",
            }}
          >
            <NoData />
          </Card>
        )}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={9000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {t("card:quota")}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NewsApp;
