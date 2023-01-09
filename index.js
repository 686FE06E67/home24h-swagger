'use strict';
let path = require('path');
const cors = require("cors");
const express = require("express");

let oas3Tools = require('oas3-tools');
let serverPort = 8080;

// swaggerRouter configuration
let options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

let expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
let app = express();
app.use(cors());
app.use(express.json());

// Root req
app.get("/", (_req, res) => {
    res.send(`<div>
        <h1>Hello visitors, today is: ${new Date().toLocaleString()}</h1>

        <button className="btn-access" onclick="clickBtn()"> Click here to access swagger</button>
        <script>
        function clickBtn(e) {
            window.location.assign("/docs");
        }
</script>
    </div>`);
})
app.use(expressAppConfig.getApp());

// Initialize the Swagger middleware
app.listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

