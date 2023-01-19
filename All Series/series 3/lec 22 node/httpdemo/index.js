const http= require("http");
http.createServer(function(req,res){
    console.log(req.url);
    //res.write("<h1>This is my first server creation.</h1>");
    switch (req.url) {
        case "/":
            res.write("<h1>This is my first server creation.</h1>");
            
            break;
            case "/hobbies.html":
                res.write("<h1>My hobbies.</h1>");
                
                break;
        default:
            res.write("<h1>Page not found.</h1>");
            break;
    }
    res.end();
})
.listen(8080);