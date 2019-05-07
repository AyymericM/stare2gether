import styled from 'styled-components'
import { colors, sizes } from './constants'

const homebackground = styled.div`
    margin-top: 50px;
    position: relative;
    width: ${sizes.home_input};
    height: 65px;
    border-radius: 34px;
    border: 4px solid ${colors.blue};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.blue};
`

const homebutton = styled.div`
    position: absolute;
    right: -1px;
    padding: 24px 40px;
    cursor: pointer;
    background: ${colors.blue};
    border-top-right-radius: 34px;
    border-bottom-right-radius: 34px;
    color: white;
`
    
const home = styled.input`
    border: none;
    width: 100%;
    height: 95%;
    outline: none;
    border-radius: 34px;
    background: ${({ theme }) => theme.bg};
    appearance: none;
    font-size: 22px;
    padding-left: 20px;
    color: ${({ theme }) => theme.fontColor};
`

export {
    homebackground,
    homebutton,
    home
}