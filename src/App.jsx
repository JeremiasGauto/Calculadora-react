import './index.css'
import Boton from './components/Boton'

function App() {


  return (
    <>
      <div>
        <div className="cuerpo-calculadora">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>X</Boton>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
          <Boton>AC</Boton>
          <Boton>0</Boton>
          <Boton></Boton>
          <Boton>=</Boton>
        </div>
      </div>
    </>
  );
}

export default App
