<template>
  <section class="container">
    <h1 class="title">
      Login
    </h1>
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button @click="login">Login</button>
    <nuxt-link to="/profile">
        Profile
    </nuxt-link>
    <nuxt-link to="/signup">
        signup
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
            title: 'Login'
        };
    },
    methods: {
        async login () {
            const login = await this.$store.dispatch('user/login', {email: this.email, password: this.password});
            if (login) {
                this.$router.replace({ path: 'profile' });
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
