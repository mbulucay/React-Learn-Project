import React from "react";
import ReactDOM from 'react-dom/client'
import UseStateTutorial from "./hooks/useState_tutorial";

// const App = () => {
//     return (
//         <div>
//             <useState_tutorial />
//         </div>
//     );
// }

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <UseStateTutorial />
    </>
)