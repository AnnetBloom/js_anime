const modal = () => {
    const modal = document.querySelector('.search-model')
    const modalBtn = document.querySelector('.icon_search')
    const modalClose = modal.querySelector('.search-close-switch') //document.querySelector('.search-close-switch')

    //console.log(modalClose);

    modalBtn.addEventListener('click', () => {
        //console.log('click')
        modal.style.display = 'block'
    })

    modalClose.addEventListener('click', () => {
        //console.log('click')
        modal.style.display = 'none'
    })
}