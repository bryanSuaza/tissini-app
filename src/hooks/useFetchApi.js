import { useState, useEffect } from 'react';

const useFetchApi = ({mobilephone}) => {

    const [ state, setState ] = useState({
        data:{},
        loading: true
    })


    useEffect(() => {
      setState({
        data: {},
        loading: true,
      });

      var myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        mobilephone: mobilephone,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://v3.tissini.app/api/v3/login/client", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setState({
            data: JSON.parse(result),
            loading: false,
          });
        })
        .catch((error) => console.log("error", error));
    }, [mobilephone]);

    return state;

}

export default useFetchApi;
