import {request} from './request'


export function reqCaseCat() {
    return request({
        url: 'home/getCasesCat',
        data: {
        },
        method: 'post'
    })
}
export function reqCaseList(params) {
    return request({
        url: 'home/getCasesList',
        data: {
            title:params.title,
            project_id: params.project_id,
            page: 1,
            num: 10,
        },
        method: 'post'
    })
}