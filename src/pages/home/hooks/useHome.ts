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
        rota: ''
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

    async function confirmarAlteracao(bimestreId: string, rota: string) {
        if (modal.selectedSubject && modal.bimestre && modal.rating !== undefined && modal.rating >= 0 && modal.rating <= 10) {

            try {
                await sendRequest(`${rota}`, 'POST', {
                    name: modal.selectedSubject,
                    rating: modal.rating,
                    bimestreId: bimestreId
                });

                const updateBimestre = (bimestreArray: PropsSubjects[]) => {
                    if (!bimestreArray) {
                        bimestreArray = [];
                    }

                    const existingMateriaIndex = bimestreArray.findIndex(
                        (materia) => materia.subjectName === modal.selectedSubject
                    );

                    if (existingMateriaIndex !== -1) {
                        return bimestreArray.map((materia, index) =>
                            index === existingMateriaIndex ? { ...materia, rating: modal.rating, date: modal.date } : materia
                        );
                    } else {
                        return [...bimestreArray];
                    }
                };

                if (modal.bimestre === '65a6d8db07ce7636c99d5ea8') {
                    setBimestre1(updateBimestre(bimestre1!));
                } else if (modal.bimestre === '65a6e64e33012077d03d5700') {
                    setBimestre2(updateBimestre(bimestre2!));
                } else if (modal.bimestre === '65a97f9f2160a7decc701f9c') {
                    setBimestre3(updateBimestre(bimestre3!));
                } else if (modal.bimestre === '65a9807e064d90334683c281') {
                    setBimestre4(updateBimestre(bimestre4!));
                }

                console.log(rota)

                closeModal();
            } catch (error) {
                console.log(error);
            }
        } else {
            console.error('Campos necessários ausentes para confirmar a alteração.');

            if (modal.rating < 0 || modal.rating > 10) {
                alert('A nota máxima é 10');
            }
        }
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
            console.error('Erro ao buscar bimestres:', error);
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
            throw new Error(`Erro ao deletar materia com id: ${id}`) || error
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
        alteraNota,
        selectSubject,
        confirmarAlteracao,
        handleDelete,
        fetchBimestres
    }
}

export default useHome