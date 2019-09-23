<template>
  <div id="home">
    <logo class="text-3xl" />
    <nav class="flex items-center justify-end">
      <ul class="font-mono text-right">
        <li class="mr-4">events</li>
        <li class="mr-4">jobs</li>
        <li class="mr-4">database</li>
        <li class="mr-4">forum</li>
        <li class="mr-4">about</li>
      </ul>
    </nav>
    <div id="spacer"></div>
    <div class="h-full mt-8">
      <section id="news" class="mb-12">
        <h2 class="font-mono text-xl mb-4">
          <span class="text-red-600">ban</span>events<span class="ml-4"
            >&rarr;</span
          >
        </h2>
        <event-list :event-list="eventList" />
      </section>
      <!-- <section id="events">
      <h2 class="font-mono text-xl mb-4">
        <span class="text-red-600">ban</span>events
      </h2>
      <ul>
        <li v-for="x in 4" :key="x" class="flex mb-4">
          <p class="flex flex-col items-center mr-2">
            <span>23rd</span>
            <span class="uppercase">Oct</span>
          </p>
          <div>
            <h3 class="font-semibold">event title {{ x }}</h3>
            <p>
              event excerpt
            </p>
          </div>
        </li>
      </ul>
    </section> -->
      <section id="jobs" class="mb-12">
        <h2 class="font-mono text-xl mb-4">
          <span class="text-red-600">ban</span>jobs<span class="ml-4"
            >&rarr;</span
          >
        </h2>
        <ul>
          <li v-for="x in 4" :key="x" class="flex flex-wrap mb-4">
            <figure class="flex-none mr-4 mt-1">
              <img
                src="https://via.placeholder.com/50"
                width="50px"
                height="50px"
              />
            </figure>
            <div>
              <h3 class="font-semibold">Office name {{ x }}</h3>
              <p>
                job excerpt
              </p>
              <p>
                Posted on 26.09
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section id="database" class="mb-12">
        <h2 class="font-mono text-xl mb-4">
          <span class="text-red-600">ban</span>database<span class="ml-4"
            >&rarr;</span
          >
        </h2>
        <ul>
          <li v-for="x in 4" :key="x" class="flex flex-wrap mb-4">
            <figure class="flex-none mr-4 mt-1">
              <img
                src="https://via.placeholder.com/50"
                width="50px"
                height="50px"
              />
            </figure>
            <div>
              <h3 class="font-semibold">Office name {{ x }}</h3>
              <p>
                short description
              </p>
              <p>
                typologies, stats, etc
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import events from '~/content/events.json'
import Logo from '~/components/Logo'
import EventList from '~/components/EventList'
export default {
  name: 'Home',
  components: {
    EventList,
    Logo
  },
  data() {
    return {
      eventList: []
    }
  },
  async asyncData({ app, error }) {
    async function awaitImport(event) {
      const wholeMD = await import(`~/content/events/${event.slug}.md`)
      return {
        attributes: wholeMD.attributes,
        link: event.slug
      }
    }

    const eventList = await Promise.all(
      events.map((event) => awaitImport(event))
    ).then((res) => {
      return {
        eventList: res
      }
    })
    return eventList
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style>
@screen sm {
  #home {
    display: grid;
    grid-template-columns: auto 1fr;
  }
}
</style>
