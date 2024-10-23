function Imagens(){
    const imagens = [
        "https://i.imgur.com/bEudHmn.gif",
        "",
        "https://i.imgur.com/4uUThe6.gif"
    ]

    
    for(let x in imagens){
        if(imagens[x] === ""){
            imagens.splice(x, 1)
        }
    }

    return(
        imagens.map(imagens =>
            <img src={imagens} alt="gif"/>
        )
    )
}

export default Imagens