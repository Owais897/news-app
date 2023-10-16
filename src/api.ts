import axios from "axios";

const apiKey = "83dc5360e7294e2baca212605036360b";
const baseUrl = "https://newsapi.org/v2/everything";

interface Params {
  q: string;
  from: string;
  sortBy: string;
  language: string;
}

export async function fetchNews(params: Params) {
  let { q, from, sortBy, language } = params;
  console.log("language: ", language);

  let url = `${baseUrl}?q="3"&language=${language}&apiKey=${apiKey}`;
  // let url = `${baseUrl}?q=${q}&from=${from}&sortBy=${sortBy}&language=${language}&apiKey=${apiKey}`;

  return await axios.get(url);
}
