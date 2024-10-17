# How To Run Server

First, install the missing modules by typing the following on the cmd (download Node.js if you haven't already):

> npm install 

Run server with:
> node app.js

Then open your web browser and enter:
> http://localhost:5000

# My TODO list (aka everything that went wrong)

The project is far from being completed. There's a lot of debugging to be done. For starters I'll have to:

1. Use handlebars in fuction **showSearchResults(...)** search.js and **search.hbs** instead of ugly DOM methods.
2. Make my POST requests using Fetch instead of forms.
3. Add "**Unfavorite**" button when clicking on "**Add to favorites**" in the main page and remove redirection to the favorites page. Also, don't allow duplicates to be added.
4. Fix "Edit" and "Unfavorite", because edit adds new book instead of updating the existing one. Delete works only for the first book of the list.
5. Add filtering in favorites page.
6. Many more that I might not be aware of them right now.
   
# Sources 

* ["JSON Crash Course" by Traversy Media](https://www.youtube.com/watch?v=wI1CWzNtE-M)
* ["Learn Fetch API in 6 minutes" by Web Dev Simplified](https://www.youtube.com/watch?v=cuEtnrL9-H0)
* ["Node.js Crash Course" by The Net Ninja](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
* ["Express JS Crash Course" by Traversy Media](https://www.youtube.com/watch?v=L72fhGm1tfE)
* [A Step By Step Guide To Using Handlebars With Your Node.js App](https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65)
* [Handlebars Official Language Guide](https://handlebarsjs.com/guide/)

# Keywords
 
HTML,CSS,API, Fetch, URI, DOM, Handlebars, Asynchronous JavaScript (AJAX), Node, Express, JSON, Client-Side, Server-Side, Handlebars, routes, modules, mongoDB, mongoose