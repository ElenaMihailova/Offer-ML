import { instance } from './base';

export const submitUserData = async (name: string, phone: string, city: string, branch?: string) => {
  try {
    const payload: {
      name: string;
      phone: string;
      city: string;
      branch?: string; 
    } = {
      name: name,
      phone: phone,
      city: city,
    };

    if (branch) {
      payload.branch = branch;
    }

    const response = await instance.post('/db/38', payload);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

