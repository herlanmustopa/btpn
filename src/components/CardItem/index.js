import React from "react";
import CardImage from "../../assets/efishery-logo.png";
import Skeleton from "@mui/material/Skeleton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FormatRupiah } from "../../utils/currency";
import { capitalize } from "lodash";
import "./styles.scss";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { theme } from "@mui/material/styles";

const CardItem = ({ item, loading }) => {
  return (
    <>
      {/* <Card variant="outlined" height="100" className="container-card">
        <CardContent>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={120}
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography component="div" variant="h6">
              {item?.komoditas || ""}
            </Typography>
          )}
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={120}
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography component="div" variant="h5">
              {item?.size || 0} Kg
            </Typography>
          )}
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={120}
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography component="div" variant="body">
              {item?.price ? FormatRupiah(item?.price, "Rp ") : ""}
            </Typography>
          )}
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={120}
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography component="div" variant="body">
              {`${(item?.areaKota && capitalize(item?.areaKota)) || ""}` ||
                "jakarta"}
            </Typography>
          )}
        </CardContent>


        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={120}
            style={{ marginBottom: 6 }}
          />
        ) : (
          <CardMedia
            className="img"
            alignSelf="center"
            component="img"
            sx={{ width: 151, height: 151 }}
            image={CardImage}
            alt={item.name}
            height="120px"
            width="120px"
          />
        )}
      </Card> */}
      <div className="container-card">
        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={40}
          />
        ) : (
          <div className="header-card ">
            <p> {item?.komoditas || ""}</p>
          </div>
        )}
        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={150}
            style={{ marginBottom: 6 }}
          />
        ) : (
          <div className="content">
            <img src={CardImage} alt={item.name} height="120px" width="120px" />
          </div>
        )}
        {loading ? (
          <Skeleton
            animation="wave"
            variant="text"
            width={"100%"}
            height={40}
            style={{ marginBottom: 6 }}
          />
        ) : (
          <Stack
            className="desc"
            direction="row"
            justifyContent="space-between"
          >
            <Stack direction="row">
              <LocationOnIcon sx={{ color: "red" }} />
              <Typography>
                {`${(item?.areaKota && capitalize(item?.areaKota)) || ""}` ||
                  "jakarta"}
              </Typography>
            </Stack>

            <Typography>{item?.size || 0} Kg</Typography>
          </Stack>
        )}

        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={40}
          />
        ) : (
          <div className="footer-card ">
            <p> {item?.price ? FormatRupiah(item?.price, "Rp ") : ""}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CardItem;
