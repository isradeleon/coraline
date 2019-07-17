var nunjucks = require('nunjucks')
var fs = require('fs'); 

var index = nunjucks.render('website/index.njk')
fs.writeFileSync('index.html', index);

console.log('Ready!')