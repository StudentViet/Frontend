<template>
    <div id="exercise">
        <Loader v-if="!classRooms"/>
        <div class="container" v-else>
            <div class="row">
                <div class="col-md-12">
                    <div class="center-template">
                        <div v-if="!classRooms">
                            <img class="text-center" src="../../assets/images/empty.png" height="250"/>
                            <h2 class="colorGray text-center mt-4">Bạn chưa tham gia lớp học nào</h2>
                            <div class="icon-btn m-auto mt-4" title="Tham gia lớp học" data-bs-toggle="modal" data-bs-target="#joinClassModal">
                                <i class="fa fa-plus"></i>
                            </div>
                        </div>
                        <div v-else>
                            <div class="icon-btn m-auto mt-4" title="Tham gia lớp học" data-bs-toggle="modal" data-bs-target="#joinClassModal">
                                <i class="fa fa-plus"></i>
                            </div>
                            <div
                                class="classRoom mb-5"
                                v-for="(classRoom, index) in classRooms"
                                v-bind:item="classRoom.name"
                                v-bind:index="index"
                                v-bind:key="classRoom.idClass"
                            >
                                <router-link :to="`/quan-ly/lam-bai-tap/${classRoom.idClass}`" style="color: black !important">
                                    <h2> {{ classRoom.name }} </h2>
                                    <p> {{(classRoom.exercises > 0) ? `Lớp học có ${classRoom.exercises} bài tập` : "Lớp học chưa có bài tập nào"}} </p>
                                    <hr/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="joinClassModal" tabindex="-1" aria-labelledby="joinClassModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body mb-5" style="padding: 10px">
                        <form @submit.prevent="AddClass()">
                            <div class="group">
                                <input
                                    v-model="idClass"
                                    type="text"
                                    required
                                    oninvalid = "this.setCustomValidity('Vui lòng nhập ID lớp học')"
                                    oninput="this.setCustomValidity('')"
                                />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>ID lớp học</label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import ManageController from "../../controllers/manage.controller.js";
    import ClassController from "../../controllers/class.controller.js";

    import Loader from '../loading/loading-v1.vue';

    export default {
        name: 'Exercise',
        data() {
            return {
                idClass: null,
                classRooms: null,
            }
        },
        components: {
            Loader
        },
        watch: {
            '$route': async function () {
                await this.checkLogged();
                this.getClass();
            }
        },
        methods: {
            async checkLogged() {
                const response = await this.$store.dispatch('getUser');

                if (!response) {
                    this.$router.push({
                        name: "login"
                    });
                    return;
                }

                if (response.role_id == 1) {
                    this.$router.push({
                        name: "setting"
                    });
                    return;
                }
            },
            async AddClass() {
                try {
                    var response = await ClassController.joinClass(this.idClass);
                } catch (err) {
                    this.$snotify.error("Không thể tham gia lớp học");
                }

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }
                this.$snotify.success(response.data.message);
                this.getClass();
            },
            async getClass() {
                const response = await ManageController.getClass();
                console.log(response);
                this.classRooms = response.data.data.length ? response.data.data : null;
            }
        },
        async mounted() {
            await this.checkLogged();
            this.getClass();
        }
    }
</script>

<style>

.classRoom {
    text-align: left;
}

.classRoom h2 {
    font-size: 30px;
}

</style>
