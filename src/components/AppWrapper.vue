<template>
    <n-layout has-sider>
      <n-layout-sider
                      bordered
                      collapse-mode="width"
                      :collapsed-width="64"
                      :width="240"
                      :collapsed="collapsed"
                      show-trigger
                      @collapse="collapsed = true"
                      @expand="collapsed = false">
        <n-menu
                :collapsed="collapsed"
                :collapsed-width="64"
                :collapsed-icon-size="22"
                :options="MenuOptions"
                />
      </n-layout-sider>
      <n-layout class="wrap">
        <RouterView></RouterView>
      </n-layout>
    </n-layout>
</template>

<script>
import {ref, defineComponent } from "vue";

import {MenuOptions} from '../menu'

export default defineComponent({
  setup() {
    return {
      MenuOptions,
      collapsed: ref(true),
    };
  }
});
</script>

<style scoped>
.wrap{
  padding: 0 0 120px 0;
  min-height: 90vh;
}
</style>