const API_BASE_URL = 'http://localhost:8080';

export interface Denuncia {
  id?: number;
  titulo: string;
  descricao: string;
  status: string;
}

export const getDenuncias = async (): Promise<Denuncia[]> => {
  const response = await fetch(`${API_BASE_URL}/denuncias`);
  if (!response.ok) {
    throw new Error('Erro ao buscar denúncias');
  }
  return response.json();
};

export const createDenuncia = async (denuncia: Omit<Denuncia, 'id'>): Promise<Denuncia> => {
  const response = await fetch(`${API_BASE_URL}/denuncias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(denuncia),
  });
  if (!response.ok) {
    throw new Error('Erro ao criar denúncia');
  }
  return response.json();
};
