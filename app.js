const express = require("express");
const axios = require("axios");

const app = express();

async function fetchweather() {
   
   const query ="london";
   const apikey = "72226912565ed619f1d5661ec8b087a6"; 
   const units = "metric";
   const url = `https://api.openweathermap.org/data/2.5/weather? q=${query} &appid=${apikey}&units=${units}`
  
   try {
      const res = await axios.get( url );
       const contentType = res.headers['content-type'];
       console.log('Content-Type:', contentType);
       
     //   If the Content-Type is set to application/json, Axios will parse the response body as JSON, and you can directly access it as a JavaScript object.
     
       const weatherdata = res.data;
     
       return weatherdata;
     
       // console.log(res.statusCode)
     
       // setMovieResponse(res.data.results)
   } catch (error) {
      console.error('Error:', error);
   
      throw error;
   }
 
}

app.get("/", async function (req, res) {


   res.sendFile(__dirname + "/index.html");



//   const response = await fetchweather();
//      console.log(response);
//   const temp = response.main.temp;
//   const weatherdescription = response.weather[0].description;
//   const icon = response.weather[0].icon;
//   const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//      console.log(temp);
//   res.write(`<p> The weather is currently ${weatherdescription}</p>`);
//   res.write(`<h1> the weather in london is  ${temp}  degree calcius. </h1>`);
//   res.write(`<img src="${imageUrl}">`);
//   res.send();
});

app.post("/",function(req,res) {
   console.log("post Request recieved");
   
})

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
