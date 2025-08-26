interface IframeEmbedProps {
  url: string;
  width?: string | number; 
  height?: string | number; 
}

export default function IframeEmbed({
  url,
  width = "100%",
  height = 1000,
}: IframeEmbedProps) {
  return (
    <iframe
      src={url}
      width={width}
      height={height}
    />
  );
}
