// Types
export type Photo = {
  id: string;
  title: string;
  url: string;
};

export type Photos = {
  meta: {
    totalCount: number;
  };
  data: Photo[];
};

type Body = {
  data: {
    photos: Photos;
  };
};

const API = "https://graphqlzero.almansi.me/api";

// Fetch Reqeust
export const fetchPhotos = async (): Promise<Photos> => {
  const query = `
  query($options: PageQueryOptions) {
    photos(options: $options) {
      meta {
        totalCount
      }
      data {
        id
        title
        url
      }
    }
  }`;

  const variables = {
    options: { search: { q: "officia" }, paginate: { page: 1, limit: 4 } },
  };

  const queryString =
    "?query=" + query + "&variables=" + JSON.stringify(variables);

  const photos = await fetch(API + queryString, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res: Response) => {
      const body: Body = await res.json();

      const photos: Photos = body.data.photos;
      return photos;
    })
    .catch((e: any) => {
      throw e;
    });

  return photos;
};
