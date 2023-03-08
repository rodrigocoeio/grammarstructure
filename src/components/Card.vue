<template>
    <div class="CardBox">

        <div class="Card" @click="playCard" v-if="audio || !cardPlayed">
            <img :src="cardImage" class="CardImage">
        </div>

        <div class="Items" v-if="!audio && cardPlayed">
            <div v-for="item in items" :class="['Item', itemsPlayed.includes(item.audio) ? 'ItemPlayed' : '']"
                @click="playItem(item)">
                <img :src="itemImagePath + '/' + item.image">
            </div>
        </div>

        <button class="PlayLessonButton" @click="playCard">{{ audio ? "Stop" : "Play" }} Lesson</button>
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
            if (store.game.audio)
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
button {
    padding: 8px;
    font-size: 14px;
    border-radius: 15px;
    cursor: pointer;
    margin-left: 15px;
    margin-bottom: 15px;
}

button:not([disabled]):hover {
    background-color: chartreuse;
    text-shadow: white 3px 0 10px;
    box-shadow: 3px 3px gray;
}

.CardBox {
    position: relative;
    margin: auto;
    max-height: calc(100% - 100px);
    width: fit-content;
    min-width: 1000px;
    height: calc(100% - 100px);
    display: flex;
    place-content: center;
    align-items: center;
}

.Card {
    margin: auto;
    display: grid;
    width: fit-content;
    max-height: calc(100% - 70px);
    cursor: pointer;
    border-radius: 20px;
    border: 3px dashed black;
    box-sizing: border-box;
    overflow: hidden;
    text-shadow: gray 3px 10px 10px;
}

.Items {
    max-width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}

.Item {
    max-width: 200px;
    max-height: 200px;
    margin: auto;
    cursor: pointer;
    border-radius: 30px;
    display: flex;
    place-items: center;
    border: 2px dashed black;
    overflow: hidden;
}

.Item:not(.ItemPlayed):hover {
    border: 2px dashed chartreuse;
    text-shadow: white 3px 0 10px;
    box-shadow: 3px 3px gray;
}

.Item img {
    max-width: 200px;
    max-height: 200px;
}

.ItemPlayed {
    opacity: 0.5;
}
</style>