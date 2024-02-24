export type ExpandedSidebarItem = {
  title: string;  
  dbField: string;
  min?: string;
  max?: string;
}

export type SidebarItem = {
  title: string;
  type: 'traitSearch' | 'sort' | 'range' | 'oldTraitSearch' | 'oldsearch';
  expandedSidebarItems: ExpandedSidebarItem[];
}

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Search By Trait',
    type: 'traitSearch',
    expandedSidebarItems: [
      { title: 'Poet Name', dbField: 'pNam' },
      { title: 'Origin', dbField: 'ori' },
      { title: 'Latent', dbField: 'lat' },
      { title: 'Breed', dbField: 'brd' },   // Mongodb field name for Breed
      { title: 'Age', dbField: 'age' },
      { title: 'Genre', dbField: 'gen' },
     // { title: 'Polarity', dbField: 'pol' },
      { title: 'Ego', dbField: 'ego' }
    ]
  },
  {
    title: 'Sort By Rare Traits',
    type: 'sort',
    expandedSidebarItems: [
      { title: 'Breed', dbField: 'brdCnt' },   // Mongodb field name for Breed
      { title: 'Age', dbField: 'ageCnt' },
      { title: 'Genre', dbField: 'genCnt' },
      //{ title: 'Polarity', dbField: 'polCnt' },
      { title: 'Ego', dbField: 'egoCnt' }
    ]
  },
  {
    title: 'Search By Ranges',
    type: 'range',
    expandedSidebarItems: [
      { title: 'Prime Number', dbField: 'prim', min: "2", max: "835399" },   // Mongodb field name for Prime Number
      { title: 'Word Count', dbField: 'wrdCnt', min: "2", max: "255" }, 
      { title: 'Lexicon', dbField: 'lexCnt', min: "1", max: "255" }, 
      { title: 'Rewrites', dbField: 'rewrCnt', min: "1", max: "89" }, 
    ]
  },
   /* {
    title: 'Poet Name',
    type: 'search',
    expandedSidebarItems: [
      { dbField: 'pNam' },   // Mongodb field name for Poet Name
    ]
  },
  {
    title: 'Origin',
    type: 'search',
    expandedSidebarItems: [
      { dbField: 'ori' }   // Mongodb field name for Origin
    ]
  },
  {
    title: 'Latent',
    type: 'search',
    expandedSidebarItems: [
      { dbField: 'lat' }   // Mongodb field name for Latent
    ]
  },*/
  /*{
    title: 'Prime Number',
    type: 'range', 
    expandedSidebarItems: [
      { dbField: 'prim',     // Mongodb field name for Prime Number
        min: "2",
        max: "835399"
      }
    ]
  },
  {
    title: 'Word Count',
    type: 'range', 
    expandedSidebarItems: [
      { dbField: 'wrdCnt',   // Mongodb field name for Word Count
        min: "2",
        max: "255"
      }
    ]
  },
  {
    title: 'Lexicon',
    type: 'range', 
    expandedSidebarItems: [
      { dbField: 'lexCnt',   // Mongodb field name for Lexicon
        min: "1",
        max: "255"
      } 
    ]
  },
  {
    title: 'Rewrites',
    type: 'range', 
    expandedSidebarItems: [
      { dbField: 'rewrCnt',   // Mongodb field name for Rewrites
        min: "1",
        max: "89"
      }
    ]
  }*/
];
