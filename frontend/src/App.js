import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const [paginationNumbers, setPaginationNumber] = useState([]);

  const getDoctors = async () => {
    const request = await fetch(
      `http://localhost:5000/api/doctors?page=${page}`
    );
    const response = await request.json();

    setData(response.status ? response.data : []);

    if (response.status && response.data.length !== 0) { // 7 /2 
      const numbers = [];
      for (let i = 0; i < response.total_length / 2; i++) {
        numbers.push(i);
      }

      setPaginationNumber(numbers);
    }
  };

  useEffect(() => {
    getDoctors();
  }, [page]);

  return (
    <div className="App">
      <div>
        <h4>Doctors</h4>
        {data.length !== 0 &&
          data.map((item, index) => (
            <div className="name" key={index}>
              {item.name}
            </div>
          ))}

        <div className="pagination">
          {paginationNumbers.map((item, index) => (
            <div
              className={`pag-item ${page === item && 'item-active' }`}
              key={index}
              onClick={() => {
                setPage(item);
              }}
            >
              {item + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
