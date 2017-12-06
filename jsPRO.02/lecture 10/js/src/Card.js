module.exports = function (value) {
    return {
        value: value,
        cost: () => value.split('').slice(0,value.length-1).join('')*1,
        show: () => {
            console.log(value);
        },
    };
};