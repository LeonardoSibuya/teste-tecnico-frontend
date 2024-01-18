import * as S from './styles'

import trashIcon from '../../assets/trashIcon.png'
import chart from '../../assets/chart.png'

export type PropsSubjects = {
    id?: string
    subjectName: "Biologia" | "Artes" | "Geografia" | "Sociologia"
    date: string
    rating: number
    removeSubject?: (() => Promise<void>) | undefined
}

const SubjectItems = ({ date, rating, subjectName, removeSubject }: PropsSubjects) => {
    return (
        <>
            <S.Content>
                <S.Subject subjectName={subjectName}>
                    <S.HeaderSubject>
                        <h3>
                            {subjectName}
                        </h3>
                        <span>
                            {date}
                        </span>
                    </S.HeaderSubject>

                    <S.FooterSubject subjectName={subjectName} rating={rating}>
                        <img src={chart} alt="icone de gráfico" />
                        <span>Nota: {rating}</span>
                    </S.FooterSubject>
                </S.Subject>

                <img src={trashIcon} alt="icone de lixeira" onClick={removeSubject} />
            </S.Content>
        </>
    )
}

export default SubjectItems