export type Link = {
  id: number;
  title?: string;
  icon?: string | React.JSX.Element;
  link: string;
};

export type SocialLinks = {
  links: Link[];
};
