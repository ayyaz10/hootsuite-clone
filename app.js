const sectionOne = document.querySelector('.section-1')
const sliders = document.querySelectorAll('.slide-in')

const options = {};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })
}, options)

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})