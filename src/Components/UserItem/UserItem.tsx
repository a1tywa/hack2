import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { user } from "../contexts/UsersContext/types";
import { CardMedia, Container } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { CardSwiper } from "react-card-rotate-swiper";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

type propsType = {
  item: user;
};

const UserItem: React.FC<propsType> = ({ item }) => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", maxWidth: "90%" }}
    >
      <Card sx={{ width: 420 }}>
        <CardContent>
          <CardMedia
            component="img"
            sx={{ height: "200px" }}
            src={item.image}
            title={item.name}
          />
          <Box display="flex">
            <Typography variant="h4" gutterBottom sx={{ marginRight: 2 }}>
              {item.name}
            </Typography>
            <Typography variant="h5">{item.age}</Typography>
          </Box>
          <Typography variant="h6">
            {item.description}
            <br />
          </Typography>
          <Box display="flex">
            <Typography variant="h4" gutterBottom sx={{ marginRight: 2 }}>
              {item.gender}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 13 }}>{"В 2км от вас"}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="large">
            <ClearIcon sx={{ width: "50px", height: "50px" }} />
          </Button>
          <Button size="large">
            <FavoriteBorderIcon
              sx={{ width: "50px", height: "50px", color: "red" }}
            />
          </Button>
          <Button size="large">
            <StarBorderIcon
              sx={{ width: "50px", height: "50px", color: "yellow" }}
            />
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default UserItem;
