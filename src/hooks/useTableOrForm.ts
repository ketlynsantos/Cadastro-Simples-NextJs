import { useState } from "react";

export default function useTableOrForm() { 

    //Entre <> - 2 possiveis estados. Inicialmente começará sendo table
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const showTable = () => setVisible('table')
    const showForm = () => setVisible('form')

    return {
        visibleTable: visible === 'table',
        visibleForm: visible === 'form',
        showTable,
        showForm,
    }
}