image-vertical-scroll
=====================

Using Image Vertical Scroll jQuery Plugin is helpful when you want to create Vertical Image Scroll.

Version: 0.1

##How to use

###HTML
```
<html>

<head>
  <link rel="stylesheet" href="./css/image-vertical-scroll.css" />
</head>

<body>

<div class="imageArea">
  <div class="imageSection">
    <img src="splash/splash-001.jpg" />
  </div>

  <div class="imageSection">
    <img src="splash/splash-002.jpg" />
  </div>

  <div class="imageSection">
    <img src="splash/splash-003.jpg" />
  </div>

  <div class="imageSection">
    <img src="splash/splash-004.jpg" />
  </div>

  <div class="imageSection">
    <img src="splash/splash-005.jpg" />
  </div>

</div>

<script src="./js/image-vertical-scroll.js"></script>
</body>

</html>
```
###Javascript 
```
$(document).ready(function(){
  $(".imageSection").imageVerticalScrollfy();
});
```
