import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectCurrency from '../hooks/useSelectCurrency'
import { currencies } from '../data/currencies'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = ({setCurrencies}) => {

    const [crypto, setCrypto] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const callAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const res = await fetch(url);
            const result = await res.json();

            const arrCrypto = result.Data.map(crypto => {
                const obj = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return obj
            })
            setCrypto(arrCrypto)
        }
        callAPI();

    }, [])

    const [currency, SelectCurrency] = useSelectCurrency('Choose a currency', currencies)
    const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrency('Choose a cryptocurrency', crypto)

    const handleSubmit = e => {
        e.preventDefault()

        if ([currency, cryptoCurrency].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setCurrencies({
            currency,
            cryptoCurrency
        })
    }

    return (
        <>
            {error && <Error>You must select both currencies</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectCurrency />
                <SelectCryptoCurrency />
                <InputSubmit
                    type='submit'
                    value='GO!'
                />
            </form>
        </>
    )
}

export default Form
