import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOP_WORLD } from "../Services/api";

const useAxios = () => {
  const [axiosOptions, setAxiosOptions] = useState(API_TOP_WORLD);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.request(axiosOptions);
        setData(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Erro ao tentar buscar informações");
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
