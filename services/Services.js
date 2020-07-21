
import React from 'react';

const ShowOverlay = {
    darkOverlay(bool) {
        if (bool) {
            Hey.pop('darkOverlay', "hidden")
        } else {
            Hey.push('darkOverlay', "hidden")
        }

    }
}
export { ShowOverlay };

const Hey = {
    push(el, cl) {
        return document.getElementById(el).classList.add(cl);
    },
    pop(el, cl) {
        return document.getElementById(el).classList.remove(cl);
    },
    element(el) {
        return document.getElementById(el);
    }

}
export { Hey }

const Find = (el) => {
    return document.getElementById(el);
}
export { Find }

export const FormatPhoneNo = (phoneNumberString) => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}

const Success = {
    alert(msg) {
        const ele = document.getElementById('success-alert').classList;
        ele.remove('hidden');
        document.getElementById('s_msg_place').textContent = msg;
        setTimeout(() => (ele.add('hidden')), 1000);
    }
}
export { Success }

const SuccessAlert = (props) => {
    return (
        <div className="custom_s_alert hidden" id="success-alert">
            <strong>Success! </strong>
            <span id="s_msg_place"></span>

        </div>
    )
}
export { SuccessAlert }

const Error = {
    alert(msg) {
        const ele = document.getElementById('err-alert').classList;
        ele.remove('hide_notification');
        document.getElementById('e_msg_place').textContent = msg;
        setTimeout(() => (ele.add('hide_notification')), 1000);
    }
}
export { Error }

const ErrorAlert = (props) => {
    return (
        <div className="custom_e_alert hide_notification" id="err-alert">
            <strong>Error! </strong>
            <span id="e_msg_place"></span>
        </div>
    )
}
export { ErrorAlert }


export const CapsFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}