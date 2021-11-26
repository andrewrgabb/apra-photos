import React from "react";
import { fetchPhotos, Photo, Photos } from "./fetchPhotos";

export {};

// usePhotos hook

const usePhotos = () => {
  const [photos, setPhotos] = React.useState<Photo[] | undefined>(undefined);
  const [search, setSearch] = React.useState<string>("officia");
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(5);

  const getPhotos = async () => {
    await fetchPhotos(search, page, limit)
      .then((res: Photos) => console.log(res))
      .catch((e: any) => console.log("Error occured loading data"));
  };

  React.useEffect(() => {
    getPhotos();
  }, []);
};

export default usePhotos;
