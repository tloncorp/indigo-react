export type ComponentProperties = {
  id: string;
  displayName: string;
  snippet: string;
  props: [];
};

export type ComponentEntry = {
  id: string;
  displayName: string;
};

export type Manifest = {
  componentCount: number;
  components: ComponentEntry[];
};
