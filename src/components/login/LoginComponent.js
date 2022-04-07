
import React, { useContext } from "react";
import useForm from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
import { AuthContext } from "../../auth/authContext";

const LoginComponent = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const [values, handleInputChange] = useForm({
      mobilephone: ""
    });

    const {mobilephone, action} = values;

    const { data, loading } = useFetchApi(values);
    const { status, customer } = data;

    if (customer) {

        dispatch(action);
      
        navigate(`/home?id=${mobilephone}`, {
          replace: true,
        });
    }
    
  return (
    <form>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="mobilephone"
          className="form-control"
          placeholder="Numero de teléfono"
          value={mobilephone}
          onChange={handleInputChange}
        />
        <label htmlFor="floatingInput">Número de teléfono</label>
      </div>

      {loading && (
        <div className="spinner-border text-danger m-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {status && (
        <p className="text-danger">
          Por favor ingresa el número de telefono correcto
        </p>
      )}
    </form>
  );
}

export default LoginComponent;
