const express = require("express");
const https = require("https");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // CORS izinleri için

// Uçuş bilgilerini çekme route'u
app.get("/flights", (req, res) => {
  const options = {
    method: "GET",
    hostname: "api.schiphol.nl",
    path: "/public-flights/flights",
    headers: {
      resourceversion: "v4",
      app_id: "6d5fff55", 
      app_key: "c1f709fafd84372e8848b5de8f7ed1bd", 
    },
  };

  const request = https.request(options, (response) => {
    let chunks = [];

    response.on("data", (chunk) => {
      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks);
      res.json(JSON.parse(body.toString())); // API yanıtını JSON formatında döndür
    });
  });

  request.on("error", (error) => {
    console.error(error);
    res.status(500).send("An error occurred while fetching flights");
  });

  request.end();
});

// Hava yolları bilgilerini çekme route'u
app.get("/airlines", (req, res) => {
  const options = {
    method: "GET",
    hostname: "api.schiphol.nl",
    path: "/public-flights/airlines",
    headers: {
      resourceversion: "v4",
      app_id: "6d5fff55", 
      app_key: "c1f709fafd84372e8848b5de8f7ed1bd", 
    },
  };

  const request = https.request(options, (response) => {
    let chunks = [];

    response.on("data", (chunk) => {
      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks);
      res.json(JSON.parse(body.toString())); // API yanıtını JSON formatında döndür
    });
  });

  request.on("error", (error) => {
    console.error(error);
    res.status(500).send("An error occurred while fetching airlines");
  });

  request.end();
});

// Destinasyon bilgilerini çekme route'u
app.get("/destinations", (req, res) => {
  const options = {
    method: "GET",
    hostname: "api.schiphol.nl",
    path: "/public-flights/destinations",
    headers: {
      resourceversion: "v4",
      app_id: "6d5fff55", 
      app_key: "c1f709fafd84372e8848b5de8f7ed1bd", 
    },
  };

  const request = https.request(options, (response) => {
    let chunks = [];

    response.on("data", (chunk) => {
      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks);
      res.json(JSON.parse(body.toString())); // API yanıtını JSON formatında döndür
    });
  });

  request.on("error", (error) => {
    console.error(error);
    res.status(500).send("An error occurred while fetching destinations");
  });

  request.end();
});

// Uçak türlerini çekme route'u
app.get("/aircrafttypes", (req, res) => {
  const options = {
    method: "GET",
    hostname: "api.schiphol.nl",
    path: "/public-flights/aircrafttypes",
    headers: {
      resourceversion: "v4",
      app_id: "6d5fff55", 
      app_key: "c1f709fafd84372e8848b5de8f7ed1bd", 
    },
  };

  const request = https.request(options, (response) => {
    let chunks = [];

    response.on("data", (chunk) => {
      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks);
      res.json(JSON.parse(body.toString())); // API yanıtını JSON formatında döndür
    });
  });

  request.on("error", (error) => {
    console.error(error);
    res.status(500).send("An error occurred while fetching aircraft types");
  });

  request.end();
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
