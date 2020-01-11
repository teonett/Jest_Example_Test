
var ArithmFactory = function() {

    this.addition = function(a, b) {
        return (a + b)
    }

    this.subtration = function(a, b) {
    return (a - b)
    }

    this.multiplication = function(a, b) {
    return (a * b)
    }

    this.division = function(a, b) {
    return (a / b)
    }
}

module.exports = new ArithmFactory()