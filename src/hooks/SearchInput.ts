import { useState } from "react";

export const useSearchInput = (initialValue = "") => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return {
    searchValue,
    handleChange,
    clearSearch,
  };
};
