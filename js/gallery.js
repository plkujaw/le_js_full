function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo img");
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // set clicked image as main image
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newImageAlt = thumbnail.alt;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);
      console.log(newImageAlt);
  });
  });
}
