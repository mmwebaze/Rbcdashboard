$(document).ready(function(){
    var rbc = rbc || {};

    $(".sidebar-nav .nav-second-level").hide();
    rbc.showSubmenu = function () {


        $('.menu_level_one').click(function(e)
        {
            var levelId = $(this).attr('id');
            if ($(this).attr('menu-show') === 'hidden'){
                $('#'+levelId+" .nav-second-level ").show();
                $('#'+levelId).attr('menu-show', 'shown');
            }
            else{
                $('#'+levelId).attr('menu-show', 'hidden');
                //$('#'+levelId).attr('menu-show', 'hidden ');
                //$(".sidebar-nav .nav-second-level ").hide();
                $('#'+levelId+" .nav-second-level").hide();
            }
        });
    }
    rbc.showSubmenu();
});