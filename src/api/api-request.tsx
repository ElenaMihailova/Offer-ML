import { instance } from './base';

export const submitUserData = async (name: string, phone: string, city: string, filial?: string) => {
  try {
    const payload: {
      name: string;
      phone: string;
      city: string;
      filial?: string; 
    } = {
      name: name,
      phone: phone,
      city: city,
    };

    if (filial) {
      payload.filial = filial;
    }

    await instance.post('/db/38', payload);
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

