

    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
    var $module = jQuery('#m-1694669729957').children('.module');
    $module.gfV1Countdown({
        id: "1694669729957",
        idSlug: "1694669729957"
    });
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1694835111005').children('.module');
  var defaultOffsetPCT = $module.data('defaultOffsetPct'),
    orientation = $module.data('orientation'),
    moveSliderBy = $module.data('moveSliderBy'),
    sliderSpace = $module.data('sliderSpace');

  var defaultOffsetList = [];
  if($module.find('.gf_imagebeforeafter-item').length ==2){
    defaultOffsetList.push(defaultOffsetPCT);
  }


  $module.gfBeforeAfter({
    childSelector: ".gf_imagebeforeafter-item",
    defaultOffsetList: defaultOffsetList,
    orientation: orientation,
    moveSliderBy: moveSliderBy,
    sliderSpace: sliderSpace
  });
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
    
  
    
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694660938185').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694660938326').children('.module');
  $module.gfV1StockCounter();
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1694660938185-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694660938295').children('.module');
  var style = $module.attr('data-style');
  var updatePrice = $module.attr('data-updateprice');

  $module.gfV3ProductQuantity({
    'style': style,
    'updatePrice': updatePrice
  });
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694660938185-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    window.__gfAnimate.registerScrolling(jQuery("#m-1694660938185-3"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"bounce","delay":500,"duration":300},"interaction":{"key":"scrolling-in-view","type":"level2"}}');
    
  (function( jQuery ){
  try {
    var $module = jQuery('#m-1694660938321').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1694660938185-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function(jQuery) {
  var $module = jQuery('#m-1694660938244').children('.module');
  $module.gfV4ProductImageList({
    onImageClicked: function(imageUrl, imageZoomUrl) {}
  });

  var style = $module.attr('data-style');
  switch(style) {
    case 'slider':
    var navspeed = $module.data('navspeed'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),

      marginlg = parseInt($module.data('mlg')),
      marginmd = parseInt($module.data('mmd')),
      marginsm = parseInt($module.data('msm')),
      marginxs = parseInt($module.data('mxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var loop = $module.data('loop'),
        autoRefresh = true;
    } else {
      var loop = 0,
        autoRefresh = false;
    }
    $module.find('.gf_product-images-list').children().each( function( index ) {
      jQuery(this).attr( 'data-position', index );
    });
    $module.find('.gf_product-images-list').owlCarousel({
      mouseDrag: false,
      navSpeed: navspeed,
      autoRefresh: autoRefresh,
      autoWidth: !1,
      loop: loop,
      responsiveClass:true,
      responsive:{
        0:{
          items:colxs,
          nav: navxs,
          dots:dotsxs,
          margin: marginxs
        },
        768:{
          items:colsm,
          nav: navsm,
          dots:dotssm,
          margin: marginsm
        },
        992:{
          items:colmd,
          nav: navmd,
          dots:dotsmd,
          margin: marginmd
        },
        1200:{
          items:collg,
          nav: navlg,
          dots:dotslg,
          margin: marginlg
        }
      },
      onInitialized: function(){
        $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
      }
    }); 
    break;
  }
})(window.GemQuery || jQuery); 
    
    
    
    
    
    
    
    
    
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1694657017696').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1694657017696-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1694657017696-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1694657017696-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1694657017576').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1694657017576-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1694657017576-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1694657017576-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1694657017657').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1694657017657-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1694657017657-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1694657017657-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
    var $module = jQuery('#m-1694651206165').children('.module');
    $module.gfV1Countdown({
        id: "1694651206165",
        idSlug: "1694651206165"
    });
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1694651206206').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1694651206213').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694651206242').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
    var $module = jQuery('#m-1694651206248').children('.module');
    $module.gfV1Countdown({
        id: "1694651206248",
        idSlug: "1694651206248"
    });
})( window.GemQuery || jQuery );
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694651206256').children('.module');
  var style = $module.attr('data-style');
  var updatePrice = $module.attr('data-updateprice');

  $module.gfV3ProductQuantity({
    'style': style,
    'updatePrice': updatePrice
  });
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1694651206254').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1694651206252').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1694651206253').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#r-1694651206245"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"lt","percentage":"30","runtime":"infinite"}}],"targets":[{"id":"#r-1694651206245","actions":[{"key":"hide","type":2,"data":{"delay":0,"duration":"50"}}]}]},{"source":{"id":"#r-1694651206245"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"gte","percentage":"30","runtime":"infinite"}}],"targets":[{"id":"#r-1694651206245","actions":[{"key":"show","type":2,"data":{"delay":0,"duration":"50"}}]}]}]); window.__gfV1FlowActions.init();