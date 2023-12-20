//libs
import { FC, useEffect, useState } from 'react'
//components
import InputWrapper from 'components/InputWrapper/InputWrapper'
//styles
import { Container } from './styles'
//types
import { CurrenciesType, CurrenciesEnum, CurrencyDataType } from 'types'

interface Props {
  setCurrentCurr: (arg: CurrenciesType) => void
  currentCurr: CurrenciesType
  data: CurrencyDataType | null
  loading: boolean;
  error: null | string
}

const Converter: FC<Props> = ({ setCurrentCurr, currentCurr, data, loading, error }) => {
  //state for first input & currecny select
  const [input1, setInput1] = useState(0)
  const [curr1, setSetCurr1] = useState<CurrenciesType>(currentCurr)
  //state for second input & currecny select
  const [input2, setInput2] = useState(0)
  const [curr2, setSetCurr2] = useState<CurrenciesType>(currentCurr === "USD" ? "EUR" : "USD")

  //handlers for selects
  const onCurr1Change = (curr: CurrenciesType) => {
    setCurrentCurr(curr)
    setSetCurr1(curr)
  }
  const onCurr2Change = (curr: CurrenciesType) => {
    setSetCurr2(curr)
  }

  //handler for inputs
  const onInputChange = (value: number, inputType: 'input1' | 'input2') => {
    if (curr1 === curr2) {
      setInput1(value);
      setInput2(value);
      return;
    }

    const rate = data ? (inputType === 'input1' ? data[curr2]?.rate : data[curr2]?.inverseRate) : 0;
    const convertedValue = Math.floor((value * (rate || 0)) * 100) / 100;

    setInput1(inputType === 'input1' ? value : convertedValue);
    setInput2(inputType === 'input2' ? value : convertedValue);
  };

  //if one of currencies was changed
  useEffect(() => {
    onInputChange(input1, "input1")
    // eslint-disable-next-line
  }, [curr2, currentCurr, curr1, data])

  //options for select
  const currOptions = Object.values(CurrenciesEnum).map(item => (
    <option key={item} value={item}>{item}</option>
  ))

  return (
    <Container>
      <div className="inputBlock">
        <InputWrapper skeleton={loading || !!error}>
          <input
            value={input1 || ''}
            onChange={e => onInputChange(parseFloat(e.target.value), "input1")}
            className='input'
            type='number'
            min="0"
            step={0.01} />
        </InputWrapper>
        <select
          className='select'
          onChange={(e) => onCurr1Change(e.target.value as CurrenciesType)}
          value={curr1}>
          {currOptions}
        </select>
      </div>
      <div className="inputBlock">
        <InputWrapper skeleton={loading || !!error}>
          <input
            value={input2 || ''}
            onChange={e => onInputChange(parseFloat(e.target.value), "input2")}
            className='input'
            type='number'
            min="0"
            step={0.01} />
        </InputWrapper>
        <select
          className='select'
          onChange={(e) => onCurr2Change(e.target.value as CurrenciesType)}
          value={curr2}>
          {currOptions}
        </select>
      </div>
      <a className='CV' rel="noreferrer" target='_blank' href='https://drive.google.com/file/d/1lk6r4HzwmxASrRzsbobk74RUr8_Ibim-/view'>Click me :)</a>
    </Container>
  )
}

export default Converter