var nunjucks = require('nunjucks')
var fs = require('fs'); 

var index = nunjucks.render('website/index.njk.html')
fs.writeFileSync('index.html', index);

var docs = nunjucks.render('website/docs.njk.html')
fs.writeFileSync('docs.html', docs);

console.log('Ready!')