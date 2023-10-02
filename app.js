const express = require("express");
const axios = require("axios");

const app = express();

async function fetchweather() {
  const res = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=72226912565ed619f1d5661ec8b087a6&units=metric"
  );
  const weatherdata = res.data;
  return weatherdata;

  // console.log(res.statusCode)

  // setMovieResponse(res.data.results)
}

app.get("/", async function (req, res) {
  const response = await fetchweather();
  //    console.log(response);
  const temp = response.main.temp;
  const weatherdescription = response.weather[0].description;
  const icon = response.weather[0].icon;
  const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  //    console.log(temp);
  res.write(`<p> The weather is currently ${weatherdescription}</p>`);
  res.write(`<h1> the weather in london is  ${temp}  degree calcius. </h1>`);
  res.write(`<img src="${imageUrl}">`);
  res.send();
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
