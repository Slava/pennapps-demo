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

### Demo

- Ractive.js clocks
- snakes.meteor.com

--

### What is "reactivity"?

We can really mean two things here:

- Your views are synchronized with your data model
- Your data is synchronized among clients

--

### Install Meteor tool

Run the following in your shell

`curl https://install.meteor.com | sh`

for Linux or Mac OS X or download an unofficial build from [win.meteor.com][win]
for Windows.

There is no need to have MongoDB or node.js installed.

[win]: https://win.meteor.com

--

### Meteor tool

Knows how to:

- `meteor` or `meteor run` - *run* your Meteor app in dev mode
- `meteor bundle` - *create* a production bundle
- `meteor add <package name>` - manage uni-*packages*
- `meteor deploy myapp.meteor.com` - *deploy* your app to meteor.com free hosting!
- And more ...

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

--

### There is more

There is a lot more cool stuff out there!

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

### Get involved

- Use Meteor and build awesome apps
- Tweet about your app to [@meteorjs][tweet] and get featured
- [Join][get-involved] Mailing list (there is IRC channel as well)
- Join StackOverflow #meteor
- Meteor [Youtube channel][youtube] has videos from past devshops
- [Come to a devshop][meetup] when you are in SFBA or find one in your area!

[tweet]: https://twitter.com/meteorjs
[get-involved]: http://www.meteor.com/get-involved
[youtube]: https://www.youtube.com/channel/UC3fBiJrFFMhKlsWM46AsAYw?sub_confirmation=1
[meetup]: http://www.meetup.com/find/?keywords=meteor


