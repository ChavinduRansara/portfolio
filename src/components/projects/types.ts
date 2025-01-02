export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    details?: string;
    image: string;
    tags: string[];
    github?: string;
    live?: string;
    pdf?: string;
  }