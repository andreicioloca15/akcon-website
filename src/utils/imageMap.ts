import mihaltImg from '../assets/images/projects/mihalt.jpg';
import alexTaneaImg from '../assets/images/projects/alex tanea.jpg';
import acoperisAlbastruImg from '../assets/images/projects/acoperis albastru - alba iulia.jpeg';
import cristiImg from '../assets/images/projects/cristi.jpg';
import img00a8129e from '../assets/images/projects/00a8129e-d3fd-43a3-a9e5-49704438504e.jpg';
import djiPhoto1 from '../assets/images/projects/dji_fly_20250725_174044_171_1767900943954_photo.jpg';
import djiPhoto2 from '../assets/images/projects/dji_fly_20250725_174154_175_1767900940021_photo.jpg';
import djiPhoto3 from '../assets/images/projects/dji_fly_20250804_130334_211_1767899958956_photo.jpeg';
import djiPhoto4 from '../assets/images/projects/dji_fly_20250909_160218_261_1767899902514_photo.jpg';
import djiPhoto5 from '../assets/images/projects/dji_fly_20250909_160308_264_1767899897525_photo.jpeg';

export const imageMap: Record<string, string> = {
  'mihalt.jpg': mihaltImg,
  'alex_tanea.jpg': alexTaneaImg,
  'acoperis_albastru_-_alba_iulia.jpeg': acoperisAlbastruImg,
  'cristi.jpg': cristiImg,
  '00a8129e-d3fd-43a3-a9e5-49704438504e.jpg': img00a8129e,
  'dji_fly_20250725_174044_171_1767900943954_photo.jpg': djiPhoto1,
  'dji_fly_20250725_174154_175_1767900940021_photo.jpg': djiPhoto2,
  'dji_fly_20250804_130334_211_1767899958956_photo.jpeg': djiPhoto3,
  'dji_fly_20250909_160218_261_1767899902514_photo.jpg': djiPhoto4,
  'dji_fly_20250909_160308_264_1767899897525_photo.jpeg': djiPhoto5,
};

export function getImagePath(path: string): string {
  if (!path) return '';

  const filename = path.split('/').pop() || '';

  return imageMap[filename] || path;
}
