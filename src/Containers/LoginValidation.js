
const LoginValidation = (contactUsInfo,cacheUserName,cachePassword) => {

    return new Promise((resolve, reject) => {
        let errors = {};

        if (contactUsInfo.userName === "" || contactUsInfo.userName === undefined) {
            errors['userName'] = 'Please type your user name.';
            reject(errors);
        }
        if (contactUsInfo.password === "" || contactUsInfo.password === undefined) {
            errors['password'] = 'Please type your password. ';
            reject(errors);
        }
        if (contactUsInfo.password !== cachePassword || contactUsInfo.userName !== cacheUserName) {
            errors['inCorrect'] = 'Your user name or password is incorrect ';
            reject(errors);
        }
        resolve(true)
    })
}

export default LoginValidation;