// material
import {
  Box,
  Breadcrumbs,
  Card,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import { TableData, AddData, SearchData } from "../components";
//
import { Link as RouterLink } from "react-router-dom";

export default function ChannelAction() {
  return (
    <Container sx={{ mt: -3.5 }} maxWidth="false">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          component={RouterLink}
          color="inherit"
          to="/channel-management"
        >
          Dashboard
        </Link>
      </Breadcrumbs>
      <Box sx={{ flexGrow: 1 }} />
      <Card sx={{ mt: 2, px: 2, boxShadow: 2 }} variant="outlined">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography variant="h6" sx={{ mt: 4 }}>
              List Daftar Karyawan
            </Typography>
            <Typography variant="caption" sx={{ mb: 1 }}>
              Daftar Karyawan yang bekerja di PT.Sirka
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <AddData />

            {/* <DialogFilter
              isVisible={showModalAdd}
              handleClose={closeModalAdd}
            /> */}
          </Stack>
        </Stack>
        <Divider sx={{ mb: 2 }} />
        <SearchData sx={{ mb: 30 }} />
        {/* <ChannelList sx={{ mb: 2 }} /> */}
        {/* <Stack width="200" sx={{ px: 2 }}>
          <Header
            search={search}
            setSearch={setSearch}
            onSearch={onSubmitSearch}
          />
        </Stack> */}
        {/* <List list={data} loading={loading} /> */}
        {/* {!loading && data.length === 0 && (
          <Empty
            title="Data belum tersedia"
            desc="Data yang Anda cari tidak ada atau belum tersedia saat ini, silahkan isi data baru terlebih dahulu."
          />
        )} */}
        <TableData sx={{ mb: 30 }} />
      </Card>

      <Stack sx={{ mb: 0 }}>{/* <ChannelForm sx={{ mb: 0 }} /> */}</Stack>
    </Container>
  );
}
