<template>
    <div id="class">
        <Loader v-if="exercises == null" />
        <div class="content" v-else>
            <div class="container">
                <div style="display: flex; flex-wrap; width: 100%;">
                    <h2 class="text-center"> Bài làm của học sinh </h2>
                    <p style="display: flex;flex-flow: column; justify-content: center;">&nbsp;&nbsp;{{ exercises.length }} Bài làm</p>
                </div>

                <hr/>

                <div class="table-responsive">
                    <table class="table table-striped custom-table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <label class="control control--checkbox">
                                        <input type="checkbox" class="js-check-all" />
                                        <div class="control__indicator"></div>
                                    </label>
                                </th>
                                <th scope="col">#</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Email</th>
                                <th scope="col">Tải bài làm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                scope="row"
                                v-for="(exercise, index) in exercises"
                                v-bind:item="exercise.name"
                                v-bind:key="exercise.email"
                                v-bind:id="`user-${exercise.email}`"
                            >
                                <td>
                                    <label class="control control--checkbox">
                                        <input type="checkbox" />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>
                                    {{ index + 1 }}
                                </td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="name">{{ exercise.name }}</a>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="name">{{ exercise.email }}</a>
                                    </div>
                                </td>
                                <td><a style="cursor: pointer" class="colorPrimary" @click="download(exercise)">Tải</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 v-if="!exercises.length" class="colorGray text-center">Lớp học chưa có bài tập nào</h3>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import ExerciseController from "../../controllers/exercise.controller.js";
    import Loader from '../loading/loading-v1.vue';

    export default {
        name: "GradeExercise",
        data() {
            return {
                idExercise: this.$route.params.id,
                exercises: null
            }
        },
        components: {
            Loader
        },
        watch: {
            '$route': async function () {
                await this.checkLogged();
                this.getExercises();
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

                if (response.role_id == 2) {
                    this.$router.push({
                        name: "exam"
                    });
                    return;
                }
            },
            async downloadExercise(file_name) {
                const response = await ExerciseController.downloadStudentExercise(file_name);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }

                this.$snotify.success("Tải bài tập thành công");

                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', file_name);
                document.body.appendChild(link);
                link.click();
            },
            async download(exercise) {
                exercise.file.map(x => this.downloadExercise(x));
            },
            async getExercises() {
                const response = await ExerciseController.listStudent(this.idExercise);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    this.$router.push({
                        name: "setting"
                    });
                    return;
                }

                this.exercises = response.data.data;
            }
        },
        async mounted() {
            await this.checkLogged();
            this.getExercises();
        }
    }
</script>

<style scope>

</style>
