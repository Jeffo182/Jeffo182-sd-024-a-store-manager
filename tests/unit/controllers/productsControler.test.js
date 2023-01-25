const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const productsService = require("../../../src/services/productsService");
const productsControler = require("../../../src/controllers/productsControler");
const products = require("../mocks/products");

chai.use(sinonChai);
const { expect } = chai;

describe("Controller of products", function () {
  describe("List all products", function () {
    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      sinon.restore();
    });
    it("Should return all orders", async function () {
      sinon.stub(productsService, "getAll").resolves(products.products);
      await productsControler.getAll(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products.products);
    });
    it("ordersby id sucess", async function () {
      const req = {
        params: { id: 1 },
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsService, "getProductById")
        .resolves({ type: null, message: products.findProduct });
      await productsControler.getProductById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products.findProduct);
    });
  });
});
