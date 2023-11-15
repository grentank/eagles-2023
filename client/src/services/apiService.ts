import axios from 'axios';
import type { MessageType } from '../types/message';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

class ApiService {
  static async getMessages(): Promise<MessageType[]> {
    const response = await apiInstance.get<MessageType[]>('/api/messages');
    return response.data;
  }
}

export default ApiService;
