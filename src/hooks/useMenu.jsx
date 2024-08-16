import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://server-two-sage-80.vercel.app/products");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  return {
    isLoading,
    error,
    products,
  };
};

export default useMenu;
