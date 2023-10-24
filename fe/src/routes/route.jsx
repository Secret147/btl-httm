import MainSample from '../components/manage_sample/MainSample';
import AddSample from '../components/manage_sample/addSample';
import SampleDetail from '../components/manage_sample/sampleDetail';
import AddLabel from '../pages/AddLabel';
import DetailLabel from '../pages/DetailLabel';
import EditLabel from '../pages/EditLabel';
import ListModel from '../pages/ListModel.jsx/ListModel';

import ManagerLabel from '../pages/ManagerLabel/ManagerLabel';
import Model from '../pages/Model/Model';
import TrainModel from '../pages/TrainModel/TrainModel';
import Layout from '../components/layout/index';
import Home from '../components/home/home';
const publicRoutes = [
    { path: '/', component: ManagerLabel },
    { path: '/editlabel', component: EditLabel },
    { path: '/addlabel', component: AddLabel },
    { path: '/detaillabel', component: DetailLabel, layout: null },
    { path: '/model', component: Model, layout: null },
    { path: '/trainmodel', component: TrainModel },
    { path: '/listmodel', component: ListModel },
    { path: '/manage-sample', component: MainSample, layout: Layout },
    { path: '/sample/:id', component: SampleDetail, layout: Layout },
    { path: '/add-sample', component: AddSample, layout: Layout },
    { path: '/camera', component: Home, layout: Layout },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
