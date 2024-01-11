import { useState } from 'react'

import * as S from './styles'

import { Container } from '../../styles'

import SubjectItems, { PropsSubjects } from '../../components/SubjectsItems'

interface ModalState extends PropsSubjects {
    isVisible: boolean
    bimestre: string,
    selectedSubject: string
}

const Home = () => {

    const fullDate = () => {
        const date = new Date()

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()


        if (day < 10 && month < 9) {
            return `0${day}/0${month}/${year}`
        } else if (month < 9) {
            return `${day}/0${month}/${year}`
        } else if (day < 10) {
            return `0${day}/${month}/${year}`
        }

        return `${day}/${month}/${year}`
    }

    const [bimestre1, setBimestre1] = useState<PropsSubjects[]>([
        {
            id: 1,
            subjectName: 'Biologia',
            date: '10/01/2024',
            rating: 6,
        },
        {
            id: 2,
            subjectName: 'Artes',
            date: '10/01/2024',
            rating: 4
        },
        {
            id: 3,
            subjectName: 'Geografia',
            date: '10/01/2024',
            rating: 8
        },
        {
            id: 4,
            subjectName: 'Sociologia',
            date: '10/01/2024',
            rating: 5.9
        }
    ]);

    const [bimestre2, setBimestre2] = useState<PropsSubjects[]>([
        {
            id: 5,
            subjectName: 'Biologia',
            date: '10/01/2024',
            rating: 6,
        },
        {
            id: 6,
            subjectName: 'Artes',
            date: '10/01/2024',
            rating: 4
        },
        {
            id: 7,
            subjectName: 'Geografia',
            date: '10/01/2024',
            rating: 8
        },
        {
            id: 8,
            subjectName: 'Sociologia',
            date: '10/01/2024',
            rating: 5.9
        }
    ]);

    const [bimestre3, setBimestre3] = useState<PropsSubjects[]>([
        {
            id: 9,
            subjectName: 'Biologia',
            date: '10/01/2024',
            rating: 6,
        },
        {
            id: 10,
            subjectName: 'Artes',
            date: '10/01/2024',
            rating: 4
        },
        {
            id: 11,
            subjectName: 'Geografia',
            date: '10/01/2024',
            rating: 8
        },
        {
            id: 12,
            subjectName: 'Sociologia',
            date: '10/01/2024',
            rating: 5.9
        }
    ]);

    const [bimestre4, setBimestre4] = useState<PropsSubjects[]>([
        {
            id: 13,
            subjectName: 'Biologia',
            date: '10/01/2024',
            rating: 6,
        },
        {
            id: 14,
            subjectName: 'Artes',
            date: '10/01/2024',
            rating: 4
        },
        {
            id: 15,
            subjectName: 'Geografia',
            date: '10/01/2024',
            rating: 8
        },
        {
            id: 16,
            subjectName: 'Sociologia',
            date: '10/01/2024',
            rating: 5.9
        }
    ]);

    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        date: fullDate(),
        id: 1,
        rating: 0,
        subjectName: 'Artes',
        bimestre: '',
        selectedSubject: ''
    })

    const closeModal = () => {
        setModal({
            isVisible: false,
            date: fullDate(),
            id: 1,
            rating: 0,
            subjectName: 'Artes',
            bimestre: '',
            selectedSubject: ''
        })
    }

    const alteraNota = (item: PropsSubjects) => {
        setModal({
            ...modal,
            rating: item.rating,
            selectedSubject: item.subjectName
        })
    }

    const selectSubject = (subject: string) => {
        setModal({
            ...modal,
            selectedSubject: subject,
        })
    }

    const confirmarAlteracao = () => {
        if (modal.selectedSubject && modal.bimestre && modal.rating !== undefined && modal.rating <= 10) {
            // Atualiza a nota no estado do bimestre correspondente
            const firstBimestre = modal.bimestre === '1' ? bimestre1 : [];
            const secondtBimestre = modal.bimestre === '2' ? bimestre2 : [];
            const thirdBimestre = modal.bimestre === '3' ? bimestre3 : [];
            const fourthBimestre = modal.bimestre === '4' ? bimestre4 : [];

            const updatedFirstBimestre = firstBimestre.map((materia) =>
                materia.subjectName === modal.selectedSubject
                    ? { ...materia, rating: modal.rating, date: fullDate() }
                    : materia
            );

            const updatedSecondBimestre = secondtBimestre.map((materia) =>
                materia.subjectName === modal.selectedSubject
                    ? { ...materia, rating: modal.rating, date: fullDate() }
                    : materia
            );

            const updatedThirdBimestre = thirdBimestre.map((materia) =>
                materia.subjectName === modal.selectedSubject
                    ? { ...materia, rating: modal.rating, date: fullDate() }
                    : materia
            );

            const updatedFourthBimestre = fourthBimestre.map((materia) =>
                materia.subjectName === modal.selectedSubject
                    ? { ...materia, rating: modal.rating, date: fullDate() }
                    : materia
            );

            // Atualiza o estado do bimestre correspondente
            modal.bimestre === '1' ? setBimestre1(updatedFirstBimestre) : null;
            modal.bimestre === '2' ? setBimestre2(updatedSecondBimestre) : null;
            modal.bimestre === '3' ? setBimestre3(updatedThirdBimestre) : null;
            modal.bimestre === '4' ? setBimestre4(updatedFourthBimestre) : null;

            closeModal();
            modal.selectedSubject = ''
        } else {
            // Lida com o caso em que algum dos campos necessários está ausente
            console.error('Campos necessários ausentes para confirmar a alteração.');

            if (modal.rating < 0 || modal.rating > 10) {
                alert('A nota máxima é 10')
            }
        }
    };

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
                                        bimestre: modal.bimestre = '1',
                                        selectedSubject: modal.selectedSubject
                                    })
                                }>
                                Lançar nota <span>+</span>
                            </button>
                        </S.HeaderSection>
                        <S.ListSubjects>
                            {bimestre1.map((item) => (
                                <li key={item.id}
                                    onClick={() => {
                                        alteraNota(item)
                                    }}
                                >
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
                                        bimestre: modal.bimestre = '2',
                                        selectedSubject: modal.selectedSubject
                                    })
                                }>
                                Lançar nota <span>+</span>
                            </button>
                        </S.HeaderSection>
                        <S.ListSubjects>
                            {bimestre2.map((item) => (
                                <li key={item.id}
                                    onClick={() => {
                                        alteraNota(item)
                                    }}
                                >
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
                                        bimestre: modal.bimestre = '3',
                                        selectedSubject: modal.selectedSubject
                                    })
                                }>
                                Lançar nota <span>+</span>
                            </button>
                        </S.HeaderSection>
                        <S.ListSubjects>
                            {bimestre3.map((item) => (
                                <li key={item.id}
                                    onClick={() => {
                                        alteraNota(item)
                                    }}
                                >
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
                                        bimestre: modal.bimestre = '4',
                                        selectedSubject: modal.selectedSubject
                                    })
                                }>
                                Lançar nota <span>+</span>
                            </button>
                        </S.HeaderSection>
                        <S.ListSubjects>
                            {bimestre4.map((item) => (
                                <li key={item.id}
                                    onClick={() => {
                                        alteraNota(item)
                                    }}
                                >
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
                            <li
                                className={`biologia${modal.selectedSubject === 'Biologia' ? ' selected' : ''}`}
                                onClick={() => selectSubject("Biologia")}
                            >
                                Biologia
                            </li>
                            <li
                                className={`artes${modal.selectedSubject === 'Artes' ? ' selected' : ''}`}
                                onClick={() => selectSubject("Artes")}
                            >
                                Artes
                            </li>
                            <li
                                className={`geografia${modal.selectedSubject === 'Geografia' ? ' selected' : ''}`}
                                onClick={() => selectSubject("Geografia")}
                            >
                                Geografia
                            </li>
                            <li
                                className={`sociologia${modal.selectedSubject === 'Sociologia' ? ' selected' : ''}`}
                                onClick={() => selectSubject("Sociologia")}
                            >
                                Sociologia
                            </li>
                        </ul>
                        <S.DivRating>
                            <p>Nota</p>

                            <input
                                type="number"
                                value={modal.rating}
                                onChange={(e) => {
                                    const novoRating = parseFloat(e.target.value);
                                    setModal((prevModal) => ({
                                        ...prevModal,
                                        rating: novoRating,
                                        date: novoRating !== prevModal.rating ? fullDate() : prevModal.date,
                                    }));
                                }}
                            />
                        </S.DivRating>
                    </S.InfoContent>

                    <button
                        onClick={() => confirmarAlteracao()}
                        className={modal.selectedSubject === '' ? 'btn-disabled' : ''}
                    >
                        Confirmar
                    </button>
                </S.ModalContent>
                <div className="overlay" onClick={closeModal}></div>
            </S.Modal>
        </S.Section>
    )
}

export default Home