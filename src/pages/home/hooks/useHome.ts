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
    }
}

export default useHome