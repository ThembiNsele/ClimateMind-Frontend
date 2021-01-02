export type TSolution = {
  id: string;
  imageUrl: string;
  longDescription: string;
  shortDescription: string;
  solutionTitle: string;
  solutionType: 'adaptation' | 'mitigation';
};
  
export type TSolutions = TSolution[];
  