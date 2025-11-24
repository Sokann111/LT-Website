import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/NotFound";
import ProductList from "../pages/dashboard/Products/ProductList";
import ProductEdit from "../pages/dashboard/Products/ProductEdit";
import ProductCreate from "../pages/dashboard/Products/ProductCreate";
import CategoryList from "../pages/dashboard/Categories/CategoryList";
import CategoryCreate from "../pages/dashboard/Categories/CategoryCreate";
import CategoryEdit from "../pages/dashboard/Categories/CategoryEdit";

export function AppRouter() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard (will require auth later) */}
      <Route path="/" element={<Dashboard />} />

      <Route path="/products" element={<ProductList />} />  
      <Route path="/products/create" element={<ProductCreate />} />  
      <Route path="/products/edit/:id" element={<ProductEdit />} />  

      <Route path="/categories" element={<CategoryList />} />  
      <Route path="/categories/create" element={<CategoryCreate />} />  
      <Route path="/categories/edit/:id" element={<CategoryEdit />} />  
      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
