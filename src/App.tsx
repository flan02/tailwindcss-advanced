
import './App.css'
import Button from './componentes/Button'
import Card from './componentes/Card'
import Flexbox from './componentes/Flexbox'
import Grid from './componentes/Grid'

import ResponsiveButton from './componentes/ResponsiveButton'

function App() {

  //* El tamaño margen del container tmb tiene breakpoints preconfigurados!
  return (
    <div className='container mx-auto'>
      <h1 className="text-center text-3xl font-bold underline m-4 shadow-md">
        componentes creados con Tailwindcss
      </h1>
      <p className='bg-pink-500 text-cyan-300 text-right uppercase'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, dolorum? Ex, odit. Assumenda repellendus commodi inventore laudantium aperiam eum in nesciunt fugit earum delectus rem, odit, eveniet iusto quos ratione.</p>
      <br />
      <Button />
      <ResponsiveButton />
      <Card />
      <Grid />
      <Flexbox />

    </div>
  )
}

export default App
