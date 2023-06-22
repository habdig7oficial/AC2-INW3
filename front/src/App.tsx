import { BrowserRouter,Routes, Route } from "../node_modules/react-router-dom/dist/index"

import HomePage from "./code/pages/HomePage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
