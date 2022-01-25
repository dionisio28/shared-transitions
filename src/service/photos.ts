import {PhotoProps} from '../@types/photo.type';
import api from './instance';

/**
 * Get Photos
 * @method get
 */

async function getPhotos(_page: number): Promise<PhotoProps[]> {
  try {
    const response = await api.get(`photos?page=${_page}`);
    return response.data;
  } catch (error) {
    console.log(`ERROR API ${getPhotos.name}`, error);

    throw error;
  }
}

export default getPhotos;
