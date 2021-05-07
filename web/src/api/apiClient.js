import axios from 'axios';
import { apiClientConfig } from '../config';

export const apiClient = axios.create(apiClientConfig)