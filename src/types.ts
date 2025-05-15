export interface Company {
  id: string;
  name: string;
  description: string;
  role: string;
  logo: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}