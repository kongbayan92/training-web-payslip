import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./pages/PageLayout"
import PageSignin from "./pages/PageSignin"
import PageUsers from "./pages/PageUsers"


const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<PageSignin />} />
          <Route path="/users" element={<PageUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
