var nun = require('nunjucks')
var fs = require('fs'); 
console.log(nun)

var result = nun.render('website/index.njk')
console.log(result)
fs.writeFileSync('index2.html', result);