import styled from 'styled-components'
import { sizes } from './constants'

const main = styled.div`
    max-width: ${sizes.container};
    margin: 0 auto;
`

const navbar = styled.div`
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const homeinput = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export {
    main,
    navbar,
    homeinput
}