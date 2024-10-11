import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserProfile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {FC} from "react";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={'/auth/*'} element={<AuthContainer/>}/>
                    <Route path={'*'} element={<DefaultContainer/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

const DefaultContainer: FC = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <Routes>
                    <Route path='/' element={<div>Home Page</div>}/>
                    <Route path='/profile/:id' element={<UserProfile/>}/>
                </Routes>
            </main>
        </>

    )
}


const AuthContainer: FC = () => {
    return (
        <main>
            <Routes>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>

            </Routes>
        </main>
    )
}

export default App
