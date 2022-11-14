import {
    gsap
} from "gsap";
import {
    lscroll
} from "./scroll";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    DrawSVGPlugin
} from "gsap/DrawSVGPlugin";
import Highway from '@dogstudio/highway';
import {
    smooth
} from "./easing";
import contact from "./contact";

class home_js extends Highway.Renderer {

    onEnter() {

        // console.log("I am home render");

        gsap.registerPlugin(DrawSVGPlugin);
        gsap.registerPlugin(ScrollTrigger);

        // ARROW BTN ANIMATION

        let arrow_btn = document.querySelectorAll(".c-project");

        arrow_btn.forEach(arrow);

        let btn_anim = gsap.timeline();

        function arrow(btn) {
            btn.addEventListener("mouseenter", () => {

                btn_anim.set(btn.querySelector("#line1"), {
                        drawSVG: "100%"
                    })
                    .set(btn.querySelector("#line2"), {
                        drawSVG: 0
                    })
                    .set(btn.querySelector("#arrow-head-1"), {
                        drawSVG: "100%"
                    })
                    .set(btn.querySelector("#arrow-head-2"), {
                        drawSVG: 0
                    })
                    .to(btn.querySelector("#line1"), {
                        drawSVG: "100% 100%",
                        duration: .2
                    })
                    .to(btn.querySelector("#arrow-head-1"), {
                        drawSVG: "100% 100%",
                        duration: .2
                    })
                    .to(btn.querySelector("#arrow-head-2"), {
                        drawSVG: "100%",
                        duration: .4
                    })
                    .to(btn.querySelector("#line2"), {
                        drawSVG: "100%",
                        duration: .2
                    });

            });
        }



        // REMOVE THIS

        window.onload = () => {
            let loader = document.querySelector(".c-loader"),
                loader_title = document.querySelector(".js-loader-title");

            loader_title.classList.remove("is-loading");
            loader_title.classList.add("is-loaded");

            window.setTimeout(() => {
                loader.classList.remove("is-loading");
                loader.classList.add("is-loaded");
            }, 800)


            // ONLOAD ANIMATION

            let home_title_anim = gsap.timeline({
                delay: .6,
                defaults: {
                    ease: smooth
                }
            });

            home_title_anim.from(".js-hero-title .line-child", {
                    y: "40%",
                    rotateX: "-90deg",
                    stagger: .2,
                    duration: 1.9
                }, "+=1")
                .from(".c-visual-line", {
                    scaleX: 0,
                    duration: .5
                }, "-=1.2")
                .fromTo("#v_path", {
                    drawSVG: 0
                }, {
                    drawSVG: "100%",
                    duration: .5,
                    ease: "power1.out"
                }, "-=.8")
                .fromTo("#i_path", {
                    drawSVG: 0
                }, {
                    drawSVG: "100%",
                    duration: .6,
                    ease: "power1.out"
                }, "-=.7")
                .fromTo("#s_path", {
                    drawSVG: 0
                }, {
                    drawSVG: "100%",
                    duration: .8,
                    ease: "power1.out"
                }, "-=.6")
                .fromTo("#u_path", {
                    drawSVG: 0
                }, {
                    drawSVG: "100%",
                    duration: .9,
                    ease: "power1.out"
                }, "-=.5")
                .fromTo("#a_path", {
                    drawSVG: 0
                }, {
                    drawSVG: "100%",
                    duration: 1,
                    ease: "power1.out"
                }, "-=.4")
                .fromTo("#l_path", {
                    drawSVG: 0
                }, {
                    drawSVG: "100%",
                    duration: 1.2,
                    ease: smooth
                }, "-=.3")
                .fromTo("#dot_path", {
                    drawSVG: 0
                }, {
                    drawSVG: "100%",
                    duration: .3,
                    ease: "power1.out"
                })
                .from(".c-title .o-title-small .line-child", {
                    y: "100%",
                    duration: .8,
                    stagger: .14
                }, "-=2.8");

            //setTimeout(()=>{home_title_anim.play()}, 600);
        }



        // MAKE SCROLL TRIGGER WORK WITH LOCO

        lscroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#js-scroll", {
            scrollTop(value) {
                return arguments.length ? lscroll.scrollTo(value, 0, 0) : lscroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: document.querySelector("#js-scroll").style.transform ? "transform" : "fixed"
        });



        // SCROLL TRIGGER ANIMATIONS

        gsap.utils.toArray(".js-reveal").forEach(section => {
            gsap.from(section.querySelectorAll(".line-child"), {
                scrollTrigger: {
                    trigger: section,
                    scroller: "#js-scroll"
                },
                y: "100%",
                ease: smooth,
                delay: .1,
                duration: 1.2,
                stagger: 0.1
            })
        });

        gsap.utils.toArray(".c-honors__list").forEach(section => {
            gsap.from(section.querySelectorAll(".c-honors__list p > span"), {
                scrollTrigger: {
                    trigger: section,
                    scroller: "#js-scroll",
                    start: "10 center",
                },
                y: "100%",
                duration: 1.2,
                stagger: .1,
                ease: smooth
            })
        });

        gsap.utils.toArray(".c-honors__list").forEach(section => {
            gsap.from(section.querySelectorAll(".c-honors__list li a"), {
                scrollTrigger: {
                    trigger: section,
                    scroller: "#js-scroll",
                    start: "10 center",
                },
                x: "-90%",
                opacity: 0,
                duration: 1.2,
                stagger: .1,
                ease: smooth
            })
        });


        // window.addEventListener("resize", resize_card);

        if (window.innerWidth > 1000) {
            let card = document.querySelectorAll(".js-cards > div");
            gsap.from(card[0], {
                scrollTrigger: {
                    trigger: card[0],
                    scroller: "#js-scroll",
                    // end: "bottom 0", 
                    // ease:  "Power0.easeNone", 
                    scrub: true
                },
                y: "-18%",
                duration: 2.8,
                rotate: "-20deg"
            })
            gsap.from(card[1], {
                scrollTrigger: {
                    trigger: card[1],
                    scroller: "#js-scroll",
                    // end: "bottom 0",
                    // ease:  "Power0.easeNone",  
                    scrub: true
                },
                y: "-12%",
                duration: 2.8,
                rotate: "-10deg"
            })
            gsap.from(card[2], {
                scrollTrigger: {
                    trigger: card[2],
                    scroller: "#js-scroll",
                    // end: "bottom 0", 
                    // ease:  "Power0.easeNone",  
                    scrub: true
                },
                y: "-6%",
                duration: 2.8,
                rotate: "-5deg"
            })
        }

        if (window.innerWidth < 1000) {
            let card = document.querySelectorAll(".js-cards > div");
            gsap.from(card[0], {
                scrollTrigger: {
                    trigger: card[0],
                    scroller: "#js-scroll",
                    end: "bottom 0",
                    ease: "Power0.easeNone",
                    scrub: true
                },
                y: "-35%"
            })
            gsap.from(card[1], {
                scrollTrigger: {
                    trigger: card[1],
                    scroller: "#js-scroll",
                    end: "bottom 0",
                    ease: "Power0.easeNone",
                    scrub: true
                },
                y: "-22%"
            })
            gsap.from(card[2], {
                scrollTrigger: {
                    trigger: card[2],
                    scroller: "#js-scroll",
                    end: "bottom 0",
                    ease: "Power0.easeNone",
                    scrub: true
                },
                y: "-10%"
            })
        }



        //FOOTER ANIM

        // gsap.from(".js-line-1", {
        //     scrollTrigger:{
        //         trigger: "footer",
        //         scroller: "#js-scroll",
        //         start: "top 50"
        //     },
        //     x: "100%",
        //     background: "#000",
        //     duration: 2.8,
        //     ease: smooth,
        //     clearProps: "background"
        // })

        // gsap.from(".js-line-2", {
        //     scrollTrigger:{
        //         trigger: "footer",
        //         scroller: "#js-scroll",
        //         start: "top 50"
        //     },
        //     x: "-100%",
        //     background: "#000",
        //     duration: 2.8,
        //     ease: smooth,
        //     clearProps: "background"
        // })

        ScrollTrigger.create({
            trigger: "footer",
            scroller: "#js-scroll",
            start: "top 50",
            onEnter: nav_white,
            onLeave: nav_blck,
            onEnterBack: nav_white,
            onLeaveBack: nav_blck
        });

        function nav_white() {
            document.querySelector("nav").classList.add("--white");
        }

        function nav_blck() {
            document.querySelector("nav").classList.remove("--white");
        }

        gsap.from("#c-circle", {
            scrollTrigger: {
                trigger: "footer",
                scroller: "#js-scroll",
                // start: "top top",
                scrub: true
            },
            y: "-70%",
            duration: 2,
            ease: smooth
        })




        //         function resize_card(){   
        //             // if (window.matchMedia("(min-width: 900px)").matches) {
        //                 let card = document.querySelectorAll(".js-cards > div");
        // console.log("nopes")
        //                 gsap.from(card[0], {scrollTrigger:{trigger: card[0], scroller: "#js-scroll", end: "bottom 0", ease:  "Power0.easeNone", scrub: true}, y: "-10%", rotate:"-20deg"})
        //                 gsap.from(card[1], {scrollTrigger:{trigger: card[1], scroller: "#js-scroll", end: "bottom 0", ease:  "Power0.easeNone",  scrub: true}, y: "-5%", rotate:"-10deg"})
        //                 gsap.from(card[2], {scrollTrigger:{trigger: card[2], scroller: "#js-scroll", end: "bottom 0", ease:  "Power0.easeNone",  scrub: true}, y: "-5%", rotate:"-5deg"})
        //             // }
        //         }

        //resize_card();


        //MAKE SCROLLTRIGGER WORK AGAIN

        ScrollTrigger.addEventListener("refresh", () => lscroll.update());
        ScrollTrigger.refresh();

        // var gradient = [
        //     ["#FFA372", "#96C1C8", "#C87D55", "#B4BACF"],
        //     ["#8668E3", "#FFA372", "#F5F5F5", "#961EFD"],
        //     ["#BF8845", "#E5CFC2", "#B2D925", "#678C18"],
        //     ["#57B0BB", "#DD1E2E", "#BFC07C", "#BF6060"],
        //     ["#FFA372", "#96C1C8", "#261F20", "#171113"]
        // ];

        var color = ["#C1C6D7", "#FF99A8", "#DBCABD", "#FFBC99", "#E5B5B3"];

        //IMAGE CAROUSELS
        let project = document.querySelectorAll(".js-project"),
            cursor = document.querySelector("#js-cursor"),
            work_bg = document.querySelector("#js-work-bg"),
            images_div = document.querySelectorAll("#js-cursor > div");


        project.forEach((x, i) => {
            x.addEventListener("mouseenter", (e) => {
                images_div[i].classList.add("--visible");
                work_bg.classList.add("--transparent");
                // work_bg.style=`--clr1:${gradient[i][0]};--clr2:${gradient[i][1]};--clr3:${gradient[i][0]};--clr4:${gradient[i][1]}`;
                work_bg.style = `background: ${color[i]}`;
            })
            x.addEventListener("mouseleave", (e) => {
                images_div[i].classList.remove("--visible");
                work_bg.classList.remove("--transparent");
                // work_bg.style="background: #f2f2f2";
            })
        })

        document.querySelector("#js-work").addEventListener("mousemove", (e) => {
            gsap.to(cursor, {
                x: e.clientX - 18,
                y: e.clientY - 10,
                duration: .5
            })
        })

        // for(let x of project){
        //     x.addEventListener("mouseenter", (e)=>{
        //         // images_div[x].classList.add("--visible")
        //         console.log(project.item(x))
        //     })
        //     x.addEventListener("mouseout", (e)=>{
        //         // images_div[x].classList.remove("--visible")
        //         console.log(x)
        //     })
        // }

        // TIME FUNCTIONS

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        function calcTime(offset) {
            let d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000 * offset));
            return nd.getHours() + ":" + addZero(nd.getMinutes());
        }

        (() => {
            document.querySelectorAll(".js-year").forEach((elm) => {
                elm.innerHTML = "©" + new Date().getFullYear()
            });
            document.querySelectorAll(".js-time")[0].innerHTML = calcTime(+5.5);
            document.querySelectorAll(".js-time")[1].innerHTML = calcTime(+5.5);
        })();

        setInterval(() => {
            let time = document.querySelectorAll(".js-time");
            for (let x of time) {
                x.innerHTML = calcTime(+5.5);
            }

        }, 60000);



        //for enabling the contact form

        //for hehe

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function contact_open() {
            contact.open();
            if (contact.first == true) {
                setTimeout(() => {
                    contact.next_query();
                }, 1000);
                setTimeout(() => {
                    contact.next_query();
                }, 4500);
                contact.first = false;
            }
        }

        let cate = document.querySelector(".c-cate"),
            num,
            cate_img = document.querySelector(".c-cate > img"),
            cate_btn = document.querySelectorAll(".c-cate > div > button");

        document.querySelector("#contact_btn").addEventListener("click", () => {
            num = getRandomInt(0, 6);
            document.querySelector(".c-cate > div").style.display = "";
            // console.log(num);
            cate_img.src = new URL('../assets/cate1.png',
                import.meta.url);
            if (num == 4) {
                cate.style = "display: block";
                cate_btn[0].addEventListener("click", () => {
                    document.querySelector(".c-cate > div").style.display = "none";
                    cate_img.src = new URL('../assets/cate2.png',
                        import.meta.url);
                    setTimeout(() => {
                        cate.style = "display: none";
                        contact_open();
                    }, 3000);
                })

                cate_btn[1].addEventListener("click", () => {
                    document.querySelector(".c-cate > div").style.display = "none";
                    cate_img.src = new URL('../assets/cate3.png',
                        import.meta.url);
                    setTimeout(() => {
                        cate.style = "display: none";
                        contact_open();
                    }, 3000);
                })
            } else {
                contact_open();
            }
        });


        if (window.matchMedia("(max-width: 900px)").matches) {
            window.scrollTo(0, 0);
            // console.log("mathc")
        }

        document.querySelector(".c-footer-credit").addEventListener("click", () => {
            document.querySelector(".c-credits").classList.toggle("--visible");
        })
    }

    onLeave() {
        window.clearTimeout();
    }
}


export default home_js;