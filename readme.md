# Jquery-Rnd-FullBg

**Jquery plugin for randomly change the background image from Unsplash**

#### Instalation

```js
npm install --save jquery-rnd-fullbg
```

##### You need to load Jquery first

```html
<script src="/node_modules/jquery/dist/jquery.js"></script>
<script src="/node_modules/jquery-rnd-fullbg/src/index.js"></script>
```

Before using the plugin you need to register as developer in Unsplash, then you must put the **CLIENT_ID** to be able to get photos from Unsplash API.

```js
window.rndBgUnsplash.setup(clientid);
```

#### How it works?

```html
<div id="bg-Rand"></div>
```js
$(document).ready(function(){
    window.rndBgUnsplash.setup(clientid);

    var options = {
    minHeight: 700px, //by default is 800px
    backgroundSize: contain, //by default is cover
    backgroundPosition: 'top center', //by default is center
    backgroundColor: 'red', //by default is black
    backgroundImage: 'path/img.jpg', // in case that the endpoint  responses with an error
    }
    $(#bg-Rand).RndBgUnsplash(options);
});
```

