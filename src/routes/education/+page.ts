
type Education = {
  url: string;
  name: string;
  start: Date;
  end: Date;
  description?: string;
}

const education: Education[] = [
  {
    name: 'National University of Singapore - School of Computing',
    url: 'https://nus.edu.sg/',
    start: new Date(2019, 0),
    end: new Date(2020, 5),
  },
  {
    name: 'CentralSupélec',
    url: 'https://www.centralesupelec.fr/en',
    start: new Date(2016, 8),
    end: new Date(2020, 5),
  },
  {
    name: 'Lycée Masséna - MPSI/MP*',
    url: 'http://www.lycee-massena.fr/les-cpge/',
    description: 'Intensive two-year preparation to the highly competitive entrance examinations for the French Engineering Schools',
    start: new Date(2014, 8),
    end: new Date(2016, 5),
  }
];

export const load = () => ({ education });
