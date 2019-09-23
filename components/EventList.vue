<template>
  <ul>
    <li v-for="(event, index) in eventList" :key="index" class="mb-4 flex">
      <p class="uppercase font-mono text-sm mr-4 mt-1">
        {{ event.attributes.date | formatDate('dd.MM') }}<br />{{
          event.attributes.date | formatDate('HH:mm')
        }}
      </p>
      <div>
        <h3 class="font-semibold mr-4">{{ event.attributes.title }}</h3>
        <p>{{ event.attributes.type }} @ {{ event.attributes.venue }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'EventList',
  props: {
    eventList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped></style>
