$(document).ready(function () {
  AOS.init();
  const eventswiper = document.querySelector(".swiper-wrapper");
  const event = [
    // eslint-disable-next-line linebreak-style
    {
      title: "Talk on ABC",
      image: "assets/images/event/image3.jpg",
    },
    {
      title: "Keynote on XYZ",
      image: "assets/images/event/image2.jpg",
    },
    { title: "Group Picture", image: "assets/images/event/image1.jpg" },
    {
      title: "Presentation",
      image: "assets/images/event/image4.jpg",
    },
    {
      title: "Note on XYZ",
      image: "assets/images/event/image5.jpg",
    },
    {
      title: "Keytopics",
      image: "assets/images/event/image6.jpg",
    },
    {
      title: "The Gist",
      image: "assets/images/event/image7.jpg",
    },
    {
      title: "Thank You",
      image: "assets/images/event/image8.jpg",
    },
  ];
  // Filling the details from the object array event
  function fillData() {
    let output = "";
    for (var x = 0; x < event.length; x++) {
      output += `
    <div class="swiper-slide">
    <div class="img-container">
      <img src=${event[x].image} alt="" class="img-fluid" />
    </div>
    <div class="container arrow_contain">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="wrapper">
            <div class="content">
              <div class="title">
                <div class="text-wrapper">
                  <div class="text-inner">
                  ${event[x].title}
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div> 
          <!-- wraper freee -->
            <div class="controls">
              <div class="swiper-button-prev ctrl prev-ctrl">
                <i class="material-icons icon">
                  arrow_back
                </i>
              </div>
              </div>
              <div class="controls1">
              <div class="swiper-button-next ctrl next-ctrl">
                <i class="material-icons icon">
                  arrow_forward
                </i>
              </div>      
        </div>
      </div>
    </div>
  </div>`;
    }
    eventswiper.innerHTML = output;
  }
  document.addEventListener("DOMContentLoaded", fillData());
  var parallaxSliderOptions = {
    speed: 1000,
    effect: "coverflow",
    autoplay: false,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      depth: 20,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    // parallax effect
    on: {
      init: function () {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".img-container")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
              "data-swiper-paralalx-opacity": 0.5,
            });
        }
        let index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      transitionEnd: function () {
        let swiper = this;
        let index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      resize: function () {
        this.update();
      },
    },
    navigation: {
      nextEl: ".image-slider .next-ctrl",
      prevEl: ".image-slider .prev-ctrl",
    },
  };
  // initializing swiper
  var slider = new Swiper(".image-slider", parallaxSliderOptions);
});
