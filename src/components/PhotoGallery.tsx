import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { TablePagination, TextField } from "@mui/material";
import { Photo } from "../service/fetchPhotos";
import loaderGif from "../images/loader.gif";

// Search Bar

// Mui table for the photos

// Photo Gallery component for the image pop-up

const MaxWidthDiv = styled.div`
  width: 100%;
  max-width: 40rem;
`;

const PhotoGalleryDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 1rem 0.5rem 4rem 0.5rem;
`;

const Thumbnail = styled.img`
  height: 4rem;
  width: 4rem;
`;

const Loader = styled.img`
  height: 6rem;
  width: 6rem;
`;

function createData(id: string, title: string, url: string) {
  return { id, title, url };
}

type PhotoGalleryProps = {
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
};

const PhotoGallery = (props: PhotoGalleryProps): JSX.Element => {
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
    totalCount,
  } = props;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    console.log(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderSearchBar = (
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      fullWidth
      margin="normal"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ marginBottom: `2rem` }}
    />
  );

  const renderTable = (
    <Paper sx={{ width: `100%` }}>
      <TableContainer sx={{ width: `100%` }}>
        <Table sx={{ width: `100%` }} aria-label="photo table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Thumbnail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {photos && photos.length > 0 ? (
              photos.map((photo) => (
                <TableRow
                  key={photo.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="left">{photo.id}</TableCell>
                  <TableCell align="left">{photo.title}</TableCell>
                  <TableCell align="left">
                    <Thumbnail src={photo.url} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
                key={"none"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  colSpan={3}
                  align="center"
                >{`There are no results for that search.`}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ width: `100%` }}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalCount}
        rowsPerPage={limit}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={"Rows"}
      />
    </Paper>
  );

  const renderLoader = <Loader src={loaderGif} />;

  return (
    <MaxWidthDiv>
      <PhotoGalleryDiv>
        {renderSearchBar}
        {loading ? renderLoader : renderTable}
      </PhotoGalleryDiv>
    </MaxWidthDiv>
  );
};

export default PhotoGallery;
