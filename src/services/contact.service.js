import createApiClient from './api.service'

class ContactService {
    constructor(baseURL = '/api/packets') {
        this.api = createApiClient(baseURL);
    }

    async getAll() {
        return (await this.api.get('/manage/contact')).data;
    }

    async create(data) {
        return (await this.api.post('/manage/contact', data)).data;
    }

    // async deleteAll() {
    //     return (await this.api.delete('/')).data;
    // }

    // async get(id) {
    //     return (await this.api.get(`/${id}`)).data;
    // }

    // async update(id, data) {
    //     return (await this.api.put(`/${id}`, data)).data;
    // }

    // async delete(id) {
    //     return (await this.api.delete(`${id}`)).data;
    // }
}

export default new ContactService();