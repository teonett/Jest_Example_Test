const supertest = require('supertest')

var LocalArrayFactory = function() {

    this.getLocalArray = async() => {

        return  input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
          ]
    }
}

module.exports = new LocalArrayFactory()