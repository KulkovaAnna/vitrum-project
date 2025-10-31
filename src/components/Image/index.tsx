import useFormatStaticSrc from '@/hooks/useFormatStaticSrc';
import { ImgHTMLAttributes } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export default function Image(props: Props) {
  const { src, ...rest } = props;
  const formattedSrc = useFormatStaticSrc(src);
  return <img {...rest} src={formattedSrc} />;
}
