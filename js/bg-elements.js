const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg')

    //console.log(elements); 

    elements.forEach((elem) => {
        //console.log(elem);
        elem.style.backgroundImage = `url(${elem.dataset.setbg})` 
    })

   /* for (let i = 0; i < elements.length; i++) {
        //console.dir(elements[i]);
        const src = elements[i].dataset.setbg

        elements[i].style.backgroundImage = `url(${src})` // 'url(' + src + ')'

        //console.log(src);
    }*/

        //const array = [1, 2, 3, 4, 5];
        //console.log(array);

        //const newArray = array.filter((item) => item <= 3)        

        /*const newArray = array.filter((item) => {
            //return true
            //return false

            return item <= 3
        })*/

        //console.log(newArray);
}

bgElements()