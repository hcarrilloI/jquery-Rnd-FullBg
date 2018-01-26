var expect = require('expect.js');
var jsdom = require('jsdom');

var dom = new jsdom.JSDOM('<HTML><body><section></section></body></HTML>');
var $ = global.jQuery = require('jquery')(dom.window);

require('../src');

describe('jquery-Rnd-FullBg', function() {
  it('should have width of 100%', function(){
    $('section').RndBgUnsplash();
    expect($('section').css('width')).to.be('100%');
  });
});
