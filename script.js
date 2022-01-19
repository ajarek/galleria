const image = document.querySelectorAll('.container div');
const container = document.querySelector('.container');
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const containerShow = document.querySelector('.container-show')
const close = document.querySelector('.close')

async function showImage(e) {
    container.style.display = 'none'
    close.textContent = 'stop shlideshow '
    close.classList.add('active')
    const className = e.target.className
    containerShow.style.height = '90vh'
    containerShow.style.borderTop = '1px solid #ccc'
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        data.forEach(el => {
            if (el.index === className) {
                const div = document.createElement('div')
                div.className = 'div-show';
                div.style.backgroundImage = `url(${el.img})`
                left.append(div);
                left.style.height = '100%';
                div.innerHTML = `<div class="text-show"><p class="title">${el.title}</p><p class="name">${el.name}</p></div><div class="div1-show"><img src="${el.artist}"></div>`
                const div2 = document.createElement('div')
                div2.className = 'div2-show';
                div2.innerHTML = `<div class="painted">${el.painted}</div><div class="desc">${el.desc}</div>`
                right.append(div2);
            }
        })
    } catch (err) {
        console.log(err)
    }
}

function closeImage() {
    container.style.display = 'grid'
    containerShow.style.height = '0'
    containerShow.style.borderTop = 'none'
    left.innerHTML = ''
    right.innerHTML = ''
    close.textContent = ' start shlideshow'
    close.classList.remove('active')
}


image.forEach(function (img) {
    img.addEventListener('click', showImage);
})
close.addEventListener('click', closeImage)