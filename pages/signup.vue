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
            const signup = await this.$store.dispatch('signup', {email: this.email, password: this.password});
            if (signup) {
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
