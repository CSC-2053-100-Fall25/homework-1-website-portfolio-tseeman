document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggle-photo-btn");
  const photoContainer = document.getElementById("photo-container");

  button.addEventListener("click", function () {
    if (photoContainer.style.display === "none") {
      photoContainer.style.display = "block";
      button.textContent = "Hide Photo";
    } else {
      photoContainer.style.display = "none";
      button.textContent = "Show Photo";
    }
  });

  const addArtistButton = document.getElementById('add-artist');

  addArtistButton.addEventListener('click', function () {
    const interest = prompt("Enter one of your artists:");
    if (interest && interest.trim() !== '') {
      const artistElement = document.createElement('p');
      artistElement.textContent = interest;
      artistElement.style.backgroundColor = '#f0f8ff';
      artistElement.style.padding = '5px';
      artistElement.style.margin = '5px 0';
      artistElement.style.borderRadius = '3px';

      const container = document.getElementById('artists-container');
      container.appendChild(artistElement);
    }
  });
});