import {GenericAbortSignal} from 'axios';
import {Property} from '../../types/property';
import api from '../api';

class PropertyService {
  async listProperties() {
    const {data} = await api.get<Property[]>('/property');

    return data;
  }

  async getPropertyById(
    id: string | undefined,
    signal: GenericAbortSignal | undefined
  ) {
    const {data} = await api.get<Property>(`/property/${id}`, {signal});

    return data;
  }
}

const propertyService = new PropertyService();

export default propertyService;
