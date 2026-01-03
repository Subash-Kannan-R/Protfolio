import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Contact />
      <ChatWidget />
    </div>
  )
}

export default App
