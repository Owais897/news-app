import { Tooltip } from "@mui/material";

export default function NLines({
  lines = 3,
  children,
  style,
  tooltip = false,
}: any) {
  const node = (
    <div
      style={{
        margin: 0,
        padding: 0,
        WebkitLineClamp: lines,
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        ...(style || {}),
      }}
    >
      {children}
    </div>
  );

  return tooltip ? <Tooltip title={children}>{node}</Tooltip> : node;
}
