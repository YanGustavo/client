import React from 'react';
import axios from "axios";
const useAnnouncement = () => {
  const [regiao, setRegiao] = React.useState(null);//"Ofertas exclusivas para todo o brasil."
const sendGetRequest = React.useCallback(async () => {
  try {
      const resp = await axios.get('https://myip.wtf/json', {
      headers: {
        'Content-Type': 'application/json',
      },
      transformResponse: (data) => JSON.parse(data),
    });
      setRegiao(resp.data.YourFuckingLocation.replace(", Brazil", ""));
  } catch (err) {
      setRegiao(null);
      console.error(err);
  }
},[]);

React.useEffect(() => {
  sendGetRequest();
}, [sendGetRequest]);  

return{
  regiao,
};
}
export default useAnnouncement;