import React, { FormEvent, useState } from 'react'
import {FieldValues, useForm} from "react-hook-form"
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(3),
    age: z.number({invalid_type_error: "Age field is required" }).min(18, { message: "Must be 18"})
})

type FormData = z.infer<typeof schema>

const ControlledForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)})
    const onSubmit = (data: FieldValues) => {
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
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
           
        </div>

        <div className="mb-3">
            <label htmlFor="" className="form-label"> Age </label>
            <input 
            {...register("age", {valueAsNumber: true})}
            type="number" 
            id="age" 
            className="form-control"/>
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default ControlledForm
