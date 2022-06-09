const getTopMovies = (data) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://imdb-api.com/en/API/Top250Movies/k_a457c7lp");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status == 200) {
      let response = JSON.parse(xhr.response);
      data(response);
    } else {
      console.log(`HTTP Request Failed ${xhr.status}`);
    }
  };
};

export default getTopMovies;
