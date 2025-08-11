import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  const { products, status, error } = useSelector((x) => x.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex flex-wrap gap-[16px] w-[95%] m-auto md:w-[90%] lg:w-[85%] py-5">
          {status === "loading" ? (
            <Loading />
          ) : (
            products.map((prod) => {
              return (
                <ProductCard
                  key={prod.id}
                  id={prod.id}
                  image={prod.image}
                  title={prod.title}
                  category={prod.category}
                  price={prod.price}
                />
              );
            })
          )}
          {error && (
            <div className="w-full text-center text-red-600 font-bold py-4 bg-white dark:bg-gray-900">
              {t("ERROR ! Please Try Again")}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
