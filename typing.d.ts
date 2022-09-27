interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface File {
  _key: string;
  _type: 'file';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

// interface Socials {
//   _key: string;
//   _ref: string;
//   type: 'reference';
// }

export interface PageData extends SanityBody {
  _type: 'pageData';
  aboutMe: string;
  email: string;
  heroImage: Image;
  profilePic: Image;
  resumes: File[];
  socials: Social[];
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  title: string;
  icon: Image;
  progress: number;
}

export interface Project extends SanityBody {
  _type: 'project';
  projID: number;
  title: string;
  desc: string;
  image: Image;
  technologies: Skill[];
  buildLink: string;
  gitLink: string;
}
