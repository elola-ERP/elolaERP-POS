import PouchDB from "pouchdb";
import PouchdbFind from "pouchdb-find";

PouchDB.plugin(PouchdbFind);

const DB_NAME = "pos_database";
const REMOTE_DB_URL = process.env.NEXT_PUBLIC_REMOTE_COUCHDB_URL;

const localDB = new PouchDB(DB_NAME);
const remoteDB = new PouchDB(REMOTE_DB_URL);

console.log('Connectiong to remote database at: ', REMOTE_DB_URL);

export const syncDatabase = () => {
    return localDB.sync(remoteDB, {
        live: true,
        retry: true
    }).on('change', (change) => {
        console.log ('Data change')
    }).on('error', (err) => {
        console.error('Error syncing database: ', err)
    })
}

export const getDocsByType = async (docType: string) => {
    try {
        const result = await localDB.find({
            selector: { tpe: docType },
            limit: 10000
        })
        return result.docs;
    } catch (err) {
        console.error(`Error fetching ${docType}:`, err);
        return [];
    }
}

export const addDoc = async ( doc: any ) => {
    if (!doc.type) {
        throw new Error('Document must have a type field')
    }
    try {
        return await localDB.post(doc);
    } catch (err) {
        console.error('Error adding documet:', err);
        throw err
    }
}

export const updateDoc = async ( id: string, doc: any ) => {
    try {
        const existingDoc = await localDB.get(id);
        return await localDB.put({ ...existingDoc, ...doc });
    } catch (err) {
        console.error('Error updating document:', err)
        throw err
    }
}

export const deleteDoc = async ( id: string ) => {
    try {
        const doc = await localDB.get(id)
        return await localDB.remove(doc)
    } catch (err) {
        console.error('Error deleting document:', err)
        throw err
    }
}