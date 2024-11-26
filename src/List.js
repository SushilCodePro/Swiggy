function List({ onCityClick }) {
    const data = [
      { city: "Delhi", 
        coordinates: { lat: 28.7041, lng: 77.1025 } 
      },
      { city: "Bangalore", 
        coordinates: { lat: 12.9716, lng: 77.5946 } 
      },
      { city: "Mumbai", 
        coordinates: { lat: 19.076, lng: 72.8777 } 
      },
      { city: "Noida", 
        coordinates: { lat: 28.5355, lng: 77.391 } 
      },
      { city: "Gurugram", 
        coordinates: { lat: 28.4595, lng: 77.0266 } 
      },
    ];
  
    return (
      <div>
        {data.map((item) => (
          <p
            key={item.city}
            onClick={() => onCityClick(item.coordinates)} 
            className="bg-blue-200 rounded m-2 cursor-pointer p-2 hover:bg-blue-300"
          >
            {item.city}
          </p>
        ))}
      </div>
    );
  }
  
  export default List;
  