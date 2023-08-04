export interface PolicyPage {
  _id: string;
  title: string;
  content: {
    type: string;
    text: string;
  }[];
}