// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W2D3', 09, 55),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Sprint Reflection. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W2D3', 09, 59),
  who: c.juniors,
  message: '<!channel> 1 Minute until Sprint Reflection. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W2D3', 14, 00),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W2D3', 14, 10),
  who: c.juniors,
  message: '<!channel> 5 Minutes until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W2D3', 14, 14),
  who: c.juniors,
  message: '<!channel> 1 Minute until TownHall. https://zoom.us/j/685772​608'
});

module.exports = events;
