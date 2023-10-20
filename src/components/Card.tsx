import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./index.css";
import NLines from "./Nlines";
import formatDateToDmyUTC from "../utils/convertData";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function NewsCard({
  title,
  key,
  description,
  imageUrl,
  articleUrl,
  publishedAt,
}: any) {
  const { t } = useTranslation();

  const handleImageError = (e: any) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/150";
  };

  return (
    <a
      className="link"
      key={key}
      href={articleUrl}
      target="_blank"
      rel="noreferrer"
    >
      <Card
        sx={{
          maxWidth: 345,
          boxShadow:
            "2px 2px 2px 3px rgba(0,0,0,0.2), 2px 2px 2px 2px rgba(0,0,0,0.14), 2px 2px 3px 2px rgba(0,0,0,0.12)",
        }}
      >
        <CardHeader
          sx={{
            "& .MuiTypography-h5": {
              fontSize: 18,
              fontWeight: 600,
              direction: "unset",
            },
          }}
          title={
            <NLines tooltip lines={2}>
              {title}
            </NLines>
          }
          subheader={
            <div className="display_flex">
              <Tooltip title={t("card:publishedAt")} placement="top">
                <AccessTimeIcon />
              </Tooltip>
              {formatDateToDmyUTC(publishedAt) || publishedAt}
            </div>
          }
        />
        <CardMedia
          onError={handleImageError}
          component="img"
          height="194"
          image={imageUrl || "https://via.placeholder.com/150"}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            style={{
              height: 100,
            }}
            variant="body2"
            color="text.secondary"
          >
            <NLines tooltip lines={5}>
              {description}
            </NLines>
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}
