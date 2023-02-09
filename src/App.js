import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <SwaggerUI url="https://openai.adaptable.app/api" />
      <Footer />
    </div>
  );
}

export default App;
