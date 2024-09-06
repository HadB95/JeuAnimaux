window.onload = init;
var divResult;
var divTexte;
function init(){
	divResult = document.getElementsByTagName('div')[1];
	divTexte = document.getElementsByTagName('div')[2];
	for(var k in animaux){
		divResult.innerHTML += "<img id='"+animaux[k].name+"' src='images/"+animaux[k].file+"'/>";
	}
	 
	/**
	 * Ecrire ici la suite du programme principal
	 */
var images= document.getElementsByTagName("img");
for (var i = 0; i< images.length; i++){
	images[i].addEventListener("click",function(){
		this.style.display = "none";
		//this.style.visibility = "hidden";
	});
}

document.getElementsByTagName('button')[0].addEventListener('click', function(){
	for(var i in animaux){
		if (animaux[i].domestic == true){
			document.getElementById(animaux[i].name).style.display = "none";
		}
	}
})

document.querySelector('div:first-of-type button:nth-of-type(2)').addEventListener('click', function(){
	for(var i in animaux){		 
			document.getElementById(animaux[i].name).style.display = "";
		
	}

})
}

/**
 * Ecrire ici vos méthodes 
 */

