//coponents
import Header from '../Header/Header';
import Converter from '../Converter/Converter';
import CvBlock from 'components/CvBlock/CvBlock';
import Snowfall from 'react-snowfall'
//libs
import { useEffect, useState } from 'react';
import useCurrencies from 'hooks/useCurrencies';
import { Toaster, toast } from 'sonner';
//styles
import { Container } from "./styles"
import { CurrenciesType } from 'types';
//images
import smile from "images/smile.svg"

function App() {
  const { data, loading, error, fetchData } = useCurrencies();
  const [currentCurr, setCurrentCurr] = useState<CurrenciesType>("UAH")

  useEffect(() => {
    fetchData(currentCurr)
    // eslint-disable-next-line
  }, [currentCurr])

  useEffect(() => {
    toast('Good afternoon, dear reviewer :)', {
      position: 'top-right',
      duration: 2000,
      icon: <img alt="Good afternoon, dear reviewer :)" src={smile} />
    });
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Header {...{ data, currentCurr, loading, error }} />
      <Converter {...{ currentCurr, setCurrentCurr, data, loading, error }} />
      <CvBlock />
      <Toaster />
      <Snowfall />
    </Container>
  );
}

export default App;
