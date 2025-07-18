function searchVideos() {
  const query = document.getElementById("searchInput").value;

  fetch("search.php?q=" + encodeURIComponent(query))
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      if (data.items) {
        data.items.forEach(item => {
          const videoId = item.id.videoId;
          const title = item.snippet.title;

          const videoHTML = `
            <div class="video">
              <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
              <p>${title}</p>
            </div>
          `;

          resultsDiv.innerHTML += videoHTML;
        });
      } else {
        resultsDiv.innerHTML = "❌ No results found.";
      }
    })
    .catch(error => {
      console.error("Error fetching videos:", error);
      document.getElementById("results").innerHTML = "❌ Error loading results.";
    });
}
