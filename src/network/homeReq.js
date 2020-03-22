import {request} from './request'


export function getHomeBanner() {
    return request({
        url: 'home/getBannerList',
        data: {
        },
        method: 'post'
    })
}

export function getHomeStatistics() {
    return request({
        url: 'home/getMobileData',
        data: {
        },
        method: 'post'
    })
}

export function getProjectList() {
    return request({
        url: 'home/getProjectList',
        data: {
        },
        method: 'post'
    })
}
export function getCoupeList() {
    return request({
        url: 'home/getDiscoverList',
        data: {
        },
        method: 'post'
    })
}
export function getCaseList() {
    return request({
        url: 'home/getCasesList',
        data: {
        },
        method: 'post'
    })
}
export function getTeamList() {
    return request({
        url: 'home/getExpertTeamList',
        data: {
        },
        method: 'post'
    })
}
export function getVideoList(type) {
    return request({
        url: 'video_main/getList',
        data: {
            type: type
        },
        method: 'post'
    })
}

