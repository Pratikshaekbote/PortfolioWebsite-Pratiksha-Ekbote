import {
    lscroll
} from "./scroll";
import contact from "./contact";
import Highway from '@dogstudio/highway';
import home from "./home-transition";
import play from "./play-transition";
import {
    SplitText
} from "gsap/SplitText";
import home_js from "./home-renderer";
import play_js from "./play-renderer";
import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";



const H = new Highway.Core({
    renderers: {
        home: home_js,
        play: play_js
    },
    transitions: {
        home: home,
        play: play
    }
});


H.on('NAVIGATE_END', () => {
    //console.log("update is called");
    lscroll.start();
    lscroll.update();
    // lscroll.scrollTo(0, {duration: 0, disableLerp: true});
});


// SPLIT THE TEXT

let parent = new SplitText(".js-split", {
    type: "lines",
    linesClass: "line-parent"
});
let child = new SplitText(".js-split > .line-parent", {
    type: "lines",
    linesClass: "line-child"
});


window.onload = () => {
    let loader = document.querySelector(".c-loader"),
        loader_title = document.querySelector(".js-loader-title");

    loader_title.classList.remove("is-loading");
    loader_title.classList.add("is-loaded");

    window.setTimeout(() => {
        loader.classList.remove("is-loading");
        loader.classList.add("is-loaded");
    }, 800)

    lscroll.update();
}

contact.skip.addEventListener("click", () => {
    contact.next_query()
});
contact.back.addEventListener("click", () => {
    contact.prev_query()
});
document.querySelector(".c-close").addEventListener("click", () => {
    contact.close()
});

contact.send.addEventListener("click", function(e) {
    contact.next_query()
});

const labels = document.querySelectorAll("#js-slider > div label");
const text = document.querySelectorAll("#js-slider .s-text input");

for (let x of labels) {
    x.addEventListener("click", function() {
        contact.next_query();
    })
}

for (let y of text) {
    y.addEventListener("keydown", function(e) {
        var result = y.checkValidity();

        if ((e.key == "Enter") || (e.keyCode == 9)) {
            e.preventDefault(); //VERY IMPORTANT LINE, ENTER ON INPUT TRIGGERS CLICK EVENT ON SUBMIT BUTTON AS WELL. BEWARE
            if (result == false) {
                document.querySelector('.c-error').classList.add("--visible");
            } else {
                contact.next_query();
                document.querySelector('.c-error').classList.remove("--visible");
            }

            //  console.log(result)
        }
    })
}


//TO CLOSE THE CREDIT IN FOOTER

document.querySelector(".c-credits > div:last-child").addEventListener("click", () => {
    document.querySelector(".c-credits").classList.toggle("--visible");
})


function copytoclip() {
    navigator.clipboard.writeText("pratikshaekbote@gmail.com");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyz3mXuTC1SSl5t68_I7obpgg1AKIPc4rPE_icB5JrI8KaIaG-f/exec'
const contact_form = document.querySelector("#contact");

contact_form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(contact_form)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})


document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        // Prevent the Save dialog to open
        e.preventDefault();

        console.log("Please don't steal this website, if you wish to learn how to build somehting similar, check out this course: https://www.youtube.com/watch?v=XaEmcDMU01w&list=PLbtI3_MArDOkVji53VGRyQIPBOi1nB8rC");
    }
})

console.log("Designed and Developed by Pratiksha Ekbote. This website is copyrighted, any act of stealing or altering would result in legal action.")