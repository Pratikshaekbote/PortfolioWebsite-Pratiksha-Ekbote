import Highway from '@dogstudio/highway';
import {
    gsap
} from "gsap";
import {
    lscroll
} from './scroll';
import {
    smooth
} from "./easing";
import {
    DrawSVGPlugin
} from "gsap/DrawSVGPlugin";


class home extends Highway.Transition { in ({
        from,
        to,
        trigger,
        done
    }) {

        gsap.registerPlugin(DrawSVGPlugin);

        // console.log("Home In");


        document.querySelector(".c-play__bg").classList.remove("--play");

        const home_title_anim = gsap.timeline({
            defaults: {
                ease: smooth
            }
        });

        home_title_anim.set(".c-home__bg", {
                zIndex: 1,
                opacity: 0,
                pointerEvents: "none"
            })
            .fromTo(to, {
                opacity: 0,
                y: "2.2%"
            }, {
                opacity: 1,
                y: 0,
                duration: .8
            })
            .set(".c-play__bg", {
                y: "100%",
                clearProps: "zIndex",
                onComplete: () => {
                    done();
                }
            })
            .from(".js-hero-title .line-child", {
                y: "100%",
                stagger: .2,
                duration: 1.4
            }, "-=.8")
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
            }, "-=.7")
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
            }, "-=.5")
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

    }

    out({
        from,
        done
    }) {
        //this is called first  call just before done and then in nav_end

        // console.log("Home Out");


        const loader = gsap.timeline({
            defaults: {
                ease: smooth
            }
        });

        loader.set(".c-play__bg", {
                opacity: 1
            })
            .to(from, {
                y: "-2%",
                opacity: .2,
                duration: .7,
                ease: "Power4.out",
                onComplete: () => {
                    lscroll.scrollTo(".c-play-title", {
                        duration: 0,
                        disableLerp: true
                    });
                    lscroll.stop();
                }
            })
            .to(".c-play__bg", {
                y: 0,
                duration: .7
            }, "-=.6")
            .set(".c-play__bg", {
                opacity: 1,
                onComplete: () => {
                    from.remove();
                    lscroll.update();
                    done();
                }
            });


    }
}

export default home;