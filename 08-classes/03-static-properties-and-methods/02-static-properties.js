'use strict';

// Static properties are also possible, they look like regular class properties, but prepended by static:

class Article {
  static publisher = 'Ilya Kantor';
}

console.log(Article.publisher); // Ilya Kantor

// the above is basically same as this

Article.coPublisher = 'John Doe';

console.log(Article.coPublisher); // John Doe
