import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

// Search Bar

// Mui table for the photos

// Photo Gallery component for the image pop-up

const Thumbnail = styled.img`
  height: 4rem;
  width: 4rem;
`;

function createData(id: string, title: string, url: string) {
  return { id, title, url };
}

const rows = [
  createData(
    "3",
    "officia porro iure quia iusto qui ipsa ut modi",
    "https://via.placeholder.com/600/24f355"
  ),
  createData(
    "7",
    "officia delectus consequatur vero aut veniam explicabo molestias",
    "https://via.placeholder.com/600/b0f7cc"
  ),
  createData(
    "56",
    "vel voluptatem esse consequuntur est officia quo aut quisquam",
    "https://via.placeholder.com/600/f9f067"
  ),
  createData(
    "250",
    "voluptatem repellendus voluptatibus id occaecati ipsam dignissimos officia",
    "https://via.placeholder.com/600/e33ffb"
  ),
  createData(
    "261",
    "officia fugit corrupti impedit enim odit",
    "https://via.placeholder.com/600/96dc0d"
  ),
];

const PhotoGallery = (): JSX.Element => {
  const renderSearchBar = (
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      fullWidth
      margin="normal"
    />
  );

  const renderTable = (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Thumbnail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">
                <Thumbnail src={row.url} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      {renderSearchBar}
      {renderTable}
    </div>
  );
};

export default PhotoGallery;
