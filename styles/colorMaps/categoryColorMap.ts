import { CategoryColorMapType } from ".";
import { theme } from "..";

export const CategoryColorMap = new Map<CategoryColorMapType, string>([
  ["main", `${theme.colors.primary}`],
  ["company", "#54ab85"],
  ["tech", "#ecd913"],
  ["allaround", "#ef8610"],
]);
