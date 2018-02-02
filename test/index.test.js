var expect = require('expect.js');
var jsdom = require('jsdom');

var dom = new jsdom.JSDOM('<HTML><body><section></section></body></HTML>');
var $ = global.jQuery = require('jquery')(dom.window);
require('jsdom-global')();
require('../src');
require('dotenv').config();

describe('jquery-Rnd-FullBg', function() {
  var $section;
  var CLIENT_ID = process.env.CLIENT_ID;
  beforeEach(function(){
    window.rndBgUnsplash.setup('123');
    $section = $('section');
    $section.RndBgUnsplash();
  });

  it('should set client id attr', function(){
    expect(window.rndBgUnsplash.clientId).to.be('123');
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

  it('should set a random image from unsplash', function(){
    window.rndBgUnsplash.setup(CLIENT_ID);
    return $section.RndBgUnsplash({
      backgroundImage: 'path/imagen.jpg'
    })
      .then(function($this){
        expect($this.css('backgroundImage')).not.to.contain('path/imagen.jpg');

      })
      .catch(function($this){
        expect($this.css('backgroundImage')).to.contain('path/imagen.jpg');
      });

  });
  /* it('should set a default image', function(){
    window.rndBgUnsplash.setup('123');
    return $section.RndBgUnsplash({
      backgroundImage: 'path/imagen.jpg'
    })
      .catch(function($this){
        expect($this.css('backgroundImage')).to.contain('path/imagen.jpg');
      });

  }); */
});
