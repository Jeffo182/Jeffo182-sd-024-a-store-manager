const products = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const nameProductMock = {
  name: "Testepro",
};

const findProduct = {
  id: 1,
  name: "Martelo de Thor",
};

const returnGetById = {
  type: null,
  message: findProduct,
};

const errReturnGetByid = {
  type: 404,
  message: "Product not found",
};

module.exports = {
  products,
  nameProductMock,
  returnGetById,
  errReturnGetByid,
};
