<script>
import axios from 'axios';

import CardPost from '../components/CardPost.vue';
export default {
    name: "HomePage",
    components: {
        CardPost,
    },
    data() {
        return {
            apiBaseUrl: "http://127.0.0.1:8000/api/",
            apiUrl: {
                portfs: "portf"
            },
            portf: []
        };
    },
    methods: {
        getPortf() {
            axios.get(this.apiBaseUrl + this.apiUrl.portfs).then((response) => {
                this.portf = response.data.results;
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    created() {
        this.getPortf();
    },
    components: { CardPost }
}

</script>
<template>
    <main class="container">
        <div>
            <h2>HomePage</h2>

            <h1>Main</h1>
            <div class="col col-md-4 d-flex" v-for="portfo in portf">
                <CardPost :portfs="portfo" />
            </div>
        </div>
    </main>
</template>