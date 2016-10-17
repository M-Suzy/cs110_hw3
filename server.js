const http = require('http');

const httpServer = http.createServer(function(req, res) {

    const reqArray = ['/hello','/hello/home','/hello/kitchen','/hello/PC','hello/bed'];
    const  resArray = ['Hi, dear!', 'Lovely home!','Heaven', 'I am really tired of my PC','Here you can find Nirvana'];
    for (let i = 0; i < reqArray.length; i+=1){
        if (req.url === reqArray[i]){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end(resArray[i]);
        }
    }  
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Nice try!");
    

});

httpServer.listen(3001);