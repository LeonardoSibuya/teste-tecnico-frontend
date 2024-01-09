import styled from "styled-components"
import { Colors } from "../../styles"

type Props = {
    subjectName?: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia'
    rating?: number
}

export const ListSubjects = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`

export const Content = styled.div`
    display: flex;
    align-items: start;
    gap: 2px;

    img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`

export const Subject = styled.div<Props>`
    padding: 12px 0px 24px;
    border-radius: 18px;
    background-color: 
    ${(props) => 
        (props.subjectName === 'Biologia' ? Colors.pink 
        : props.subjectName === 'Artes' ? Colors.lightBlue 
        : props.subjectName === 'Geografia' ? Colors.orange 
        : Colors.purple
    )};
    width: 120px;
`

export const HeaderSubject = styled.div`
    color: ${Colors.white};
    margin-bottom: 24px;
    padding-left: 12px;

    h3 {
        font-size: 16px;
        font-weight: normal;
    }

    span {
        font-size: 10px;
        color: ${Colors.lightGray};
        font-weight: lighter;
    }
`

export const FooterSubject = styled.div<Props>`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: 
    ${(props) => 
        (props.subjectName === 'Biologia' ? Colors.darkPink 
        : props.subjectName === 'Artes' ? Colors.darkBlue 
        : props.subjectName === 'Geografia' ? Colors.darkOrange 
        : Colors.darkPurple
    )};
    padding: 2px 0;

    img {
        margin-left: 12px;
        width: 16px;
        height: 16px;
    }

    span {
        font-size: 10px;
        color: ${(props) => (
            props.rating! <= 5.9 ? Colors.red
            : props.rating! <= 6.9 ? Colors.lightYellow
            : Colors.green
        )};
    }
`