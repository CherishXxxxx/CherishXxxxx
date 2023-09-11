<template>
  <main>
    <h1>柱状图</h1>
    <Histogram :height="360" />
    <h2>多列柱状图</h2>
    <MultipleHistogram :height="360" />
    <h2>柏拉图</h2>
    <PlatoHistogram :height="360" />
    <h1>条形图</h1>
    <Bar :height="360" />
    <h2>堆叠条形图</h2>
    <StackBar :height="360" />
    <h2>多行条形图</h2>
    <MultipleBar :height="360" />
    <h1>折线图</h1>
    <myLine :height="360" />
    <h2>多行折线图</h2>
    <MultipleLine :height="360" />
    <h2>堆叠区域图</h2>
    <StackLine :height="360" />
    <h1>饼图</h1>
    <Pie :height="360" />
    <h2>南丁格尔玫瑰图</h2>
    <RosePie :height="360" />
    <h1>环图</h1>
    <Ring :height="360" />
    <h2>玫瑰图</h2>
    <RoseRing :height="360" />
    <h1>地图</h1>
    <Map :height="760" />
    <h2>迁移图</h2>
    <MoveMap :height="760" />
    <h1>仪表盘</h1>
    <lightGauge :height="360" />
    <darkGauge :height="360" />
  </main>
</template>

<script>
import Bar from '@/components/Charts/Bar/Index';
import MultipleBar from '@/components/Charts/Bar/Multiple';
import StackBar from '@/components/Charts/Bar/Stack';

import Histogram from '@/components/Charts/Histogram/Index';
import MultipleHistogram from '@/components/Charts/Histogram/Multiple';
import PlatoHistogram from '@/components/Charts/Histogram/Plato';

import myLine from '@/components/Charts/Line/Index';
import MultipleLine from '@/components/Charts/Line/Multiple';
import StackLine from '@/components/Charts/Line/Stack';


import Pie from '@/components/Charts/Pie/Index';
import RosePie from '@/components/Charts/Pie/Rose';


import Ring from '@/components/Charts/Ring/Index';
import RoseRing from '@/components/Charts/Ring/Rose';

import Map from '@/components/Charts/Map/Index';
import MoveMap from '@/components/Charts/Map/Move';

import lightGauge from '@/components/Charts/Gauge/Light';
import darkGauge from '@/components/Charts/Gauge/Dark';

export default {
  name: 'Home',
  components: {
    lightGauge,
    darkGauge,
    Bar,
    MultipleBar,
    StackBar,
    myLine,
    MultipleLine,
    StackLine,
    Pie,
    RosePie,
    Ring,
    RoseRing,
    Histogram,
    MultipleHistogram,
    PlatoHistogram,
    Map,
    MoveMap
  }
};
</script>
