<template functional>
  <div
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <p class="font-mono -mb-2"><span class="text-red-600">b</span>erlin</p>
    <p class="font-mono -mb-2">
      <span class="text-red-600">a</span>rchitectural
    </p>
    <p class="font-mono"><span class="text-red-600">n</span>etwork</p>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>
