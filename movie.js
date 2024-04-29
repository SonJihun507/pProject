const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVkZjgwZTI2ODQxMzA5ZDhlMThiYWMyNmY3NWM5YiIsInN1YiI6IjY2Mjg2ODE1MTc2YTk0MDE3ZjgyYTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TaWNQD6wyfZ6gV1sMyBEO4es16GId-P3hEgLA8lvuJA'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())

  .then(response => {
    console.log(response)

    let movie_list = response.results;
    movie_list.forEach(element => {
      let newCard = document.createElement('div');
      newCard.className = "section_card";
      newCard.id = element.id;
      newCard.onclick = alert_movie_id;

      const newImg = document.createElement('img');
      newImg.className = 'card_poster_path';
      newImg.src = "https://image.tmdb.org/t/p/w500" + element.poster_path;
      newImg.alt = "영화 이미지";

      newCard.appendChild(newImg);

      const newH3 = document.createElement('h3');
      newH3.className = 'card_title';
      newH3.innerText = element.title;

      newCard.appendChild(newH3);

      const newP1 = document.createElement('p');
      newP1.className = 'card_overview';
      newP1.innerText = element.overview;

      newCard.appendChild(newP1);

      const newP2 = document.createElement('p');
      newP2.className = 'vote_average';
      newP2.innerText = "Rate: " + element.vote_average;

      newCard.appendChild(newP2);

      document.getElementById('movies_list').appendChild(newCard)

     

      

    });
    function alert_movie_id() {
      window.alert("영화ID: " + element.id);
    }
    //검색시스템 구현 실패
    
  })








