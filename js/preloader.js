const preloader = () => {
    // console.log(document.querySelector('.preloader'))

    const preloader = document.querySelector('.preloader')

    console.log(preloader)

    preloader.classList.add('active')

    setTimeout(() => {
        preloader.classList.remove('active')
    }, 500)
}

preloader()