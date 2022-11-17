import React, { useState, useEffect } from 'react'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import { IEmployee, PageEnum } from './Employee.type'
import EmployeeList from './EmployeeList'

const Home = () => {
    const [employeeList, setEmployeeList] = useState(
      [] as IEmployee[]  
    )
    const [shownPage, setShownPage] = useState(PageEnum.list)
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee)

    useEffect(() => {
        const listInString = window.localStorage.getItem('EmployeeList')
        if (listInString) {
            _setEmployeeList(JSON.parse(listInString))
        }
    }, [])

    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add)
    } 

    const showListPage = () => {
        setShownPage(PageEnum.list)
    }

    const _setEmployeeList = (list:IEmployee[]) => {
        setEmployeeList(list)
        window.localStorage.setItem('EmployeeList', JSON.stringify(list))
    }

    const addEmployee = (data: IEmployee) => {
        _setEmployeeList([...employeeList, data])
    }

    const deleteEmployee = (data: IEmployee) => {
        //To Index from array i.e. employeeList ,splice that and Update new record.
        const indexToDelete = employeeList.indexOf(data)
        const tempList = [...employeeList]

        tempList.splice(indexToDelete, 1);
        _setEmployeeList(tempList)
    }

    const editEmployeeData = (data: IEmployee) => {
        setShownPage(PageEnum.edit)
        setDataToEdit(data)
    }

    const updateData = (data: IEmployee) => {
        const filteredData = employeeList.filter(x => x.id === data.id)[0]
        const indexOfRecord = employeeList.indexOf(filteredData)
        const tempData = [...employeeList]
        tempData[indexOfRecord] = data
        _setEmployeeList(tempData)
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
            <EmployeeList 
                list={employeeList}
                onDeleteClickHnd={deleteEmployee}
                //Passing Callback Function for (delete item)deleteEmployee

                onEdit={editEmployeeData}
            />
        </>
        )}
        {shownPage === PageEnum.add && (
            <AddEmployee 
             onBackBtnClickHnd={showListPage} 
             onSubmitClickHnd={addEmployee}
            />
        )}

        {shownPage === PageEnum.edit && (
            <EditEmployee
                data={dataToEdit}
                onBackBtnClickHnd={showListPage}
                onUpdateClickHnd={updateData}
            />
        )}
    </section>
    </>
  )
}

export default Home