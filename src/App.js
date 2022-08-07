
import './App.css';

import Router from './router/Router';
import { AuthContextProvider } from "./context/AuthContext"


function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="App">
          <Router />
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
