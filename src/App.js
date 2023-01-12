import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css";
function App() {
  //'https://personal-5zk9yzhc.outsystemscloud.com/SwaggerProxy/rest/ServiceCatalog/230a2680-3474-47aa-a39d-56852edbec7f/swagger.json'
  return (
    <div className="App">
      <SwaggerUI url='https://askme-j84d.onrender.com/api' />
    </div>
  );
}

export default App;
