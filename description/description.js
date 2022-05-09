const elActiveLinks = selectElem('.active')
const elHamburgerBtn = selectElem('.hamburger')

elHamburgerBtn.addEventListener('click', () => {
    if (elActiveLinks.style.display === 'none') {
        elActiveLinks.style.display = 'block'
    } else {
        elActiveLinks.style.display = 'none'
    }
})

const fetchPost = async() => {
    const response = await fetch(`http://localhost:3000/posts/${window.location.search.substring(4)}`)
    const data = await response.json()
    renderPost(data)  
}
fetchPost()

function renderPost(arr,list) {

    
    let namePost = selectElem('.name')
    let dataPost = selectElem('.data')
    let descraptionPost = selectElem('.short__descraption' )
    let moreInfo = selectElem('.abaut__more' )

    namePost.innerHTML = arr.title
    descraptionPost.innerHTML= arr.description
    dataPost.innerHTML = `Time of posting: ${normalizeDate(element.id)}`

}