let express = require('express');
let bodyparser = require('body-parser');
let app = express();
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/dashboard', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    
    if(name == "Joy" && email == "Joy@gmail.com") {
        res.render('dashboard', {name: name, email: email});
    }
    else {
        res.redirect('/invalid');
    }

});

app.get('/invalid', (req, res) => {
    res.render('invalid');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});