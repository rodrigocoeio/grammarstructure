<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <!-- Logo -->
            <a id="logo" class="navbar-brand">
                <img src="/images/grammarstructure.png" width="36" />
            </a>

            <!-- Navbar Toogler -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <a class="navbar-brand" href="#">
                    <img src="/images/grammarstructure.png" width="36" />
                </a>
            </button>
            <!-- Navbar -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- Category Name -->
                    <li class="nav-item CategoryName" :title="categoryName">
                        {{ categoryName }}
                    </li>

                    <!-- Previous Card -->
                    <li class="nav-item">
                        <button id="previousCardButton" class="btn btn-warning" :disabled="cardIndex == 0"
                            @click="previousCard">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                            Previous Card
                        </button>
                    </li>

                    <li class="CardIndex nav-item">
                        &nbsp;&nbsp;
                        {{ cardsNumber > 0 ? cardIndex + 1 : 0 }} / {{ cardsNumber }}
                    </li>

                    <!-- Next Card -->
                    <li class="nav-item">
                        <button id="nextCardButton" class="btn btn-success" :disabled="((cardIndex + 1) >= cardsNumber)"
                            @click.stop.prevent="nextCard">
                            Next Card
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </button>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <!-- Quit Game -->
                    <li class="nav-item">
                        <button class="btn btn-danger" @click="quitGame" style="font-size:24px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            Quit Game
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import store from "$/store";

export default {
    data() {
        return {
            configs: store.configs
        }
    },

    computed: {
        game() {
            return store.game;
        },

        categoryName() {
            return store.categoryName;
        },

        configs() {
            return store.configs;
        },

        cardIndex() {
            return store.game.cardIndex;
        },

        cardsNumber() {
            return store.cardsNumber;
        }
    },

    methods: {
        playAudio() {
            $("#audioButton").trigger("blur");
            store.playCardAudio();
        },

        toggleImage() {
            $("#imageButton").trigger("blur");
            this.game.image = !this.game.image;
        },

        toggleName() {
            $("#nameButton").trigger("blur");
            this.game.name = !this.game.name;
        },

        toggleTranslation() {
            $("#translationButton").trigger("blur");
            this.game.translation = !this.game.translation;
        },

        previousCard() {
            $("#previousCardButton").trigger("blur");
            store.previousCard();
        },

        nextCard() {
            $("#nextCardButton").trigger("blur");
            store.nextCard();
        },

        quitGame() {
            store.quitGame();
        }
    },
};
</script>

<style scoped>
button {
    margin-left: 15px;
    font-size: 20px;
}

.StartGame {
    margin: auto;
    margin-left: calc(50% - 100px);
}

.CategoryName {
    font-size: 24px;
    font-weight: bolder;
    padding-right: 15px;
    width: 300px;
    height: 30px;
    overflow: hidden;
}

.CardIndex {
    font-size: 24px;
}

.nav-item {
    margin-left: 10px;
}

.GameSound {
    font-size: 24px;
    margin-top: 6px;
}
</style>