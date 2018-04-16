<template>
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-half-tablet is-one-quarter-desktop">
                <h1 class="title">
                    Login <font-awesome-icon icon="plus" />
                </h1>
                <form v-on:submit.prevent="login">
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="email" placeholder="Email" v-model="email">
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="user" />
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password" v-model="password">
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="lock" />
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button is-success" @click="login" :class="{'is-loading': loading}">
                                Login
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>

        <nuxt-link to="/profile">
            Profile
        </nuxt-link>
        <nuxt-link to="/signup">
            SignUp
        </nuxt-link>
    </section>
</template>

<script>
export default {
    // middleware: 'unauth',
    data () {
        return {
            email: null,
            password: null,
            loading: false
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
