type CreateDBParams = {
    dbName: string,
    storeName: string,
    keyPath?: string,
}

type GetDataFromDBParams = {
    db: IDBDatabase,
    storeName: string
}

type ClearDataFromDBParams = {
    db: IDBDatabase,
    storeName: string
}

type PutDataToDB = {
    db: IDBDatabase,
    storeName: string,
    data: any[]
}

type deleteDataFromDBParams = {
    db: IDBDatabase,
    storeName: string,
    keyPath: number,
}

export const createDB = (params: CreateDBParams) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(params.dbName, 1);
        request.onerror = (event) => {
            reject(event);
        };
        request.onsuccess = (event) => {
            resolve(request.result);
        };
        request.onupgradeneeded = (event) => {
            const db = request.result;
            db.createObjectStore(params.storeName, { 
                keyPath: params.keyPath ?? 'id' 
            });
        };
    })
}

export const getDataFromDB = (params: GetDataFromDBParams) => {
    return new Promise((resolve, reject) => {
        const transaction = params.db.transaction(params.storeName, 'readonly');
        const store = transaction.objectStore(params.storeName);
        const request = store.getAll();
        request.onerror = (event) => {
            reject(event);
        };
        request.onsuccess = (event) => {
            resolve(request.result);
        };
    
    })
}

export const clearDataFromDB = (params: ClearDataFromDBParams) => {
    return new Promise((resolve, reject) => {
        const transaction = params.db.transaction(params.storeName, 'readwrite');
        const store = transaction.objectStore(params.storeName);
        const request = store.clear();
        request.onerror = (event) => {
            reject(event);
        };
        request.onsuccess = (event) => {
            resolve(request.result);
        };
    
    })
}

export const putDataToDB = (params: PutDataToDB) => {
    return new Promise((resolve, reject) => {
        const transaction = params.db.transaction(params.storeName, 'readwrite');
        const store = transaction.objectStore(params.storeName);

        params.data.forEach(item => {
            store.put(item);
        });
        transaction.onerror = (event) => {
            reject(event);
        }
        transaction.oncomplete = (event) => {
            resolve(event);
        }
    })
}

export const deleteDataFromDB = (params: deleteDataFromDBParams) => {
    return new Promise((resolve, reject) => {
        const transaction = params.db.transaction(params.storeName, 'readwrite');
        const store = transaction.objectStore(params.storeName);
        const request = store.delete(params.keyPath);
        request.onerror = (event) => {
            reject(event);
        };
        request.onsuccess = (event) => {
            resolve(request.result);
        };
    
    })
}
