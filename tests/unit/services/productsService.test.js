
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;

const productsModels = require("../../../src/models/productsModel");
const productsService = require("../../../src/services/productsService");
const products = require("../mocks/products");

chai.use(sinonChai);

describe("Service of products", function () {
  describe("List all products", function () {
    afterEach(() => {
      sinon.restore();
    });
    it("Should return all orders", async function () {
      sinon.stub(productsModels, "getAll").resolves(products);
      const result = await productsService.getAll();
      expect(result).to.be.deep.equal(products);
    });
  });
  describe("List products by id", function () {
    afterEach(() => {
      sinon.restore();
    });
      it("Test getProductById product", async function () {
        sinon
          .stub(productsModels, "getProductById")
          .resolves(products.findProduct);

        const result = await productsService.getProductById(1);

        expect(result).to.deep.equal(products.returnGetById);
      });

      it("Test getProductById Error", async function () {
        sinon.stub(productsModels, "getProductById").resolves(undefined);

        const result = await productsService.getProductById(999);

        expect(result).to.deep.equal(products.errReturnGetByid);
      });
  });
});
