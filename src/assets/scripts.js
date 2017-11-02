$(document).ready(function(){
  detectScroll($('.cta-header-title'), $('.site-content'));
});

function detectScroll(fadeElem, siteContent){
  var lastScrollTop = 0,
      fadeStart=20,
      fadeUntil=70,
      fixSubHead=64,
      contentBar=$('.content-bar');
  var fadeObject = {
    lastScrollTop: 0,
    fadeStart: 20,
    fadeUntil: 70
  }

  $(window).scroll(function(){
    var siteContentOffset = siteContent.offset().top - $(window).scrollTop()
    fadeOpacity(fadeElem, fadeObject);
    fixContentBar(contentBar, fixSubHead, siteContentOffset);
  });

}

function fadeOpacity(fadeElem, fadeObject){
  var offset = $(document).scrollTop(),
      opacity=0;
  if( offset<=fadeObject.fadeStart ){
      opacity=1;
  }else if( offset<=fadeObject.fadeUntil ){
      opacity=1-offset/fadeObject.fadeUntil;
  }
  fadeElem.css('opacity',opacity);
}

function fixContentBar(contentBar, fixSubHead, siteContentOffset){
  if( siteContentOffset<=fixSubHead){
    contentBar.addClass('fixed');
  }else{
    contentBar.removeClass('fixed');
  }
}
