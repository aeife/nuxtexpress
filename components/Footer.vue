<template>
    <footer>
        <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
        <div v-if="$store.state.auth.loggedIn">{{$store.state.auth.user.email}}</div>
    </footer>
</template>
