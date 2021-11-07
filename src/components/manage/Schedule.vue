<template>
    <div id="schedule">
        <div class="mt-5 container-fluid">
            <header>
                <div class="row d-none d-sm-flex p-1 text-black">
                    <h5 class="col-sm p-1 text-center">Thứ 2</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 3</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 4</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 5</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 6</h5>
                    <h5 class="col-sm p-1 text-center">Thứ 7</h5>
                </div>
            </header>
            <div class="row border border-right-0 border-bottom-0">
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                    <h5 class="row align-items-center">
                        <span class="date col-1">29</span>
                        <small class="col d-sm-none text-center text-muted">Sunday</small>
                        <span class="col-1"></span>
                    </h5>
                    <p class="d-sm-none">No events</p>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                    <h5 class="row align-items-center">
                        <span class="date col-1">30</span>
                        <small class="col d-sm-none text-center text-muted">Monday</small>
                        <span class="col-1"></span>
                    </h5>
                    <p class="d-sm-none">No events</p>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                    <h5 class="row align-items-center">
                        <span class="date col-1">31</span>
                        <small class="col d-sm-none text-center text-muted">Tuesday</small>
                        <span class="col-1"></span>
                    </h5>
                    <p class="d-sm-none">No events</p>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                    <h5 class="row align-items-center">
                        <span class="date col-1">1</span>
                        <small class="col d-sm-none text-center text-muted">Wednesday</small>
                        <span class="col-1"></span>
                    </h5>
                    <p class="d-sm-none">No events</p>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                    <h5 class="row align-items-center">
                        <span class="date col-1">2</span>
                        <small class="col d-sm-none text-center text-muted">Thursday</small>
                        <span class="col-1"></span>
                    </h5>
                    <p class="d-sm-none">No events</p>
                </div>
                <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                    <h5 class="row align-items-center">
                        <span class="date col-1">3</span>
                        <small class="col d-sm-none text-center text-muted">Friday</small>
                        <span class="col-1"></span>
                    </h5>
                    <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" title="Test Event 1">Test Event 1</a>
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
    .day {
        height: 500px;
    }
}
</style>
