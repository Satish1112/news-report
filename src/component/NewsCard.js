import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import { Link } from "react-router-dom";

function NewsCard({ data }) {
  console.log(data);
  return (
    <div>
      <Box>
        <Card elevation={0}>
          <CardMedia
            height="200"
            component="img"
            image={data.urlToImage}
          ></CardMedia>
          <CardContent>
            <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>
            <Typography sx={{ fontSize: "10px" }}>
              {moment(data.publishedAt).format("DD-MM-YYYY")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="sm">
              <Link
                to="/newsDetails"
                state={{ data }}
                style={{ textDecoration: "none" }}
              >
                More
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default NewsCard;
