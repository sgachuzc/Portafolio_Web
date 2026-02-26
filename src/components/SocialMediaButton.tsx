import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

interface SocialMediaButtonProps {
  linkTo: string;
  imgUrl: string;
  altText: string;
  isHighlighting: boolean;
  hightlightClass: string;
}

export const SocialMediaButton = ({ linkTo, imgUrl, altText, isHighlighting, hightlightClass }: SocialMediaButtonProps) => {
  return (
    <a
      href={linkTo}
      target="_blank"
      className={cn(
        buttonVariants({ variant: "outline" }),
        `group flex aspect-square h-12 items-center justify-center p-0 ${isHighlighting ? hightlightClass : ""}`,
      )}
    >
      <img
        src={imgUrl}
        alt={altText}
        className="h-6 saturate-0 transition-all group-hover:saturate-100"
      />
    </a>
  );
}
