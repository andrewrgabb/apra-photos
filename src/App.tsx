import React from "react";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import PhotoGallery from "./components/PhotoGallery";
import usePhotos from "./service/usePhotos";

const Background = styled.div`
  background-color: #efefef;
  height: 100%;
  width: 100%;
`;

const AppContainer = styled(Container)`
  color: black;
  min-height: 100vh;
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const App = (): JSX.Element => {
  const {
    photos,
    loading,
    error,
    search,
    setSearch,
    page,
    setPage,
    limit,
    setLimit,
    numPages,
  } = usePhotos();

  console.log({ photos });

  return (
    <Background>
      <AppContainer maxWidth="md">
        <h1>APRA Photos</h1>
        <PhotoGallery />
      </AppContainer>
    </Background>
  );
};

export default App;
