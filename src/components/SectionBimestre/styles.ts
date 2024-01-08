import styled from "styled-components"
import { Colors } from "../../styles"

export const Section = styled.section`
    padding: 24px 0;
`

export const ListBimestres = styled.ul`
    li {
        margin-bottom: 24px;
    }
`

export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h2 {
        color: ${Colors.white};
        font-size: 14px;
        font-weight: normal;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        color: ${Colors.black};
        background-color: ${Colors.yellow};
        padding: 4px;
        border-radius: 14px;
        border: none;
        font-size: 14px;
        width: 120px;
        cursor: pointer;

        span {
            font-size: 20px;
            background-color: transparent;
        }
    }
`

export const ListSubjects = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`