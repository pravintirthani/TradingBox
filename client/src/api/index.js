import request from 'sync-request';
export function sync(url,method,data){
    let res="";
    let serverCall="http://localhost/laravel_demo/public/index.php/api/";
    data.token=localStorage.getItem("serverAccessToken");
switch (method) {
    case "GET":
        res = request('GET', serverCall+url, {
            crossDomain:true,
            headers: {
            'user-agent': 'example-user-agent',
            },
        });
        console.log(res);
        // res.getBody()

        break;
    case "POST":
        res = request('POST', serverCall+url, {
            crossDomain:true,
            json: {username: 'ForbesLindesay'},
        });
        console.log(res);
    break;
    default:
        break;
}

}

export function async(service,method,data){     
    let serverServiceUrl="http://localhost:8080"+service;
    var finalData = ""; 
switch (method) {
    case "GET":
        for (var key in data) {
            if (finalData !== "") {
                finalData += "&";
            }
            finalData += key + "=" + encodeURIComponent(data[key]);
        }
        return fetch(serverServiceUrl+"?"+finalData,{           
            headers: {    
            "Content-Type": "application/json",
        } })
        .then(function(response) {
            return response.json();
        });  
    case "POST":
        return fetch(serverServiceUrl, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.      
            headers: {            
                'Content-Type': "application/json"
            },            
            body:JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(function(response) {
            return response.json();
        });
      default:
          break;  
    }    
}