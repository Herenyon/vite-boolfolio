<script>
import axios from 'axios';
export default {
    name: "DetailPage",
    data() {
        return {
            imagePath: 'http://127.0.0.1:8000/storage/',
            apiBaseUrl: "http://127.0.0.1:8000/api",
            apiUrl: {
                portfs: "/portf"
            },
            port: null,
        }
    },
    methods: {
        getPortfs() {
            axios.get(this.apiBaseUrl + this.apiUrl.portfs + "/" + this.$route.params.slug)
                .then((response) => {
                    this.port = response.data.result;
                    console.log(response)

                }).catch((error) => {
                    console.log(error);
                    if (error.response.status === 404) {
                        console.log(error)
                        this.$router.push({ name: 'not-found' });
                    }

                });
        }

    },
    created() {
        this.getPortfs()
    }
}

</script>
<template>
    <section>
        <div class="container">
            <div class="card-img-top">
                <img v-if="port.image" :src="this.imagePath + port.image" class="card-img-top" alt="...">
            </div>
            <h2>{{ port.repo_title }}</h2>
            <p>{{ port.description }}</p>
        </div>
    </section>
</template>
