export type FetchDataType = {
  category: string
  date: Date
  dateTime: string
  img: string
  link: string
  objectId: number
  service: string
  summary: string
  title: string
  gridAdsBackground: string,
  gridAdsRow: string,
  order: number,
}

export const fetchData = async(urlApi: string, methods: string, bodyData: any) => {
  try 
  {
    const response = await fetch(urlApi, {
        method: methods,
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyData ? JSON.stringify(bodyData) : null,
    })

    return await response.json();
  } 
  catch (err) 
  {
      if (!window.navigator.onLine) {
          console.log("Sprawdz połączenie z internetem!");
      }

      console.log(err);     
  }
}