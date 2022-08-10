# Superb-IMG-Nav-Plugin
This is the completed version of an image navigation plugin I created for a coding interview on HackerRank.

In this version, I fixed a navigation related bug, added more options and extended the "Object" prototype with a "makeSuperb" method to allow the plugin to be applied to any container element.

<a href="https://codepen.io/boksburger/pen/rNdKXbb" title="Working example on CodePen" target="_blank">View the working example on CodePen</a>

### Options are as follow:
```
showHint: Boolean - Descide whether to display of instructions. Default false;
hintText: String - Custom instruction / hint text
loopImages: Boolean - Depending on the direction we return to the first / last image when the end is reached.
width: Integer - Custom width option. Default | 300
height: Integer - Custom height option. Default | 300
roundCorners: Integer - Adds a rounded corner to the interface. Default | 0.
dropShaddow: Boolean - Default | false
slideShow: Integer - Interval in seconds at which to to advance to next image. Default | 0. 
reverseShow: Boolean - Changes the direction of the show when 'slideShow' is active. Default | false
preloadImages: Boolean - Allows preloading of images. Default | false
fullScreen: Boolean - Maximise images to full screen. Deafult | false
imgList: String[] - Array of image URLs. 
```
### Usage:

```
  const superbOptions = {
        showHint: true,
        hintText: "Sebenzisa amaqhosha otolo okanye j/k ukujonga imifanekiso.",
        loopImages: true,
        width: 480,
        height: 480,
        roundCorners: 16,
        dropShaddow: true,
        slideShow: 0,
        reverseShow: false,
        preloadImages: true,
        fullScreen: false,
        imgList: [
            'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1600716051809-e997e11a5d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60']
    }
  const superbElement = document.getElementById("mySuperbContainer");
  superbElement.makeSuperb(superbOptions);
```
