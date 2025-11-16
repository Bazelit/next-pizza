import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  isLoading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    async function getIngredients() {
      try {
        setIsLoading(true);
        const data = await Api.ingredients.getAll();
        setIngredients(data);
      } catch (error) {
        setIsLoading(false);
        console.error("⚠️ Ошибка базы данных:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getIngredients();
  }, []);

  return { ingredients, isLoading, onAddId: toggle, selectedIds };
};
