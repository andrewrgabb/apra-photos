import React from "react";
import { fetchPhotos, Photo, Photos } from "./fetchPhotos";

interface UsePhotosHook {
  photos: Photo[] | undefined;
  loading: boolean;
  error: boolean;
  search: string;
  setSearch: (newSearch: string) => void;
  page: number;
  setPage: (newPage: number) => void;
  limit: number;
  setLimit: (newLimit: number) => void;
  totalCount: number;
}

// Handle the application state and communicate with the API
const usePhotos = (): UsePhotosHook => {
  const [photos, setPhotos] = React.useState<Photo[] | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(true);
  const [search, setSearch] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(5);
  const [totalCount, setTotalCount] = React.useState<number>(5);

  React.useEffect(() => {
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page, limit]);

  // Retrieve the photo data from the API
  const getPhotos = async () => {
    setLoading(true);

    await fetchPhotos(search, page + 1, limit)
      .then((res: Photos) => {
        // Set the new photo data
        setPhotos(res.data);

        setTotalCount(res.meta.totalCount);

        // Calculate the number of pages available
        const newNumPages = Math.ceil(res.meta.totalCount / limit);

        // Update the current page number if appropriate
        if (page > newNumPages) {
          if (newNumPages - 1 >= 0) {
            setPage(newNumPages - 1);
          }
        }

        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    photos: photos,
    loading: loading,
    error: error,
    search: search,
    setSearch: setSearch,
    page: page,
    setPage: setPage,
    limit: limit,
    setLimit: setLimit,
    totalCount: totalCount,
  };
};

export default usePhotos;
