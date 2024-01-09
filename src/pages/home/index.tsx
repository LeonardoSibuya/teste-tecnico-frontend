import { useState } from 'react'

import * as S from './styles'

import { Container } from '../../styles'

import SubjectItems, { PropsSubjects } from '../../components/SubjectsItems'

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

interface ModalState extends PropsSubjects {
    isVisible: boolean
    bimestre: string
}

const Home = () => {

    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        date: '',
        id: 1,
        rating: 0,
        subjectName: 'Artes',
        bimestre: ''
    })

    const closeModal = () => {
        setModal({
            isVisible: false,
            date: '',
            id: 1,
            rating: 0,
            subjectName: 'Artes',
            bimestre: ''
        })
    }

    return (
        <S.Section>
            <Container>
                <S.ListBimestres>
                    <li>
                        <S.HeaderSection>
                            <h2>
                                bimestre 1
                            </h2>
                            <button
                                onClick={() =>
                                    setModal({
                                        isVisible: true,
                                        date: modal.date,
                                        id: modal.id,
                                        rating: modal.rating,
                                        subjectName: modal.subjectName,
                                        bimestre: modal.bimestre = '1'
                                    })
                                }>
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
                            <button
                                onClick={() =>
                                    setModal({
                                        isVisible: true,
                                        date: modal.date,
                                        id: modal.id,
                                        rating: modal.rating,
                                        subjectName: modal.subjectName,
                                        bimestre: modal.bimestre = '2'
                                    })
                                }>
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
                            <button
                                onClick={() =>
                                    setModal({
                                        isVisible: true,
                                        date: modal.date,
                                        id: modal.id,
                                        rating: modal.rating,
                                        subjectName: modal.subjectName,
                                        bimestre: modal.bimestre = '3'
                                    })
                                }>
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
                            <button
                                onClick={() =>
                                    setModal({
                                        isVisible: true,
                                        date: modal.date,
                                        id: modal.id,
                                        rating: modal.rating,
                                        subjectName: modal.subjectName,
                                        bimestre: modal.bimestre = '4'
                                    })
                                }>
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

            <S.Modal className={modal.isVisible ? 'visible' : ''}>
                <S.ModalContent>
                    <S.InfoContent>
                        <S.HeaderModal>
                            <h3>Bimestre {modal.bimestre}</h3>
                            <span onClick={closeModal}>X</span>
                        </S.HeaderModal>
                        <p>Disciplina</p>
                        <ul>
                            <li className='biologia'>
                                Biologia
                            </li>
                            <li className='artes'>
                                Artes
                            </li>
                            <li className='geografia'>
                                Geografia
                            </li>
                            <li className='sociologia'>
                                Sociologia
                            </li>
                        </ul>
                        <S.DivRating>
                            <p>Nota</p>
                            <input type="number" />
                        </S.DivRating>
                    </S.InfoContent>

                    <button>Confirmar</button>
                </S.ModalContent>
                <div className="overlay" onClick={closeModal}></div>
            </S.Modal>
        </S.Section>
    )
}

export default Home