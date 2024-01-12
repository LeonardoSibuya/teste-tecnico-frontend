import { useState } from 'react'

import { PropsSubjects } from '../../../components/SubjectsItems'

interface ModalState extends PropsSubjects {
    isVisible: boolean
    bimestre: string,
    selectedSubject: string
}

function useHome() {

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

    const [bimestre1, setBimestre1] = useState<PropsSubjects[]>();

    const [bimestre2, setBimestre2] = useState<PropsSubjects[]>();

    const [bimestre3, setBimestre3] = useState<PropsSubjects[]>();

    const [bimestre4, setBimestre4] = useState<PropsSubjects[]>();

    const [nextId, setNextId] = useState(1);

    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        date: fullDate(),
        rating: 0,
        subjectName: 'Artes',
        bimestre: '',
        selectedSubject: '',
    })

    const closeModal = () => {
        setModal((prevModal) => ({
            ...prevModal,
            isVisible: false,
            date: fullDate(),
            rating: 0,
            bimestre: '',
            selectedSubject: '',
        }));
    };

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

    const handleDelete = (subjectId: PropsSubjects) => {
        const id = subjectId.id

        if (bimestre1) {
            const updatedfirstBimestre = bimestre1.filter((materia) => materia.id !== id);
            setBimestre1(updatedfirstBimestre);
        }

        if (bimestre2) {
            const updatedsecondtBimestre = bimestre2.filter((materia) => materia.id !== id);
            setBimestre2(updatedsecondtBimestre);
        }

        if (bimestre3) {
            const updatedthirdBimestre = bimestre3.filter((materia) => materia.id !== id);
            setBimestre3(updatedthirdBimestre);
        }

        if (bimestre4) {
            const updatedfourthBimestre = bimestre4.filter((materia) => materia.id !== id);
            setBimestre4(updatedfourthBimestre);
        }
    }

    const confirmarAlteracao = () => {
        if (modal.selectedSubject && modal.bimestre && modal.rating !== undefined && modal.rating >= 0 && modal.rating <= 10) {

            const newItem = {
                id: nextId,
                subjectName: modal.selectedSubject,
                date: fullDate(),
                rating: modal.rating || 0,
            };

            setNextId(nextId + 1)

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const updateBimestre = (bimestreArray: any[]) => {

                if (!bimestreArray) {
                    bimestreArray = []
                }

                const existingMateriaIndex = bimestreArray.findIndex(
                    (materia) => materia.subjectName === modal.selectedSubject
                );

                if (existingMateriaIndex !== -1) {
                    return bimestreArray.map((materia, index) =>
                        index === existingMateriaIndex ? { ...materia, rating: newItem.rating, date: newItem.date } : materia
                    );
                } else {
                    return [...bimestreArray, newItem];
                }
            };

            if (modal.bimestre === '1') {
                setBimestre1(updateBimestre(bimestre1!));
            } else if (modal.bimestre === '2') {
                setBimestre2(updateBimestre(bimestre2!));
            } else if (modal.bimestre === '3') {
                setBimestre3(updateBimestre(bimestre3!));
            } else if (modal.bimestre === '4') {
                setBimestre4(updateBimestre(bimestre4!));
            }

            closeModal();
        } else {
            // Lida com o caso em que algum dos campos necessários está ausente
            console.error('Campos necessários ausentes para confirmar a alteração.');

            if (modal.rating < 0 || modal.rating > 10) {
                alert('A nota máxima é 10')
            }
        }
    };

    return {
        bimestre1,
        bimestre2,
        bimestre3,
        bimestre4,
        modal,
        setModal,
        fullDate,
        closeModal,
        alteraNota,
        selectSubject,
        confirmarAlteracao,
        handleDelete
    }
}

export default useHome