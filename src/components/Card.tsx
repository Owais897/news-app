import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./index.css";

export default function NewsCard({
  title,
  key,
  description,
  imageUrl,
  articleUrl,
  publishedAt,
}: any) {
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
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          sx={{
            "& .MuiTypography-h5": {
              height: 80,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              fontSize: 18,
            },
          }}
          title={title}
          subheader={publishedAt}
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
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
            }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}
