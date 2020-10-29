const list = document.querySelector('.menu-list')
list.addEventListener('click', e => {
    const { target } = e
    
    const to = target.getAttribute('data-target')
    const element = document.getElementById(to)
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = element.getBoundingClientRect()
    const offset = elemRect.top -bodyRect.top
    setTimeout(() => {
        window.scrollTo(0,offset)
    }, 0);
    // window.scrollTo(0 ,300)
})