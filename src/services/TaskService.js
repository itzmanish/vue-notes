import Api from "@/services/Api";

export default {
    fetchTasks() {
        return Api().get('/').then(response => {
            return response
        }).catch(e => {
            console.log(e.response)
        })
    },
    addTask(params) {
        return Api().post('add-todo', params).then(response => {
                return response;
            })
            .catch(error => {
                console.log(error.response)
                return error.response;
            });
    },
    updateTask(params) {
        return Api().put('/' + params.id, params).then(response => {
            return response
        }).catch(e => {
            console.log(e)
            return e.response
        })
    },
    deleteTask(params) {
        return Api().delete('/' + params.id, params).then(response => response).catch(e => e.response)
    }
}