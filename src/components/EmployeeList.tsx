import React, { useState } from 'react'
import { IEmployee } from './Employee.type'
import EmployeeModal from './EmployeeModal'

type Props = {
    list: IEmployee[],
    onDeleteClickHnd: (id: Number) => void,
    onEdit: (data: IEmployee) => void
}

const EmployeeList = (props: Props) => {
    const { list, onDeleteClickHnd, onEdit } = props
    //Destructuring the Object

    const [showModal, setShowModal] = useState(false)
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null)

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data)
        setShowModal(true)
    }

    const onCloseModal = () => setShowModal(false)
    
  return (
    <div>
        <article>
            <h3 className='text-center font-bold pt-2'>Employee List</h3>
        </article>
        <table className='w-full'>
            <tr className='bg-grey'>
            <th className='p-2 border border-secondary-light text-left'>Name:</th>
            <th className='p-2 border border-secondary-light text-left'>Email:</th>
            <th className='p-2 border border-secondary-light text-left'>Action:</th>
            </tr>
            {list.map(employee => {
                console.log(employee)
                return (
                    <tr>
                        <td className='p-2 border border-secondary-light text-left'>{employee.firstName} {employee.lastName}</td>
                        <td className='p-2 border border-secondary-light text-left'>{employee.email}</td>
                        <td className='p-2 border border-secondary-light text-left'>
                            <div className=''>
                                <button type='button'
                                     value='View' 
                                     className='border h-7 w-24'
                                     onClick={() => viewEmployee(employee)}
                                     >View</button>
                                <button 
                                    type='button' 
                                    value='Edit' 
                                    className='border h-7 w-24 ml-2'
                                    onClick={() => onEdit(employee)}
                                    >Edit</button>
                                <button
                                     type='button' 
                                     value='Delete' 
                                     className='border h-7 w-24 ml-2'
                                     onClick={() => onDeleteClickHnd(employee.id)}
                                     //Calling the Callback function
                                     >Delete</button>
                            </div>
                        </td>
                    </tr> 
                )
            })}
        </table>
        {/* {showModal &&  <EmployeeModal onClose={onCloseModal} />} */}
        {showModal && dataToShow !== null &&  (
            <EmployeeModal onClose={onCloseModal} data={dataToShow} />
        )}
    </div>
  )
}

export default EmployeeList