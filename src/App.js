
import './App.css';

import Router from './router/Router';
import { AuthContextProvider } from "./context/AuthContext"
import { Toaster, resolveValue } from 'react-hot-toast';


function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="App">
          <Toaster position="top-right"/>
          <Router />
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
