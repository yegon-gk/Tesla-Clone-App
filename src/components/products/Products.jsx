import React from 'react';
import Product from '../product/Product';
import './Products.css';
import cybertruckImage from '../../assets/cybertruck.jpg';
import modelSImage from '../../assets/model-s.jpg';
import modelXImage from '../../assets/model-x.jpg';
import teslaCharger from '../../assets/tesla-charger.jpg';

const products = [
  {
    id: 1,
    image: cybertruckImage,
    title: 'Cybertruck',
    description:
      'The Tesla Cybertruck is an electric pickup with a stainless-steel exoskeleton, rapid 0-60 mph in 2.9 seconds, 500+ mile range, and versatile 14,000-pound towing capacity.',
    price: 8999999.99,
  },
  {
    id: 2,
    image: modelSImage,
    title: 'Model S',
    description:
      'The Model S is an electric sedan renowned for rapid 0-60 mph acceleration, an impressive range up to X miles, cutting-edge technology, and luxurious performance, redefining driving excellence.',
    price: 5999999.99,
  },
  {
    id: 3,
    image: modelXImage,
    title: 'Model X',
    description:
      'The Model X is an electric SUV with iconic falcon-wing doors, swift 0-60 mph acceleration, remarkable range up to X miles, and versatile seating options for an exceptional driving experience.',
    price: 7999999.99,
  },
  {
    id: 4,
    image: teslaCharger,
    title: 'Charger',
    description:
      'The Tesla charger provides Level 2 charging at up to 48 amps, delivering around 44 miles of range per hour of charging. It is designed for fast and convenient home charging, keeping your Tesla ready to go.',
    price: 499999.99,
  },
  {
    id: 5,
    image: cybertruckImage,
    title: 'Cybertruck',
    description:
      'The Cybertruck is an all-electric pickup with stainless-steel design, 0-60 mph in 2.9 seconds, 500+ mile range, and up to 14,000 lbs towing capacity, redefining utility and performance.',
    price: 7899999.99,
  },
  {
    id: 6,
    image: modelSImage,
    title: 'Model S',
    description:
      'The Model S is a high-performance electric sedan featuring 0-60 mph in 1.98 seconds, extended range up to 405 miles, cutting-edge tech, and luxurious design, setting new electric mobility standards.',
    price: 3999999.99,
  },
];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
