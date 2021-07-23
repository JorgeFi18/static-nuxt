<template>
<div class="container pg-content main">
    <h2 class="subtitle">Deja tus datos y escoje el plan que mas te funcione</h2>
    <div class="form-container">
        <form>
            <div class="field">
                <label for="name" class="label">Nombre</label>
                <div class="control">
                    <input
                        id="name"
                        class="input"
                        type="text"
                        placeholcer="Ingrese su nombre..."
                        v-model="contact.name"
                    />
                </div>
            </div>
             <div class="field">
                <label for="email" class="label">Correo electronico</label>
                <div class="control">
                    <input
                        id="email"
                        class="input"
                        type="text"
                        placeholcer="Ingrese su email..."
                        v-model="contact.email"
                    />
                </div>
            </div>
             <div class="field">
                <label for="phone" class="label">Telefono</label>
                <div class="control">
                    <input
                        id="phone"
                        class="input"
                        type="text"
                        placeholcer="Ingrese su telefono..."
                        v-model="contact.phone"
                    />
                </div>
            </div>
            <div class="field">
                <label for="plan" class="label">Plan de tu interes</label>
                <div class="control">
                    <div class="select" style="width: 100%">
                        <select name="plan" id="plan" style="width: 100%" v-model="contact.plan">
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
                        @click="sendEmail"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </form>
    </div>
    <article class="message is-primary" v-if="showSuccess">
        <div class="message-body">
            Contacto enviado exitosamente!
            Pronto tendras noticias sobre tu proxima subscripcion.
            <br />
            Te invitamos a que sigas conociendo sobre nosotros <NuxtLink to="/">aquí</NuxtLink>.
        </div>
    </article>
    <article class="message is-danger" v-if="showError">
        <div class="message-body">
            El formulario no esta completo
            <br />
            Te sugerimos que ingreses los datos en cada uno de los espacios indicados.
        </div>
    </article>
</div>
</template>

<script>
import plans from '@/constants/plans';
import sendEmail from '@/utils/sendEmail';

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
            contact: {
                name: '',
                email: '',
                phone: ''
            },
            showSuccess: false,
            showError: false
        }
    },
    mounted: function() {
        if(!!this.$route.query.plan) {
            this.contact.plan = this.$route.query.plan;
        }
    },
    computed: {
        planNames: function() {
            return plans.map(p => p.name);
        }
    },
    methods: {
        sendEmail: async function() {
            console.log(this.validateFields());
            if(this.validateFields()) {
                const response = await sendEmail(this.contact);
                if(response.status == 'ok') {
                    this.showSuccess = true;
                    this.cleanFields();
                }
            } else {
                this.showError = true;
                setTimeout(()=>{
                    this.showError = false;
                }, 5000)
            }
        },
        cleanFields: function() {
            this.contact = {
                name: '',
                email: '',
                phone: ''
            }
        },
        validateFields: function() {
            let isValid = true;
            const {name, email, phone, plan} = this.contact;
            console.log(this.contact);
            if (!name || !name.length) {
                isValid = false;
            }
            if (!email || !email.length) {
                isValid = false;
            }

            if (!phone || !phone.length) {
                isValid = false;
            }
            if (!plan || !plan.length) {
                isValid = false;
            }

            return isValid;
        }
    }
}
</script>

<style lang="scss" scoped>
.form-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: rgb(41 41 41 / 83%);;
    padding: 40px;
    border-radius: 25px;
}

.message {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 35px;
}

.label {
    color: #fff;
}
</style>