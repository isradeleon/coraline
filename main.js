var nunjucks = require('nunjucks')
var fs = require('fs'); 

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('website'));

var index = env.render('index.njk.html')
fs.writeFileSync('index.html', index);

var docs = env.render('docs.njk.html')
fs.writeFileSync('docs.html', docs);

console.log('Website is ready!')