import React from 'react'
import './spinner.scss'

const Spinner: React.FC = () => {
  return (
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner
