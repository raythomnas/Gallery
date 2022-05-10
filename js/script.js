window.addEventListener("scroll", function(){   
	if (document.body.scrollTop > 500){
		document.getElementById("scrollBtn").style.display = "block";
	} else {
		document.getElementById("scrollBtn").style.display = "none";
	};
   }, true);

for (i=0; i<images.length; i++) {
	document.getElementById('column1').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
  i = (i+1);
  	document.getElementById('column2').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
};

function allGallery() {
	document.getElementById('column1').innerHTML = "";
	document.getElementById('column2').innerHTML = "";
	for (i=0; i<images.length; i++) {
			document.getElementById('column1').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
  i = (i+1);
  	document.getElementById('column2').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
}
};

function lanscapeGallery() {
	document.getElementById('column1').innerHTML = "";
	document.getElementById('column2').innerHTML = "";
	for (i=0; i<images.length; i++) if (images[i].category === "Nature") {
	document.getElementById('column1').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
  i = (i+1);
  	document.getElementById('column2').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
}
}

function portraitGallery() {
	document.getElementById('column1').innerHTML = "";
	document.getElementById('column2').innerHTML = "";
	for (i=0; i<images.length; i++) if ((i < images.length)&&(images[i].category === "portrait")) {
	console.log(i)
	document.getElementById('column1').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
    if (i < images.length) {
  i = (i+1);
  console.log(i)
  	document.getElementById('column2').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
} else {
	return;
};
}
//   if (i < images.length) {
//   i = (i+1);
//   console.log(i)
//   	document.getElementById('column2').innerHTML 	
// 	+=   	'<div>'
//   + 		'<img src="'+ images[i].src +'">'
//   + 		'</div>'
// } else {
// 	return;
// }
} 


function architectureGallery() {
	document.getElementById('column1').innerHTML = "";
	document.getElementById('column2').innerHTML = "";
	for (i=0; i<images.length; i++) if ((i <= images.length)&&(images[i].category === "architecture")) {
	document.getElementById('column1').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
  i = (i+1);
  	document.getElementById('column2').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
}
}

function productGallery() {
	document.getElementById('column1').innerHTML = "";
	document.getElementById('column2').innerHTML = "";
	for (i=0; i<images.length; i++) if ((i <= images.length)&&(images[i].category === "product")) {
	document.getElementById('column1').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
  i = (i+1);
  	document.getElementById('column2').innerHTML 	
	+=   	'<div>'
  + 		'<img src="'+ images[i].src +'">'
  + 		'</div>'
}
}

function showBio() {
	document.getElementById('bioBox').style.display = "block";
}

function hideBio() {
	document.getElementById('bioBox').style.display = "none";
}

function showContact() {
	document.getElementById('contactBox').style.display = "block";
}

function hideContact() {
	document.getElementById('contactBox').style.display = "none";
}