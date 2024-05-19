function checkMediaQuery(query) {
    return window.matchMedia(query).matches;
}


function handleResponsiveChanges() {
   
    if (checkMediaQuery('(max-width: 576px)')) {
        
    } else if (checkMediaQuery('(min-width: 577px) and (max-width: 768px)')) {
        
    } else if (checkMediaQuery('(min-width: 769px) and (max-width: 1024px)')) {
      
    } else if (checkMediaQuery('(min-width: 1025px) and (max-width: 1199px)')) {
        
    } else if (checkMediaQuery('(min-width: 1200px) and (max-width: 1600px)')) {
        
    } else {
     
    }
}

handleResponsiveChanges();
window.addEventListener('resize', handleResponsiveChanges);


function changeImage() {
    var imageContainer = document.getElementById('imageContainer');
    var images = imageContainer.getElementsByTagName('img');
    var currentImageIndex = 0;

    setInterval(function() {
        images[currentImageIndex].style.animation = 'none';
        setTimeout(function() {
            images[currentImageIndex].style.animation = '';
        }, 10);
        
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 10000);
}


changeImage();