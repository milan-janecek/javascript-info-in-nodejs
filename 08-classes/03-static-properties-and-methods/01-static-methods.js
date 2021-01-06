'use strict';

// We can also assign a method to the class function itself, not to its "prototype". Such methods are called static.

class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod(); // true

// That actually does the same as assigning it as a property directly:

class Student { }

Student.staticMethod = function() {
  console.log(this === Student);
};

Student.staticMethod(); // true

// The value of this in User.staticMethod() call is the class constructor User itself (the “object before dot” rule).

// example of using static methods for comparison and as secondary constructors/factory methods

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }

  static createTodays() {
    // remember, this = Article
    return new this("Today's digest", new Date());
  }
}

// usage
const articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS

const article = Article.createTodays();

console.log(article.title); // Today's digest
