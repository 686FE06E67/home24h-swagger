import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css";
import 'dotenv';
const url = process.env.URL_API;
function App() {
  console.log("URL === ", url);
  //'https://personal-5zk9yzhc.outsystemscloud.com/SwaggerProxy/rest/ServiceCatalog/230a2680-3474-47aa-a39d-56852edbec7f/swagger.json'
  return (
    <div className="App">
      <SwaggerUI url={url} />
    </div>
  );
}

export default App;
