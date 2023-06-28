import { useState } from 'react';

import SearchManufacturer from './SearchManufacturer';

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}
