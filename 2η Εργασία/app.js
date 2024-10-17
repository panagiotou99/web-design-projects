//Loads the express module
const express = require("express");

//Creates our express server
const app = express();

//Specifies the port number that we want our app to listen to
const port = process.env.PORT || 5000;

//Loads the handlebars module
const handlebars = require("express-handlebars");

//Loads the book schema
const Book = require('./models/book');

//Loads the mongoose module
const mongoose = require('mongoose');

//Sets our app to use the handlebars engine
app.set("view engine", "hbs");

//Sets handlebars configurations
app.engine(
    "hbs", //Instead of writing ".handlebars", we write ".hbs"
    handlebars({
        layoutsDir: __dirname + "/views/layouts",
        extname: "hbs",
        defaultLayout: "main",
        partialsDir: __dirname + "/views/partials/",
    })
);

//Serves static files
app.use(express.static("public"));

//Sets the url encoding data (useful for http requests)
app.use(express.urlencoded({
    extended: true
}));

//Sets the default route
app.get("/", (req, res) => {
    //Our default route is the search page
    res.redirect('/search');
});

//Sets the route for the search page (Aka Use Case 1)
app.get('/search', (req, res) => {
    //Serves the body of "search.handlebars" to the container "main.handlebars"
    res.render("search", {
        page_title: "Search - MyBookCollection.com",
        script: "search",
        navigation_status_1: "active"
    });
});

//Sets the route for the favorites page (Aka Use Case 2)
app.get('/favorites', (req, res) => {
    //Serves the body of "favorites.handlebars" to the container "main.handlebars"
    Book.find().lean()
        .then((result) => {
            res.render("favorites", {
                page_title: "Favorites - MyBookCollection.com",
                script: "favorites",
                navigation_status_2: "active",
                books: result
            });
        })
        .catch((err) => {
            console.log(err);
        })
});

//Request: Saves a book to the database (WORKS)
app.post('/favorites', (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then((result) => {
            res.redirect('/favorites');
        })
        .catch((err) => {
            console.log(err);
        })
})

//Request: Opens a form to edit a book from the database (WORKS)
app.get('/favorites/:id', (req, res) => {
    const id = req.params.id;
    Book.findById(id).lean()
        .then((result) => {
            res.render("edit", {
                book: result,
                page_title: "Edit Book - MyBookCollection.com",
                script: "edit",
                navigation_status_2: "active"
            })
        })
        .catch((err) => {
            console.log(err);
        })
})

//Requests: Deletes a book from the favorites section (WORKS, BUT NOT THE RIGHT WAY)
app.delete('/favorites/:id', (req, res) => {
    const id = req.params.id;
    Book.findByIdAndDelete(id).lean()
        .then(result => {
            res.json({
                redirect: '/favorites'
            });
        })
        .catch(err => {
            console.log(err);
        });
});

//Requests: Updates a book after it's done editing (WORKS, BUT NOT THE RIGHT WAY)
app.put('/favorites/:id', (req, res) => {
    const id = req.params.id;
    Book.findByIdAndUpdate(id).lean()
        .then((result) => {
            res.render({
                redirect: '/favorites',
                book: result
            })
        })
        .catch((err) => {
            console.log(err);
        })
})

//Connects to MongoDB first ands makes app listen to our port number later
const dbURI = 'mongodb+srv://user:user@node.q4dpy.mongodb.net/booksDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(port, () => console.log(`Listening on port ${port}`)))
    .then(console.log('Connected to database'))
    .catch((err) => console.log(err));