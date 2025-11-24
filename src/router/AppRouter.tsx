import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";  
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/NotFound";
import ProductList from "../pages/dashboard/Products/ProductList";
import CategoryList from "../pages/dashboard/Categories/CategoryList";
import CategoryCreate from "../pages/dashboard/Categories/CategoryCreate";
import CategoryEdit from "../pages/dashboard/Categories/CategoryEdit";
import ProductEdit from "../pages/dashboard/Products/ProductEdit";
import ProductCreate from "../pages/dashboard/Products/ProductCreate";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();  
  if (!user) {
    return <Navigate to="/login" />; 
  }
  return children; 
};

export function AppRouter() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes (will require auth) */}
      <Route
        path="/"
        element={
         
            <Dashboard />
         
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/create"
        element={
          <ProtectedRoute>
            <ProductCreate />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/edit/:id"
        element={
          <ProtectedRoute>
            <ProductEdit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/categories"
        element={
          <ProtectedRoute>
            <CategoryList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/categories/create"
        element={
          <ProtectedRoute>
            <CategoryCreate />
          </ProtectedRoute>
        }
      />
      <Route
        path="/categories/edit/:id"
        element={
          <ProtectedRoute>
            <CategoryEdit />
          </ProtectedRoute>
        }
      />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
