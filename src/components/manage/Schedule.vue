<template>
    <div id="schedule">
        <div class="mt-5 container-fluid">
            <header>
                <h1 class="text-center">TUẦN NÀY</h1>
                <div class="row d-none d-sm-flex p-1 text-black">
                    <h5 class="col-sm p-1 text-center"></h5>
                    <h5 class="col-sm p-1 text-center">Thứ 2</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 3</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 4</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 5</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 6</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 7</h5>
                </div>
            </header>
            <div class="row border border-right-0 border-bottom-0">
                <div class="day2 col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                    <h5 class="row align-items-center">
                        <small class="col d-sm-none text-center text-muted"></small>
                        <span class="col-1"></span>
                    </h5>
                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white">Tiết 1</a>
                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white">Tiết 2</a>
                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white">Tiết 3</a>
                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white">Tiết 4</a>
                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white">Tiết 5</a>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate">
                    <h5 class="row align-items-center">
                        <small class="col d-sm-none text-center text-muted">Thứ 2</small>
                        <span class="col-1"></span>
                    </h5>
                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" >
                        Môn Toán <br/> <br/>
                        7:30 am
                    </a>

                    <div class="event event-none"></div>

                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white">
                        Môn Sinh <br/> <br/>
                        9:30 am
                    </a>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate">
                    <h5 class="row align-items-center">
                        <small class="col d-sm-none text-center text-muted">Thứ 3</small>
                        <span class="col-1"></span>
                    </h5>
                    <!-- <p class="d-sm-none">Không có tiết nào</p> -->
                    <div class="event event-none"></div>

                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white">
                        Môn Ngữ Văn <br/> <br/>
                        8:30 am
                    </a>

                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" >
                        Môn Ngữ Văn <br/> <br/>
                        9:30 am
                    </a>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate">
                    <h5 class="row align-items-center">
                        <small class="col d-sm-none text-center text-muted">Thứ 4</small>
                        <span class="col-1"></span>
                    </h5>
                    <!-- <p class="d-sm-none">Không có tiết nào</p> -->
                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" >
                        Môn Địa <br/> <br/>
                        7:30 am
                    </a>

                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" >
                        Môn Tiếng Anh <br/> <br/>
                        8:30 am
                    </a>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                    <h5 class="row align-items-center">
                        <small class="col d-sm-none text-center text-muted">Thứ 5</small>
                        <span class="col-1"></span>
                    </h5>
                    <!-- <p class="d-sm-none">Không có tiết nào</p> -->
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                    <h5 class="row align-items-center">
                        <small class="col d-sm-none text-center text-muted">Thứ 6</small>
                        <span class="col-1"></span>
                    </h5>
                    <!-- <p class="d-sm-none">Không có tiết nào</p> -->

                    <div class="event event-none"></div>

                    <div class="event event-none"></div>

                    <div class="event event-none"></div>

                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" >
                        Môn Ngữ Văn <br/> <br/>
                        10:30 am
                    </a>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                    <h5 class="row align-items-center">
                        <small class="col d-sm-none text-center text-muted">Thứ 7</small>
                        <span class="col-1"></span>
                    </h5>
                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" >
                        Môn Ngữ Văn <br/> <br/>
                        7:30 am
                    </a>

                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" >
                        Môn Toán <br/> <br/>
                        8:30 am
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Schedule'
    }
</script>

<style>
@media (max-width:575px) {
    .display-4 {
        font-size: 1.5rem;
    }
    .day a {
        background: rgb(30, 136, 229) !important;
        font-size: 18px;
        cursor: pointer;
    }
    .day h5 {
        background-color: #f8f9fa;
        padding: 3px 5px 5px;
        margin: -8px -8px 8px -8px;
    }
    .date {
        padding-left: 4px;
    }
}

@media (min-width: 576px) {
    .day2 a {
        height: 100px;
        background: white !important;
        font-size: 25px;
        color: black !important;
        text-align: center;
        margin-top: 20px;
    }

    .day a {
        height: 100px;
        background: rgb(30, 136, 229) !important;
        font-size: 18px;
        margin-top: 15px !important;
        cursor: pointer;
    }

    .event-none {
        height: 100px;
        background: white !important;
        margin-top: 15px;
    }
}
</style>
