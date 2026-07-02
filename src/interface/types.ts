export interface certificationProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface CertificationCardProps {
  certifications: certificationProps[];
}

export interface ProjectFCardProps {
  project: {
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    category: string;
    featured: boolean;
    date?: string;
    challenges?: string[];
    features?: string[];
  };
  openModal: (project: object) => void;
  index: any;
}
