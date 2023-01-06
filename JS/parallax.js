// uSING GSAP and ScrollMagic fro parallax
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax()

timeline.to(
    "#behind", 1, {y:500}
);


let scene = new ScrollMagic.Scene({

    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})
.setTween(timeline)
.addTo(controller)



