<template>
  <Card title="合作伙伴" v-bind="$attrs">
    <CardGrid v-for="item in navItems" :key="item">
      <span class="flex flex-col items-center">
        <Icon :icon="item.icon" :color="item.color" size="70" />
        <span class="text-md">{{ item.title }}</span>
      </span>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  import { navItems } from './data';
  import { Icon } from '/@/components/Icon';

  const CardGrid = Card.Grid;
</script>
