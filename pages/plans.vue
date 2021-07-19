<template>
    <main class="container pg-content">
        <h1 class="title">
            Encuentra el plan que mejor se acomode a tus necesidades
        </h1>
        <div class="columns is-multiline is-mobile plans">
            <div class="column is-one-third plan__item" v-for="(plan, index) in plans" :key="index">
                <Plan :plan="plan" />
            </div>
        </div>
    </main>
</template>

<script>
import Plan from '@/components/Plan.vue';
import plans from '@/constants/plans';

export default {
    components: {
        Plan
    },
    data: function() {
        return {
            plans: plans
        }
    }
}
</script>

<style lang="scss" scoped>
.plan{
    &__item {
        display: flex;
        justify-content: center;
    }
}
</style>
