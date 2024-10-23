const backGroundChange = document.querySelector('.bgchange')
const textColor = document.querySelector('.textColor')
const textSize = document.querySelector('.textSize')
const removeSize = document.querySelector('.removeSize')
const textShadow = document.querySelector('.textShadow')
const removeshadow = document.querySelector('.removeshadow')
const paraback = document.querySelector('.paraback')
const addImg = document.querySelector('.addimg')
const removeImg = document.querySelector('.removeImg')
let div = document.querySelector('div');

const para = document.querySelector('p');


backGroundChange.addEventListener('click', () => {
    let color = document.body.style.backgroundColor;
    if (color === 'white') {
        document.body.style.backgroundColor = 'black'
    } else {
        document.body.style.backgroundColor = 'white';
    }
});

textColor.addEventListener('click', () =>  para.style.color = 'blue' )
textSize.addEventListener('click', () =>  para.style.fontSize = '24px' )
removeSize.addEventListener('click', () =>  para.style.fontSize = '12px' )
textShadow.addEventListener('click', () =>  para.style.textShadow = '3px 2px 10px rgba(255, 0, 0,0.5)' )
removeshadow.addEventListener('click', () =>  para.style.textShadow = 'none' )
paraback.addEventListener('click', () =>  para.style.backgroundColor = 'blue')

addImg.addEventListener('click', () =>  {
    let imagem = document.createElement('img')
    imagem.src = 'pexels-mg-shawn-659091984-28452850.jpg'
    imagem.style.width = '300px'
    imagem.style.height = '300px'
    div.appendChild(imagem)
})

removeImg.addEventListener('click', () => div.removeChild(div.firstChild))

   
