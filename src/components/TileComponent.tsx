
import { FetchDataType } from '../utilities/fetchData';
import { adsArray } from '../const/const';
import './style/TileComponent.scss';

type Props = {
  data: FetchDataType | null
}

const TileComponent: React.FC<Props> = ({data}) => {

  const renderTile = (dataToAds:any) => {
    const concatAdsToNews = [...dataToAds, ...adsArray];
    concatAdsToNews[0].gridBigNewsTop = 'grid-big-news-top';

    return (
      concatAdsToNews?.map((item:any, index:number) => {

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
            onClick={()=> window.location.href = item.link}
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
