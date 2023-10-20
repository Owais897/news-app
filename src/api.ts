import axios from "axios";
import Lang from "./utils/i18n";

const apiKey = "881a188396d94f5da61da936b42c5d41";
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
