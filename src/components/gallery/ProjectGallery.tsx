"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import Link from "next/link";
import { SmartImage, Flex, Heading, Text, Button } from "@/once-ui/components";
import styles from "./Gallery.module.scss";

interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
  layout?: "masonry" | "grid" | "lightbox";
}

export default function ProjectGallery({ 
  images, 
  projectName, 
  layout = "masonry" 
}: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Skip the first image (hero image already shown)
  const galleryImages = images.slice(1);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Option A: Simple Stack Layout (matches hero image exactly)
  if (layout === "masonry") {
    return (
      <div style={{ marginTop: '48px' }}>
        <Heading variant="heading-strong-l" style={{ marginBottom: '32px' }}>Project Gallery</Heading>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              style={{ 
                width: '100%', 
                position: 'relative', 
                aspectRatio: '16/10', 
                borderRadius: '12px', 
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                backgroundColor: '#f5f5f5'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={image}
                alt={`${projectName} project image ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '12px'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Option B: Structured Grid Layout
  if (layout === "grid") {
    return (
      <Flex direction="column" gap="l" marginTop="xl">
        <Heading variant="heading-strong-l">Project Gallery</Heading>
        <div className={styles.structuredGrid}>
          {galleryImages.map((image, index) => (
            <SmartImage
              key={index}
              priority={index < 6}
              sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
              radius="m"
              aspectRatio="16 / 10"
              src={image}
              alt={`${projectName} project image ${index + 1}`}
              className={styles.structuredGridItem}
            />
          ))}
        </div>
      </Flex>
    );
  }

  // Option C: Lightbox Gallery
  if (layout === "lightbox") {
    return (
      <>
        <Flex direction="column" gap="l" marginTop="xl">
          <Heading variant="heading-strong-l">Project Gallery</Heading>
          <div className={styles.lightboxThumbnails}>
            {galleryImages.map((image, index) => (
              <SmartImage
                key={index}
                priority={index < 8}
                sizes="(max-width: 720px) 50vw, (max-width: 1024px) 33vw, 25vw"
                radius="m"
                aspectRatio="4 / 3"
                src={image}
                alt={`${projectName} project image ${index + 1}`}
                className={`${styles.lightboxThumbnail} ${styles.clickable}`}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </Flex>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className={styles.lightboxOverlay} onClick={closeLightbox}>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.lightboxClose} onClick={closeLightbox}>
                ×
              </button>
              <button className={styles.lightboxPrev} onClick={prevImage}>
                ‹
              </button>
              <SmartImage
                src={galleryImages[lightboxIndex]}
                alt={`${projectName} project image ${lightboxIndex + 1}`}
                aspectRatio="auto"
                radius="m"
                className={styles.lightboxImage}
              />
              <button className={styles.lightboxNext} onClick={nextImage}>
                ›
              </button>
              <div className={styles.lightboxCounter}>
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
} 