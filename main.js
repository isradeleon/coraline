var nunjucks = require('nunjucks')
var fs = require('fs'); 

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('website'));

/**
 * SOCIALITEUI.COM WEBSITE
 */
var docsPath = '../socialiteui-docs';
if (!fs.existsSync(docsPath)){
  fs.mkdirSync(docsPath);
}
var docsSourcesPath = docsPath+'/socialiteui-v0.4.4';
if (!fs.existsSync(docsSourcesPath)){
  fs.mkdirSync(docsSourcesPath);
}

var index = env.render('index.njk.html')
fs.writeFileSync(docsPath+'/index.html', index);

/**
 * COMPONENTS
 */
var card = env.render('components/card.njk.html', 
{title: 'Card', 
description: 'Card: A flexible UI component for displaying visual and text content',
current: 'card'})
fs.writeFileSync(docsPath+'/card.html', card);

var comment = env.render('components/comment.njk.html', 
{title: 'Comment', 
description: 'Comment: A flexible social interface component for displaying visual and text content',
current: 'comment'})
fs.writeFileSync(docsPath+'/comment.html', comment);

var navbar = env.render('components/navbar.njk.html', 
{title: 'Navbar', 
description: 'Navbar: A CSS only, fully responsive and easy to implement navbar menu',
current: 'navbar'})
fs.writeFileSync(docsPath+'/navbar.html', navbar);

var sidebar = env.render('components/sidebar.njk.html', 
{title: 'Sidebar', 
description: 'Sidebar: A responsive and easy to implement sidebar menu built with CSS and JS',
current: 'sidebar'})
fs.writeFileSync(docsPath+'/sidebar.html', sidebar);

var staggered = env.render('components/staggered.njk.html', 
{title: 'Staggered grid', 
description: 'Staggered grid view: A responsive, left to right staggered grid built with Javascript',
current: 'staggered'})
fs.writeFileSync(docsPath+'/staggered.html', staggered);

/**
 * GRID SYSTEM
 */
var gridSystem = env.render('grid-system.njk.html', 
{title: 'Grid system', 
description: 'Grid system: A simple and easy to learn grid system, that is adaptable to all screens',
current: 'grid-system'})
fs.writeFileSync(docsPath+'/grid-system.html', gridSystem);

/**
 * BASE JS CODE
 */
var baseJs = fs.readFileSync('base.js').toString();

// JS minifier
var Terser = require("terser");
var jsResult = Terser.minify(baseJs);
if(!jsResult.error){
  fs.writeFileSync('socialiteui-v0.4.4/socialiteui.min.js', jsResult.code);
  fs.writeFileSync(docsSourcesPath+'/socialiteui.min.js', jsResult.code);
}else{
  console.log('JS ERROR')
  console.log(jsResult.error)
}

/**
 * BASE CSS CODE
 */
var baseCss = fs.readFileSync('base.css')

// CSS minifier
var csso = require('csso');

/**
 * AUTOPREFIXER
 */
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

postcss([ autoprefixer ]).process(baseCss,{from: undefined}).then(result => {
    result.warnings().forEach(warn => {
      console.warn(warn.toString())
    })
    
    var minifiedCss = csso.minify(result.css).css;
    fs.writeFileSync('socialiteui-v0.4.4/socialiteui.min.css', minifiedCss);
    fs.writeFileSync(docsSourcesPath+'/socialiteui.min.css', minifiedCss);
    
    console.log('Website is ready!')
})
