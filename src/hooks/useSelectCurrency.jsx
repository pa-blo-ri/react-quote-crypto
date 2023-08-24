import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
`

const useSelectCurrency = (label, opt) => {

    const [ state, setState ] = useState('')
  
    const SelectCurrency = () => (
        
        <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={ e => setState( e.target.value )}
        >
            <option value={''}>- Select -</option>
            
            {
                opt.map( option => (
                    <option
                        key={option.id}
                        value={option.id}
                    >
                        {option.name}
                    </option>
                ))
            }
        </Select>
        </>

    )

    return [ state, SelectCurrency ]
}

export default useSelectCurrency
