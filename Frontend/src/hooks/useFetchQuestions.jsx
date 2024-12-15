import { useEffect, useState } from "react";
import { SERVER_URL } from "../constants";

const useFetchQuestions = (type) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/${type}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return { data, isLoading, error };
};

export default useFetchQuestions;
