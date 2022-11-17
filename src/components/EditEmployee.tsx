import React, { useState } from 'react'
import { IEmployee } from './Employee.type'

type Props = {
    data: IEmployee,
    onBackBtnClickHnd: () => void,
    onUpdateClickHnd: (data: IEmployee) => void
}

const EditEmployee = (props: Props) => {
    const {data, onBackBtnClickHnd,onUpdateClickHnd} = props
    const [firstName, setFirstName] = useState(data.firstName)
    const [lastName, setLastName] = useState(data.lastName)
    const [email, setEmail] = useState(data.email)

    const onfirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value)
      }
    
    const onlastNameChangeHnd = (e: any) => {
        setLastName(e.target.value)
      }
    
    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value)
      }
    
    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault()
        const updatedData: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        onUpdateClickHnd(updatedData)
        onBackBtnClickHnd()
      }
    
  return (
    <div className='text-center'>
    <div>
    <h3 className='text-center font-bold pt-2'>Edit Employee Form</h3>
    </div>
    <form onSubmit={onSubmitBtnClickHnd}>
        <div>
            <label>First Name:</label>
            <input 
                type='text' 
                className='h-10 w-64 pl-3 m-2 border border-secondary-light'
                value={firstName} 
                onChange={onfirstNameChangeHnd}
            />
        </div>
        <div>
            <label>Last Name:</label>
            <input 
                type='text' 
                className='h-10 w-64 pl-3 m-2 border border-secondary-light'
                value={lastName}
                onChange={onlastNameChangeHnd} 
            />
        </div>
        <div>
            <label>Email Add.:</label>
            <input 
                type='text' 
                className='h-10 w-64 pl-3 m-2 border border-secondary-light'
                value={email}
                onChange={onEmailChangeHnd}
            />
        </div>
        <div className=''>
            <input 
                type='button' 
                className='border h-10 w-32' 
                value='Back' 
                onClick={onBackBtnClickHnd}
            />
            <input 
                type='submit' 
                className='border h-10 w-32 ml-2' 
                value='Update Employee'
            />
        </div>
    </form>
    </div>
  )
}

export default EditEmployee