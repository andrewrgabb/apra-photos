import React from "react";
import { render, screen } from "@testing-library/react";
import PhotoGallery from "./PhotoGallery";
import { Photo } from "../service/fetchPhotos";

test("renders loader", () => {
  render(
    <PhotoGallery
      photos={undefined}
      loading={true}
      error={false}
      search={""}
      setSearch={function (newSearch: string): void {
        throw new Error("Function not implemented.");
      }}
      page={0}
      setPage={function (newPage: number): void {
        throw new Error("Function not implemented.");
      }}
      limit={5}
      setLimit={function (newLimit: number): void {
        throw new Error("Function not implemented.");
      }}
      totalCount={0}
    />
  );
  const loaderElement = screen.getByTestId("loader");
  expect(loaderElement).toBeInTheDocument();
});

test("renders no results info", () => {
  render(
    <PhotoGallery
      photos={[]}
      loading={false}
      error={false}
      search={""}
      setSearch={function (newSearch: string): void {
        throw new Error("Function not implemented.");
      }}
      page={0}
      setPage={function (newPage: number): void {
        throw new Error("Function not implemented.");
      }}
      limit={5}
      setLimit={function (newLimit: number): void {
        throw new Error("Function not implemented.");
      }}
      totalCount={0}
    />
  );
  const infoElement = screen.getByText(/no results/i);
  expect(infoElement).toBeInTheDocument();
});

test("renders error", () => {
  render(
    <PhotoGallery
      photos={undefined}
      loading={false}
      error={true}
      search={""}
      setSearch={function (newSearch: string): void {
        throw new Error("Function not implemented.");
      }}
      page={0}
      setPage={function (newPage: number): void {
        throw new Error("Function not implemented.");
      }}
      limit={5}
      setLimit={function (newLimit: number): void {
        throw new Error("Function not implemented.");
      }}
      totalCount={0}
    />
  );
  const errorElement = screen.getByText(/error/i);
  expect(errorElement).toBeInTheDocument();
});

test("renders normal", () => {
  const photos: Photo[] = [
    {
      id: "3",
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
    },
    {
      id: "56",
      title: "vel voluptatem esse consequuntur est officia quo aut quisquam",
      url: "https://via.placeholder.com/600/f9f067",
    },
    {
      id: "250",
      title:
        "voluptatem repellendus voluptatibus id occaecati ipsam dignissimos officia",
      url: "https://via.placeholder.com/600/e33ffb",
    },
  ];

  render(
    <PhotoGallery
      photos={photos}
      loading={false}
      error={false}
      search={""}
      setSearch={function (newSearch: string): void {
        throw new Error("Function not implemented.");
      }}
      page={0}
      setPage={function (newPage: number): void {
        throw new Error("Function not implemented.");
      }}
      limit={5}
      setLimit={function (newLimit: number): void {
        throw new Error("Function not implemented.");
      }}
      totalCount={3}
    />
  );
  const photoElement = screen.getAllByText(/officia/i);
  expect(photoElement[0]).toBeInTheDocument();
  expect(photoElement[1]).toBeInTheDocument();
  expect(photoElement[2]).toBeInTheDocument();
});
