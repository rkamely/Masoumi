
const FooterValidation = (contactUsInfo) => {

    return new Promise((resolve, reject) => {

        const emailCheckRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        let errors = {};

              if (contactUsInfo.email === "" || contactUsInfo.email === undefined) {
            errors['email'] = 'Please type your email.';
            reject(errors);
        } else if (emailCheckRegex.test(contactUsInfo.email)) {
            errors['email'] = 'your email address is not valid';
            reject(errors);
        }

        if (contactUsInfo.message === "" || contactUsInfo.message === undefined) {
            errors['message'] = 'Please type your message. ';
            reject(errors);
        }
        resolve(true)
    })
}

export default FooterValidation;