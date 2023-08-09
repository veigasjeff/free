

// Fetch the movie data from movies.json
fetch("/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const playlistScrol = document.querySelector(".playlist_scrol");

    data.forEach((movie) => {
      const link = document.createElement("a");
      link.className = "w-img";
      const urlParts = movie["movie.watch"].split('/');
      const folderName = urlParts[urlParts.length - 2];
      link.href = `/movies/${folderName}/index.html`; // Append "index.html" at the end



      const img = document.createElement("img");
      img.src = `../../wp-content/uploads/2023/02/${movie.poster}`;
      img.style.borderRadius = "10%";
      img.style.border = "2px solid #40D7BC";
      img.alt = movie.title;

      const listItem = document.createElement("li");
      listItem.className = "palylist-video";

      link.appendChild(img);
      listItem.appendChild(link);
      playlistScrol.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching movie data:", error);
  });

// Fetch the movie data from movies.json
            fetch("/movies.json")
              .then((response) => response.json())
              .then((data) => {
                const productSlider = document.querySelector(".product__slider-4");

                data.forEach((movie) => {
                const link = document.createElement("a");
                const urlParts = movie["movie.watch"].split('/');
                const folderName = urlParts[urlParts.length - 2];
                link.href = `/movies/${folderName}/index.html`; // Append "index.html" at the end

                  const productItem = document.createElement("div");
                  productItem.className = "product__item";

                  const productWrapper = document.createElement("div");
                  productWrapper.className = "product__wrapper";

                  const productThumb = document.createElement("div");
                  productThumb.className = "product__thumb";
                


                  const img = document.createElement("img");
                  img.src = `../../wp-content/uploads/2023/02/${movie.poster}`;
                  img.style.borderRadius = "10%";
                  img.style.border = "2px solid #40D7BC"; // Add border style
                  img.alt = movie.title;

                  link.appendChild(img);
                  productThumb.appendChild(link);
                  productWrapper.appendChild(productThumb);
                  productItem.appendChild(productWrapper);

                  productSlider.appendChild(productItem);
                });
              })
              .catch((error) => {
                console.error("Error fetching movie data:", error);
              });
          


    const modeToggleBtn = document.getElementById('modeToggleBtn');
    const body = document.body;

    modeToggleBtn.addEventListener('click', toggleMode);

    var logoImage = document.querySelector('.logo');
    if (logoImage.style.display === 'none') {
      logoImage.style.display = 'block';
    } else {
      logoImage.style.display = 'none';
    }

    function toggleMode() {
      body.classList.toggle('night-mode');
      if (body.classList.contains('night-mode')) {
        modeToggleBtn.innerHTML = '<img src="/wp-content/uploads/2023/05/day-and-night.png" alt="Day and Night Icon" style="height: 2em; margin-right: 4px;">' +
          '<span class="text-2xl font-bold" style="text-shadow: 2px 5px 5px #fff;">Night Mode</span>';
      } else {
        modeToggleBtn.innerHTML = '<img src="/wp-content/uploads/2023/05/day-and-night.png" alt="Day and Night Icon" style="height: 2em; margin-right: 4px;">' +
          '<span class="text-2xl font-bold" style="text-shadow: 2px 5px 5px #000;">Day Mode</span>';
      }
    }

    

    (function (s, u, z, p) { s.src = u, s.setAttribute('data-zone', z), p.appendChild(s); })(document.createElement('script'), 'https://inklinkor.com/tag.min.js', 5741273, document.body || document.documentElement);
