//**** This is the plugin part ****//
let currentImage = 0;
Object.prototype.makeSuperb = function(options){
    options["container"] =  this.id;
    superbImageNav(options); 
}
function superbImageNav(options) {
    if (options?.imgList.length > -1) {
        if (!options?.container) console.log("Please specify the container element ID");
        let container = document.getElementById(options?.container);
        let viewPort = document.createElement("div");
        let hint = document.createElement("div");
        viewPort.className = "imgViewer";
        container.className = "imgNav";
        container.appendChild(viewPort);

        viewPort.style.width = `${options.width ? options.width : 300}px`;
        viewPort.style.height = `${options.height ? options.height : 300}px`;
        viewPort.style.borderRadius = `${options.roundCorners ? options.roundCorners : 0}px`;
        viewPort.style.boxShadow = `${options.dropShaddow ? "1px 1px 5px black" : "unset"}`;

        if (options.showHint) {
            hint.className = "hintText"
            hint.innerText = options.hintText ? options.hintText : "Use the j/k or arrow keys to navigate between images.";
            hint.style.width = `${options.width ? options.width : 300}px`
            hint.style.borderRadius = `${options.roundCorners ? options.roundCorners : 0}px`;
            hint.style.boxShadow = `${options.dropShaddow ? "1px 1px 5px black" : "unset"}`
            container.appendChild(hint);
        }
        function updateImage(i) {
            viewPort.style.backgroundImage = `url(${options.imgList[i]})`
        }

        if (options.slideShow) {
            setInterval(() => {
                options.reverseShow ? previousImage() : nextImage()
            }, options.slideShow * 1000);
        }

        //Capture keyboard event
        document.onkeydown = (e) => {
            if (e.key === "k" || e.key === "K" || e.key === "ArrowRight") {
                nextImage();
            } else if (e.key === "j" || e.key === "J" || e.key === "ArrowLeft") {
                previousImage();
            }
            updateImage(currentImage);
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
    }
}
//**** End of the plugin part ****//