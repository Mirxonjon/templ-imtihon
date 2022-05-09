const elForm = selectElem('.form')
const elList = selectElem('.template')
const elTemplate = selectElem('#template').content;
const addPost = selectElem('.add__post')
const newPostValue = selectElem('.textarea')
const newPostName = selectElem('.new-post-name')
const elActiveLinks = selectElem('.active')
const elHamburgerBtn = selectElem('.hamburger')
const newPostBtn = selectElem('.new__post-btn')
const elModal = selectElem('.modal')
const token = window.localStorage.getItem('token');
console.log(token);
if((token === 'undefined')){
    console.log('ok');
    window.location.href = '../user/blog.html'
}

elHamburgerBtn.addEventListener('click', () => {
    if (elActiveLinks.style.display === 'none') {
        elActiveLinks.style.display = 'block'
    } else {
        elActiveLinks.style.display = 'none'
    }
})

newPostBtn.addEventListener ('click', () => {
    elModal.style.display = 'block'


})
// btn.addEventListener('click' , e=>{
//     console.log('ok');
// })
window.onclick = function(e) {
    if(e.target == elModal) {
      elModal.style.display = "none"
  }
 }


const fetchArrPost = async() => {
    const response = await fetch('http://localhost:3000/posts')
    const data = await response.json()
    renderPost(data,elList)  
}
fetchArrPost()

function renderPost(arr,list) {
    list.innerHTML = null
    arr?.forEach(element => {
        console.log(element);
        let cloneTemplate = elTemplate.cloneNode(true)

        let namePost = selectElem('.name',cloneTemplate)
        let dataPost = selectElem('.date',cloneTemplate)
        let descraptionPost = selectElem('.short__descraption' , cloneTemplate)
        let moreInfo = selectElem('.abaut__more' ,cloneTemplate)

        moreInfo.href = `../description__administration/admindescription.html?id=${element.id}`
        moreInfo.target = '_self'

        dataPost.innerHTML = `Time of posting: ${normalizeDate(element.id)}`
        namePost.textContent = element.title
        descraptionPost.textContent = element.description

        list.appendChild(cloneTemplate)
    });
    
}

elForm.addEventListener('submit' , e => {
    e.preventDefault();
    fetch(' http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: new Date().getTime(),
            title: newPostName.value,
            description: newPostValue.value,
            
        })})
})