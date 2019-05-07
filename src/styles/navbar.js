import styled from 'styled-components'
import switch_light from '../assets/switch_light.svg'
import switch_dark from '../assets/switch_dark.svg'

const title = styled.div`
    font-size: 18px;
    font-weight: 600;
    & > a {
        text-decoration: none;
        color: ${({ theme }) => theme.fontColor};
    }
`

const menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const switchicon = styled.div`
    width: 60px;
    height: 18px;
    background-image: url(${({ theme }) => theme.type === 'dark' ? switch_dark : switch_light});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`

const menulink = styled.div`
    font-size: 16px;
    font-weight: 400;
    & > a {
        text-decoration: none;
        color: ${({ theme }) => theme.fontColor};
    }
`

export {
    title,
    menu,
    switchicon,
    menulink
}