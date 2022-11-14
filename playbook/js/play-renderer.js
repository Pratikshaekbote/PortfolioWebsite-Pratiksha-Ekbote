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

class play_js extends Highway.Renderer {

    onEnter() {

        // window.onload = ()=>{
        //     let loader = document.querySelector(".c-loader"),
        //         loader_title = document.querySelector(".js-loader-title");

        //     loader_title.classList.remove("is-loading");
        //     loader_title.classList.add("is-loaded");

        //     window.setTimeout(()=>{
        //         loader.classList.remove("is-loading");
        //         loader.classList.add("is-loaded");
        //     }, 800)

        //     lscroll.update();

        //     gsap.registerPlugin(ScrollTrigger);

        //     setTimeout(()=>{
        //         ScrollTrigger.refresh();
        //         // console.log("called");
        //     }, 2000);
        // }

        if (window.matchMedia("(max-width: 900px)").matches) {
            window.scrollTo(0, 0);
            // console.log("mathc")
        }

        document.querySelectorAll(".js-year").forEach((elm) => {
            elm.innerHTML = "©" + new Date().getFullYear()
        });


        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            ScrollTrigger.refresh();
            // console.log("called");
        }, 2000);


        //for enabling the contact form

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

        //footer stuff


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


        document.querySelector(".c-footer-credit").addEventListener("click", () => {
            document.querySelector(".c-credits").classList.toggle("--visible");
        })

    }

    // onLeave(){
    // //   scroll.destroy();
    // }
}


export default play_js;