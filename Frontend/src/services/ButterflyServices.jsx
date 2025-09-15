import axios from 'axios';

// Configuración dinámica de URL según el entorno
const getBaseURL = () => {
  if (typeof window !== 'undefined') {
    // En el navegador
    if (window.location.hostname === 'localhost') {
      return "http://localhost:8000";
    } else {
      // En producción, usar la URL relativa
      return "";
    }
  }
  // En servidor (SSR), usar URL relativa
  return "";
};

const URL_API = `${getBaseURL()}/butterflies`;

//Metodo GET para el READ
//Para ver TODAS las Mariposas
export const getAllButterflies = async() => {
    try {
        const res = await axios.get(URL_API);
        return res.data; 
    } 
    catch(error) {
        console.error(`getAllButterflies error:`, error.message);
        throw error;
    }
}

//Para ver de a UNA SOLA Mariposa
export const getOneButterfly = async (id) => {
    try {
        const res = await axios.get(`${URL_API}/${id}`);
        return res.data;
    } 
    catch (error) {
        console.error(`getOneButterfly ID ${id} error:`, error.message);
        throw error; 
    }
};

//Metodo POST para el CREATE
export const createButterfly = async(newbutterfly)=>{
    try {
        const res = await axios.post(URL_API, newbutterfly);
        return res.data;
    }
    catch (error) {
        console.error(`createButterfly error:`, error.message);
        throw error;
    }
};

//Metodo PUT para ACTUALIZAR
export const updateButterfly = async (id, editedButterfly) => {
    try {
        const res = await axios.put(`${URL_API}/${id}`, editedButterfly);
        return res.data;
    }
    catch (error) {
        console.error(`updateButterfly ID ${id} error:`, error.message);
        throw error;
    }
}

//Metodo DELETE para ELIMINAR
export const deleteButterfly = async (id) => {
    try {
        const res = await axios.delete(`${URL_API}/${id}`);
        return res.data;
        }
        catch (error) {
            console.error(`deleteButterfly ID ${id} error:`, error.message);
            throw error;
        }
    }