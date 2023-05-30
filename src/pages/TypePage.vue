<script>
import axios from 'axios';
import store from '../store';
export default {
    name: "TypePage",
    data() {
        return {
            store,
            type: null,
        }
    },
    methods: {
        getType() {

            axios.get(`${this.store.apiBaseUrl}/types/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response)
                    this.type = response.data.result
                })
        }
    },
    created() {
        this.getType();
    }
}

</script>

<template>
    <div class="container">
        <h2>TypePage: {{ this.type.name }}</h2>
        <ul>
            <li v-for="types in type.portfs">{{ types.repo_title }}</li>
        </ul>
    </div>
</template>