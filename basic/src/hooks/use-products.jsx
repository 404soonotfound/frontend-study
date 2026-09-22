import { useState, useEffect } from "react";
// 중요! 커스텀훅은 값의 재사용이 아니라, 로직의 재사용을 위한것이다
// 재사용가능한 커스텀 훅이라면 user로 시작하는게 스타일 가이드임
export default function useProducts({ salesOnly }) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  // 컴포넌트가 mount 될때 실행되는 콜백함수
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_products" : "products"}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
        setError("에러가 발생함");
      })
      .finally(() => setLoading(false));

    // 컴포넌트가 unmount 될때 실행되는 콜백함수
    return () => {
      console.log("clear");
    };
  }, [salesOnly]); // 한번만 실행되는 경우 빈배열, 변경상태를 감지해야하는 경우 checked 값

  return [isLoading, error, products];
}
