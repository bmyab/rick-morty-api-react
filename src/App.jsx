import './App.css'
import Characters from './components/Characters'
import Header from './components/Header'

function App() {
  const datos = {
    title : 'rick and morty api', 
    contenido : 'the project ilustrate the characters of the famous rick and morty series'
  }
  return (
    <div className="App">
      <Header 
        title = {datos.title}
        content = {datos.contenido}
        />

      <Characters />
    </div>
  )
}

export default App
