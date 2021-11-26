import React from "react";
import { fetchPhotos, Photos } from "./fetchPhotos";

export {};

// usePhotos hook

const usePhotos = () => {
  const getPhotos = async () => {
    await fetchPhotos()
      .then((res: Photos) => console.log(res))
      .catch((e: any) => console.log("Error occured loading data"));
  };

  React.useEffect(() => {
    getPhotos();
  }, []);
};

export default usePhotos;
