import "styled-components";
interface IPalette {
  Primary: string;
  Grey400: string;
  DarkText: string;
  GhostWhite: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    colors: IPalette;

    borderRadius: {
      S: string; // small
      M: string; // medium
      L: string; // large
    };
  }
}
