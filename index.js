//========================nav======================//

var sidem=document.getElementById("sidemenu");

        function openmenu(){
            sidem.style.top="0";
        }
        function closemenu(){
            sidem.style.top="-80%";
        }
//=========================slider========================//
        const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < slider.children.length -1) {
    currentIndex++;
    updateSlider();
  }
});

function updateSlider() {
  const cardWidth = slider.children[0].offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

window.addEventListener("resize", updateSlider);
updateSlider();


 //=======================GSAP====================//
 
        var tl= gsap.timeline();

        tl 
        .from(".content h2",{
            opacity:0,
            duration:1
        })
        .from(".content h3",{
            opacity:0,
            duration:1
        })
        .from(".content button",{
            opacity:0,
            scale:1.2,
            duration:1
        })

        gsap.to("nav",{
          backgroundColor:"#0b5055f8",
          height:"70px",
          duration:1,
          scrollTrigger:{
              trigger:"#nav",
              scroller:"body",
             // markers:true,
              start:"top -10%",
              end:"top -11%",
              scrub:1
          }
      })
        




        