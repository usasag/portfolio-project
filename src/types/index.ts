export interface Language {
  code: 'en' | 'pt';
  label: string;
}

export interface Translation {
  nav: {
    services: string;
    portfolio: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    consulting: {
      title: string;
      description: string;
    };
    design: {
      title: string;
      description: string;
    };
    technology: {
      title: string;
      description: string;
    };
    ai: {
      title: string;
      description: string;
    };
    web: {
      title: string;
      description: string;
    };
    email: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    address: string;
    email: string;
    phone: string;
  };
}