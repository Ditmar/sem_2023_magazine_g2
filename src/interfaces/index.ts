export interface Volume {
  id: number;
  name: string;
  tomo: string;
  editorial: string;
  publicationDate: string;
  description: string;
  authors: string[];
  genre: string;
  isbn: string;
  contentLink: string;
  img: any;
}

export interface Year {
  id: number;
  name: string;
  description: string;
  volumes: Volume[];
}

export interface HeaderProps {
  selectedItemContent: React.ReactNode | null;
}
