//Import Components
import AppHeader from './components/AppHeader/AppHeader'
import AppMain from './components/AppMain/AppMain'

//Import Data
import languages from './data/languages'

function App() {


  return (
    <>
      <AppHeader/>
      <AppMain items = {languages}/>
    </>
  )
}

export default App
