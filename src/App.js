import './App.css';
import Boton from './componentes/Boton';
import pngLogo from './imagenes/png programacion web.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const[numClicks,setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks+1);
  }
  const manejarReinicio = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='logoDiv'>
        <img 
        className='logoImg'
        src={pngLogo}
        alt='logo'
         />
      </div>
      <div className='contenedorPrincipal'>
        <Contador
        className='contador'
        numClicks={numClicks} />
        <Boton
        texto="Click"
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={manejarReinicio} />
      </div>
    </div>
  );
}

export default App;
