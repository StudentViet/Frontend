<template>
    <header>
        <div id="header-v2">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <router-link class="font-bold colorPrimary" to="/" style="font-size: 25px;"><img src="../../assets/logoNavbar.jpg" height="60"/></router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="nav navbar-nav mx-auto navbar-center">
                                <li><a href="#" class="colorBlack">Giới thiệu</a></li>
                                <li><a href="#" class="colorBlack">Tính năng</a></li>
                                <li><a href="#" class="colorBlack">Liên hệ</a></li>
                            </ul>
                            <ul class="navbar-nav navbar-right">
                                <li v-if="!user"><router-link to="/dang-nhap" class="font-bold">ĐĂNG NHẬP</router-link></li>
                                <li style="margin-left: 15px" v-if="!user"><router-link to="/dang-ky" class="font-bold">ĐĂNG KÝ</router-link></li>
                                <li style="margin-left: 15px"><router-link to="/quan-ly" class="font-bold" v-if="user">QUẢN LÝ</router-link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header-v2',
        data() {
            return {
                user: null
            }
        },
        async mounted() {
            await this.checkLogged();
        },
        methods: {
            async checkLogged() {
                this.user = await this.$store.dispatch('getUser') || null;
            }
        }
    }
</script>

<style>

nav {
    padding: 20px;
}

.bg-light {
    background: white !important;
}

.logo {
    font-size: 25px;
    font-weight: 500px;
    letter-spacing: 1px;
}

#header-v2 .navbar-center a {
    color: #545050;
}

#header-v2 .navbar-right a {
    font-size: 22px;
}

</style>
