// eslint-disable-next-line
const { Faker, en } = require('@faker-js/faker');

const customFaker = new Faker({ locale: [en] });
customFaker.seed(123456789);

// eslint-disable-next-line no-undef
module.exports = () => {
  const data = { products: [] };

  for (let i = 0; i < 100; i++) {
    data.products.push({
      id: customFaker.string.uuid(),
      name: customFaker.commerce.productName(),
      priceMin: customFaker.commerce.price(),
      priceMax: customFaker.commerce.price(),
      description: Array.from({ length: 5 }, () => customFaker.commerce.productDescription()).join('. '),
      image: {
        '200x200': customFaker.image.urlLoremFlickr({ width: 200, height: 200 }),
        '300x300': customFaker.image.urlLoremFlickr({ width: 300, height: 300 }),
        '400x400': customFaker.image.urlLoremFlickr({ width: 400, height: 400 }),
        '600x600': customFaker.image.urlLoremFlickr({ width: 600, height: 600 }),
      },
      rating: customFaker.number.int({ min: 1, max: 5 }),
      count: customFaker.number.int({ min: 1, max: 1000 }),
    });
  }

  return data;
};
