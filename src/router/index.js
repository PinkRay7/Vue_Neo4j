import VueRouter from 'vue-router'

import Analysis from '../pages/Analysis'
import BasicInfo from '../pages/BasicInfo'
import LinesManage from '../pages/LinesManage'
import ShiftSearch from '../pages/ShiftSearch'
import StationSearch from '../pages/StationSearch'

import AllStations from '../pages/subPages/StationSearch/AllStations'
import DirectStation from '../pages/subPages/StationSearch/DirectStation'
import LineStations from '../pages/subPages/StationSearch/LineStations'
import MinPath from '../pages/subPages/StationSearch/MinPath'
import StatLines from '../pages/subPages/StationSearch/StatLines'

import AddLine from '../pages/subPages/LinesManage/AddLine'
import ChangeLine from '../pages/subPages/LinesManage/ChangeLine'
import DeleteLine from '../pages/subPages/LinesManage/DeleteLine'

//配置路由
export default new VueRouter({
    routes:[//一级路由
        {
            path: '/analysis',
            component: Analysis
        },
        {
            path: '/basicInfo',
            component: BasicInfo
        },
        {
            path: '/linesManage',
            component: LinesManage,
            children: [//二级路由
                {
                    path: 'addLine',
                    component: AddLine
                },
                {
                    path: 'changeLine',
                    component: ChangeLine
                },
                {
                    path: 'deleteLine',
                    component: DeleteLine
                }
            ]
        },
        {
            path: '/shiftSearch',
            component: ShiftSearch
        },
        {
            path: '/stationSearch',
            component: StationSearch,
            children:[
                {
                    path: 'allStations',
                    component: AllStations
                },
                {
                    path: 'directStation',
                    component: DirectStation
                },
                {
                    path: 'lineStations',
                    component: LineStations
                },
                {
                    path: 'minPath',
                    component: MinPath
                },
                {
                    path: 'statLines',
                    component: StatLines
                }
            ]
        }
    ]
})