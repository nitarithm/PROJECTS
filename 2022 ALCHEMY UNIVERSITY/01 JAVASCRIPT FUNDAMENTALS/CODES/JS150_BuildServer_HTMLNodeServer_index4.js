// from index3 --> remove styling from the index3 html

const http = require('http');
// add the fs library for reading from the file system
const fs = require('fs');

const server = http.createServer((request, response) => {
  // by default we'll serve JS150_BuildServer_HTMLNodeServer_index4html.html
  let filename = "JS150_BuildServer_HTMLNodeServer_index4html.html";
  let contentType = "text/html";
  // if the client is requesting JS150_BuildServer_HTMLNodeServer_index4style.css, we'll serve it instead
  if(request.url === "/JS150_BuildServer_HTMLNodeServer_index4style.css") {
    filename = "JS150_BuildServer_HTMLNodeServer_index4style.css";
    contentType = "text/css";
  }
  fs.readFile(filename, function(err, content) {
    if(err) {
        response.statusCode = 500;
        response.end(`Could not serve ${filename}`);
    }
    else {
        response.statusCode = 200;
        response.setHeader('Content-Type', contentType);
        response.end(content);
    }
  });
});

server.listen({ port: 3000, host: 'localhost' }, () => {
  console.log('Up and Running!');
});