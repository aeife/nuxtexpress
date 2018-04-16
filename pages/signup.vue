<template>
    <section class="container">
        <h1 class="title">
            Signup
        </h1>
        <input type="email" v-model="email">
        <input type="password" v-model="password">
        <button @click="signup">Signup</button>
        <nuxt-link to="/login">
            Login
        </nuxt-link>
        <nuxt-link to="/profile">
            Profile
        </nuxt-link>
    </section>
</template>

<script>
export default {
    data () {
        return {
            email: null,
            password: null
        };
    },
    head () {
        return {
            title: 'Signup'
        };
    },
    methods: {
        async signup () {
            try {
                await this.$axios.$post('/api/v1/signup', {email: this.email, password: this.password});
                await this.$auth.fetchUser();
            } catch (error) {
                console.log('login error', error);
            }
        }
    }
};
</script>

<style scoped lang="scss">
@import "./assets/css/vars.scss";
.title
{
  margin: 30px 0;
  color: $main-color;
}
</style>
