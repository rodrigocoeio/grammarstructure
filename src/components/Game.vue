<template>
    <controls></controls>

    <br>

    <card></card>
</template>

<script>
import store from "$/store.js";

import Controls from "./Controls.vue";
import Card from "./Card.vue"

window.store = store;


export default {
    components: {
        Controls,
        Card
    }
}
</script>