import {Property} from '../../types/property';
import api from '../api';

class PropertyService {
  async listProperties() {
    const {data} = await api.get<Property[]>('/property');

    return data;
  }

  async getPropertyById(id?: string) {
    const {data} = await api.get<Property>(`/property/${id}`);

    return data;
  }
}

const propertyService = new PropertyService();

export default propertyService;
