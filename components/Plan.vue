<template>
    <div class="plan-card">
        <div class="plan-card__header">
            {{plan.name}}
        </div>
        <div class="plan-card__body">
            <p>Que incluye:</p>
            <ul>
                <li v-for="(i, index) in plan.includes" :key="index">
                    {{i}}
                </li>
            </ul>
        </div>
        <div class="plan-card__price">
            Q{{plan.price}}.00
            <button>Contratar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Plan',
    props: ['plan']
}
</script>

<style lang="scss" scoped>
    .plan-card {
        width: 350px;
        border-radius: 16px;
        margin-bottom: 25px;

        &__header {
            background-color: #c92017;
            color: #fff;
            font-size: 16px;
            text-align: center;
            border-radius: 16px 16px 0 0;
            padding: 10px 0;
            font-size: 1.2rem;
            text-transform: uppercase;
        }
        &__body {
            background-color: #fff;
            padding: 10px;
            ul {
                list-style: disc;
                margin-left: 20px;
                margin-top: 10px;
            }
        }

        &__price {
            background-color: #fff;
            padding: 10px;
            text-align: center;
            font-size: 2rem;
            color: #c92017;
            border-radius: 0 0 16px 16px;
            display: flex;
            flex-direction: column;

            button {
                border: none;
                border-radius: 16px;
                background-color: #c92017;
                color: #fff;
                padding: 10px;
                cursor: pointer;
                font-size: 1.2rem;
                margin-top: 15px;
            }
        }
    }
</style>
