var nunjucks = require('nunjucks')
var fs = require('fs'); 

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('website'));

/**
 * SOCIALITEUI.COM DOCUMENTATION
 */
var docsPath = '../socialiteui-docs';
if (!fs.existsSync(docsPath)){
  fs.mkdirSync(docsPath);
}
var docsSourcesPath = docsPath+'/socialiteui-v0.4.8';
if (!fs.existsSync(docsSourcesPath)){
  fs.mkdirSync(docsSourcesPath);
}

var index = env.render('index.njk.html')
fs.writeFileSync(docsPath+'/index.html', index);

const documentation = [
  /**
   * COMPONENTS
   */
  {
    title: 'Card', 
    canonical: '/card.html',
    njk: 'components/card.njk.html',
    description: 'Card: A flexible UI component for displaying visual and text content',
    current: 'card'
  },
  {
    title: 'Comment', 
    canonical: '/comment.html',
    njk: 'components/comment.njk.html',
    description: 'Comment: A flexible social interface component for displaying visual and text content',
    current: 'comment'
  },
  {
    title: 'Navbar', 
    canonical: '/navbar.html',
    njk: 'components/navbar.njk.html',
    description: 'Navbar: A CSS only, fully responsive and easy to implement navbar menu',
    current: 'navbar'
  },
  {
    title: 'Sidebar', 
    canonical: '/sidebar.html',
    njk: 'components/sidebar.njk.html',
    description: 'Sidebar: A responsive and easy to implement sidebar menu built with CSS and JS',
    current: 'sidebar'
  },
  { title: 'Staggered grid', 
    canonical: '/staggered.html',
    njk: 'components/staggered.njk.html',
    description: 'Staggered grid view: A responsive, left to right staggered grid built with CSS and JS',
    current: 'staggered'
  },
  /**
   * GRID SYSTEM
   */
  {
    title: 'Grid system', 
    canonical: '/grid-system.html',
    njk: 'grid-system.njk.html',
    description: 'Grid system: A simple and easy to learn grid system, that is adaptable to all screens',
    current: 'grid-system'
  },
  /**
   * ELEMENTS
   */
  { title: 'Button', 
    canonical: '/button.html',
    njk: 'elements/button.njk.html',
    description: 'Button: A useful element with multiple ways to customize through CSS classes',
    current: 'button'
  },
];

for (let index = 0; index < documentation.length; index++) {
  let element = documentation[index];
  var rendered = env.render(element.njk, element)
  fs.writeFileSync(docsPath+element.canonical, rendered);
}

/**
 * BASE JS CODE
 */
var baseJs = fs.readFileSync('base.js').toString();

// JS minifier
var Terser = require("terser");
var jsResult = Terser.minify(baseJs);
if(!jsResult.error){
  fs.writeFileSync('socialiteui-v0.4.8/socialiteui.min.js', jsResult.code);
  fs.writeFileSync(docsSourcesPath+'/socialiteui.min.js', jsResult.code);
}else{
  console.log('JS ERROR')
  console.log(jsResult.error)
}

/**
 * NODE SASS
 */
var sass = require('node-sass');
var scss_content = fs.readFileSync('base.scss').toString()

var sassResult = sass.renderSync({
    data: scss_content
});

/**
 * BASE CSS CODE
 */
var baseCss = sassResult.css;
fs.writeFileSync('base.css', baseCss);

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
    fs.writeFileSync('socialiteui-v0.4.8/socialiteui.min.css', minifiedCss);
    fs.writeFileSync(docsSourcesPath+'/socialiteui.min.css', minifiedCss);
    
    console.log('Website is ready!')
})
