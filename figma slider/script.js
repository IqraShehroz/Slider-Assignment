const slides = document.querySelectorAll(".slide")
var counter = 0;
// console.log(slides)

slides.forEach(
    (slide,index) => {
slide.style.top = `${index * 100}%`
    }
)

const goNext = () => {
    counter++
    slideimage()
}

const goPrev = () => {
    counter--
    slideimage()
}

const slideimage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(-${counter * 100}%)`
        }
    )
}