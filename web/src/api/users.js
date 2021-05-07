import { apiClient } from './apiClient';

export const create = (user) => apiClient.post('/users',user)