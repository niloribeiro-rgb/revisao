 const videos = document.querySelector(`.videosContainer`)

function comentario() {
     const popUp = document.querySelector(`.popUpContainer`)
    // alert("calma! esta incompleto")
    popUp.classList.toggle('activePopUp')
}

adicionarVideo()

function adicionarVideo() {
   

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


    for (let i = 0; i < videoCode.length; i++) {
        const cardVideo = document.createElement(`div`)
        cardVideo.className = "cardVideo"
        // tamanho do video 16/9

        cardVideo.innerHTML += `<iframe width="480" height="270" src="https://www.youtube.com/embed/${videoCode[i]}?autoplay=1" allowfullscreen allow="autoplay" ></iframe>`
        videos.appendChild(cardVideo.cloneNode(true))
        console.log("ola")
    }
}
