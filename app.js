'use strict';

const Search = require('./src/search/main');
const Info = require('./src/info/main');
const Icon = require('./src/icon/main');
const Category = require('./src/category/main');
const Killboard = require('./src/killboard/main');

class Albion {
  constructor() {
    this.search = new Search();
    this.info = new Info();
    this.icon = new Icon();
    this.category = new Category();
    this.killboard = new Killboard();
  }
}

module.exports = Albion;
