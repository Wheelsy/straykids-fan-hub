import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ImageLinkProps {
    title: string;
    img_url: string;
    alt: string;
    link: string;
}

export default function ImageLink({img_url, alt, link}: ImageLinkProps) {
    return (
      <>
      <Typography variant="h6"><Typography/>
        {alt}
      </Typography>
        <Link to={link}>
          <img src={img_url} alt={alt} />
        </Link>
      </>
    );
}