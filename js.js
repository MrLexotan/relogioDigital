let hours, min, sec;

function clock() {
    const date = new Date()

    hours = date.getHours().toString().length < 2 ? '0' + date.getHours() : date.getHours()
    min = date.getMinutes().toString().length < 2 ? '0' + date.getMinutes() : date.getMinutes()
    sec = date.getSeconds().toString().length < 2 ? '0' + date.getSeconds() : date.getSeconds()

    let time = hours + ':' + min + ':' + sec

    document.querySelector('#timer').innerHTML = time
}

setInterval(clock, 1000)