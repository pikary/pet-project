import {FC} from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserProfile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {UserProvider} from "./context/userContext.tsx";
import {WithHoc} from "./pages/UserList/hoc.tsx";
import UserList from "./pages/UserList/UserList.tsx";
import MessengerBox from "./pages/UserList/MessengerBox.tsx";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={'/auth/*'} element={<AuthContainer/>}/>
                    <Route path={'*'} element={<DefaultContainer/>}></Route>
                    <Route path={'/task'} element={<TaskContainer/>}></Route>
                </Routes>
            </Router>
        </>
    )
}



const UserListWithData = WithHoc(UserList);
const MsgBoxWothData = WithHoc(MessengerBox)
const TaskContainer:FC = () =>{
    return(
        <UserProvider>
            <UserListWithData name={'userlistWithData'}></UserListWithData>
            <MsgBoxWothData name={'messenger'}></MsgBoxWothData>
        </UserProvider>
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
