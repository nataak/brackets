module.exports = function check(str, bracketsConfig) {
  let exp = str;
        let vol = Math.floor(exp.length / 2);
        for (let i = 0; i < vol; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                exp = exp.replace(bracketsConfig[j].join(''), '');
            }
        }
        return exp.length == 0;
}
