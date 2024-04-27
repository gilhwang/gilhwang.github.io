import { useState } from 'react'
import Intro from './components/Intro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
