import * as S from './styles'

import { Container } from '../../styles'

import SubjectItems, { PropsSubjects } from '../SubjectsItems'

const Bimestre1: PropsSubjects[] = [
    {
        id: 1,
        subjectName: 'Biologia',
        date: '08/01/2024',
        rating: 6.5,
    },
    {
        id: 2,
        subjectName: 'Artes',
        date: '08/01/2024',
        rating: 4
    },
    {
        id: 3,
        subjectName: 'Geografia',
        date: '08/01/2024',
        rating: 8
    },
    {
        id: 4,
        subjectName: 'Sociologia',
        date: '08/01/2024',
        rating: 5.9
    }
]

const Bimestre2: PropsSubjects[] = [
    {
        id: 1,
        subjectName: 'Biologia',
        date: '08/01/2024',
        rating: 6.5,
    },
    {
        id: 2,
        subjectName: 'Artes',
        date: '08/01/2024',
        rating: 4
    },
    {
        id: 3,
        subjectName: 'Geografia',
        date: '08/01/2024',
        rating: 8
    },
    {
        id: 4,
        subjectName: 'Sociologia',
        date: '08/01/2024',
        rating: 5.9
    }
]

const Bimestre3: PropsSubjects[] = [
    {
        id: 1,
        subjectName: 'Biologia',
        date: '08/01/2024',
        rating: 6.5,
    },
    {
        id: 2,
        subjectName: 'Artes',
        date: '08/01/2024',
        rating: 4
    },
    {
        id: 3,
        subjectName: 'Geografia',
        date: '08/01/2024',
        rating: 8
    },
    {
        id: 4,
        subjectName: 'Sociologia',
        date: '08/01/2024',
        rating: 5.9
    }
]

const Bimestre4: PropsSubjects[] = [
    {
        id: 1,
        subjectName: 'Biologia',
        date: '08/01/2024',
        rating: 6.5,
    },
    {
        id: 2,
        subjectName: 'Artes',
        date: '08/01/2024',
        rating: 4
    },
    {
        id: 3,
        subjectName: 'Geografia',
        date: '08/01/2024',
        rating: 8
    },
    {
        id: 4,
        subjectName: 'Sociologia',
        date: '08/01/2024',
        rating: 5.9
    }
]

const SectionBimestre = () => {
    return (
        <S.Section>
            <Container>
                <S.ListBimestres>
                    <li>
                        <S.HeaderSection>
                            <h2>
                                bimestre 1
                            </h2>
                            <button>
                                Lançar nota <span>+</span>
                            </button>
                        </S.HeaderSection>

                        <S.ListSubjects>
                            {Bimestre1.map((item) => (
                                <li key={item.id}>
                                    <SubjectItems
                                        id={item.id}
                                        subjectName={item.subjectName}
                                        date={item.date}
                                        rating={item.rating}
                                    />
                                </li>
                            ))}
                        </S.ListSubjects>
                    </li>

                    <li>
                        <S.HeaderSection>
                            <h2>
                                bimestre 2
                            </h2>
                            <button>
                                Lançar nota <span>+</span>
                            </button>
                        </S.HeaderSection>

                        <S.ListSubjects>
                            {Bimestre2.map((item) => (
                                <li key={item.id}>
                                    <SubjectItems
                                        id={item.id}
                                        subjectName={item.subjectName}
                                        date={item.date}
                                        rating={item.rating}
                                    />
                                </li>
                            ))}
                        </S.ListSubjects>
                    </li>

                    <li>
                        <S.HeaderSection>
                            <h2>
                                bimestre 3
                            </h2>
                            <button>
                                Lançar nota <span>+</span>
                            </button>
                        </S.HeaderSection>

                        <S.ListSubjects>
                            {Bimestre3.map((item) => (
                                <li key={item.id}>
                                    <SubjectItems
                                        id={item.id}
                                        subjectName={item.subjectName}
                                        date={item.date}
                                        rating={item.rating}
                                    />
                                </li>
                            ))}
                        </S.ListSubjects>
                    </li>

                    <li>
                        <S.HeaderSection>
                            <h2>
                                bimestre 4
                            </h2>
                            <button>
                                Lançar nota <span>+</span>
                            </button>
                        </S.HeaderSection>

                        <S.ListSubjects>
                            {Bimestre4.map((item) => (
                                <li key={item.id}>
                                    <SubjectItems
                                        id={item.id}
                                        subjectName={item.subjectName}
                                        date={item.date}
                                        rating={item.rating}
                                    />
                                </li>
                            ))}
                        </S.ListSubjects>
                    </li>
                </S.ListBimestres>
            </Container>
        </S.Section>
    )
}

export default SectionBimestre