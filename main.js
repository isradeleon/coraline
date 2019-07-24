var nunjucks = require('nunjucks')
var fs = require('fs'); 

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('website'));

/**
 * SOCIALITEUI.COM WEBSITE
 */
var index = env.render('index.njk.html')
fs.writeFileSync('index.html', index);

var components = env.render('components.njk.html', {current: 'components'})
fs.writeFileSync('components.html', components);

/**
 * CSS MINIFIER
 */
var csso = require('csso');
var baseCss = fs.readFileSync('base.css')
var minifiedCss = csso.minify(baseCss).css;
fs.writeFileSync('socialiteui-v0.4.2/socialiteui.min.css', minifiedCss);

console.log('Website is ready!')