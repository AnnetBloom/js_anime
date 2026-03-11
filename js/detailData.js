const detailData = () => {

    const preloader = document.querySelector('.preloader')

    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown')

        //dropdownBlock.innerHTML = ''

        ganres.forEach(ganre => {
            dropdownBlock.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }

    const renderAnimeDetails = (array, itemId) => {
        const animeObj = array.find(item => item.id == itemId)
        const imageBlock = document.querySelector('.anime__details__pic')
        const viewBlock = imageBlock.querySelector('.view')
        const titleBlock = document.querySelector('.anime__details__title h3')
        const subTitleBlock = document.querySelector('.anime__details__title span')
        const descriptionBlock = document.querySelector('.anime__details__title p')
        const widgetList = document.querySelectorAll('.anime__details__widget ul li')
        const breadcrumb = document.querySelector('.breadcrumb__links span')
        //console.log(animeObj);
        
        // console.log(array);
        // console.log(itemId);

        if (animeObj) {
            //console.log(animeObj);
            
            imageBlock.dataset.setbg = animeObj.image
            //viewsBlock.innerHTML = ''
            viewsBlock.insertAdjacementHTML('beforeend', `
                <i class="fa fa-eye"></i> ${animeObj.views}</div>    
            `)

            titleBlock.textConent = animeObj.title
            subTitleBlock.textContent = animeObj['original-title']
            descriptionBlock.textContent = animeObj.description

            widgetList[0].insertAdjacentHTML('beforeend', `
                <span>Date aired:</span> ${animeObj.date}
            `)

            widgetList[1].insertAdjacentHTML('beforeend', `
                <span>Raiting: </span> ${animeObj.rating}
            `)

            widgetList[2].insertAdjacentHTML('beforeend', `
                <span>Genre: </span> ${animeObj.tags.join(", ")}
            `)

            breadcrumb.textContent = animeObj.ganre

            document.querySelectorAll('.set-bg').forEach((elem) => {
                elem.style.backgroundImage = `url(${elem.dataset.setbg})`
            })

            setTimeout(() => {
                preloader.classList.remove('active')
            }, 500)


        } else {
            console.log('Аниме отсутствует');
        }
        
        
    }

   
    
    fetch('https://test-b263e-default-rtdb.firebaseio.com/anime.json')
        //fetch('./db.json')
        .then((response) => response.json())
        /*.then((response) => {
            return response.json()
        })*/
        .then((data) => {

            const ganres = new Set()
            const ganreParams = new URLSearchParams(window.location.search).get('itemId')


            //console.log(window.location.search);

            data.forEach((item) => {
                ganres.add(item.ganre)
            })

            
            if (ganreParams) {
                renderAnimeDetails(data, [ganreParams])
            } else {
                console.log('Аниме отсутствует');
                
                //renderAnimeDetails(data, ganres)
            }
            
            renderGanreList(ganres)

            //console.log(ganres)

            //console.log(data.sort((a, b) => b.views - a.views).slice(0, 5));
            // console.log(data.anime);
        })
}

detailData()