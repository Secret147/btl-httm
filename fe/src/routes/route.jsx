import AddLabel from '../pages/AddLabel';
import DetailLabel from '../pages/DetailLabel';
import EditLabel from '../pages/EditLabel';
import ManagerLabel from '../pages/ManagerLabel/ManagerLabel';
const publicRoutes = [
    { path: '/', component: ManagerLabel, layout: null },
    { path: '/editlabel', component: EditLabel, layout: null },
    { path: '/addlabel', component: AddLabel, layout: null },
    { path: '/detaillabel', component: DetailLabel, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
