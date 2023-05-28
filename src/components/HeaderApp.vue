<script>
export default {
    name: 'Header'
}
</script>

<template>
    <header class="container">
        <h1>Header</h1>
        <nav>
            <ul class="list-unstyled m-0 p-0 gap-2 d-flex">
                <li>
                    <router-link :to="{ name: 'portf' }" class="nav-link">
                        Portf
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }" class="nav-link">
                        About
                    </router-link>
                </li>

            </ul>
        </nav>
    </header>
</template>