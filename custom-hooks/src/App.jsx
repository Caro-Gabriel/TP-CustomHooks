import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import TheorySection from './theory/TheorySection'
import ExerciseSection from './exercises/ExerciseSection'
import ToggleDemo from './components/ToggleDemo'
import LocalStorageDemo from './components/LocalStorageDemo' // Importa el demo de useLocalStorage
import useNews from './hooks/useNews'
import TestNews from './components/TestNews'
import TestForm from './components/TestForm'
import useForm from './hooks/useForm'

function App() {
  const [currentSection, setCurrentSection] = useState('theory')

  const renderSection = () => {
    switch (currentSection) {
      case 'theory':
        return <TheorySection />
      case 'exercises':
        return <ExerciseSection />
      default:
        return <TheorySection />
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎣 Aprende Custom Hooks en React</h1>
        <p>Un proyecto educativo completo para dominar los custom hooks</p>
      </header>
      
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      
      <main className="app-main">
        {renderSection()}
        <ToggleDemo />
        <LocalStorageDemo /> {/* Demo de useLocalStorage */}
      </main>
      
      <footer className="app-footer">
        <p>💡 Proyecto educativo sobre Custom Hooks - React 2025</p>
      </footer>
    </div>
  )
}

export default App
