import {axiosService} from "./axiosService";
import {urls} from "../configs/urls"

const usersService = {
    getAll: () => axiosService.get(urls.users),
    create: (newUser) => axiosService.post(urls.users, newUser)
}

export {
    usersService
}