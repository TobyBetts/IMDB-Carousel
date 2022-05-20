const getMovieDetails = (data, id) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://imdb-api.com/en/API/Title/k_hb5v8ahs/${id}`);
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

export default getMovieDetails;
