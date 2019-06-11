'use strict';

const axios = require('axios');
const { Endpoints } = require('../util/endpoints');

class Search {
  async player({ playerName } = {}) {
    if (!playerName) return false;
    const { data } = await axios.get(Endpoints.Data().Search.Player(playerName));
    return data;
  }

  async guild({ guildName } = {}) {
    if (!guildName) return false;
    const { data } = await axios.get(Endpoints.Data().Search.Guild(guildName));
    return data;
  }
}

module.exports = Search;
