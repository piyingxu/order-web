$(window.document).scroll(function() {
    $("#menu_lan_1").css('display','');
    $("#menu_1").css('display','');

});

function changeItem(obj){
    var id = $(obj).attr("id").split('_')[2];
    $("#td_item_" + id).css('background-color','');
    $("#td_item_2").css('background-color','red');

    $("#menu_lan_1").css('display','none');
    $("#menu_1").css('display','none');

    $("#menu_1").css('display','none');

    var newLanmu = $("#menu_lan_2 .lanmu_2").text();
    $("#right_lanmu .lanmu_2").text(newLanmu);


}

onload = function () {
    //初始化
    scrollToLocation();
};
function scrollToLocation() {
    var mainContainer = $('body'),
        scrollToContainer = $("#menu_lan_2")//滚动到<div id="thisMainPanel">中类名为son-panel的最后一个div处
    scrollToContainer = mainContainer.find('.son-panel:eq(5)');//滚动到<div id="thisMainPanel">中类名为son-panel的第六个处
    //非动画效果
    //mainContainer.scrollTop(
    //  scrollToContainer.offset().top - mainContainer.offset().top + mainContainer.scrollTop()
    //);
    //动画效果
    mainContainer.animate({
        scrollTop: scrollToContainer.offset().top - mainContainer.offset().top + mainContainer.scrollTop()
    }, 2000);//2秒滑动到指定位置
}