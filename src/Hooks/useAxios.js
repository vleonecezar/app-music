import { useEffect, useState } from "react";
import axios from "axios";
import { API_TOP_WORLD } from "../Services/api";

const useAxios = () => {
  const [axiosOptions, setAxiosOptions] = useState(API_TOP_WORLD);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.request(axiosOptions);
        setData(response.data.data);
      } catch (err) {
        console.error(err);
        setError(true);
        console.error("Erro ao tentar buscar informações");
      } finally {
        setLoading(false);
      }
    }

    const regexTest = /\w+/.test(axiosOptions.params.q);
    if (regexTest) getData();
  }, [axiosOptions]);

  return {
    setAxiosOptions,
    loading,
    data,
    error,
  };
};

export default useAxios;
