"use strict";

/**
 * This is main plugin loading function
 * Feel free to write your own compiler
 */
W.loadPlugin(
/* Mounting options */
{
  "name": "windy-plugin-hello-world",
  "version": "1.2.0",
  "author": "Windyty, S.E.",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/windycom/windy-plugin-hello-world"
  },
  "description": "Minimalistic example plugin",
  "displayName": "Hello world",
  "hook": "menu"
},
/* HTML */
'',
/* CSS */
'',
/* Constructor */
function () {
  var map = W.require('map');

  console.log('I am being mounted');
  var popup = null;

  this.onopen = function () {
    var center = map.getCenter();

    if (popup) {
      popup.setLatLng(center);
    } else {
      popup = L.popup().setLatLng(center).setContent("Hello World").openOn(map);
    }
  };

  this.onclose = function () {
    if (popup) {
      map.removeLayer(popup);
      popup = null;
    }
  };
});