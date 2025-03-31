export type Year = {
  since: string;
  until: string;
};

export type Row = {
  year: Year;
  title: string;
  tags?: string[];
  link: string;
};

export type Column = {
  key: string;
  label: string;
};

export const columns: Column[] = [
  {
    key: "year",
    label: "Year",
  },
  {
    key: "title",
    label: "Title",
  },
  {
    key: "tags",
    label: "Tags",
  },
  {
    key: "link",
    label: "Link",
  },
];
