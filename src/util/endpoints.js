'use strict';

exports.Endpoints = {
  Data({ root = 'https://gameinfo.albiononline.com/api/gameinfo' } = {}) {
    return {
      Search: {
        Player: playerName => `${root}/search?q=${playerName}`,
        Guild: guildName => `${root}/search?q=${guildName}`
      },
      Info: {
        Player: playerId => `${root}/players/${playerId}`,
        Guild: guildId => `${root}/guilds/${guildId}`,
        Alliance: allianceId => `${root}/alliances/${allianceId}`,
        Item: itemId => `${root}/items/${itemId}/data`
      },
      Icon: {
        Spell: spellId => `${root}/spells/${spellId}`,
        Item: itemId => `${root}/items/${itemId}`
      },
      Category: {
        Item: () => `${root}/items/_itemCategoryTree`,
        Weapon: () => `${root}/items/_weaponCategories`
      },
      Killboard: () => `${root}/events`
    };
  }
};
