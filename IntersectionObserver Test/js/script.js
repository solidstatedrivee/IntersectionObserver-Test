let ioElements = document.querySelectorAll(".io-element"); //all picture/description elements that will be observed

let ioConfig = { //configuration for second argument in IntersectionObserver object
    root: null, //sets the viewport as the viewport. you could set any element you want as the viewport
    rootmargin: "0px", //works just like CSS margins. anything outside of them won't be observed
    threshold: .5 //if more than 50% of element is visible, fire the callback. threshold takes a value between 0 and 1;
}

let io = new IntersectionObserver(function(entries, io) { //InterSectionObserver object. takes two params; the element being observed and the configuration
    entries.forEach(entry => { //looks at each individual picture/description element or whatever you want to observe
        if (!entry.isIntersecting) { //if the element isnt visible exit the function. only returns visible elements
            return;
        }
        entry.target.style.opacity = "100%"; //once the element is visible, set the opacity to 100%
        io.unobserve(entry.target); //when observation is complete, kill the observer for that element. this is important for things like lazy-loading
    })
}, ioConfig); //second param; configuration of the observer in the form of an object

ioElements.forEach(element => { //must use a forEach loop to look at multiple items of the same class. IntersectionObserver will not work on NodeLists
    io.observe(element); //run the constructor on each picture/description element
})