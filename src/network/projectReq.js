import {request} from "./request";

export function reqProjectList() {
    return request({
        url: 'home/getProjectList',
        data: {

        },
        method: 'post'
    })
}
export function reqPictureList(class_id) {
    return request({
        url: 'home/getImg',
        data: {
            class_id
        },
        method: 'post'
    })
}
export function reqVideoList(params) {
    return request({
        url: 'home/getVideo',
        data: params,
        method: 'post'
    })
}
export function reqProductList(params) {
    return request({
        url: 'home/projectGoodsList',
        data: params,
        method: 'post'
    })
}
