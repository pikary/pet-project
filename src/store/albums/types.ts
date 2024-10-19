// Define interface for Photo
interface Photo {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

// Define interface for Album
export interface Album {
    id: number;
    title: string;
    userId: number;
    photos: Photo[];
}
