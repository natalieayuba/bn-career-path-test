import {
  ArrowClockwiseIcon,
  ArrowLeftIcon,
  FlagIcon,
  ShareFatIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";

const icons = {
  flag: FlagIcon,
  share: ShareFatIcon,
  redo: ArrowClockwiseIcon,
  arrowLeft: ArrowLeftIcon,
  close: XIcon,
};

export interface IconButtonProps {
  name: keyof typeof icons;
  title: string;
  onClick?: () => void;
}

export const IconButton = ({ name, ...rest }: IconButtonProps) => {
  const Icon = icons[name];
  return (
    <button
      className="transition-opacity duration-150 hover:opacity-70"
      {...rest}
    >
      <Icon size={24} />
    </button>
  );
};
