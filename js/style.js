
  const body = document.querySelector("body");
  const navbar = document.querySelector(".navbar");

  window.onscroll = ()=>{
    this.scrollY > 715 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  }

  document.querySelector("#contact-form").addEventListener('submit', function (e) {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


  // Animation scroll

  const allRonds = document.querySelectorAll('.rond');
  const allBoxes = document.querySelectorAll('.box');
  
  const controller = new ScrollMagic.Controller()
  
  allBoxes.forEach(box => {
  
      for(i = 0; i < allRonds.length; i++){
  
          if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){
  
              let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})
  
              let scene = new ScrollMagic.Scene({
                  triggerElement: allRonds[i],
                  reverse: true
              })
              .setTween(tween)
              // .addIndicators()
              .addTo(controller)
  
          }
  
      }
  
  })