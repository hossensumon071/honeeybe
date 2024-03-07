const tl = gsap.timeline();

gsap.from(".nav .menu-items, .nav .nav-btn", {
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

// GSAP animation for background
gsap.from(".hero-sec", {
  scale: 4,
  duration: 0.8,
  ease: "power1.out",
  onComplete: function () {
    // Animation complete callback
    // Show other elements after background animation finishes
    gsap.from(".hero-bee", {
      scale: 3,
      duration: 0.4,
      ease: "power1.out", // Easing function for smooth acceleration
      delay: 0.2,
      stagger: 0.2,
    });
    gsap.to(".hero-bee", {
      opacity: 1,
      visibility: "visible",
      duration: 0.5,
      ease: "power1.out", // Easing function for smooth acceleration
      delay: 0.3, // Delay the animation to make sure it starts after the background animation
    });

    tl.to(".hero-content", {
      opacity: 1,
      visibility: "visible",
      y: 20,
      duration: 0.5,
      ease: "power1.out", // Easing function for smooth acceleration
      delay: 0.6, // Delay the animation to make sure it starts after .hero-bee animation
    });
    gsap.to(".hero-nav", {
      opacity: 1,
      visibility: "visible",
      y: 20,
      duration: 0.5,
      ease: "power1.out", // Easing function for smooth acceleration
      delay: 0.9, // Delay the animation to make sure it starts after .hero-content animation
    });
    tl.from(".merque-hero", {
      opacity: 0,
      duration: 1,
      ease: "power1.out", // Easing function for smooth acceleration
      delay: 1, 
    })
  },
});


// ScrollTrigger animation for each section
// Section 1: Hero Section
gsap.from(".hero-sec", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero-sec",
    start: "top 80%", // Animation starts when the top of the section is 80% in view
    end: "bottom 20%", // Animation ends when the bottom of the section is 20% in view
    toggleActions: "play none none reverse", // Animation plays when scrolling down and reverses when scrolling up
  },
});

// Section 2: Happiness Section
gsap.from(".happyness .happyness_content", {
  opacity: 0,
  y: 300,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".happyness",
    start: "top 80%", // Animation starts when the top of the section is 80% in view
    end: "bottom 20%", // Animation ends when the bottom of the section is 20% in view
    toggleActions: "play none none reverse", // Animation plays when scrolling down and reverses when scrolling up
  },
});

// Add similar ScrollTrigger animations for other sections...
