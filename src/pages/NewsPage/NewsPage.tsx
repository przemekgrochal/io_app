import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './style/NewsPage.scss';

const SearchPage = () => {
  const [ cityName, setCityName ] = useState<any>('');

  return (
      <div className="search-container">
        <div className="search-info">Sprawdź pogodę dla dowolnego miasta na ziemi</div>
        <div className="search-item">
          <TextField
            label="Wpisz lokalizacje "
            value={cityName}
            onChange={(e)=> setCityName(e.target.value)}
            name="search"
            InputProps={{
              endAdornment: (
                  <SearchIcon />
               )
            }}
          />
          <Link to={`/city/${cityName}`} style={{textDecoration: 'none'}}>
            <Button variant="contained" color="primary">
              Szukaj
            </Button>
          </Link>
        </div>
      </div>
  );
};

export default SearchPage;
