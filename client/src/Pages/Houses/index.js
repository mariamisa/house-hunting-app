import React, { useState } from 'react';
import Axios from 'axios';

import CardContainer from '../../Components/CardContainer';
import Search from '../../Components/SearchBar';
import Filter from '../../Components/FilterBar';

function SearchPage() {
  const [houses, setHouses] = useState([]);
  const [location, setLocation] = useState();
  const [catagories, setCatagories] = useState();
  const [rooms, setRooms] = useState(0);
  const [price, setPrice] = useState(100);
  const [error, setError] = useState();

  const handleChange = (event, val, { target: { name, value } }) => {
    switch (name) {
      case 'location':
        setLocation(value);
        break;
      case 'catagories':
        setCatagories(value);
        break;
      case 'rooms':
        setRooms(value);
        break;
      case 'price':
        setPrice(val);
        break;
      default:
    }
  };

  const handleData = async () => {
    try {
      const {
        data: { data },
      } = await Axios.get(`api/v1/houses/${location}`);

      setHouses(data);
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div>
      <Search onClick={handleData} />
      {console.log(price, 1)}
      <Filter onChange={handleChange} />
      <CardContainer houses={houses} />
    </div>
  );
}

export default SearchPage;
