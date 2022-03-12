# render html using expressjs
ExpressJS allows to develop custom web server according to our need. We don’t need to install multiple packages to handle HTML files. 
ExpressJS provides sendFile() function which will basically send HTML files to browser which then automatically interpreted by browser.
To use res.sendFile, we will need to pass in a path to the file. We will also need to pull in the built-in path module so that we can link to the file.

```javascript
var path = require('path');
var view = __dirname + "/views/";
var public = __dirname + "/public/";

app.get('/', function(req, res) {
    res.sendFile(path.join(view + "home.html"));
});
app.use('/', express.static(public));
