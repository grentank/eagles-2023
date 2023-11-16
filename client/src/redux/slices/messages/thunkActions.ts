import ApiService from '../../../services/apiService';
import type { AddMesageFormData, MessageAction, MessageType } from '../../../types/message';
import type { AppDispatch } from '../../store';

export const loadInitialMessages =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    const initialMessages = await ApiService.getMessages();
    dispatch({ type: 'SET_MESSAGES', payload: initialMessages } as MessageAction);
  };

export const thunkDeleteMessage =
  (id: MessageType['id']) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      await ApiService.deleteMessage(id);
      dispatch({ type: 'DELETE_MESSAGE', payload: id } as MessageAction);
    } catch (error) {
      console.log(error);
      dispatch({ type: 'ERROR_DELETING_MESSAGE' });
    }
  };

export const thunkAddMessage =
  (formData: AddMesageFormData) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const newMessage = await ApiService.postMessage(formData);
    dispatch({ type: 'ADD_MESSAGE', payload: newMessage } as MessageAction);
  };
