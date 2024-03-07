const tl = gsap.timeline();

gsap.from(".nav .menu-items, .nav .nav-btn", {
  scale: 0.5,
  opcity: 0,
  stagger: 0.2,
  duration: 1,
});

// GSAP animation for background
gsap.from(".hero-sec", {
  scale: 2,
  duration: 0.6,
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

    gsap.to(".hero-content", {
      color: "white", // Change color to white
      webkitTextStroke: "2px solid white",
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
  },
});
