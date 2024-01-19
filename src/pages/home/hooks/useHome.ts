/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react'

import { PropsSubjects } from '../../../components/SubjectsItems'

import { sendRequest } from '../../../api/api'

interface ModalState extends PropsSubjects {
    isVisible: boolean
    bimestre: string,
    selectedSubject: string
    rota: string
}

function useHome() {

    const fullDate = (inputDate: string) => {
        const date = new Date(inputDate)

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()


        const formattedDay = day < 10 ? `0${day}` : `${day}`;
        const formattedMonth = month < 10 ? `0${month}` : `${month}`;

        return `${formattedDay}/${formattedMonth}/${year}`;
    }

    const [bimestre1, setBimestre1] = useState<PropsSubjects[]>();

    const [bimestre2, setBimestre2] = useState<PropsSubjects[]>();

    const [bimestre3, setBimestre3] = useState<PropsSubjects[]>();

    const [bimestre4, setBimestre4] = useState<PropsSubjects[]>();

    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        date: fullDate(''),
        rating: 0,
        subjectName: 'Artes',
        bimestre: '',
        selectedSubject: '',
        rota: '',
    })

    const closeModal = () => {
        setModal((prevModal) => ({
            ...prevModal,
            isVisible: false,
            date: fullDate(''),
            rating: 0,
            bimestre: '',
            selectedSubject: '',
        }));
    };

    const selectSubject = (subject: string) => {
        setModal({
            ...modal,
            selectedSubject: subject
        })
    }

    async function fetchBimestres() {
        try {
            const bimestres = await sendRequest('/bimestres', 'GET');

            const subjectFirstBimestre = bimestres[0]?.materias?.map((materia: any) => ({
                id: materia.id,
                subjectName: materia.name,
                date: fullDate(materia.updateAt),
                rating: materia.ratings,
            })) || [];

            const subjectSecondBimestre = bimestres[1]?.materias?.map((materia: any) => ({
                id: materia.id,
                subjectName: materia.name,
                date: fullDate(materia.updateAt),
                rating: materia.ratings,
            })) || [];

            const subjectThirdBimestre = bimestres[2]?.materias?.map((materia: any) => ({
                id: materia.id,
                subjectName: materia.name,
                date: fullDate(materia.updateAt),
                rating: materia.ratings,
            })) || [];

            const subjectFouryBimestre = bimestres[3]?.materias?.map((materia: any) => ({
                id: materia.id,
                subjectName: materia.name,
                date: fullDate(materia.updateAt),
                rating: materia.ratings,
            })) || [];

            setBimestre1(subjectFirstBimestre);
            setBimestre2(subjectSecondBimestre);
            setBimestre3(subjectThirdBimestre);
            setBimestre4(subjectFouryBimestre);
        } catch (error) {
            alert(`ERRO: ${error} - erro ao listar as matérias`)
        }
    }

    async function updtateRating(id: string, rating: number) {
        try {
            await sendRequest('/atualizarnota', 'PUT', {
                id: id,
                rating: rating,
            });

        } catch (error) {
            alert(`ERRO: ${error} - erro ao atualizar nota desta matéria`)
        }
    }

    async function updateSubject(bimestreId: string, rota: string) {
        if (modal.selectedSubject && modal.bimestre && modal.rating !== undefined && modal.rating >= 0 && modal.rating <= 10) {
            try {
                const updateBimestre = (bimestreArray: PropsSubjects[]) => {
                    if (!bimestreArray) {
                        bimestreArray = [];
                    }

                    const existingMateriaIndex = bimestreArray.findIndex(
                        (materia) => materia.subjectName === modal.selectedSubject
                    );

                    if (existingMateriaIndex !== -1) {
                        // A matéria já existe, então atualizamos o rating
                        updtateRating(bimestreArray[existingMateriaIndex].id!, modal.rating);
                        return bimestreArray.map((materia, index) =>
                            index === existingMateriaIndex ? { ...materia, rating: modal.rating, date: modal.date } : materia
                        );
                    } else {
                        // A matéria não existe, então adicionamos uma nova
                        return [...bimestreArray];
                    }
                };

                await sendRequest(`${rota}`, 'POST', {
                    name: modal.selectedSubject,
                    rating: modal.rating,
                    bimestreId: bimestreId
                });

                if (modal.bimestre === '65a6d8db07ce7636c99d5ea8') {
                    setBimestre1(updateBimestre(bimestre1!));
                } else if (modal.bimestre === '65a6e64e33012077d03d5700') {
                    setBimestre2(updateBimestre(bimestre2!));
                } else if (modal.bimestre === '65a97f9f2160a7decc701f9c') {
                    setBimestre3(updateBimestre(bimestre3!));
                } else if (modal.bimestre === '65a9807e064d90334683c281') {
                    setBimestre4(updateBimestre(bimestre4!));
                }

                closeModal();
            } catch (error) {
                alert(`ERRO: ${error} - erro ao atualizar esta matéria`)
            }
        } else {
            console.error('Campos necessários ausentes para confirmar a alteração.');

            if (modal.rating > 10) {
                alert('A nota máxima é 10');
            }
        }
    }

    async function handleDelete(subjectId: string) {

        const id = subjectId

        try {
            await sendRequest(`/materias?id=${id}`, 'DELETE');

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

        } catch (error) {
            alert(`ERRO: ${error} - erro ao excluir esta matéria`)
            throw new Error(`Erro ao deletar materia com id: ${id}`)
        }
    }

    return {
        bimestre1,
        bimestre2,
        bimestre3,
        bimestre4,
        modal,
        setModal,
        fullDate,
        closeModal,
        selectSubject,
        updateSubject,
        handleDelete,
        fetchBimestres
    }
}

export default useHome