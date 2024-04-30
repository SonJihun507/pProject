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

     
      function alert_movie_id() {
        window.alert("영화ID: " + element.id);
      }
      
      const searchInput = document.querySelector("#search-input");
      searchInput.focus();
      
      const movieCards = document.querySelectorAll(".movie_list");

      movieCards.forEach((section_card) => {
        const title = section_card.querySelector(".card_title").textContent.toLowerCase();
          if (title.includes(searchKeyword)) {
          section_card.style.display = "block";
            } else {
              section_card.style.display = "none"; 
            
          }
                
       
      });
      // const search_movie = async event => {
      //   const search_text = document.getElementsByClassName("search-text")[0];
      //   const search_keyword = search_text.value.toUpperCase();
    
      //   const search_movie_list = movie_list.filter(
      //      ({title}) => title.toUpperCase().includes(search_keyword)
      //     );
    
      //     search_movie_list.length > 0
      //       ? movie_list(search_movie_list)
      //       : alert("검색 결과가 없습니다.");
      //     ;
    
      //   } 
        
      

    });
    
    
  })








 