import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import MyButton from "./components/MyButton";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Welcome to my app</h1>
            <MyButton />
        </>
    );
}

export default App;
