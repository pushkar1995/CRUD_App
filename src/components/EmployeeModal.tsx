import React from 'react'
import './EmployeeModal.style.css'

type Props = {
    onClose: () => void
}

const EmployeeModal = (props: Props) => {
    const { onClose } = props
  return (
    <div id='myModal' className='modal'>
        <div className='modal-content'>
            <span className='close' onClick={onClose}>&times;</span>
            <p>Some text in the modal</p>
        </div>
    </div>
  )
}

export default EmployeeModal