"use client";

import { useState, useCallback, useEffect } from "react";
import Masonry from "react-masonry-css";
import { SmartImage, Dialog, Flex, IconButton, Text } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";

export default function MasonryGrid() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  const openLightbox = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setSelectedImageIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  }, [selectedImageIndex]);

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex < gallery.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  }, [selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, goToPrevious, goToNext]);

  const selectedImage = selectedImageIndex !== null ? gallery.images[selectedImageIndex] : null;

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {gallery.images.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            aria-label={`View ${image.alt || `image ${index + 1}`} in full size`}
          >
            <SmartImage
              priority={index < 10}
              sizes="(max-width: 560px) 100vw, 50vw"
              radius="m"
              aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
              src={image.src}
              alt={image.alt}
              className={styles.gridItem}
            />
            <div className={styles.overlay}>
              <Text variant="body-default-s" color="on-surface">
                Click to view
              </Text>
            </div>
          </div>
        ))}
      </Masonry>

      {/* Lightbox Dialog */}
      {selectedImage && (
        <Dialog
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
          title={(selectedImage as any).title || `Image ${(selectedImageIndex || 0) + 1} of ${gallery.images.length}`}
          description={(selectedImage as any).description}
        >
          <Flex direction="column" gap="m" fillWidth>
            <Flex fillWidth center position="relative">
              {/* Previous Button */}
              {selectedImageIndex !== null && selectedImageIndex > 0 && (
                <IconButton
                  icon="chevronLeft"
                  size="l"
                  variant="secondary"
                  onClick={goToPrevious}
                  tooltip="Previous image"
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                />
              )}

              {/* Main Image */}
              <SmartImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                radius="m"
                style={{
                  maxHeight: "70vh",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />

              {/* Next Button */}
              {selectedImageIndex !== null && selectedImageIndex < gallery.images.length - 1 && (
                <IconButton
                  icon="chevronRight"
                  size="l"
                  variant="secondary"
                  onClick={goToNext}
                  tooltip="Next image"
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                />
              )}
            </Flex>

            {/* Image Counter */}
            <Flex center>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {(selectedImageIndex || 0) + 1} of {gallery.images.length}
              </Text>
            </Flex>
          </Flex>
        </Dialog>
      )}
    </>
  );
}
