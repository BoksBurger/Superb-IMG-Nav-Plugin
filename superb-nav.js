//**** This is the plugin part ****//
let currentImage = 0;
Object.prototype.makeSuperb = function (options) {
  if (!Array.isArray(options.imgList))
    throw new Error("Please specify a String[] of image URLs");

  if (options.imgList.length > 0) {
    let image = document.createElement("div");
    let width = `${options.width ? options.width : 300}px`;
    let height = `${options.height ? options.height : 300}px`;
    let radius = `${options.roundCorners ? options.roundCorners : 0}px`;
    let shaddow = `${options.dropShaddow ? "1px 1px 5px black" : "unset"}`;
    let hintText = "Use the j/k or arrow keys to navigate between images.";

    this.className = "imgNav";
    image.className = "imgViewer";

    image.style.width = width;
    image.style.height = height;
    image.style.borderRadius = radius;
    image.style.boxShadow = shaddow;
    this.appendChild(image);

    if (options.showHint) {
      let hint = document.createElement("div");
      hint.className = "hintText";
      hint.innerText = options.hintText ? options.hintText : hintText;
      hint.style.width = width;
      hint.style.borderRadius = radius;
      hint.style.boxShadow = shaddow;
      this.appendChild(hint);
    }

    if (options.slideShow) {
      setInterval(() => {
        options.reverseShow ? previousImage() : nextImage();
      }, options.slideShow * 1000);
    }

    if (options.preloadImages) {
      for (let i = 0; i < options.imgList.length; i++) {
        const imageURL = options.imgList[i];
        const img = new Image();
        img.src = imageURL;
      }
    }

    function updateImage(i) {
      image.style.backgroundImage = `url(${options.imgList[i]})`;
    }

    document.onkeydown = (e) => {
      if (e.key === "k" || e.key === "K" || e.key === "ArrowRight") {
        nextImage();
      }
      if (e.key === "j" || e.key === "J" || e.key === "ArrowLeft") {
        previousImage();
      }
    };

    function nextImage() {
      if (currentImage < options.imgList.length - 1) {
        currentImage++;
      } else if (options.loopImages) {
        currentImage = 0;
      }
      updateImage(currentImage);
    }

    function previousImage() {
      if (currentImage > 0) {
        currentImage--;
      } else if (options.loopImages) {
        currentImage = options.imgList.length - 1;
      }
      updateImage(currentImage);
    }
    //Set initial image
    updateImage(currentImage);
  } else {
    throw new Error("Image list is empty. Add URLs to 'imgList'.");
  }
};
//**** End of the plugin part ****//
