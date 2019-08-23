var nunjucks = require('nunjucks')
var fs = require('fs'); 

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('../coraline-docs/website'));

/**
 * CORALINE FRAMEWORK BINARY
 */
var frameworkBinary = '../coralinecss';
if (!fs.existsSync(frameworkBinary)){
  fs.mkdirSync(frameworkBinary);
}
var frameworkSources = frameworkBinary+'/coraline-v0.5.3';
if (!fs.existsSync(frameworkSources)){
  fs.mkdirSync(frameworkSources);
}
fs.copyFileSync('README.md', frameworkBinary+'/README.md');
fs.copyFileSync('LICENSE', frameworkBinary+'/LICENSE');
fs.copyFileSync('base.scss', frameworkBinary+'/base.scss');
fs.copyFileSync('base.css', frameworkBinary+'/base.css');
fs.copyFileSync('base.js', frameworkBinary+'/base.js');

/**
 * coralinecss.com DOCUMENTATION
 */
var docsPath = '../coraline-docs';
if (!fs.existsSync(docsPath)){
  fs.mkdirSync(docsPath);
}
var docsSourcesPath = docsPath+'/coraline-v0.5.3';
if (!fs.existsSync(docsSourcesPath)){
  fs.mkdirSync(docsSourcesPath);
}

var index = env.render('index.njk.html')
fs.writeFileSync(docsPath+'/index.html', index);

const documentation = [
  {
    canonical: '/getting-started.html',
    njk: 'getting-started.njk.html',
    current: 'getting-started'
  },
  /**
   * COMPONENTS
   */
  {
    /**
     * A responsive and lightweight CSS framework
     * HTML, CSS & JS frontend component library
     */
    title: 'Card • Flexible component for displaying content', 
    canonical: '/card.html',
    njk: 'components/card.njk.html',
    description: 'Card: A flexible UI component for displaying visual and text content',
    current: 'card'
  },
  {
    title: 'Comment • A flexible social interface component', 
    canonical: '/comment.html',
    njk: 'components/comment.njk.html',
    description: 'Comment: A flexible social interface component for displaying visual and text content',
    current: 'comment'
  },
  {
    title: 'Navbar • A CSS only and fully responsive navbar', 
    canonical: '/navbar.html',
    njk: 'components/navbar.njk.html',
    description: 'Navbar: A CSS only, fully responsive and easy to implement navbar menu',
    current: 'navbar'
  },
  {
    title: 'Sidebar • Responsive sidebar built with CSS and JS', 
    canonical: '/sidebar.html',
    njk: 'components/sidebar.njk.html',
    description: 'Sidebar: A responsive and easy to implement sidebar menu built with CSS and JS',
    current: 'sidebar'
  },
  { title: 'Staggered grid • A responsive, left to right staggered grid', 
    canonical: '/staggered.html',
    njk: 'components/staggered.njk.html',
    description: 'Staggered grid view: A responsive, left to right staggered grid built with CSS and JS',
    current: 'staggered'
  },
  /**
   * GRID SYSTEM
   */
  {
    title: 'Grid system • Simple and easy to learn grid system', 
    canonical: '/grid-system.html',
    njk: 'grid-system.njk.html',
    description: 'Grid system: A simple and easy to learn grid system, that is adaptable to all screens',
    current: 'grid-system'
  },
  /**
   * ELEMENTS
   */
  { title: 'Button • A customizable element through CSS classes', 
    canonical: '/button.html',
    njk: 'elements/button.njk.html',
    description: 'Button: A useful element with multiple ways to customize through CSS classes',
    current: 'button'
  },
  { title: 'Tags • Small, nice element that is also customizable', 
    canonical: '/tags.html',
    njk: 'elements/tags.njk.html',
    description: 'Tags: A small, nice element with multiple ways to customize through CSS classes',
    current: 'tags'
  },
  { title: 'Circular img • Element for showing circular images', 
    canonical: '/circular-img.html',
    njk: 'elements/circular-img.njk.html',
    description: 'Circular img: Circular img element that is also customizable through CSS classes',
    current: 'circular-img'
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
  fs.writeFileSync('coraline-v0.5.3/coraline.min.js', jsResult.code);
  fs.writeFileSync(docsSourcesPath+'/coraline.min.js', jsResult.code);
  fs.writeFileSync(frameworkSources+'/coraline.min.js', jsResult.code);
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
    fs.writeFileSync('coraline-v0.5.3/coraline.min.css', minifiedCss);
    fs.writeFileSync(docsSourcesPath+'/coraline.min.css', minifiedCss);
    fs.writeFileSync(frameworkSources+'/coraline.min.css', minifiedCss);
    
    console.log('Coraline is ready!')
})
