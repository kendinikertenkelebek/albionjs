'use strict';

const axios = require('axios');
const { Endpoints } = require('../util/endpoints');

class Category {
  async item() {
    const { data } = await axios.get(Endpoints.Data().Category.Item());
    return data;
  }

  async weapon() {
    const { data } = await axios.get(Endpoints.Data().Category.Weapon());
    return data;
  }
}

module.exports = Category;
