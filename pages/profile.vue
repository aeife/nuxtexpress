<template>
  <section class="container">
    <h1 class="title">
      Profile
    </h1>
    <p>Email: {{user.email}}</p>
    <button @click="logout">Logout</button>
  </section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
    middleware: 'auth',
    async asyncData () {
        let {data} = await axios.get('/api/v1/userdata');
        console.log('user', data);
        return { user: data };
    },
    head () {
        return {
            title: 'Profile'
        };
    },
    methods: {
        async logout () {
            await this.$store.dispatch('user/logout');
            this.$router.replace({ path: 'login' });
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
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
