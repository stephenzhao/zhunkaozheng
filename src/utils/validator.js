/**
var validator = new Validator({
    username: [
        Validator.required('请输入您的用户名'),
    ]
});

validator.validate(formData)
*/

class Validator {
    constructor (fields) {
        this.fields = fields;
    }

    validate (value) {
        var fields = this.fields;
        var keys = Object.keys(fields);

        return new Promise(function (res, rej) {
            var key, rules, rule;
            for (var i = 0; i < keys.length; i++) {
                key = keys[i];
                rules = fields[key];

                if (!Array.isArray(rules)) {
                    rules = [rules];
                }

                for (var j = 0; j < rules.length; j++) {
                    rule = rules[j];
                    try {
                        rule(value[key]);
                    } catch (ex) {
                        rej(ex);
                        return;
                    }
                }
            }

            res(value);
        });
    }
}

export default Validator;

export function required (msg) {
    return function (value) {
        var error = new Error(msg);

        if (Array.isArray(value) && value.length) {
            return;
        }

        if (typeof value === 'undefined' || value === null) {
            throw error;
        }
    };
}

export function maxLength (maxLength, msg) {
    return function (value) {
        if (!value || value.length > maxLength) {
            throw new Error(msg);
        }
    };
}

export function minLength (minLength, msg) {
    return function (value) {
        if (!value || value.length < minLength) {
            throw new Error(msg);
        }
    };
}

export function max (max, msg) {
    return function (value) {
        if (value > max) {
            throw new Error(msg);
        }
    };
}

export function min (min, msg) {
    return function (value) {
        if (value < min) {
            throw new Error(msg);
        }
    };
}

export function regexp (re, msg) {
    return function (value) {
        if (!re.test(value)) {
            throw new Error(msg);
        }
    };
}

export function chineseCitizenIdNumber (msg) {
    return function (value) {
        var error = new Error(msg);
        if (!value || value.length !== 18) {
            throw error;
        }
    };
}

export function format (format, msg) {
    var re = null;

    if (format === 'email') {
        re = /^[_a-z0-9\-]+(\.[_a-z0-9\-]+)*@[a-z0-9\-]+(\.[a-z0-9\-]+)*(\.[a-z]+)$/;
    } else if (format === 'phone') {
        re = /^1[34578]\d{9}$/;
    } else if (format === 'number') {
        re = /^[+-]?[0-9]*$/;
    } else if (format === 'chinese_english') {
        re = /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z]+$/;
    }
    if (!re) {
        throw new Error('UNKNOW_FORMAT_ERROR');
    }

    return regexp(re, msg);
}