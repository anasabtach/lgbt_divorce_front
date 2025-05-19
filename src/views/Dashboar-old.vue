<template>
  <div>
    <h1>Dashboard</h1>
    <DashboardLeft />
    <DashboardRight />
  </div>
</template>

<script>
import DashboardLeft from '@/components/DashboardLeft.vue';
import DashboardRight from '@/components/DashboardRight.vue';

export default {
  name: 'Dashboard',
  components: {
    DashboardLeft,
    DashboardRight,
  },
};
</script>
