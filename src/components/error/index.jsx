import styled from "styled-components"

export const ErrorParagraph = styled.p`
    color: #f31;
    margin: 1rem 0;
`

export function Error({ error }) {
    if (!error) return null

    return (
        <ErrorParagraph>
            {error}
        </ErrorParagraph>
    )
}