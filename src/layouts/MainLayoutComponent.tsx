import React, { useState, useEffect } from "react";
import { fetchData, FetchDataType } from '../utilities/fetchData';
import TileComponent from '../components/TileComponent';
import './style/MainLayoutComponent.scss';

const MainLayoutComponent = () => {

  const [data, setData] = useState<FetchDataType | null>(null);

  useEffect(() => {

    fetchData('http://127.0.0.1:3004/news', "GET", null)
    .then((res) => {
      setData(res);
    }); 

  },[]);

  return (
      <>   
        <div className="container">
          <TileComponent data={data}/>
        </div>
      </>
  );
};

export default MainLayoutComponent;
