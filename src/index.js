/**
 * jquery-Rnd-fullBg
 * @version 0.0.0-development
 * @author Edgar Zavala
 * @license MIT
 */

(function($){
  $.fn.RndBgUnsplash = function(){
    $(this).css({
      width: '100%',
      height: '100vh',
      minHeight: '800px'
    });
    return $(this);
  };
})(jQuery);
