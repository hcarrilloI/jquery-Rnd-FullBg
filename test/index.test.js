var expect = require('expect.js');
var jsdom = require('jsdom');

var dom = new jsdom.JSDOM('<HTML><body><section></section></body></HTML>');
var $ = global.jQuery = require('jquery')(dom.window);

require('../src');

describe('jquery-Rnd-FullBg', function() {
  var $section;
  beforeEach(function(){
    $section = $('section');
    $section.RndBgUnsplash();
  });

  it('showld have defined values', function(){
    $section.RndBgUnsplash({
      minHeight: '600px',
      backgroundSize: 'contain',
      backgroundPosition: 'top center',
      backgroundColor: 'red'
    });
    expect($section.css('minHeight')).to.be('600px');
    expect($section.css('backgroundSize')).to.be('contain');
    expect($section.css('backgroundPosition')).to.be('top center');
    expect($section.css('backgroundColor')).to.be('red');
  });

  it('should have default values', function(){
    expect($section.css('width')).to.be('100%');
    expect($section.css('minHeight')).to.be('800px');
    expect($section.css('backgroundSize')).to.be('cover');
    expect($section.css('backgroundPosition')).to.be('center');
    expect($section.css('backgroundColor')).to.be('black');
  });
});
