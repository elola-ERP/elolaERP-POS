import { axiosInstance } from '../api/axiosClient';
import { syncDatabase, getDocsByType, addDoc, updateDoc, deleteDoc } from '../lib/pouchdb';

export const createService = (docType: string) => ({
  fetchAll: async () => {
    try {
      let items = await getDocsByType(docType);
      
      if (items.length === 0) {
        const response = await axiosInstance.get(`/api/${docType}`);
        items = response.data;
        
        await Promise.all(items.map(item => addDoc({...item, type: docType})));
      }
      
      syncDatabase();
      
      return items;
    } catch (error) {
      console.error(`Error fetching ${docType}:`, error);
      return [];
    }
  },

  add: async (item: any) => {
    try {
      const response = await addDoc({...item, type: docType});
      syncDatabase();
      return response;
    } catch (error) {
      console.error(`Error adding ${docType}:`, error);
      throw error;
    }
  },

  update: async (id: string, item: any) => {
    try {
      const response = await updateDoc(id, {...item, type: docType});
      syncDatabase();
      return response;
    } catch (error) {
      console.error(`Error updating ${docType}:`, error);
      throw error;
    }
  },

  delete: async (id: string) => {
    try {
      const response = await deleteDoc(id);
      syncDatabase();
      return response;
    } catch (error) {
      console.error(`Error deleting ${docType}:`, error);
      throw error;
    }
  }
});