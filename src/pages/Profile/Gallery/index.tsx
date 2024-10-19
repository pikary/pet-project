import React, { useEffect, useState, useCallback } from 'react';
import {Album} from "../../../store/albums/types.ts";
import {albumList} from "./data.ts";

interface GalleryProps {
    albums: Album[];
}

const addLayout = () => {
    return `<div>sample</div>`;
};

const Gallery= () => {
    const [dynamicTemplate, setDynamicTemplate] = useState<string>('');

    // Function to compute the grid class based on album count
    const getGridClasses = useCallback(() => {
        const albumCount = albumList.length;
        console.log(albumCount);

        if (albumCount === 1) {
            return 'grid grid-cols-1 grid-row-1';
        } else if (albumCount === 2) {
            return 'grid grid-cols-2 grid-rows-1';
        } else if (albumCount === 3) {
            return 'grid grid-cols-2 grid-rows-2';
        } else if (albumCount === 4) {
            return 'grid grid-cols-2 grid-rows-2';
        } else if (albumCount === 5) {
            return 'grid grid-cols-4 grid-rows-3';
        } else {
            return 'grid grid-cols-1';
        }
    }, []);

    // Function to compute item class based on index and album count
    const getItemClasses = (index: number, albumCount: number) => {
        if (albumCount === 3) {
            if (index === 2) {
                return 'col-span-2 row-start-2 row-end-2 lox';
            }
            return 'col-span-1 row-span-1';
        } else if (albumCount === 4) {
            return 'col-span-1 row-span-1'; // Each of the 4 elements takes 25%
        } else if (albumCount === 5) {
            if (index < 3) {
                // First row (3 elements): two 1/4 width and one 1/2 width
                return index === 2 ? 'col-span-2 row-span-1 row-start-1 row-end-2' : 'col-span-1 row-start-1 row-end-2';
            } else {
                // Second and third rows: full width (1/2)
                return 'col-span-2 row-span-2';
            }
        }
        return 'col-span-1 row-span-1'; // Default fallback
    };

    useEffect(() => {
        // You can modify this function if you need dynamic behavior
        setDynamicTemplate(addLayout());
    }, []);

    return (
        <div className={getGridClasses() + ' w-full'} style={{height:650}}>
            {albumList.map((album, index) => (
                <div
                    key={album.id}
                    style={{  }}
                    className={`album ${getItemClasses(index, albumList.length)} relative`}
                >
                    <img src={album.photos![0].thumbnailUrl} alt="" className="absolute top-0 left-0 w-full h-full" />
                </div>
            ))}

            {/* You can use dangerouslySetInnerHTML for dynamic templates */}
        </div>
    );
};

export default Gallery;
