document.addEventListener('DOMContentLoaded', function(){
		let displayButton = document.getElementById('displayButton');
		let view = document.getElementById('enteryourname');
		displayButton.addEventListener('click', function() {
		let input = prompt('What is your favorite enteryourname?');
		view.innerHTML = input;
	});
});


const slideshowImages = document.querySelectorAll(".slideshow img");
const nextImageDelay = 2600;
let currentImageCounter = 0; // setting a variable to keep track of the current image 

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
	slideshowImages[currentImageCounter].style.opacity = 0;
	currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
	slideshowImages[currentImageCounter].style.opacity = 1;
}


