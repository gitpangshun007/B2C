var tab=document.getElementById('sideBarUl').children;
var tabActive=document.getElementById('tab_active');
function tabCheck(){
	for (var i = 0; i < tab.length; i++) {
		tab[i].index=i;
		tab[i].addEventListener('mouseover', function(){
			for (var j = 0; j < tab.length; j++) {
				tab[j].className='';
			}
			this.className='orange_tab';
            tabActive.style.opacity='1';
		});
		tab[i].addEventListener('mouseout',function(){
			tabActive.style.opacity='0';
		});
	}
	tabActive.addEventListener('mouseover',function(){
			tabActive.style.opacity='1';
		});
	tabActive.addEventListener('mouseout',function(){
			tabActive.style.opacity='0';
		});
}
window.onload=tabCheck;