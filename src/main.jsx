import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import { BrowserRouter } from "react-router-dom"
import Provider from "./context/switch.jsx"



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
)
