var nunjucks = require('nunjucks')
var fs = require('fs'); 

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('website'));

/**
 * SOCIALITEUI.COM WEBSITE
 */
var index = env.render('index.njk.html')
fs.writeFileSync('index.html', index);

var components = env.render('components.njk.html', 
{title: 'Components',
description: 'Responsive, mobile-first designed components: Card • Comment • Staggered grid view • Navbar • Sidebar', 
current: 'components'})
fs.writeFileSync('components.html', components);

/**
 * BASE CSS CODE
 */
var baseCss = fs.readFileSync('base.css')

/**
 * CSS MINIFIER
 */
var csso = require('csso');

//var minifiedCss = csso.minify(baseCss).css;
//fs.writeFileSync('socialiteui-v0.4.3/socialiteui.min.css', minifiedCss);

/**
 * AUTOPREFIXER
 */
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
/* postcss([ autoprefixer({ overrideBrowserslist: 'last 2 versions' }) ]).process(minifiedCss).then(result => {
    result.warnings().forEach(warn => {
      console.warn(warn.toString())
    })
    console.log(result.css)
    console.log(result)
}) */

postcss([ autoprefixer ]).process(baseCss,{from: undefined}).then(result => {
    result.warnings().forEach(warn => {
      console.warn(warn.toString())
    })
    
    var minifiedCss = csso.minify(result.css).css;
    fs.writeFileSync('socialiteui-v0.4.3/socialiteui.min.css', minifiedCss);
    
    console.log('Website is ready!')
})
