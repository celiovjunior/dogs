import styled from "styled-components"

const Wrapper = styled.div`
    margin-bottom: 1rem;
`
const Input = styled.input`
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: 0.1s;

    &:focus,
    &:hover {
        outline: none;
        border-color: #fb1;
        background: white;
        box-shadow: 0 0 0 3px #fea;
    }
`

const Label = styled.label`
   display: block;
   font-size: 1rem;
   line-height: 1;
   padding-bottom: 0.5rem;
`

const ErrorMsg = styled.p`
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
`

// eslint-disable-next-line react/prop-types
export function FormInput({ label, type, name, value, onChange, error, onBlur }) {
    return(
        <Wrapper>
            <Label htmlFor={name}>{label}</Label>
            <Input
             id={name} 
             name={name} 
             type={type} 
             value={value} 
             onChange={onChange}
             onBlur={onBlur}
            />
            {error && <ErrorMsg>{error}</ErrorMsg>}
        </Wrapper>
    )
}
