import{ init, send } from 'emailjs-com';
init("user_nJIUJTl68IHhkitKxTPTj");

const sendEmail = async (contact) => {
    const params = {
        send_to: contact.email,
        name: contact.name,
        plan: contact.plan
    };

    return send('service_th34l2k', 'template_lxzcemk', params)
        .then(() => ({status: 'ok'}))
        .catch(() => ({status: 'error'}));
}

export default sendEmail;