function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // set clicked image as main image
      let newImageSrc = thumbnail.dataset.largeVersion;
    mainImage.setAttribute("src", newImageSrc);
  });
  });
}
