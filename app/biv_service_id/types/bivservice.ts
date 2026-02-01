export interface ServiceOption {
  label: string;
  price: number;
  description?: string; 
}

export interface ServiceSection {
  id: string;
  title: string;
  options: ServiceOption[];
}

export interface ServiceData {
  title: string;
  image: string;
  description?: string;       
  formSections: ServiceSection[];
  hasDocumentUpload?: boolean; 
  documentLabel?: string;
  documentDesc?: string;
}