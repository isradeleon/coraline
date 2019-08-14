# [Coraline](https://coralinecss.com) &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fcoralinecss.com&via=isradeleon&text=An%20alternative%20CSS%20framework%20for%20responsive%20WEB%20design&hashtags=responsive%2Cdesign%2Cframework%2Ccss)

HTML, CSS and JS frontend component library. Coraline comes with some powerful components and multiple class helpers.

[![release](https://img.shields.io/github/release/isradeleon/coraline.svg?color=1dd1a1)](https://github.com/isradeleon/coraline/releases)
[![npm](https://img.shields.io/npm/v/coralinecss.svg?color=ff7675)](https://www.npmjs.com/package/coralinecss)
[![npm](https://img.shields.io/npm/dm/coralinecss.svg?color=6c5ce7)](https://www.npmjs.com/package/coralinecss)
[![license](https://img.shields.io/github/license/isradeleon/coraline.svg?color=0984e3)](LICENSE)
[![maintained](https://img.shields.io/maintenance/yes/2019.svg?color=1dd1a1)](https://www.npmjs.com/package/coralinecss)  

:star: Give us a star on Github!

## Easy to install

You may just install the framework from npm or download the current version from [here](https://github.com/isradeleon/coraline/releases/download/0.5.1/coralinecss.zip). Then just import the minified CSS and JS files into your project.

### NPM

```sh
npm install coralinecss
```

**Here is a code snippet:**

```html
<!-- Import the styles -->
<link rel="stylesheet" href="coraline-v0.5.1/coraline.min.css">

<!-- Staggered grid and sidebar functionality -->
<script src="coraline-v0.5.1/coraline.min.js"></script>
```

## Components

Coraline includes the following list of components:

[**Staggered grid view**](https://coralinecss.com/staggered.html)  

![](https://raw.githubusercontent.com/isradeleon/coraline-docs/master/example/staggered.png)

[**Sidebar**](https://coralinecss.com/sidebar.html)  

![](https://raw.githubusercontent.com/isradeleon/coraline-docs/master/example/sidebar.gif)

[**Navbar**](https://coralinecss.com/navbar.html)  

![](https://raw.githubusercontent.com/isradeleon/coraline-docs/master/example/navbar.gif)

[**Card**](https://coralinecss.com/card.html)  

![](https://raw.githubusercontent.com/isradeleon/coraline-docs/master/example/card.png)

[**Comment**](https://coralinecss.com/comment.html)  

![](https://raw.githubusercontent.com/isradeleon/coraline-docs/master/example/comment.png)


## Grid system

A [grid system](https://coralinecss.com/grid-system.html) designed for being simple, legible and easy to learn. Here is a little code sample:

```html
<div class="grid">
    <div class="col-6">
        ...
    </div>
    <div class="col-6">
        ...
    </div>
</div>
```

For defining the columns size on mobile and tablet just add:

```html
<div class="grid">
    <div class="col-6 tablet-12 mobile-6">
        ...
    </div>
    <div class="col-6 tablet-12 mobile-6">
        ...
    </div>
</div>
```

And same on large screen devices:

```html
<div class="grid">
    <div class="col-12 large-6">
        ...
    </div>
    <div class="col-12 large-6">
        ...
    </div>
</div>
```

## Lightweight

The whole framework weighs just **19.3K** minified.

## Built with

* [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) Flexible Box Module
* [Autoprefixer](https://github.com/postcss/autoprefixer) for better browser support
* [CSSO](https://github.com/css/csso) CSS compressor
* [Terser](https://github.com/terser-js/terser) JS compressor
* [Sass](https://sass-lang.com/) Syntactically Awesome Style Sheets

## Browser Support

Coraline is compatible with recent versions of:

* Firefox
* Chrome
* Safari
* Edge
* Opera
* Partial support for Internet Explorer

## Documentation

Currently working to improve the [documentation](https://coralinecss.com). The docs are generated using [Nunjucks](https://github.com/mozilla/nunjucks) and saved to **../coraline-docs/**.

## License

This library is licensed under `MIT license`. View [license](LICENSE).