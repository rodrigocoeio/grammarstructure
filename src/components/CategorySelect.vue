<template>
    <select id="categoryField" ref="select" :class="[pleaseSelectCategory ? 'PleaseSelectCategory' : '']"
        v-model="categoryName" @change="selectCategory">
        <option value="0" disabled>{{ placeholder }}</option>
        <option v-if="category" value="-1">..</option>
        <option v-for="category, index in     computedCategories" :value="index">
            {{ category.name }}
            <span v-if="category.categories && Object.keys(category.categories).length > 0">>></span>
        </option>
    </select>
</template>

<script>
import store from "$/store.js";

export default {
    props: ['categories'],

    data() {
        return {
            category: store.game.category,
            categoryName: "0"
        }
    },

    computed: {
        pleaseSelectCategory() {
            return store.game.pleaseSelectCategory;
        },

        placeholder() {
            return !this.category ? "Choose a Category" : this.category.name;
        },

        hasSubCategories() {
            return this.currentCategory && this.currentCategory.categories ? Object.keys(this.currentCategory.categories).length > 0 : false;
        },

        currentCategory() {
            return this.computedCategories[this.categoryName];
        },

        computedCategories() {
            if (this.category)
                return this.category.categories;

            return this.categories;
        }
    },

    mounted() {
        if (!store.game.category)
            this.selectCategory();

        this.$refs.select.focus();
    },

    methods: {
        selectCategory() {
            if (this.categoryName === "-1") {
                this.category = false;
                this.categoryName = "0";
                store.game.category = false;
                return false;
            }

            const currentCategory = this.currentCategory;
            if (currentCategory) {
                if (Object.keys(currentCategory.categories).length > 0) {
                    this.category = this.currentCategory;
                    this.categoryName = "0";
                }
                if (Object.keys(currentCategory.cards).length > 0) {
                    store.selectCategory(currentCategory);
                } else {
                    store.game.category = false;
                }
            }

        }
    }
}
</script>

<style scoped>
select {
    display: block;
    padding: 20px;
    border-radius: 15px;
    font-size: 24px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0 auto;
    margin-bottom: 15px;
    cursor: pointer;
    border: 3px solid black;
}

select:hover {
    background-color: chartreuse;
    text-shadow: white 3px 0 10px;
    box-shadow: 3px 3px gray;
}

.PleaseSelectCategory {
    border: 3px solid red;
}
</style>