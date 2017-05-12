$(function(){
	var $ad=$('#ad_ul li');
	var $cubic=$('.arrow a');
	var len=$ad.length;
	var prev=$('#prev');
	var next=$('#next');
    var timer=null;
    var index=0;
    $cubic.bind('click', function(){
    	index=$cubic.index(this);
    	adRoll(index);
    }).eq(0).trigger('click');
    next.bind('click', function(){
    	if(index==4){
    		return false;
    	}
    	index++;
    	adRoll(index);
    });
    prev.bind('click',function(){
        if(index>0){
        	index--;
        	adRoll(index);
        }
    });
    $('.ad').hover(function() {
    	if(timer){
            prev.show();
            next.show();
    		clearInterval(timer);
    	}
    }, function() {
            prev.hide();
            next.hide();
    	timer=setInterval(function(){
                adRoll(index);
                index++;
                if(index==len){index=0;}
            },2000);
    }).trigger('mouseout');
});

function adRoll(index){
	$('#ad_ul li').eq(index).
	stop(true,false).fadeIn().
	siblings().fadeOut();
	$('.cubic').eq(index).addClass('active').siblings().removeClass('active');
}