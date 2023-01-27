<template>
    <welcome v-if="!started"></welcome>
    <game v-if="started"></game>
</template>

<script>
import Welcome from "./Welcome.vue";
import Game from "./Game.vue";

import store from "$/store.js";

import '../keyListener.js';

export default {
    computed: {
        started() {
            return store.game.started;
        }
    },
    components: {
        Welcome,
        Game
    }
}
</script>