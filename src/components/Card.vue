<template>
    <div class="CardBox">
        <button class="btn btn-primary" @click="playCard">{{ audio ? "Stop" : "Play" }} Lesson</button>

        <hr>

        <div class="Card" @click="playCard" v-if="audio || !cardPlayed">
            <img :src="cardImage" class="CardImage">
        </div>

        <div class="Items" v-if="!audio && cardPlayed">
            <div v-for="item in items" :class="['Item', itemsPlayed.includes(item.audio) ? 'ItemPlayed' : '']" @click="playItem(item)">
                <img :src="itemImagePath + '/' + item.image">
            </div>
        </div>
    </div>
</template>

<script>
import store from "$/store.js";

export default {
    computed: {
        card() {
            return store.card;
        },

        cardImage() {
            return "/cards/" + store.currentCategory.name + "/" + this.card.image;
        },

        cardPlayed() {
            return store.game.cardPlayed;
        },

        itemImagePath() {
            return "/cards/" + store.currentCategory.name;
        },

        items() {
            return this.card.items;
        },

        itemsPlayed() {
            return store.game.itemsPlayed;
        },

        audio() {
            return store.game.audio;
        },

        opened() {
            return store.game.opened;
        }
    },

    methods: {
        playCard() {
            if(store.game.audio)
                store.stopCard();
            else
                store.playCard();
        },

        playItem(item) {
            return store.playItem(item);
        }
    }
}
</script>

<style scoped>
.Items {
    max-width: 90%;
    margin: 30px;
    margin-left: 100px;
}
.Item {
    max-width: 200px;
    max-height: 200px;
    float: left;
    margin: 15px;
    cursor: pointer;
}

.Item img {
    max-width: 200px;
    max-height: 200px;
}

.ItemPlayed {
    opacity: 0.5;
}

</style>