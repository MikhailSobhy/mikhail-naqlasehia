import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../Redux/singleProductSlice";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";

export default function Product() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { product, status, error } = useSelector((x) => x.singleProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);
  return (
    <>
      {error && (
        <div className="w-full text-center text-red-600 font-bold py-4 bg-white dark:bg-gray-900">
          {t("ERROR ! Please Try Again")}
        </div>
      )}
      {status === "loading" ? (
        <Loading />
      ) : (
        status === "success" && (
          <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-between flex-col md:flex-row w-[95%] m-auto md:w-[90%] lg:w-[85%] pt-5 bg-white dark:bg-gray-900">
              <div className="w-[100%] md:w-[48%] flex justify-center my-4">
                <img src={product.image} alt="Product Image" />
              </div>
              <div className="flex justify-center items-center text-center text-black dark:text-white w-[100%] md:w-[48%] flex-col space-y-3">
                <h2 className="text-2xl">{product.title}</h2>
                <span className="font-bold text-gray-400">
                  {t(product.category)}
                </span>
                <p>{product.description}</p>
                <span className="font-bold text-xl">{product.price} $</span>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
