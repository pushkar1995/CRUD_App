import React, { useState } from 'react'
import AddEmployee from './AddEmployee'
import { IEmployee, dummyEmployeeList, PageEnum } from './Employee.type'
import EmployeeList from './EmployeeList'

const Home = () => {
    const [employeeList, setEmployeeList] = useState(
      dummyEmployeeList as IEmployee[]  
    )
    const [shownPage, setShownPage] = useState(PageEnum.list)

    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add)
    }

    const showListPage = () => {
        setShownPage(PageEnum.list)
    }

    const addEmployee = (data: IEmployee) => {
        setEmployeeList([...employeeList, data])
    }

  return (
    <>
    <article className='bg-primary border-4 border-transparent text-grey text-center'>
        <header>
            <h1 className="">React: Simple CRUD Application</h1>
        </header>
    </article>
    <section className='ml-3.5 mr-2.5 mt-3.5'>
        {shownPage === PageEnum.list && (
        <>
            <button type='button' className='float-right border h-7 w-32 m-2' onClick={onAddEmployeeClickHnd}>Add Employee</button>
            <EmployeeList list={employeeList}/>
        </>
        )}
        {shownPage === PageEnum.add && <AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployee}/>}
    </section>
    </>
  )
}

export default Home