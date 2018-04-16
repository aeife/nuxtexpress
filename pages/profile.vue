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
export default {
    middleware: 'auth',
    async asyncData ({app}) {
        return { user: await app.$axios.$get('/api/v1/userdata') };
    },
    head () {
        return {
            title: 'Profile'
        };
    },
    methods: {
        async logout () {
            await this.$auth.logout();
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
