import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";

PouchDB.plugin(PouchDBFind);

const DB_Name = 'pos_database';

const REMOTE_DB_URL = process.env.NEXT_PUBLIC_REMOTE_DB_URL;

export const localDB = new PouchDB(DB_Name);
export const remoteDB = new PouchDB(REMOTE_DB_URL);

console.log (`Connectiing to remote database at: ${REMOTE_DB_URL}`)

export function syncDatabase() {
    return localDB.sync(remoteDB, {
        live: true,
        retry: true
    }).on('change', function(change) {
        console.log('Database changed', change);
    }).on('error', function(err) {
        console.error('Error syncing database', err);
    })
}

export async function getDocsByType(docType: string) {
    try {
        const result = await localDB.find({
            selector: { type: docType },
            limit: 1000
        });
        return result.docs;
    } catch (err) {
        console.error(`Error fetching ${docType} docs:`, err);
        return [];
    }
}

export async function addDoc (doc: any) {
    if (!doc.type) {
        throw new Error('Document must have a type field');
    }
    try {
        const response = await localDB.post(doc);
        return response;
    } catch (err) {
        console.error(`Error Adding document:`, err);
        throw err;
    }
}

export async function updateDoc(id: string, doc: any) {
    try {
        const existingDoc = await localDB.get(id);
        const response = await localDB.put({ ...existingDoc, ...doc });
        return response;
    } catch (err) {
        console.error('Error updating document:', err);
        throw err;
    }
}

export async function deleteDoc(id: string) {
    try {
        const doc = await localDB.get(id);
        const response = await localDB.remove(doc);
        return response;
    } catch (err) {
        console.error('Error deleting document:', err);
        throw err;
    }
}