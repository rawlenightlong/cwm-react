import React, { FormEvent } from 'react'

const ControlledForm = () => {

    const handleSubmit = (event: FormEvent) => {{
        event.preventDefault()

    }}


  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="" className="form-label"> Name </label>
            <input  id="name" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="" className="form-label"> Age </label>
            <input type="number" id="age" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default ControlledForm
