import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./pages/PageLayout"
import PageSignin from "./pages/PageSignin"


const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<PageSignin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
