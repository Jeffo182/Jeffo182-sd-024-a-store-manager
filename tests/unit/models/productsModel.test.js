const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { connection } = require("../../../src/models/connection");
const productsModels = require("../../../src/models/productsModel");
const { products, nameProductMock } = require("../mocks/products");
const { expect } = chai;

describe("Model of products", function () {
  describe("List all products", function () {
    afterEach(() => {
      sinon.restore();
    });
    it("Should return all orders", async function () {
      sinon.stub(connection, "execute").resolves([products]);
      const result = await productsModels.getAll();
      expect(result).to.be.deep.equal(products);
    });
  });
  describe("List products by id", function () {
    afterEach(() => {
      sinon.restore();
    });
    it("Should return a single product", async function () {
      sinon.stub(connection, "execute").resolves([[products[1]]]);
      const result = await productsModels.getProductById(2);
      expect(result).to.be.deep.equal(products[1]);
    });
  });
  describe("Create a Product", function () {
    afterEach(() => {
      sinon.restore();
    });
    it("Should return the new order id", async function () {
      sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);
      const result = await productsModels.createProduct(nameProductMock);
      expect(result).to.be.equal(4);
    });
  });
});
