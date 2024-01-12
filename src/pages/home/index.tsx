import * as S from './styles'

import { Container } from '../../styles'

import SubjectItems from '../../components/SubjectsItems'
import useHome from './hooks/useHome'

const Home = () => {

    const {
        bimestre1,
        bimestre2,
        bimestre3,
        bimestre4,
        modal,
        alteraNota,
        closeModal,
        confirmarAlteracao,
        fullDate,
        selectSubject,
        setModal,
        handleDelete
    } = useHome()

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
                            {bimestre1 ? (
                                <>
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
                                                removeSubject={() => handleDelete(item)}
                                            />
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <h1>VAZIO</h1>
                                </>
                            )}
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
                            {bimestre2 ? (
                                <>
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
                                                removeSubject={() => handleDelete(item)}
                                            />
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <h1>VAZIO</h1>
                                </>
                            )}
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
                        {bimestre3 ? (
                                <>
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
                                                removeSubject={() => handleDelete(item)}
                                            />
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <h1>VAZIO</h1>
                                </>
                            )}
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
                        {bimestre4 ? (
                                <>
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
                                                removeSubject={() => handleDelete(item)}
                                            />
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <h1>VAZIO</h1>
                                </>
                            )}
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