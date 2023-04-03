import Slider from "../../components/Slider/Slider";
import './HomePage.scss';
import Category from '../../components/Category/Category';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, fetchProductsByCategory } from "../../store/categorySlice";
import { useEffect } from "react";
import SingleCategory from '../../components/SingleCategory/SingleCategory';
import { fetchProducts } from "../../store/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const {data:categories, status:categoryStatus} = useSelector((state) => state.category)
  const {catProductAll:productsByCategory, catProductAllStatus } = useSelector((state) => state.category)
  const {data:products, state:productStatus} = useSelector((state) => state.product)

  useEffect(()=>{
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1,'all'));
    dispatch(fetchProductsByCategory(2,'all'));
    dispatch(fetchProducts());
  },[])

  return (
    <div className="home-page">
      <Slider />
      <Category categories={categories} status={categoryStatus} />
      <ProductList products={products} status={productStatus} />
    </div>
  )
}
export default HomePage