import axios from "axios";
import Lang from "./utils/i18n";

const apiKey = "83dc5360e7294e2baca212605036360b";
const baseUrl = "https://newsapi.org/v2/everything";

export async function fetchNews(topic: string) {
  return await axios.get(baseUrl, {
    params: {
      q: topic,
      apiKey,
      language: Lang.get(true),
      from: new Date(Date.now() - 1000 * 3600 * 24 * 7).toISOString(),
      sortBy: "publishedAt",
    },
  });
}

// when api limit exceeded while testing
export const mockData = {
  data: {
    status: "ok",
    totalResults: 100,
    articles: [
      {
        source: {
          id: "cnn",
          name: "CNN",
        },
        author: "John Doe",
        title: "Sample News Article",
        description: "This is a sample news article.",
        url: "https://example.com/sample-news",
        urlToImage: "https://example.com/images/sample-news.jpg",
        publishedAt: "2023-10-16T10:00:00Z",
        content: "This is the content of the sample news article.",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "Jane Smith",
        title: "Another Sample Article",
        description: "This is another sample article.",
        url: "https://example.com/another-sample-article",
        urlToImage: "https://example.com/images/another-sample-article.jpg",
        publishedAt: "2023-10-16T09:30:00Z",
        content: "This is the content of another sample article.",
      },
      // More articles...
    ],
  },
};
