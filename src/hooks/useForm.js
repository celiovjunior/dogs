import { useState } from "react";

const types = {
    email: {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address",
    }
}

export default function useForm(type) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    function validate(value) {
        if (type === false) return true

        if (value.length === 0) {
            setError('Fill a new value');
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message)

            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({ target }) {
        setValue(target.value)
    }

    return {
        value, 
        setValue, 
        onChange,
        error, 
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}