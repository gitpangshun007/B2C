var prev1=document.getElementById('prev1');
var next1=document.getElementById('next1');
var prev2=document.getElementById('prev2');
var next2=document.getElementById('next2');
function productRoll(index){
	var productUl=document.getElementById('product1');
	var item=document.getElementById('itemfirst');
	var widthUl=item.offsetWidth*5+16*5;
	productUl.style.left=widthUl*index + 'px';
}
function recommendRoll(index){
	var recommend=document.getElementById('recommend');
	var item=document.getElementById('itemfirst');
	var widthUl=item.offsetWidth*5+16*5;
	recommend.style.left=widthUl*index + 'px';
}
prev1.onclick=function(){
	productRoll(0);
}
next1.onclick=function(){
	productRoll(-1);
}
prev2.onclick=function(){
	recommendRoll(0);
}
next2.onclick=function(){
	recommendRoll(-1);
}
