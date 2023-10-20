import { Card, Skeleton } from "@mui/material";

const LineSkelton = () => {
  return (
    <>
      <Skeleton
        animation="wave"
        height={20}
        width="80%"
        style={{ margin: 6 }}
      />
      <Skeleton
        animation="wave"
        height={20}
        width="40%"
        style={{ margin: 6 }}
      />
    </>
  );
};
function CardSkeleton() {
  return (
    <Card className="card" sx={{ maxWidth: 345, m: 2 }}>
      <LineSkelton />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <LineSkelton />
    </Card>
  );
}

export default CardSkeleton;
