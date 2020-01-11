const fs = require('fs');
const localArrayFactory = require('./factories/localarray.factory');

describe('Test Array Content',  function(){
  describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
      const output = [{ id: 3, url: "https://www.link3.dev" }];
      expect(filterByTerm(input, "link")).toEqual(output);
      expect(filterByTerm(input, "LINK")).toEqual(output);
    });
  });

  describe("Search array", () => {
    test("it should contain partial array content", () => {

        const output = [{ id: 3, url: "https://www.link3.dev" }];
        let result = Array();

        result = localArrayFactory.getLocalArray();

        //console.log(result);
        expect.arrayContaining(output);

    });
  });

  describe("Search array", () => {
    it('should contain partial array content', () => {

        const output = [{ id: 3, url: "https://www.link3.dev" }];
        let result = Array();

        result = localArrayFactory.getLocalArray();

        //console.log(result);
        expect.arrayContaining(output);

    });
  });

  function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }
});

