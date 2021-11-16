import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SinglePagePost from "./Pages/SinglePagePost/SinglePagePost";

const propsMessage = "Hello From";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/protostar_zadatak" element={<Navigate replace to="/posts" />} />
                <Route path="/protostar_zadatak/posts" element={<HomePage propsMessage={propsMessage} />} />
                <Route path="/protostar_zadatak/post/:id" element={<SinglePagePost propsMessage={propsMessage} />} />
            </Routes>
        </div>
    );
}

export default App;
