export interface IImgMeshProps {
  imgSize: {
    x: number;
    y: number;
  };
  isHover: boolean;
  imgTexture?: THREE.Texture;
  id: number;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  technos: string[];
  desktopImg: string;
  mobileImg: string;
}
