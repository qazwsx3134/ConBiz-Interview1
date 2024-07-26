import React, { useState, useCallback, useRef, useEffect } from "react";

type Timeout = ReturnType<typeof setTimeout>;

/**
 * 如果要查看Demo 可以 cd 到 /question1-6 
 */
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const timeoutRef = useRef<Timeout>(
    null
  ) as React.MutableRefObject<Timeout | null>;

  const debounce = (callback: (...args: string[]) => void, delay: number) => {
    return (...args: string[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const debouncedSearch = useCallback(
    debounce((term) => {
      console.log("searching", term);
      // ajax call
    }, 300),
    []
  );

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <input
      type="search"
      name="p"
      value={searchTerm}
      onChange={handleOnChange}
      placeholder="請輸入搜索詞"
    />
  );
};

export default SearchBox;
