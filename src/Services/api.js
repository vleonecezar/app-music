const headers = {
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  "x-rapidapi-key": "18b93c6eeamsh062fed722b26f6cp1d989cjsnb72e7f9eea62",
};

export const API_TOP_WORLD = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/playlist/3155776842/tracks",
  params: { limit: 100 },
  headers: headers,
};
