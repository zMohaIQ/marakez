export interface SearchCategory {
  title: string;
  items: { id: string; name: string; label: string }[];
}

export const searchListData: SearchCategory[] = [
  {
    title: "Destination",
    items: [
      { id: "northCoast", name: "destination", label: "North Coast" },
      { id: "newCairo", name: "destination", label: "New Cairo" },
      { id: "westCairo", name: "destination", label: "West Cairo" },
    ],
  },
  {
    title: "Type of Unit",
    items: [
      { id: "residential", name: "unitType", label: "Residential" },
      { id: "offices", name: "unitType", label: "Offices" },
      { id: "medical", name: "unitType", label: "Medical" },
    ],
  },
  {
    title: "Projects",
    items: [
      { id: "ramla", name: "project", label: "Ramla" },
      { id: "district5Work", name: "project", label: "District-5 work" },
      { id: "aeon", name: "project", label: "Aeon" },
      {
        id: "district5Residences",
        name: "project",
        label: "District-5 residences",
      },
    ],
  },
];
