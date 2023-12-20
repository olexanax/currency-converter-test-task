//types
import { CurrenciesType, CurrencyDataType } from 'types'
//components
import Skeleton from 'components/Skeleton/Skeleton';
//libs
import React from 'react';
//styles
import { Container } from './styles';

interface Props {
  data: CurrencyDataType | null;
  currentCurr: CurrenciesType;
  loading: boolean;
  error: null | string
}

const Header: React.FC<Props> = ({ data, currentCurr, loading, error }) => {
  const currencyContent = data && (
    <Container>
      <p className='headerTitle'>{`1 ${currentCurr} equals:`}</p>
      <div className="currency_container">
        {Object.entries(data)
          //remove currency that equals currentCurr
          .filter(([currName, currencyData]) => currName !== currentCurr)
          .map(([currency, currencyData], i, arr) => (
            <React.Fragment key={i}>
              <p className="currency_container_item">
                {`${Math.floor((currencyData?.rate || 0) * 100) / 100} ${currency}`}
              </p>
              {i !== arr.length - 1 && <span className='divider'></span>}
            </React.Fragment>
          ))}
      </div>
    </Container>
  );

  const skeleton = (loading || error || !currencyContent) && (
    <Container>
      <Skeleton style={{ height: "32px" }}> </Skeleton>
      <Skeleton style={{ height: "24px" }}> </Skeleton>
    </Container>
  );

  return (
    <>
      {skeleton || currencyContent}
    </>
  );
};


export default Header