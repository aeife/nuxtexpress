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
    // middleware: 'unauth',
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
            try {
                this.loading = true;
                await this.$auth.login({
                    data: {email: this.email, password: this.password}
                });
            } catch (error) {
                console.log('login error', error);
            }
            this.loading = false;
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
