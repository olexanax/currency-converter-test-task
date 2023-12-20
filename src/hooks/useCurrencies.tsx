//libs
import { toast } from 'sonner';
import { useState } from 'react';
import axios from 'axios';
//types
import { CurrencyApiResponseType, CurrenciesType, CurrencyDataType, CurrenciesEnum } from 'types';



const useCurrencies = () => {
  const [data, setData] = useState<null | CurrencyDataType>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = (curr: CurrenciesType) => {
    setLoading(true)
    axios.get(`http://www.floatrates.com/daily/${curr?.toLowerCase()}.json`)
      .then((response) => {
        setData(filterData(response.data as CurrencyApiResponseType, curr.toUpperCase() as CurrenciesType));
        setLoading(false);
      })
      .catch((error) => {
        toast('Something went wrong : (', {
          position: 'top-right',
          duration: 2000,
        })
        setError(error);
        setLoading(false);
      });
  };

  const filterData = (obj: CurrencyApiResponseType, curentCurr: CurrenciesType) => {
    const res = {}
    Object.values(CurrenciesEnum).forEach((curr) => {
      //@ts-ignore
      res[curr] = obj[curr.toLowerCase()]
    })
    return res as CurrencyDataType
  }

  return { data, loading, error, fetchData };
};

export default useCurrencies;
