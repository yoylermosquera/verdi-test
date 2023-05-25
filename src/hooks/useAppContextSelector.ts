import { State } from "@/context/app/reducer";
import useAppContext from "./useAppContext";

type SelectorFunction<T> = (state: State) => T;

export default function useAppContextSelector<T>(selector: SelectorFunction<T>) {
    const { state } = useAppContext();
    return selector(state);
}