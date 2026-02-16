import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home.jsx'
import PageNotFound from './Component/PageNotFound.jsx'
import { useDarkTheme } from './Component/ThemeContext.jsx'


function App() {
  const {toggleThemeHandler} = useDarkTheme();
  return <>
    <button onClick={toggleThemeHandler}>Toggle Theme</button>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
  
  </>

}

export default App
