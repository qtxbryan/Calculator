import {forwardRef} from 'react';

const Input = forwardRef(function Input({inputType, id, title, ...props}, ref) {
    
    return(
        <p>
            <label htmlFor = {id}>{title}</label>
            <input ref = {ref} type = {inputType} id = {id} {...props}/>
        </p>
    )

});

export default Input;