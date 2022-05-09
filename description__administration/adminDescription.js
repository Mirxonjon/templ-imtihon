const elform = selectElem('.form')
const elActiveLinks = selectElem('.active')
const elHamburgerBtn = selectElem('.hamburger')
const updateBtn = selectElem('.update__btn')
const elModal = selectElem('.modal')
const namePost = selectElem('.name')
const  descraptionPost = selectElem('.short__descraption')
const delateBtn = selectElem('.delate__btn')

const newPostValue = selectElem('.name__post')
const sentNewPost = selectElem('.sent-newpost')
const updatePost = selectElem('.update__Post')
const dataPost = selectElem('.date')


elHamburgerBtn.addEventListener('click', () => {
    if (elActiveLinks.style.display === 'none') {
        elActiveLinks.style.display = 'block'
    } else {
        elActiveLinks.style.display = 'none'
    }
})

updateBtn.addEventListener ('click', () => {
    elModal.style.display = 'block'
})
window.onclick = function(e) {
    if(e.target == elModal) {
      elModal.style.display = "none"
  }
 }
 const elList = selectElem('.list')


const fetchPost = async() => {
    const response = await fetch(`http://localhost:3000/posts/${window.location.search.substring(4)}`)
    const data = await response.json()
    renderPost(data)  
    
}
fetchPost()

function renderPost(arr,list) {
    namePost.innerHTML = arr.title
    descraptionPost.innerHTML = arr.description

    newPostValue.value = arr.title;
    updatePost.value = arr.description
    dataPost.innerHTML = `Time of posting: ${normalizeDate(element.id)}`


}

delateBtn.addEventListener('click' , e => {
   
    fetch(`http://127.0.0.1:3000/posts/${window.location.search.substring(4)}`,{
        method: 'DELETE'
    }).then(window.open('../admistration/admistration.html','blank'))
})

sentNewPost.addEventListener('click' , e => {
    e.preventDefault();
    fetch(`http://127.0.0.1:3000/posts/${window.location.search.substring(4)}`,{
        method: 'PUT' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newPostValue.value,
                description: updatePost.value,
                
            })})
    })