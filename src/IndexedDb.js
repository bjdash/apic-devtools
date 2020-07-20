import { openDB } from 'idb';

const dbPromise = openDB('apic', 11, {
    upgrade(db) {
        var projectsStore = db.createObjectStore('Projects', { keyPath: '_id' });
        projectsStore.createIndex('_created', '_created', { unique: false });
        projectsStore.createIndex('_id', '_id', { unique: true });
    },
});

const idbKeyval = {
    async insert(table, value) {
        return (await dbPromise).add(table, value);
    },

    async upsert(table, value) {
        return (await dbPromise).put(table, value);
    },

    async read(table) {
        return (await dbPromise).getAll(table);
    },

    async readSorted(table, field, order) {
        if (order === 'asc') {
            return (await dbPromise.getAllFromIndex(table, field));
        } else {
            return (await dbPromise.getAllFromIndex(table, field)).reverse();
        }
    },

    async delete(table, id) {
        return (await dbPromise).delete(table, id);
    },

    //TODO: check if the repeat can be avoided
    async deleteMulti(table, ids) {
        var db = await dbPromise;
        return await Promise.all(
            ids.map(id => {
                return db.delete(table, id);
            })
        )
    },

    //TODO: read via specified key
    async findByKey(table, key, value) {
        return (await dbPromise).get(table, value);
    },

    //TODO: Check if extra is used anywhere
    async getByIds(table, key, ids, extra) {
        var db = await dbPromise;
        return await Promise.all(
            ids.map(id => {
                return db.get(table, id);
            })
        )
    },

    async clear(table) {
        return (await dbPromise).clear(table);
    },
};

export default idbKeyval;
