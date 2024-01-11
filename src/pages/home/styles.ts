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

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.visible {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`
export const ModalContent = styled.div`
    width: 600px;
    position: relative;
    z-index: 1;
    background-color: ${Colors.black};
    padding: 24px 40px;

    button {
        display: block;
        width: 120px;
        padding: 12px;
        color: ${Colors.black};
        background-color: ${Colors.yellow};
        border-radius: 12px;
        border: none;
        margin-left: 80%;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;

        &.btn-disabled {
            background-color: ${Colors.gray};
            color: ${Colors.lightGray};
            cursor: not-allowed;
        }
    }
`

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
    color: ${Colors.white};

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        gap: 24px;
    }

    li {
        border-radius: 12px;
        padding: 10px 12px;
        cursor: pointer;

        &.biologia {
            background-color: ${Colors.pink};
        }

        &.artes {
            background-color: ${Colors.lightBlue};
        }

        &.geografia {
            background-color: ${Colors.orange};
        }

        &.sociologia {
            background-color: ${Colors.purple};
        }
    }
`

export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span {
        font-size: 20px;
        cursor: pointer;
    }
`
export const DivRating = styled.div`
    p {
        font-size: 12px;
    }

    input {
        margin: 12px 0;
        width: 80px;
        padding: 8px;
        background-color: transparent;
        color: ${Colors.white};
        border: 2px solid ${Colors.gray};
        outline: none;
        border-radius: 10px;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`