declare module "react-simple-maps" {
  import { ComponentType, SVGProps, MouseEvent } from "react";

  export interface ProjectionConfig {
    center?: [number, number];
    scale?: number;
    rotate?: [number, number, number];
    parallels?: [number, number];
  }

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }

  export interface GeographiesChildrenArgs {
    geographies: Geography[];
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (args: GeographiesChildrenArgs) => React.ReactNode;
  }

  export interface Geography {
    rsmKey: string;
    id: string;
    properties: Record<string, unknown>;
  }

  export interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: Geography;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }

  export interface MarkerProps {
    coordinates: [number, number];
    onClick?: (event: MouseEvent<SVGGElement>) => void;
    children?: React.ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const ZoomableGroup: ComponentType<{ children?: React.ReactNode }>;
}
