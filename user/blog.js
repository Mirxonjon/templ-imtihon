const elList = selectElem('.template')
const elTemplate = selectElem('#template').content;
const elActiveLinks = selectElem('.active')
const elHamburgerBtn = selectElem('.hamburger')
const logInBtn = selectElem('.login') 

elHamburgerBtn.addEventListener('click', () => {
    if (elActiveLinks.style.display === 'none') {
        elActiveLinks.style.display = 'block'
    } else {
        elActiveLinks.style.display = 'none'
    }
})

logInBtn.addEventListener('click' , e=> {
    window.open('../login/index.html','_self')
})

const fetchArrPost = async() => {
    const response = await fetch(' http://localhost:3000/posts')
    const data = await response.json()
    renderPost(data,elList)  
    console.log(data)
}
fetchArrPost()

function renderPost(arr,list) {
    list.innerHTML = null
    arr?.forEach(element => {
        
        let cloneTemplate = elTemplate.cloneNode(true)

        let namePost = selectElem('.name',cloneTemplate)
        let dataPost = selectElem('.date',cloneTemplate)
        let descraptionPost = selectElem('.short__descraption' , cloneTemplate)
        let moreInfo = selectElem('.abaut__more' ,cloneTemplate)

        moreInfo.href = `../description/description.html?id=${element.id}`
        moreInfo.target = '_self'
        dataPost.innerHTML = `Time of posting: ${normalizeDate(element.id)}`
        namePost.textContent = element.title
        descraptionPost.textContent = element.description

        list.appendChild(cloneTemplate)
    });
    
}