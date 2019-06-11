'use strict';
const axios = require('axios');
const { Endpoints } = require('../util/endpoints');

class Killboard {
  async get() {
    const { data } = await axios.get(Endpoints.Data().Killboard());
    return data;
  }
}

module.exports = Killboard;
