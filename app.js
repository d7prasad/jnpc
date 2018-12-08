const express = require('express');
const router = express.Router();
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;


// Handlebars middlewares - This will tell the system that we want to use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Express static - To load assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index',{
        title: "title"
    })
})

app.get('/gallery', (req, res) => {
    res.render('gallery')
})

app.listen(port, () =>{
    console.log(`Server started ${port}`)
})
