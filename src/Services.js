import iDB from './IndexedDb';

export async function getSuites() {
    return await iDB.read('TestSuits');
}

export function getFiltersList(filterString) {
    return filterString.split(',').map(f => f.trim()).filter(Boolean);
}

export function getId() {
    return Math.random().toString(36).substring(2, 15)
}