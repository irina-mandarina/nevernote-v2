function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}

async function changeColors(el) {
    el = document.querySelector('.img-mask')
    el.style.cssText = 'background-color: #ff648baa; transition: 0.3s;'
    await sleep(500)
    el.style.cssText = ''
    await sleep(500)
    el.style.cssText = 'background-color: #646cffaa; transition: 0.3s;'
    await sleep(500)
    el.style.cssText = ''
}

async function changeColorsOut(el) {
    el = document.querySelector('.img-mask')
    el.style.cssText = 'background-color: #646cffaa; transition: 0.3s;'
    await sleep(500)
}