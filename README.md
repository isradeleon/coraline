# [Coraline](https://coralinecss.com) &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fcoralinecss.com&via=isradeleon&text=An%20alternative%20CSS%20framework%20for%20responsive%20WEB%20design&hashtags=responsive%2Cdesign%2Cframework%2Ccss)

An alternative CSS only framework. Coraline comes with multiple components and class helpers.

[![release](https://img.shields.io/github/release/isradeleon/coraline.svg?color=1dd1a1)](https://github.com/isradeleon/coraline/releases)
[![npm](https://img.shields.io/npm/v/coralinecss.svg?color=ff7675)](https://www.npmjs.com/package/coralinecss)
[![npm](https://img.shields.io/npm/dt/coralinecss.svg?color=6c5ce7)](https://www.npmjs.com/package/coralinecss)
[![license](https://img.shields.io/github/license/isradeleon/coraline.svg?color=0984e3)](LICENSE)
[![maintained](https://img.shields.io/maintenance/yes/2019.svg?color=1dd1a1)](https://www.npmjs.com/package/coralinecss)  

:star: Give me a star if you like this project :D

## Quick start

You can use the CDN for a quick start:

```html
<!-- import the styles from cdn -->
<link rel="stylesheet" href="https://cdn.statically.io/gh/isradeleon/coraline/0.6.1/coraline-v0.6.1/coraline.min.css">
```

## Easy to install

You can install the framework from npm or [download the current version here](https://github.com/isradeleon/coraline/releases/download/0.6.1/coralinecss.zip). Then just import the minified CSS file into your project.

### NPM

```sh
npm install coralinecss
```

**Here is a code snippet:**

```html
<!-- import the styles -->
<link rel="stylesheet" href="coraline-v0.6.1/coraline.min.css">
```

## Components

Coraline includes the following list of components:

* [Navbar](https://coralinecss.com/navbar.html)
* [Card](https://coralinecss.com/card.html)
* [Comment](https://coralinecss.com/comment.html)

## Elements

Coraline includes the following list of elements:

* [Button](https://coralinecss.com/button.html)
* [Tags](https://coralinecss.com/tags.html)
* [Circular img](https://coralinecss.com/circular-img.html)

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

The whole framework is just **15K** size minified.

## Built with

* [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) Flexible Box Module
* [Autoprefixer](https://github.com/postcss/autoprefixer) for better browser support
* [CSSO](https://github.com/css/csso) CSS compressor
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