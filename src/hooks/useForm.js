import { useState } from 'react'
import { types } from "../types/types";


const useForm = (initialState={}) => {

  const [values, setValues] = useState(initialState);
  

    const handleInputChange = ({ target }) => {

      const action = {
        type: types.login,
        payload: { name: target.value },
      }

      setValues({
        [target.name]: target.value,
        action: action
      });

    };

    return [values,handleInputChange];
}

export default useForm;
