const errorMap = [
  {
    status: 422,
    message: '"name" length must be at least 5 characters long',
  },
  {
    status: 400,
    message: '"name" is required',
  },
  { status: 400, message: '"quantity" is required' },
  { status: 400, message: '"productId" is required' },
  { status: 422, message: '"quantity" must be greater than or equal to 1' },
  { status: 404, message: 'Product not found' },
];

const mapError = (msgError) => {
  const aux = errorMap.find((element) => element.message === msgError);
  if (!aux) {
    return {
      status: 500,
      message: 'Erro inesperado',
    };
  }
  return aux;
};

module.exports = {
  mapError,
};
