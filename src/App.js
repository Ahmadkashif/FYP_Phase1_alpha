import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@progress/kendo-theme-default/dist/all.css';
import ScreenSpinner from './ComponentsStatic/Spinners/ScreenSpinner'
import AuthScreen from './Components/AuthScreens/AuthScreens'
import {BrowserRouter} from 'react-router-dom'
import "react-datetime/css/react-datetime.css";


function App() {
  return (
    <div className="App w-100 h-100">
      
        <AuthScreen/>
      
    </div>
  );
}

export default App;
