
import { ListItemAvatar } from "@material-ui/core";
import React, { useEffect } from "react";
import './style/TileComponent.scss';

// type Props = {
//   weather: FetchDataType | null
// }

const adsArray = [
  { 
    gridAdsBackground: 'grid-ads-background',
    gridAdsRow: 'grid-ads-row-2',
    order: 6,
  },
  { 
    gridAdsBackground: 'grid-ads-background',
    gridAdsColumn: 'grid-ads-column-2',
    order: 17
  },
]

const TileComponent: React.FC<any> = ({data}) => {


  const renderTile = (dataToAds:any) => {
    const concatAdsToNews = [...dataToAds, ...adsArray];
    concatAdsToNews[0].gridBigNewsTop = 'grid-big-news-top';

    // console.log(concatAdsToNews)   

    return (
      concatAdsToNews?.map((item:any, index:number) => {
        console.log(item);
        return(
          <div className={`tile-container
            ${item.gridBigNewsTop ? item.gridBigNewsTop : ''}
            ${item.gridAdsBackground ? item.gridAdsBackground : ''}
            ${item.gridAdsRow ? item.gridAdsRow : ''}
            ${item.gridAdsColumn ? item.gridAdsColumn : ''}
            `}
            key={index} 
            style={{
              backgroundImage: `url(${item.img})`,
              order: item.order ? item.order : index,
            }}
          >
    
            <div className="tile" 
              style={{
              backgroundImage: `url(${item.img})`,
            }}></div>

            <div className="tile-title">
                {item.title}
              </div>

          </div>
        );
      })
    )

  }
  
  return (
    <>
      {
        data ? renderTile(data) : ''
      }
    </>
  );
}

export default TileComponent;
