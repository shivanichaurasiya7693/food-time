// showing nevbar click over menu

const mobile = document.querySelector('.menu-toggle');
const mobilelink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
})

//close menu when click

mobilelink.addEventListener("click", function() {
    const menuBars = document.querySelector(".is-active");
    
    if (window.innerWidth <= 768) {
        // Toggle 'is-active' class on mobile menu
        mobile.classList.toggle("is-active");
        // Toggle 'active' class on the mobilelink
        mobilelink.classList.toggle("active");
    }
});


// mobilelink.addEventListener("click", function(){
//     const menuBars = document.querySelector(".is-active");
//     if(window.innerWidth<=768 && menuBars){
//         mobile.classList.toggle("is-actiive");
//         mobilelink.classList.toggle("active");
//     }
// })


// moveble button

var  step = 100 ;
 var  stepFilter = 60;
 var  scrolling = true;

 $(".back").bind("click", function(e){
    e.preventDefault();
    $(".hightlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
 });

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlitght-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
 });




//  menu categary

  const filterWrapper = document.querySelector('.filter-wrapper');
  const nextBtn = document.querySelector('.next-menus');
  const backBtn = document.querySelector('.back-menus');
  
  let scrollPosition = 0; // To track the scroll position
  
  nextBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.filter-card').offsetWidth + 20; // 20px gap
    scrollPosition += cardWidth; // Scroll by 1 card's width

    const maxScroll = filterWrapper.scrollWidth - filterWrapper.clientWidth;
    if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll; // Prevent overscrolling to the right
    }

    filterWrapper.scroll({
      left: scrollPosition,
      behavior: 'smooth'
    });
  });

  backBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.filter-card').offsetWidth + 20; // 20px gap
    scrollPosition -= cardWidth; // Scroll back by 1 card's width
    if (scrollPosition < 0) scrollPosition = 0; // Prevent overscrolling to the left
    
    filterWrapper.scroll({
      left: scrollPosition,
      behavior: 'smooth'
    });
  });
