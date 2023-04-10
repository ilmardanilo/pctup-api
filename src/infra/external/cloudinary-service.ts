import { v2 as cloudinary } from 'cloudinary';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from '../../main/config/env-constants';

interface IOutputUploadImage {
  url: string;
  public_id: string;
}

export interface ICloudinaryExternalService {
  upload(fileImage: string): Promise<IOutputUploadImage>;
  delete(publicId: string): Promise<void>;
}

export class CloudinaryExternalService implements ICloudinaryExternalService {
  constructor() {
    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });
  }

  async upload(fileImage: string): Promise<IOutputUploadImage> {
    const { url, public_id } = await cloudinary.uploader.upload(fileImage);

    return { url, public_id };
  }

  async delete(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId);
  }
}
