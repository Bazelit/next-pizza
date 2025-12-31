import { Api } from "@/services/api-client";
import { useEffect, useState } from "react";
import { Ingredient } from "@prisma/client";

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getIngredients() {
      try {
        setIsLoading(true);
        const data = await Api.ingredients.getAll();
        setIngredients(data || []);
      } catch (error) {
        console.error("⚠️ Ошибка базы данных:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getIngredients();
  }, []);

  return { ingredients, isLoading };
};
