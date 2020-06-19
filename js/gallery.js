function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {

      let newImageSrc = thumbnail.dataset.largeVersion;
      let currentClass = "current";
      let newImageAlt = thumbnail.alt;

      // set clicked image as main image
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);

      // change which image is current (for thumbnail border)
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // update information for each image on click
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
