// const { format } = require("path")

const elList = selectElem('.list')
const namePost = selectElem('.name')
const  descraptionPost = selectElem('.short__descraption')
const delateBtn = selectElem('.delate__btn')
const updateBtN =selectElem('.update__btn')

form.addEventListener('click' ,e=> {
    e.preventDefault();
    console.log('ok');
    let value = textarea.value
    console.log(value);
})


const fetchPost = async() => {
    const response = await fetch(`http://localhost:3000/posts/${window.location.search.substring(4)}`)
    const data = await response.json()
    renderPost(data,elList)  
    console.log(data)
}
fetchPost()

function renderPost(arr,list) {
    namePost.innerHTML = arr.title
    descraptionPost.innerHTML = arr.descraption

}
delateBtn.addEventListener('click' , e => {
    // let dataId = e.target.dataset.id
    fetch(`http://127.0.0.1:3000/posts/${window.location.search.substring(4)}`,{
        method: 'DELETE'
    }).then(window.open('../admistration/admistration.html'))
})

updateBtN.addEventListener('click' , e => {
    let newvalue = prompt('nom kirirting')
    fetch(`http://127.0.0.1:3000/posts/${window.location.search.substring(4)}`,{
        method: 'PUT' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: new Date().getTime(),
                title: newvalue,
                descraption: newvalue,
                
            })})
    })
// })