<template>
    <main class="container pg-content">
        <h1 class="title">
            Encuentra el plan que mejor se acomode a tus necesidades
        </h1>
        <div class="columns is-multiline plans">
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
    head: {
        title: 'Power GYM Planes',
        meta: [
        { name: 'description', content: 'Conociendo los planes que Power GYM ofrece'}
        ]
    },
    components: {
        Plan
    },
    data: function() {
        return {
            plans: []
        }
    },
    mounted: function() {
        fetch('https://fast-reaches-71593.herokuapp.com/api/plans')
        .then(data => data.json())
        .then(plans => {
            this.plans = plans
        })
        .catch(e => console.error(e));
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
