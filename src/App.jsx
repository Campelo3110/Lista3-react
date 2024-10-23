import Booleana from "./components/Booleana"
import FilhoProps from "./components/FilhoProps"
import Imagens from "./components/Imagens"
import ListaKey from "./components/ListaKey"
import ListaMap from "./components/listaMap"
import MudarCor from "./components/MudarCor"
import PaiPros from "./components/PaiProps"
import Tabela from "./components/Tabela"
import Card from "./components/Card"
import Fragmento from "./components/fragmento"
import ImagensGa from "./components/ImagensGa"


function App() {

  const imagesData = [
    { url: 'https://i.imgur.com/cE7kAUL.gif', altText: 'Adivinhe a palavra' },
    { url: 'https://i.imgur.com/FlahvpX.gif', altText: 'Belos loading' },
    { url: 'https://i.imgur.com/G3YWbHI.gif', altText: 'Lindos cards'}
  ]

  return (
    <>
   <ListaMap/>
    <PaiPros nome="Caio"/>
    <FilhoProps/>
    <Booleana isVisible={false}/>
    <Tabela/>
    <Imagens/>
    <MudarCor isHighlighted={true}/>
    <ListaKey/>
    <Card>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, labore!</p>
    </Card>
    <Fragmento/>
    <ImagensGa imagens={imagesData}/>
    </>
  )
}

export default App
