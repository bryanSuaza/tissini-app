import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import useFetchApi from '../../hooks/useFetchApi';
import CatChilds from './CatChilds';

const MainHome = () => {

  const { search } = useLocation();
  const { id } = queryString.parse(search);

  const [values, setValues] = useState({
    mobilephone:id
  });

  const { data, loading } = useFetchApi(values);
  const {customer, categories} = data;

  let arrayCategories = [];

  if(categories){
    arrayCategories = categories;
  }

  return (
    <div className="p-4 gradient">
      <h1>Bienvenido {customer && customer.name}</h1>

      <div className="container">
        <div className="row">
          {arrayCategories.map((cat) => (
            <CatChilds key={cat.id} {...cat} />
          ))}
        </div>
      </div>

      {loading && (
        <div className="spinner-border text-danger m-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default MainHome;
