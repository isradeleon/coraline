# [SocialiteUI](https://socialiteui.com) &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fsocialiteui.com&via=isradeleon&text=An%20alternative%20CSS%20framework%20for%20responsive%20WEB%20design&hashtags=responsive%2Cdesign%2Cframework%2Ccss%2Csocialiteui)

Lightweight HTML, CSS and JS component library. SocialiteUI comes with some powerful frontend components and multiple class helpers.

[![release](https://img.shields.io/github/release/isradeleon/socialiteui.svg?color=1dd1a1)](https://github.com/Isradeleon/socialiteui/releases)
[![npm](https://img.shields.io/npm/v/socialiteui.svg?color=ff7675)](https://www.npmjs.com/package/socialiteui)
[![npm](https://img.shields.io/npm/dm/socialiteui.svg?color=6c5ce7)](https://www.npmjs.com/package/socialiteui)
[![license](https://img.shields.io/github/license/isradeleon/socialiteui.svg?color=0984e3)](LICENSE)
[![maintained](https://img.shields.io/maintenance/yes/2019.svg?color=1dd1a1)](https://www.npmjs.com/package/socialiteui)  

:star: Star the project on Github!

## Easy to install

You may just install the framework from npm or download the current version from [here](https://github.com/Isradeleon/socialiteui/releases/download/0.4.9/socialiteui-v0.4.9.zip). Then just import the minified CSS and JS files into your project.

### NPM

```sh
npm install socialiteui
```

**Here is a code snippet:**

```html
<!-- Import the styles -->
<link rel="stylesheet" href="socialiteui-v0.4.9/socialiteui.min.css">

<!-- Staggered grid and sidebar functionality -->
<script src="socialiteui-v0.4.9/socialiteui.min.js"></script>
```

## Components

The framework includes the following list of components:

[**Staggered grid view**](https://socialiteui.com/staggered.html)  

![](https://raw.githubusercontent.com/Isradeleon/socialiteui-docs/master/example/staggered.png)

[**Sidebar**](https://socialiteui.com/sidebar.html)  

![](https://raw.githubusercontent.com/Isradeleon/socialiteui-docs/master/example/sidebar.gif)

[**Navbar**](https://socialiteui.com/navbar.html)  

![](https://raw.githubusercontent.com/Isradeleon/socialiteui-docs/master/example/navbar.gif)

[**Card**](https://socialiteui.com/card.html)  

![](https://raw.githubusercontent.com/Isradeleon/socialiteui-docs/master/example/card.png)

[**Comment**](https://socialiteui.com/comment.html)  

![](https://raw.githubusercontent.com/Isradeleon/socialiteui-docs/master/example/comment.png)


## Grid system

The framework comes with a legible and easy to learn [grid system](https://socialiteui.com/grid-system.html). Here is a little code sample:

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

The whole framework weighs just **17.5K**.

## Built with

* [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) Flexible Box Module
* [Autoprefixer](https://github.com/postcss/autoprefixer) for better browser support
* [CSSO](https://github.com/css/csso) CSS compressor
* [Terser](https://github.com/terser-js/terser) JS compressor
* [Sass](https://sass-lang.com/) Syntactically Awesome Style Sheets

## Browser Support

The framework is compatible with recent versions of:

* Firefox
* Chrome
* Safari
* Edge
* Opera
* Partial support for Internet Explorer

## Documentation

Currently working to improve the [documentation](https://socialiteui.com). You'll find the documentation inside the website folder in this repository. The docs are generated using [Nunjucks](https://github.com/mozilla/nunjucks) and saved to **../socialiteui-docs/**.

## License

This library is licensed under `MIT license`. View [license](LICENSE).