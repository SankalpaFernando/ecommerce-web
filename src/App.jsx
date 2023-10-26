import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./pages/SignIn.page";
import ProtectedRoute from "./util/ProtectedRoute.component";

function App() {

  return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute roles={["ADMIN","USER"]}><h1>Home</h1></ProtectedRoute>} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
     </BrowserRouter>
     <ToastContainer />
      
    </>
  );
}

export default App;
