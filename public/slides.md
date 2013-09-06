title: Short Meteor demo
author:
  name: "Slava Kim"
  twitter: "@imslavko"
  url: https://github.com/slava
output: slides.html
controls: false
style: style.css

--

# Meteor 101
## Quick introduction and live coding

--

### What is Meteor

Meteor is an open-source platform for building **top-quality web apps**.

- JavaScript everywhere
- Same APIs on server/client
- Reactivity
- A lot more...

--

### More

- [Meteor.com][meteor]
- Typical Meteor project is [very little][az] code
- [Pong in 350 LOC][pong]

![Quote from a user](/quote.png)

[meteor]: https://www.meteor.com
[az]: https://github.com/mcrider/azimuth
[pong]: https://github.com/devonbarrett/meteor-ping-pong

### Install Meteor tool

Run the following in your shell

`curl https://install.meteor.com | sh`

for Linux or Mac OS X or download an unofficial build from [win.meteor.com][win]
for Windows.

There is no need to have MongoDB or node.js installed.

[win]: https://win.meteor.com

--

### Server-side vs Client-side code

Meteor will bundle your JS code to run on server, on client or both, depending
on you project structure.

In the code that runs on both server and client you
can separate logic:

    if (Meteor.Client) {
      Session.set('selected', 0);
    } else {
      HTTP.post('someweirdapiendpoint/books', data);
    }

--

## Start coding already!

--

### What is "reactivity"?

We can really mean two things here:

- Your views are synchronized with your data model
- Your data is synchronized among clients
- Full stack reactivity: data is synchronized between server-client-view

--

### Demo time

- [Snakes][snakes]
- [J-Fleet][jfleet]
- [Poke*icks][pokedics] - built in 24 hours
- Games anyone?

[snakes]: http://snakes.meteor.com
[jfleet]: http://yujiangtham.com/jfleet/
[pokedics]: http://pokedicks.meteor.com


--

## Packages rock

- Facebook connect can be added in 1 minute
- Same with Google Accounts, Twitter, Github, etc
- Email sending can be added in 15 secs
- Coffeescript, Less, SCSS compilers can be added as packages
- A lot more, check out `meteor list`

--

### Same APIs on Client and Server

Example, http call:

    HTTP.get('http://google.com', { headers: ... }, callback);

RPC:

    Meteor.call('provisionEC2Instance', { tags: ... }, callback);

On the server you don't even need to pass a callback and it will be deferred for
you.

--

### Minimongo

MongoDB API on the client side, in your browser!

    // Create a collection with some books
    var Books = new Meteor.Collection();
    Books.insert({ name: "Solaris" });
    Books.insert({ name: "Foundation and Empire", finished: true });

    // Search for books w/o finished flag
    console.log(Books.find({ finished: { $exists: false } }).fetch());

    // Find and remove one finished book
    var finishedBook = Books.findOne({ finished: true })._id;
    Books.remove(finishedBook);

--

### DDP protocol

![Server-clients](/server-clients.jpg)

Data synchronization protocol. Used to make sure your client has the most recent
information. Data is synchronized to in-memory cache, Minimongo collection.


--

### Reactivity on the client

Minimongo cursors and Sessions are reactive pieces of page.

    <template name="books">      Template.books.readBooks = function () {
      {{#each readBooks}}          return Books.find({ finished: false });
        {{name}}                 }
      {{/each}}
    </template>

--

### Sessions

`Session` is a simple reactive dictionary with main methods `get` and `set`.

        <template name="books">
          {{favBook}} is my favorite!
          ...
        </template>

        Template.books.favBook = function () {
          return Session.get('bestBookName');
        }

        Session.set('bestBookName', 'End of Ethernity');

--

### Current Meteor bundle

- Server-side code runs in node.js
- MongoDB as a persistent storage
- Declarative handlebars-like templates for your views

- Components can be changed, community wrote drivers for RethinkDB, MySQL, jade
  templates, angular, other things

--

### There is more

There is a lot more cool stuff out there! I just don't have time to explain
everything, you got to believe me.

--

### Atmosphere packages

There more than 300 community packages built for Meteor. Visit it at

## **atmosphere.meteor.com**

you might need to install additional tool called Meteorite, a wrapper around
Meteor tool with atmosphere integration.

--

### Resources for further learning

- Meteor Docs are always at [docs.meteor.com][docs]!
- [Discover Meteor][ebook] - ebook Written by community members Tom Coleman and Sacha
  Greif
- [EventedMind.com][evented] - screencasts going in depth by Chris Mather
- [Meteorpedia][wiki] - community wiki

[docs]: https://docs.meteor.com
[ebook]: http://www.discovermeteor.com/
[evented]: https://www.eventedmind.com/posts
[wiki]: http://www.meteorpedia.com/read/Main_Page

--

### Ask for help!

- RTFM! Docs.meteor.com - all the docs on one page, CTRL+F friendly
- Google First! We have plenty of answers on StackOverflow, user-group
- Ask people wearing Meteor T-shirts (unless they just got it for free)
- Tweet me @imslavko or email: slava@meteor.com

