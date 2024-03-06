const tl = gsap.timeline()

gsap.from(".nav .menu-items, .nav .nav-btn", {
    scale: 0.5,
    opcity: 0,
    stagger: 0.2,
    duration: 1
})

gsap.from(".hero-bee .hero-float", {
    scale: 2,
    opacity: 0,
    duration: 0.8
})

tl.from(".hero-sec .hero-nav", {
    y: -100,
    duration: 0.8
})

tl.from(".hero-sec .hero-content h1, .hero-sec .hero-content p", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5
})