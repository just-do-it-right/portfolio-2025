"use client";

import Masonry from "react-masonry-css";
import Link from "next/link";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  const renderImage = (image: any, index: number) => {
    // Create a wrapper div that ensures proper sizing
    const imageContainer = (
      <div 
        className={styles.imageContainer}
        style={{ 
          width: '100%',
          aspectRatio: image.orientation === "horizontal" ? "16 / 9" : "3 / 4",
          marginBottom: 'var(--static-space-16)'
        }}
      >
        <SmartImage
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          radius="m"
          src={image.src}
          alt={image.alt}
          className={`${styles.gridItem} ${image.link ? styles.linkedImage : ''}`}
          fillWidth
        />
      </div>
    );

    // If image has a link, wrap it with Link component
    if (image.link) {
      return (
        <Link
          href={image.link}
          key={index}
          className={styles.imageLink}
          title={`View ${image.alt || 'project'}`}
        >
          {imageContainer}
        </Link>
      );
    }

    // Otherwise, return the image normally
    return (
      <div key={index}>
        {imageContainer}
      </div>
    );
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((image, index) => renderImage(image, index))}
    </Masonry>
  );
}
