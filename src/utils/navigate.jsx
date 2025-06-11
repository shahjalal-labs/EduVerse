// src/hooks/useCustomNavigate.js
import { useNavigate } from "react-router";

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const go = (endpoint) => {
    // Add any custom logic here if needed
    navigate(endpoint);
  };

  return go;
};

export default useCustomNavigate;
