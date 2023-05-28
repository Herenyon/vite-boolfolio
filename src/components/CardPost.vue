<script>
export default {
    name: 'Main',
    data() {
        return {
            imagePath: 'http://127.0.0.1:8000/storage/'
        }
    },
    props: {
        portfs: Object
    }
}
</script>

<template>
    <section>
        <img v-if="portfs.image" :src="this.imagePath + portfs.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ portfs.repo_title }}</h5>
            <p class="card-text">{{ portfs.description.substring(0, 100) }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </section>
</template>