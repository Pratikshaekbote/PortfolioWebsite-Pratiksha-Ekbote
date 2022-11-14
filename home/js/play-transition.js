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


class play extends Highway.Transition { in ({
        from,
        to,
        trigger,
        done
    }) {

        // console.log("Play In");

        // lscroll.update();
        // lscroll.scrollTo("top", {duration: 0, disableLerp: true});

        const loader = gsap.timeline({
            defaults: {
                ease: smooth
            }
        });

        loader.fromTo(to, {
                opacity: 0
            }, {
                opacity: 1
            })
            .set(".c-play__bg", {
                zIndex: 1,
                opacity: 1
            })
            .set(".c-home__bg", {
                y: "100%",
                opacity: 0,
                clearProps: "zIndex",
                onComplete: () => {
                    done();
                }
            })
            //.to(".js-loader-title-child", {y: 0, rotate: -3, stagger: .4})
            .fromTo(".js-hero-title .line-child", {
                y: "100%"
            }, {
                y: "0",
                duration: 1
            })
            .fromTo(".c-play-title > a", {
                x: "20%",
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: .6
            }, "-=1")
            .fromTo(".js-play-row", {
                y: "50%",
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8
            }, "-=.5")
    }

    out({
        from,
        done
    }) {
        //this is called first

        // console.log("Play Out");


        const loader = gsap.timeline({
            defaults: {
                ease: smooth
            }
        });


        loader.set(".c-home__bg", {
                zIndex: 9,
                opacity: 1
            })
            .to(from, {
                y: "-2%",
                opacity: .2,
                duration: .9,
                onComplete: () => {
                    lscroll.scrollTo(".c-title", {
                        duration: 0,
                        disableLerp: true
                    });
                    lscroll.stop();
                }
            })
            .to(".c-home__bg", {
                y: "0",
                duration: .7
            }, "-=.8")
            .set(".c-home__bg", {
                opacity: 1,
                pointerEvents: "none"
            })
            .set(".c-play__bg", {
                y: "0",
                opacity: 0,
                pointerEvents: "none",
                onComplete: () => {
                    from.remove();
                    lscroll.update();
                    done();
                }
            });


    }
}

export default play;