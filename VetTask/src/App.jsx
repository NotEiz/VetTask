import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import { routes } from './Routes/Routes'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          {routes.map(({path , Component }) => (
            <Route key={path} path={path} element={ <Component/> } />
          ))}
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App