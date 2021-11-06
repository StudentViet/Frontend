<template>
    <header>
        <div id="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="font-bold colorPrimary" href="#" style="font-size: 25px;">StudentViet</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="navbar-nav ms-auto">
                            <ul class="d-flex">
                                <div class="icon-btn">
                                    <div class="amount">
                                        <p>2</p>
                                    </div>
                                    <i class="fa fa-bell" style="font-size: 20px"></i>
                                </div>
                                <div class="icon-btn">
                                    <i class="fa fa-gear" style="font-size: 20px"></i>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header-v1'
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
.icon-btn {
    position: relative;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgb(240, 242, 245);
    text-align: center;
    margin-top: 15px;
    margin-left: 10px;
    padding-top: 13px;
    cursor: pointer;
    transition: 0.2s;
}
.icon-btn:hover {
    background: silver;
}
.icon-btn:hover .amount {
    background: #ab261d;
    color: gray;
}
.icon-btn .amount {
    background: red;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    color: white;
    font-size: 13px;
    text-align: center;
    font-weight: bold;
    border-radius: 50%;
    transition: 0.2s;
}

</style>
