import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (options) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.request(options);
        setData(response.data.data);
      } catch (err) {
        console.error(err);
        setError(true);
        console.error("Erro ao tentar buscar informações");
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [options]);

  return {
    loading,
    data,
    error,
  };
};

export default useAxios;
