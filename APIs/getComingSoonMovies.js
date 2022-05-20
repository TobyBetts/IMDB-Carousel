const getComingSoonMovies = (data) => {
  const xh = new XMLHttpRequest(data);
  xh.open("GET", "https://imdb-api.com/en/API/ComingSoon/k_a457c7lp");
  xh.send();
  xh.onload = () => {
    if (xh.status == 200) {
      let response = JSON.parse(xh.response);
      data(response);
    } else {
      console.log(`HTTP Request Failed ${xh.status}`);
    }
  };
};

export default getComingSoonMovies;
