//coponents
import Header from '../Header/Header';
import Converter from '../Converter/Converter';
import CvBlock from 'components/CvBlock/CvBlock';
//libs
import { useEffect, useState } from 'react';
import useCurrencies from 'hooks/useCurrencies';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';
//styles
import { Container } from "./styles"
import { CurrenciesType } from 'types';
//images
import smile from "images/smile.svg"

const animationVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  },
};

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        viewport={{ once: true, amount: 0.1 }}
        className="spotifyWrapper">
        <iframe title='2y3y2u' style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/29FNeqjOV2kPWGS55qhtGB?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </motion.div>
      <CvBlock />
      <Toaster />
    </Container>
  );
}

export default App;
