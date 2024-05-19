function adjustLayout() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var isPortrait = screenHeight > screenWidth;

    if (screenWidth <= 576) {
      
        document.querySelector('.contact-section').style.flexDirection = 'column';
        document.querySelector('.contact-section').style.width = '100%';
        document.querySelector('.contact-info').style.marginTop = '20px';
    } else if (screenWidth <= 768) {
       
        document.querySelector('.contact-section').style.flexDirection = 'column';
        document.querySelector('.contact-section').style.width = '100%';
        document.querySelector('.contact-info').style.marginTop = '20px';
    } else if (screenWidth <= 1024) {
        
        document.querySelector('.contact-section').style.flexDirection = 'column';
        document.querySelector('.contact-section').style.width = '100%';
        document.querySelector('.contact-info').style.marginTop = '20px';
    } else if (screenWidth <= 1199) {
        
        document.querySelector('.contact-section').style.flexDirection = isPortrait ? 'column' : 'row';
        document.querySelector('.contact-section').style.width = '80%';
        document.querySelector('.contact-info').style.marginTop = '0';
    } else if (screenWidth <= 1600) {
       
        document.querySelector('.contact-section').style.flexDirection = isPortrait ? 'column' : 'row';
        document.querySelector('.contact-section').style.width = '80%';
        document.querySelector('.contact-info').style.marginTop = '0';
    } else {
   
        document.querySelector('.contact-section').style.flexDirection = isPortrait ? 'column' : 'row';
        document.querySelector('.contact-section').style.width = '80%';
        document.querySelector('.contact-info').style.marginTop = '0';
    }
}