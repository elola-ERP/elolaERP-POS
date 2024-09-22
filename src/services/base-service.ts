import { axiosInstance } from '../api/axiosClient';
import { syncDatabase, getDocsByType, addDoc, updateDoc, deleteDoc } from '../lib/pouchdb';

export class BaseService {
  protected docType: string;

  constructor(docType: string) {
    this.docType = docType;
  }

  async fetchAll() {
    try {
      let items = await getDocsByType(this.docType);
      
      if (items.length === 0) {
        const response = await axiosInstance.get(`/api/${this.docType}`);
        items = response.data;
        
        await Promise.all(items.map(item => addDoc({...item, type: this.docType})));
      }
      
      syncDatabase();
      
      return items;
    } catch (error) {
      console.error(`Error fetching ${this.docType}:`, error);
      return [];
    }
  }

  async add(item: any) {
    try {
      const response = await addDoc({...item, type: this.docType});
      syncDatabase();
      return response;
    } catch (error) {
      console.error(`Error adding ${this.docType}:`, error);
      throw error;
    }
  }

  async update(id: string, item: any) {
    try {
      const response = await updateDoc(id, {...item, type: this.docType});
      syncDatabase();
      return response;
    } catch (error) {
      console.error(`Error updating ${this.docType}:`, error);
      throw error;
    }
  }

  async delete(id: string) {
    try {
      const response = await deleteDoc(id);
      syncDatabase();
      return response;
    } catch (error) {
      console.error(`Error deleting ${this.docType}:`, error);
      throw error;
    }
  }
}