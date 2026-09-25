const url = `https://api.nasa.gov/planetary/apod?api_key=GgzN0awIlsGtEVz9DMFkFfBzk1qlprphMZPxCy3C`; 

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.url})`;
    document.querySelector(".apod-name").textContent = data.title;
    document.querySelector(".apod-description").textContent = data.explanation;
  })