function MudarCor(props) {
  const estiloParagrafo = {
    color: props.isHighlighted ? 'blue' : 'black',
    fontSize: '18px',
  };

  return (
    <p style={estiloParagrafo}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, asperiores?
    </p>
  );
}

export default MudarCor