import axios from 'axios';
import type { AddMesageFormData, MessageType } from '../types/message';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

class ApiService {
  static async getMessages(): Promise<MessageType[]> {
    const response = await apiInstance.get<MessageType[]>('/api/messages');
    return response.data;
  }

  static async deleteMessage(messageId: MessageType['id']): Promise<void> {
    const response = await apiInstance.delete(`/api/messages/${messageId}`);
    if (response.status !== 200) return Promise.reject(new Error('Error deleting from server'));
  }

  static async postMessage(formData: AddMesageFormData): Promise<MessageType> {
    const response = await apiInstance.post<MessageType>('/api/messages', formData);
    console.log('status', response.status);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Error posting to server'));
  }

  static async editMessage(
    formData: AddMesageFormData,
    id: MessageType['id'],
  ): Promise<MessageType> {
    const response = await apiInstance.patch<MessageType>(`/api/messages/${id}`, formData);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }
}

export default ApiService;
