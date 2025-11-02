import api from './api';

export const getCharacters = async (params = {}) => {
  try {
    const response = await api.get('/character', { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};