jQuery(function(){

  var nvPortfolio = (function ($){
    function init () {
        
        function addFirstProject(){
          $('#content.threeGrid .project:nth-child(3n+1)').addClass('firstProject');

            } 
        addFirstProject();
		

        if ($('#backTop').length) {
        var scrollTrigger = 100, // px
          backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
              $('#backTop').addClass('show');
            }else {
              $('#backTop').removeClass('show');
            }
          };
        backToTop();
        $(window).on('scroll', function () {
          backToTop();
        });
        $('#backTop').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
            scrollTop: 0
          }, 700);
        });
        }

  } return {
          init:init
      };
  })(jQuery);
	nvPortfolio.init();
});