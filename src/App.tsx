import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from "./pages/Profile";

function App() {

  return (
    <>
        <Router>
            <Navbar></Navbar>
            <main>
                <Routes>
                    <Route path='/'  element={<></>}></Route>
                    <Route path='/profile/:id'  element={<UserProfile/>}></Route>
                </Routes>
            </main>
        </Router>


    </>
  )
}

export default App
