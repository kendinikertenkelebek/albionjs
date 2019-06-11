'use strict';

const axios = require('axios');
const { Endpoints } = require('../util/endpoints');

class Icon {
  async spell({ spellId } = {}) {
    if (!spellId) return false;
    const { data } = await axios.get(Endpoints.Data().Icon.Spell(spellId));
    return data;
  }

  async item({ itemId } = {}) {
    if (!itemId) return false;
    const { data } = await axios.get(Endpoints.Data().Icon.Item(itemId));
    return data;
  }
}

module.exports = Icon;
