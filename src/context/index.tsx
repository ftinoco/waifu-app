import { createContext, useState } from "react";
import { IDataContextProps, OrientationType, Props } from "../utils/interfaces";

const DataContext = createContext({} as IDataContextProps);

const DataProvider = (props: Props) => {
  const { children } = props;

  const [isNSFW, setIsNSFW] = useState(false);
  const [isGIF, setIsGIF] = useState(false);
  const [orientation, setOrientation] = useState(null as OrientationType);
  const [many, setMany] = useState(false);
  const [selectedTags, setSelectedTags] = useState([] as string[]);
  const [excludedTags, setExcludedTags] = useState([] as string[]);

  const dataState: IDataContextProps = {
    isNSFW,
    isGIF,
    orientation,
    many,
    selectedTags,
    excludedTags,
    setIsNSFW,
    setIsGIF,
    setOrientation,
    setMany,
    setSelectedTags,
    setExcludedTags
  };

  return (
    <DataContext.Provider value={dataState}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };