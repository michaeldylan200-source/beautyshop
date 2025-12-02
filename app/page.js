'use client';

import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { ref, onValue } from 'firebase/database';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Example: Fetch data from Firebase
    const productsRef = ref(db, 'products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setProducts(Object.values(data));
      }
    });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Adani Beauty Shop</h1>
      <p>Your beauty and wellness destination</p>
      
      <div>
        <h2>Products</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product.name || 'Product'}</li>
            ))}
          </ul>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}
