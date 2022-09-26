import { useState } from "react";
import { ProductsLayout } from "../../layouts/MainLayout";
import { ProductComponent } from "../home";

function ProductSection() {
  return (
    <section className="container py-14">
      <h1 className="main-heading mb-7">All Products</h1>
      <div className="grid grid-cols-4">
        <ProductComponent />
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <ProductsLayout>
      <ProductSection />
    </ProductsLayout>
  );
}
