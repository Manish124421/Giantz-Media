function pageOneAnimation(){
    var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button",{
    y:-50,
    opacity : 0,
    delay : 0.3,
    duration : 0.5,
    stagger : 0.2,
})
tl.from(".center-1 h1, .center-1 p, .center-1 button",{

    x : -200,
    duration : 0.3,
    opacity : 0,
    stagger : 0.3,

})
tl.from(".center-2",{
    opacity : 0,
    scale : 0,
    duration : 1,
},"-=0.8")
// whenever you want to give delay or want animation faster in timeline you can give delay like this -=3 s or 0.3 etc
tl.from(".section1-bottom img",{
    y : 20,
    duration : 0.4 ,
    opacity : 0,
    stagger : 0.2,
})
}

function pageTwoAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger : {
            trigger : "#sec2",
            scroller : "body",
            start : "top 90%",
            end : "top 0%",
            scrub : 2,
        }
    })
    
    tl2.from(".services",{
        y : 30,
        opacity : 0,
        duration : 0.3,
        
    })
    tl2.from(".elem.line1.left",{
        x : -200,
        opacity : 0,
        duration : 0.4, 
    },"line1")
    tl2.from(".elem.line1.right",{
        x : 200,
        opacity : 0,
        duration : 0.4, 
    },"line1")
    tl2.from(".elem.line2.left",{
        x : -200,
        opacity : 0,
        duration : 0.4, 
    },"line2")
    tl2.from(".elem.line2.right",{
        x : 200,
        opacity : 0,
        duration : 0.4, 
    },"line2")
    
    // if you wrote same name in both animation than both starts at the same time using this you can start parallel animation even if you are in timeline
}

function pageThreeAnimation(){
    var tl3 = gsap.timeline({
    scrollTrigger : {

        trigger : "#sec3",
        scroller : "body",
        start : "top 90%",
        end : "top 0%",
        scrub : 2,
        // markers : true,
    }
})

tl3.from(".info-1 h2",{

    opacity:0,
    x : -100,
    duration : 0.2

})
tl3.from(".info-1 p",{

    opacity:0,
    x : -100,
    duration : 0.2

})
tl3.from(".info-1 button",{

    opacity:0,
    x : -100,
    duration : 0.2

})
tl3.from(".info-2",{

    opacity:0,
    scale : 0,
    duration : 0.2

},"-=0.2")
}


function pageFourAnimation(){

var tl4 = gsap.timeline({
    scrollTrigger : {

        trigger : "#sec4",
        scroller : "body",
        start : "top 90%",
        end : "top 10%",
        scrub : 2,
        // markers : true,
    }
})

tl4.from(".sec4part1",{
    opacity : 0,
    x : -50,
    duration : 0.2,
})
tl4.from(".sec4part2 .inner-box",{
    opacity : 0,
    x : -50,
    duration : 0.2,
    stagger : 0.2,
})
}

pageOneAnimation();
pageTwoAnimation();
pageThreeAnimation();
pageFourAnimation();
