import HomePage from "./pages/HomePage";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:3000/flights"); // Node.js sunucundan veriyi çek
        setFlights(response.data.flights); // flights dizisini state'e ata
      } catch (err) {
        console.error(
          "Error fetching flights:",
          err.response ? err.response.data : err.message
        );
        setError("Failed to fetch flights");
      } finally {
        setLoading(false); // Yükleme durumunu kapat
      }
    };

    fetchFlights(); // Veri çekme fonksiyonunu çağır
  }, []); // Boş bağımlılık dizisi, bu efektin yalnızca bir kez çalışmasını sağlar

  // Yükleniyor durumu
  if (loading) return <div>Loading...</div>;
  // Hata durumu
  if (error) return <div>{error}</div>;

  return (
    <div className=" bg-[#E6E4E7] px-6">
      <HomePage />
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>{flight.flightName} - {flight.route.destinations[0]}</li> // Uçuş verisini uygun şekilde göster
        ))}
      </ul>
    </div>
  );
}

export default App;
