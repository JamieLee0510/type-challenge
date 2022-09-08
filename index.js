const fs = require('fs');
const dir = '/Users/dingyulee/Desktop/MyCode/TS/type-test/type-challenge/easy';


var files = fs.readdirSync(dir);
for (var i = 0; i < files.length; i++) {
  var filePath = dir + "/" + files[i];
  var name = files[i].replace('easy-',"");
  var newFilePath = dir + "/" + name;
  fs.rename(filePath, newFilePath, function(err) {
    if (err) throw err;

    console.log(name + ' ok~');
});
}