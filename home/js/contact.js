const contact = {
    index: 0,
    first: true,
    slider: document.querySelector("#js-slider"),
    prog: document.querySelector("#js-prog"),
    query: document.querySelectorAll("#js-slider > div"),
    count: document.querySelector("#js-count span"),
    back: document.querySelector("#js-back"),
    count_div: document.querySelector("#js-count"),
    send: document.querySelector("#js-submit"),
    skip: document.querySelector("#js-skip"),

    show: function(elm) {
        elm.classList.add("--visible");
        elm.classList.remove("--hidden");
    },
    hide: function(elm) {
        elm.classList.remove("--visible");
        elm.classList.add("--hidden");
        setTimeout(() => {
            elm.classList.remove("--hidden");
        }, 600);
    },
    next_query: function() {
        this.slider.style.transform = `translateX(${-(this.index * 100)}%)`; //never put semicolon when only one property is being changed
        setTimeout(() => {
            // this.prog.style.transform = `scaleX(${(this.index+1)/9})`;
            this.count.innerHTML = this.index - 1;
        }, 700);
        ((this.index >= 2) && (this.index <= 7)) ? this.back.style = "": this.back.style = "visibility: hidden; opacity: 0";
        ((this.index >= 1) && (this.index <= 7)) ? this.count_div.style = "": this.count_div.style = "opacity: 0";
        (this.index == 7) ? this.send.style = "visibility: visible; opacity: 1": this.send.style = "";
        (this.index == 6) ? this.skip.style = "visibility: visible; opacity: 1": this.skip.style = "";

        if ((this.index >= 1) && (this.index <= 7)) {
            this.prog.style.transform = `scaleX(${(this.index)/7})`;
        }
        if (this.index != 0) {
            this.hide(this.query[this.index - 1]);
        } else {
            this.slider.style.transform = `translateX(${-(this.index * 100)}%)`;
        }
        setTimeout(() => {
            this.show(this.query[(this.index - 1)])
        }, 900);
        this.index++;
        // console.log(this.index)
    },
    prev_query: function() {
        if (this.index > 2) {
            this.index -= 2;
            this.hide(this.query[this.index + 1]);
            this.next_query();
        }
        // console.log(this.index)
    },
    open: function() {
        document.querySelector('#js-overlay').classList.add("--visible");
        document.querySelector('#js-contact').classList.add("--visible");
        setTimeout(() => {
            this.show(this.query[(this.index - 1)])
        }, 1200);
    },
    close: function() {
        setTimeout(() => {
            document.querySelector('#js-contact').classList.remove("--visible");
        }, 600);
        setTimeout(() => {
            document.querySelector('#js-overlay').classList.remove("--visible");
        }, 1200);
        this.hide(this.query[this.index - 1]);
    }
}

export default contact;