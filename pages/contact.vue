<template>
<div class="container">
    <h2 class="subtitle">Deja tus datos y escoje el plan que mas te funcione</h2>
    <div class="form-container">
        <form>
            <div class="field">
                <label for="name" class="label">Nombre</label>
                <div class="control">
                    <input id="name" class="input" type="text" placeholcer="Ingrese su nombre..." />
                </div>
            </div>
             <div class="field">
                <label for="email" class="label">Correo electronico</label>
                <div class="control">
                    <input id="email" class="input" type="text" placeholcer="Ingrese su email..." />
                </div>
            </div>
             <div class="field">
                <label for="phone" class="label">Telefono</label>
                <div class="control">
                    <input id="phone" class="input" type="text" placeholcer="Ingrese su telefono..." />
                </div>
            </div>
            <div class="field">
                <label for="plan" class="label">Plan de tu interes</label>
                <div class="control">
                    <div class="select" style="width: 100%">
                        <select name="plan" id="plan" style="width: 100%" v-model="selected">
                            <option disabled value="">Seleccione un plan</option>
                            <option v-for="(plan, index) in planNames" :key="index" :value="plan">
                                {{plan}}
                            </option>
                        </select>
                    </div>
                </div>
                <br>
                <div class="control">
                    <button
                        role="button"
                        type="button"
                        class="button is-success is-fullwidth"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import plans from '@/constants/plans';

export default {
    head: {
        title: 'Power GYM Contact Page',
        meta: [
        { name: 'description', content: 'Ponte en contacto con Power GYM'}
        ]
    },
    name: 'Contact',
    data: function () {
        return {
            selected: ''
        }
    },
    mounted: function() {
        if(!!this.$route.query.plan) {
            this.selected = this.$route.query.plan;
        }
    },
    computed: {
        planNames: function() {
            return plans.map(p => p.name);
        }
    }
}
</script>

<style lang="scss" scoped>
.form-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #f15048d4;
    padding: 40px;
    border-radius: 25px;
}
</style>