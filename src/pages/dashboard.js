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
              List User
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

        <TableData sx={{ mb: 30 }} />
      </Card>

      <Stack sx={{ mb: 0 }}>{/* <ChannelForm sx={{ mb: 0 }} /> */}</Stack>
    </Container>
  );
}
