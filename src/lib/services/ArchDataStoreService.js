import {DataStore} from "@aws-amplify/datastore";
import {Posting} from "../../models";

const ArchDataStoreService = {
    crud: {
        list: async (model) => await DataStore.query(model),
        get: async (model, id) => DataStore.query(model, id),
        create: async (modelObj) => await DataStore.save(modelObj),
        update: async (model, id, data) => {
            const existingObj = await ArchDataStoreService.crud.get(model, id)
            if (!existingObj) return
            return await DataStore.save(
                model.copyOf(existingObj, updated => {
                    Object.assign(updated, data);
                })
            );
        },
        delete: async (model, id) => {
            const existingObj = await ArchDataStoreService.crud.get(model, id)
            if (!existingObj) return
            await DataStore.delete(existingObj);
        },
    },
    models: {
        Posting: {
            model: Posting,
            getAll: async function () {
                return ArchDataStoreService.crud.list(this.model)
            },
            getById: async function (id) {
                return ArchDataStoreService.crud.get(this.model, id)
            },
            create: async function (data) {
                return ArchDataStoreService.crud.create(new this.model(data))
            },
            update: async function (id, data) {
                return ArchDataStoreService.crud.update(this.model, id, data)
            },
            delete: async function (id) {
                return ArchDataStoreService.crud.delete(this.model, id)
            },
        }
    }
};

export default ArchDataStoreService;
