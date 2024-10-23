function ImagensGa(props) {
    return (
      <>
        {props.imagens.map((imagen, index) => (
          <img
            key={index}
            src={imagen.url}
            alt={imagen.altText}
          />
        ))}
      </>
    )
  }
  
  export default ImagensGa;