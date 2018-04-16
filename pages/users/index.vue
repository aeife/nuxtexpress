<template>
  <section class="container">
    <h1 class="title">
      Posts
    </h1>
    <ul class="users">
      <li v-for="(post, index) in posts" :key="index" class="user">
        <nuxt-link :to="{ name: 'users-id', params: { id: index }}">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
    async asyncData () {
        let {data} = await axios.get('/api/v1/posts');
        return { posts: data.posts };
    },
    head () {
        return {
            title: 'Users'
        };
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
