// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://tokenminds.co" target="_blank">
//           <img
//             src={`https://framerusercontent.com/images/7Fjd4JhBn4XdPoBAztnI31U.webp`}
//             className="logo"
//             alt="Tokenminds logo"
//           />
//         </a>
//       </div>
//       <h1>My First Telegram Mini App</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//       <div>
//         <p>
//           Click{" "}
//           <a
//             href="https://docs.ton.org/develop/dapps/telegram-apps/app-examples"
//             target="_blank"
//           >
//             here
//           </a>{" "}
//           to learn more.
//         </p>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
		{/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
    </>
  )
}

export default App