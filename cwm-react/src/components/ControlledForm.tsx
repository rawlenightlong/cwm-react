import React, { FormEvent, useState } from 'react'
import {FieldValues, useForm} from "react-hook-form"

const ControlledForm = () => {

    const {register, handleSubmit} = useForm()
    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="" className="form-label"> Name </label>
            <input 
            { ...register("name")}
            id="name" 
            type="text" 
            className="form-control"/>
        </div>

        <div className="mb-3">
            <label htmlFor="" className="form-label"> Age </label>
            <input 
            {...register("age")}
            type="number" 
            id="age" 
            className="form-control"/>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default ControlledForm
