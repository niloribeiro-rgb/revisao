const videos = document.querySelector(`.videosContainer`)

function openClosePopUp() {
    const popUp = document.querySelector(`.popUpContainer`)
    // alert("calma! esta incompleto")
    popUp.classList.toggle('activePopUp')
}

adicionarVideo()

function adicionarVideo() {
    videos.innerHTML = ""

    let videosLinks = ["https://youtu.be/GwaRztMaoY0?si=C3WEYIpv2hOUM_7P",
        "https://youtu.be/gcgKUcJKxIs?si=XyT3XyiTC4I76PNA",
        "https://youtu.be/LFTE4W--Htk?si=o6jD20hAsNkFTuyy"]

    // let videoCode = ["GwaRztMaoY0?"]
    let videoCode = []

    // console.log(videosLinks[0].length)
    // console.log(videosLinks[0][17])
    // console.log(videosLinks[0][28])

    for (let c = 0; c < videosLinks.length; c++) {
        let gettingCoode = ""
        for (let i = 0; i < 30; i++) {
            //  if(videosLinks[0] >= 17 && videosLinks[0] <=28){ errei
            if (i >= 17 && i <= 28) {
                gettingCoode += `${videosLinks[c][i]}`
            }
        }
        console.log(gettingCoode)
        videoCode.push(gettingCoode)
        console.log(c)
        console.log(videoCode[c])

    }
    // alert(videoCode)
    // alert(gettingCoode)

    // tamanho da tela
    // tamanho do video 16/9
    // regra de tres telaWidth / x = 16 / 9

    let telaWidth = Number(window.innerWidth)
    let videoWidth = 0
    let videoHeight = 0
    // vw ou %
    let vw = 0
    // relacionado com css
    if (telaWidth <= 480) {
        console.log(telaWidth)
        vw = 90
        videoWidth = Math.round(telaWidth * vw / 100)
        videoHeight = Math.round((videoWidth * 9) / 16)

    }
    if (telaWidth >= 481 & telaWidth <= 1024) {
        console.log(telaWidth)
        let px = 230
        // regra de tres telaWidth / px = 100 / porcento
        vw = Math.round((px * 100) / telaWidth)
        console.log(`vw ${vw}`)
        videoWidth = Math.round(telaWidth * vw / 100)
        videoHeight = Math.round((videoWidth * 9) / 16)
    }
    if (telaWidth >= 1025) {
        console.log(telaWidth)
        vw = 29
        videoWidth = Math.round(telaWidth * vw / 100)
        videoHeight = Math.round((videoWidth * 9) / 16)
    }
    console.log(videoWidth)
    console.log(videoHeight)

    for (let i = 0; i < videoCode.length; i++) {
        const cardVideo = document.createElement(`div`)
        cardVideo.className = "cardVideo"

        cardVideo.innerHTML += `<iframe width="${videoWidth}" height="${videoHeight}" src="https://www.youtube.com/embed/${videoCode[i]}?autoplay=1" allowfullscreen allow="autoplay" ></iframe>`
        cardVideo.innerHTML += "<h2>Um traller</h2>"
        videos.appendChild(cardVideo.cloneNode(true))
    }
}