const btn =document.querySelector('button')
const text = document.querySelector('.head-dom')
// const  svg = document.getElementsByTagName("svg")
const blockNone = document.querySelector(".blockNone")
const body =document.querySelector('body')


text.style.width = '650px'
text.style.height = '650px'
text.style.background = '#08f8f4'
text.style.display = 'none'


btn.style.marginLeft = '800px'


btn.style.fontSize = '40px'

    btn.style.color = '#07181c'


btn.addEventListener('click', () => {
   text.style.display = 'block'
    btn.style.display = 'none'

})


btn.addEventListener('mouseleave', () => {
    btn.style.fontSize = '40px'
     btn.style.color = '#07011a'
})


btn.addEventListener('mouseover', () => {
    btn.style.fontSize = '100px'
    btn.style.color = '#0eded3'
})

blockNone.addEventListener("click" , () => {
    text.style.display = "none"
    btn.style.display = 'block'

})


body.addEventListener('click', (event) => {
    if (event.target === body ) {
        text.style.display = 'none'
        btn.style.display = 'block'

    }
})



btn.style.position = 'relative'
btn.style.left = '500px'
btn.style.top = '500px'
text.style.position = "relative"
text.style.top = "500px"
text.style.left = "500px"
blockNone.style.position = 'relative'
blockNone.style.top = '-270px'
blockNone.style.left = '570px'

