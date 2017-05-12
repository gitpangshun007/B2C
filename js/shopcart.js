var shopText=document.getElementById('shopText');
var shopcartTab=document.getElementById('shopcartTab');
shopText.addEventListener('mouseover', function(){
	shopcartTab.style.display='block';
	shopcartTab.style.transition='height 2s';
});
shopText.addEventListener('mouseovut', function(){
	shopcartTab.style.display='none';
});
shopcartTab.addEventListener('mouseover', function(){
	shopcartTab.style.display='block';
});
shopcartTab.addEventListener('mouseout', function(){
	shopcartTab.style.display='none';
});