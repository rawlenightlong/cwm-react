import React from 'react'

const Form = () => {
  return (
    <form>
        <div className="mb-3">
            <label htmlFor="" className="form-label"> Name </label>
            <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="" className="form-label"> Age </label>
            <input type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form
