import axiosClient from "./axiosClient"

const userApi = {
    getAll(params){
        const url = "api/users/";
        return axiosClient.get(url, {params:params})
    },

    get(id) {
        const url = `api/users/${id}/`;
        return axiosClient.get(url)
    },

    add(data) {
        const url = "api/users/";
        return axiosClient.post(url, data)
    },

    update(data){
        const url = `api/users/${data.id}/`;
        return axiosClient.patch(url, data)
    },

    remove(id){
        const url = `api/users/${id}/`;
        return axiosClient.delete(url)
    }
}

export default userApi;