import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MyLogo from './assets/Print.svg'

function App() {
const greeting = import.meta.env.VITE_GREETING

  const [count, setCount] = useState(0)

  const [ipAddress, setIpAddress] = useState("")

    useEffect(() => {
        const fetchIpAddress = async () => {

            const apiUrl = import.meta.env.VITE_API_URL

            try{
                const response= await fetch(`${apiUrl}?format=json`);

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                const data =await response.json();
                setIpAddress(data.ip);
            } catch (err) {
                setIpAddress("Error fetching IP address");
                console.log(err.message);
            };
        }
        fetchIpAddress();
    }, [])


    return (
    <>
        <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
         <a href="https://in.linkedin.com/in/satvika-gada-510007301" target="_blank">
             <img src={MyLogo} className="logo" alt="My logo" />
         </a>
      </div>
      <h1>Vite + React</h1>
       <h2>{greeting}</h2>
       <h3>Your IP address is {ipAddress}</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <Footer />
    </>
  )
}

export default App
