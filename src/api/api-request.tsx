import { instance } from './base';

export const submitUserData = async (name: string, phone: string) => {
    try {
      const response = await instance.post('/db/38', {
        name: name,
        phone: phone,
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

