const { expect } = chai;
const chai = require('chai');
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const productsModels = require('../../../src/models')
const { connection } = require('../../../src/models/connection')
const products = require('../mocks/products.json');

describe('Model of products', function () {
  describe('List all produtos', function () {
    it('Should return all orders', async function () {
      sinon.stub(connection, "execute").resolves([products]);
      const result = await productsModels.getAll();
      expect(result).to.be.deep.equal(products);
    })
  })
})
