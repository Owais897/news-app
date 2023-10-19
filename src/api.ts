import axios from "axios";
import Lang from "./utils/i18n";

const apiKey = "586deb157593445bb581b17ac23db425";
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
