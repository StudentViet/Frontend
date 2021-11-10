<template>
    <div id="class">
        <Loader v-if="!classRoom" />
        <div class="container" v-else>
            <div class="row">
                <div class="col-md-12">
                    <div class="center-template">
                        <h2> {{ classRoom.name }} </h2>
                        <div style="display: flex; flex-wrap; width: 120px; margin: 0 auto">
                            <div class="icon-btn m-auto mt-4" title="Thêm học sinh vào lớp học" data-bs-toggle="modal" data-bs-target="#addStudentModal">
                                <i class="fa fa-plus"></i>
                            </div>
                            <div class="icon-btn m-auto mt-4" title="Link tham gia lớp học" @click="copyLink()">
                                <i class="ri-links-line"></i>
                            </div>
                        </div>
                        <br/>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Xóa</th>
                                </tr>
                            </thead>
                            <tbody v-if="classRoom.data.length">
                                <tr
                                    v-for="(user, index) in classRoom.data.filter(x => x.email != this.$store.state.user.email)"
                                    v-bind:item="user.name"
                                    v-bind:key="user.name"
                                >
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td><button class="btn btn-danger">Xóa</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 v-if="!classRoom.data.filter(x => x.email != this.$store.state.user.email).length" class="colorGray">Chưa có học sinh trong lớp học</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addStudentModal" tabindex="-1" aria-labelledby="addStudentModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">THÊM HỌC SINH</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body mb-5" style="padding: 10px">
                        <form @submit.prevent="AddStudent()">

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
    import ClassController from "../../controllers/class.controller.js";
    import Loader from '../loading/loading-v1.vue';

    export default {
        name: "Class",
        data() {
            return {
                idClass: this.$route.params.id,
                classRoom: null
            }
        },
        components: {
            Loader
        },
        watch: {
            '$route': async function() {
                await this.checkLogged();
                this.getClass();
            }
        },
        methods: {
            async getClass() {
                const response = await ClassController.getClass(this.idClass);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    this.$router.push({
                        name: "setting"
                    });
                    return;
                }

                this.classRoom = response.data.data[0];
            },
            async copyLink() {
                let inputc = document.body.appendChild(document.createElement("input"));
                inputc.value = `http://localhost:8080/tham-gia-lop-hoc/${this.classRoom.idClass}`;
                inputc.focus();
                inputc.select();
                document.execCommand('copy');
                inputc.parentNode.removeChild(inputc);

                this.$snotify.success("Đã copy link tham gia lớp học");
            },
            async checkLogged() {
                const response = await this.$store.dispatch('getUser');

                if (!response) {
                    this.$router.push({
                        name: "login"
                    });
                    return;
                }

                if (response.role_id == 2) {
                    this.$router.push({
                        name: "exam"
                    });
                    return;
                }
            }
        },
        async mounted() {
            await this.checkLogged();
            this.getClass();
        }
    }
</script>

<style>

</style>
