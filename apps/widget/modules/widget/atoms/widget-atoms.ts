import { atom } from "jotai";
import { WidgetScreen } from "../types";

export const screenAtom = atom<WidgetScreen>("auth");
export const errorMessageAtom = atom<string | null>(null);
