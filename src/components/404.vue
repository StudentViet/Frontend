<template>
    <div id="NotFound">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="center-template">
                        <img src="../assets/images/404.png" height="400" />
                        <h2 class="colorGray d-block"> 404 TRANG KHÔNG TỒN TẠI </h2>
                        <h2 class="colorGray d-block"> QUAY LẠI <router-link to="/" class="font-bold"> TRANG CHỦ </router-link> </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Not Found"
    }
</script>

<style>

#NotFound img {
    pointer-events: none;
}

#NotFound h2 {
    font-weight: bold;
}

.center-template {
    padding: 40px 15px;
    text-align: center;
}
.center-template {
    margin-top:15px;
    margin-bottom:15px;
}

</style>
