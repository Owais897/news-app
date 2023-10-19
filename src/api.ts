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
