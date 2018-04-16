<template>
    <section class="container">
        <h1 class="title">
            Start Project
        </h1>
        <nuxt-link to="/users">
            Users
        </nuxt-link>
        <nuxt-link to="/login">
            Login
        </nuxt-link>
        <nuxt-link to="/signup">
            Signup
        </nuxt-link>
        <nuxt-link to="/profile">
            Profile
        </nuxt-link>
    </section>
</template>

<style scoped lang="scss">
@import "./assets/css/vars.scss";
.title
{
  margin: 30px 0;
  color: $main-color;
}
</style>
