import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProductCard({ image, title, category, price, id }) {
  const { t } = useTranslation();
  return (
    <Card
      component={Link}
      to={`/product/${id}`}
      sx={{
        width: {
          xs: "100%",
          sm: "calc((100% - 16px) / 2)",
          md: "calc((100% - 32px) / 3)",
          lg: "calc((100% - 48px) / 4)",
        },
        border: "1px solid gray",
        borderRadius: "20px",
        padding: "10px",
      }}
      className="dark:!bg-gray-900 dark:!text-gray-100"
    >
      <CardMedia
        component={"img"}
        sx={{
          height: "200px",
          objectFit: "contain",
        }}
        image={image}
      />
      <CardContent>
        <Typography
          variant="p"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            display: "block",
            textAlign: "center",
          }}
        >
          {title.split(" ").slice(0, 3).join(" ")}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "gray",
            display: "block",
            textAlign: "center",
          }}
        >
          {t(category)}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            display: "block",
            textAlign: "center",
          }}
        >
          {price} $
        </Typography>
      </CardContent>
    </Card>
  );
}
