import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from "vue-meta";
import light from '@/views/shop/light.vue';
import wareHouse from '@/views/shop/wareHouse.vue';
import mouldRepair from '@/views/shop/mouldRepair.vue';
import smelt from '@/views/shop/smelt.vue';
import blank from '@/views/shop/blank.vue';
import product1 from '@/views/shop/product1.vue';
import product2 from '@/views/shop/product2.vue';
import scrap from '@/views/shop/scrap.vue';
import three from '@/views/shop/three.vue';
import clean from '@/views/shop/clean.vue';
import qc1 from '@/views/shop/qc1.vue';
import qc2 from '@/views/shop/qc2.vue';
Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: '/',
    name: 'light',
    component: light
  },
  {
    path: '/WH',
    name: 'WH',
    component: wareHouse
  },
  {
    path: '/S',
    name: 'S',
    component: smelt
  },
   {
    path: '/MR',
    name: 'MR',
    component: mouldRepair
  },
 {
    path: '/BLANK',
    name: 'BLANK',
    component: blank
  },
  {
    path: '/PRO1',
    name: 'PRO1',
    component: product1
  },
  {
    path: '/PRO2',
    name: 'PRO2',
    component: product2
  },
  {
    path: '/SCRAP',
    name: 'SCRAP',
    component: scrap
  },
  {
    path: '/THREE',
    name: 'THREE',
    component: three
  },
  {
    path: '/CLEAN',
    name: 'CLEAN',
    component: clean
  },
   {
    path: '/QC1',
    name: 'QC1',
    component: qc1
  },
   {
    path: '/QC2',
    name: 'QC2',
    component: qc2
  },
];

const router = new VueRouter({
  // mode:'history',
  routes
});

export default router;
