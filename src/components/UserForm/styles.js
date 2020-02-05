import styled from 'styled-components'

export const Form = styled.form`
    padding: 16px 0;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
    &[disabled]{
        opacity: .5;
    }
`

export const H2 = styled.h2`
    font-size: 16px;
    font-weight: 500;
    padding: 3px 5px;
    letter-spacing: 2px;
`

export const Error = styled.span`
    fonst-size: 14px;
    color: red;
`
