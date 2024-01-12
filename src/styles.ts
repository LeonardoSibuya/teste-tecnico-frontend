import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
    lightBlue: '#05a2c2',
    lightGray: '#ecedee',
    lightYellow: '#ffff99',

    purple: '#9b19c2',
    pink: '#cc4090',
    orange: '#c26719',
    red: '#ff5964',
    green: '#05ff00',
    yellow: '#e9ff1a',
    gray: '#2d2d2d',
    white: '#fff',
    black: '#0f0f0f',

    darkBlue: '#0c3b45',
    darkPurple: '#391245',
    darkOrange: '#452912',
    darkPink: '#481e36'
}

export const breakpoints = {
    tablet: '1024px',
    celphone: '760px'
}

const EstiloGlobal = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: ${Colors.black};
    }
`
export default EstiloGlobal

export const Container = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 80%;
    }
`
