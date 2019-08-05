<template>
    <div>
        <p v-for="i in 100" v-bind:key="i.id">i</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
