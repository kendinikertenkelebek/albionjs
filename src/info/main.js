'use strict';

const axios = require('axios');
const { Endpoints } = require('../util/endpoints');

class Info {
  async player({ playerId } = {}) {
    if (!playerId) return false;
    const { data } = await axios.get(Endpoints.Data().Info.Player(playerId));
    return data;
  }

  async guild({ guildId } = {}) {
    if (!guildId) return false;
    const { data } = await axios.get(Endpoints.Data().Info.Guild(guildId));
    return data;
  }

  async alliance({ allianceId } = {}) {
    if (!allianceId) return false;
    const { data } = await axios.get(Endpoints.Data().Info.Alliance(allianceId));
    return data;
  }

  async item({ itemId } = {}) {
    if (!itemId) return false;
    const { data } = await axios.get(Endpoints.Data().Info.Item(itemId));
    return data;
  }
}

module.exports = Info;
