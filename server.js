//https://maialinonyc.com/
//https://www.americarestaurant.ca/

const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
})

app.get('/', (req, res)=>{
    res.render('home.hbs', {
        pageTitle: "Alpine Garden",
        welcomeMessage: "Welcome to this homepage",
        company: "Alpine Garden"
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: "About",
        company: "Alpine Garden"
    });
});

app.get('/services', (req, res)=>{
    res.render('services.hbs', {
        pageTitle: "Services",
        company: "Alpine Garden"
    });
});

app.get('/contact', (req, res)=>{
    res.render('contact.hbs', {
        pageTitle: "Contact",
        company: "Alpine Garden"
    });
});

app.get('/bad', (req,res)=>{
    res.send({
        error : "Unable to handle Request"
    });
});

app.post('/submit', (req, res)=>{
    console.log(`Contact Name: ${req.body.contactName}
                Contact Email: ${req.body.contactEmail}
                Contact Number: ${req.body.contactNumber}
                Contact Street ${req.body.contactStreet}
                Contact City ${req.body.contactCity}
                Contact Questions: ${req.body.contactQuestions}`);

    res.render('contact.hbs', {
        pageTitle: "Contact",
        thanksMsg: "Thanks for contacting us!",
        company: "Alpine Garden"
    });
});

app.listen(port, ()=>{
    console.log(`Server up on Port ${port}`);
});