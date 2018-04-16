<template>
    <div>
        <nuxt-link to="/">
            <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
        </nuxt-link>
        <nuxt/>
        <my-footer/>
    </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue';

export default {
    components: {
        MyFooter
    }
};
</script>

<style>
.logo {
    margin: 0 auto;
    display: block;
}
</style>
