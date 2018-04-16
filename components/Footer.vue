<template>
  <footer>
    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
    <div v-if="$store.state.user.data">{{$store.state.user.data.email}}</div>
  </footer>
</template>
