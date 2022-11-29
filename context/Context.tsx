import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
// Types
import { IImgMeshProps } from "../types/typing";

interface IContext {
  meshProps: IImgMeshProps;
  setMeshProps: Dispatch<SetStateAction<IImgMeshProps>>;
}

const initialState = {
  meshProps: {
    imgSize: {
      x: 0,
      y: 0,
    },
    isHover: false,
    imgTexture: undefined,
    id: 0
  },
  setMeshProps: () => {},
};

export const Context = createContext<IContext>(initialState);

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [meshProps, setMeshProps] = useState<IImgMeshProps>({
    imgSize: {
      x: 0,
      y: 0,
    },
    isHover: false,
    imgTexture: undefined,
    id:0
  });

  const value = { meshProps, setMeshProps };
  
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
