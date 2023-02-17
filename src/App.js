import React, { useState, useEffect } from 'react';
import './App.css';
import { AdvancedSearch, ContentTables } from './components';
import { LoaderComponent } from './elements';
import axios from "axios";
import { useQueries } from "@tanstack/react-query";

function App() {

  const [categories, setCategories] = useState({})
  const [products, setProducts] = useState({})

  const [categoriesQuery, productsQuery] = useQueries({
    queries: [
      {
        queryKey: ["categories"],
        queryFn: () =>
          axios
            .get('https://dummyjson.com/products/categories')
            .then((res) => res.data),
      },

      {
        queryKey: ["products"],
        queryFn: () =>
          axios
            .get('https://dummyjson.com/products')
            .then((res) => res.data.products),
      },
    ],
  });

  useEffect(() => {
    if(categoriesQuery && productsQuery) {
      setCategories(categoriesQuery?.data);
      setProducts(productsQuery?.data);
    }
  }, [categoriesQuery, productsQuery])

  if(categoriesQuery.isLoading) return <LoaderComponent loading={categoriesQuery.isLoading} />
  
  if(productsQuery.isLoading) return <LoaderComponent loading={productsQuery.isLoading} />


  if (categoriesQuery.error)
    return 'An error has occurred: ' + categoriesQuery.error.message;

  if (productsQuery.error)
    return 'An error has occurred: ' + productsQuery.error.message;

  return (
    <div className="App">
      <ContentTables goods={products} categories={categories} />
      <AdvancedSearch goods={products} categories={categories} />
    </div>
  );
}

export default App;
