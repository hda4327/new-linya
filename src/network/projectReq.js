import {request} from "./request";

export function reqProjectList() {
    return request({
        url: 'home/getProjectList',
        data: {

        },
        method: 'post'
    })
}
export function reqPictureList() {
    return request({
        url: 'home/getImg',
        data: {

        },
        method: 'post'
    })
}
export function reqVideoList() {
    return request({
        url: 'home/getVideo',
        data: {

        },
        method: 'post'
    })
}
export function reqProductList() {
    return request({
        url: 'home/projectGoodsList',
        data: {

        },
        method: 'post'
    })
}
