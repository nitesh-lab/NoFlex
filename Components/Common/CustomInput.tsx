import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '../UI/form'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { AuthSchema } from '../Home/AuthForm'
import { Input } from '../UI/input'

interface obj{
    control:Control<z.infer<typeof AuthSchema>>,
    name:FieldPath<z.infer<typeof AuthSchema>>,
    label:string,
    placeholder:string 
}

export default function CustomInput({control,name,label,placeholder}:obj) {


  return (
    <FormField
    control={control}
    name={name}
    render={({field})=>(
        <div className='flex gap-[1em]'>
  {/* <FormLabel className="form-label text-center">
       {label}
  </FormLabel> */}
<FormControl>
        <Input 
          placeholder={placeholder}
          className="input-class"
          type={name === 'password' ? 'password' : 'text'}
          {...field}
        />
 </FormControl> 
 <FormMessage className="form-message mt-2" />
        </div>
    )
}
>


    </FormField>
  )
}
