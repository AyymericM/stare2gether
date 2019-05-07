import styled from 'styled-components'
import { sizes } from './constants'

const home = styled.div`
    max-width: ${sizes.home_text};
    margin: 0 auto;
    font-size: 22px;
    color: ${({ theme }) => theme.fontColor};
    text-align: center;
`

export {
    home
}