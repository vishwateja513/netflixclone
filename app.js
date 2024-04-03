//api key from tmdb
const api = "api_key=a05fb783a6e68ec0eac29c152958c3b2";
//constant base url
const base_url = "https://api.themoviedb.org/3";
//banner url
const banner_url="https://image.tmdb.org/t/p/original";
const image_url="https://image.tmdb.org/t/p/w300";

// requests for movie data 
const req ={
    fetchNetflixOrginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en=US`,
    
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "....":str;
}

// banners
fetch(req.fetchNetflixOrginals)
    .then((res) => res.json())

    .then((data) => {
        // console.log(data.results);
        const setMovie = 
        data.results[Math.floor(Math.random() * data.results.length -1)];

        var banner =document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_desc");

        banner.style.backgroundImage =
        "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_desc.innerText = truncate(setMovie.overview,150);
        banner_title.innerText = setMovie.name;
    });

//rows of movies
fetch(req.fetchNetflixOrginals)
    .then((res) => res.json())

    .then((data) => {
        const headrow =document.getElementById("headrow");
        const row = document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);
        
        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="Netflix Orginals";

        row.appendChild(title);
         const row_poster = document.createElement("div");
         row_poster.className ="row_posters";
         row.appendChild(row_poster);

         data.results.forEach((movie) => {

            const poster =document.createElement("img");
            poster.className ="row_posterLarge";

            var s= movie.name.replace(/\s+/g, "");

            poster.id = s;
            poster.src = image_url + movie.poster_path;
            row_poster.appendChild(poster);
            
         });
    });

    //trending

fetch(req.fetchTrending)
    .then((res) => res.json())

    .then((data) => {
        const headrow =document.getElementById("headrow");
        const row = document.createElement("div");

        row.className="row";
        // row.classList.add("netflixrow");

        headrow.appendChild(row);
        
        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="Top Rated";

        row.appendChild(title);
         const row_poster = document.createElement("div");
         row_poster.className ="row_posters";
         row.appendChild(row_poster);

         data.results.forEach((movie) => {

            const poster =document.createElement("img");
            poster.className ="row_posterLarge";

            var s2= movie.id;

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_poster.appendChild(poster);
            
         });
    });

    //action
    fetch(req.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow =document.getElementById("headrow");
        const row = document.createElement("div");

        row.className="row";
        // row.classList.add("netflixrow");

        headrow.appendChild(row);
        
        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="Action Movies";

        row.appendChild(title);
         const row_poster = document.createElement("div");
         row_poster.className ="row_posters";
         row.appendChild(row_poster);

         data.results.forEach((movie) => {

            const poster =document.createElement("img");
            poster.className ="row_posterLarge";

            var s2= movie.id

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_poster.appendChild(poster);
            
         });
    });

    //comdey
    fetch(req.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow =document.getElementById("headrow");
        const row = document.createElement("div");

        row.className="row";
        // row.classList.add("netflixrow");

        headrow.appendChild(row);
        
        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="Comedy Movies";

        row.appendChild(title);
         const row_poster = document.createElement("div");
         row_poster.className ="row_posters";
         row.appendChild(row_poster);

         data.results.forEach((movie) => {

            const poster =document.createElement("img");
            poster.className ="row_posterLarge";

            var s2= movie.id

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_poster.appendChild(poster);
            
         });
    });

    //Horror
    fetch(req.fetchHorrorMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow =document.getElementById("headrow");
        const row = document.createElement("div");

        row.className="row";
        // row.classList.add("netflixrow");

        headrow.appendChild(row);
        
        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="Horror Movies";

        row.appendChild(title);
         const row_poster = document.createElement("div");
         row_poster.className ="row_posters";
         row.appendChild(row_poster);

         data.results.forEach((movie) => {

            const poster =document.createElement("img");
            poster.className ="row_posterLarge";

            var s2= movie.id

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_poster.appendChild(poster);
            
         });
    });

    //Romance mves

    fetch(req.fetchRomanceMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow =document.getElementById("headrow");
        const row = document.createElement("div");

        row.className="row";
        // row.classList.add("netflixrow");

        headrow.appendChild(row);
        
        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="Romantic Movies";

        row.appendChild(title);
         const row_poster = document.createElement("div");
         row_poster.className ="row_posters";
         row.appendChild(row_poster);

         data.results.forEach((movie) => {

            const poster =document.createElement("img");
            poster.className ="row_posterLarge";

            var s2= movie.id

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_poster.appendChild(poster);
            
         });
    });

    //documentry
    fetch(req.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow =document.getElementById("headrow");
        const row = document.createElement("div");

        row.className="row";
        // row.classList.add("netflixrow");

        headrow.appendChild(row);
        
        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="Documentaries";

        row.appendChild(title);
         const row_poster = document.createElement("div");
         row_poster.className ="row_posters";
         row.appendChild(row_poster);

         data.results.forEach((movie) => {

            const poster =document.createElement("img");
            poster.className ="row_posterLarge";

            var s2= movie.id

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_poster.appendChild(poster);
            
         });
    });