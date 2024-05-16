import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import type { Poet } from '@prisma/client';
import PoetDetailNavbar from '~/components/navbar-poet-detail';
import PoetDetailTraits from '~/components/detail/poetdetail-traits';
import ImageModal from './imagemodal'; 
import { GrClose } from "react-icons/gr";

interface PoetDetailProps {
  poet: Poet;
  hasPoem: boolean;
  onReturn: () => void;
}

export type ImageSize = '1X' | '2X';

// Display Poet's details. The poem m
export default function PoetDetail({ poet, hasPoem, onReturn }: PoetDetailProps) {
  const [showPoemModal, setShowPoemModal] = useState(false);
  const [isPoemOverflowing, setIsPoemOverflowing] = useState(false);
  const poemContainerRef = useRef<HTMLDivElement>(null);
  const togglePoemModal = () => setShowPoemModal(!showPoemModal);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState<string>('');
  const [imageSize, setImageSize] = useState<ImageSize>('1X');
  const [imageContainerHeight, setImageContainerHeight] = useState('75vh'); 

  useEffect(() => {
    const adjustImageHeight = () => {
      const viewportHeight = window.innerHeight;
      const newHeight = `${viewportHeight * 0.7}px`; // Set images to 75% of the viewport height
      setImageContainerHeight(newHeight);
    };

    window.addEventListener('resize', adjustImageHeight);
    adjustImageHeight(); // Call on initial mount

    return () => {
      window.removeEventListener('resize', adjustImageHeight); // Clean up event listener
    };
  }, []);

  const handlePoemModalBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (showPoemModal) {
      togglePoemModal();
    }
  };

  // checkOverflow useEffect to check for poem overflowing the poem section
  useEffect(() => {
    const element = poemContainerRef.current;
    if (element) {
      const currentIsOverflowing = element.scrollHeight > element.clientHeight;
      setIsPoemOverflowing(currentIsOverflowing); // Update state based on current overflow status
    }
  }, [poet.poem]); 

  const openImageModal = (imageSrc: string, imageSize: ImageSize) => {
    setCurrentModalImage(imageSrc);
    setImageModalOpen(true);
    setImageSize(imageSize);
  };

  return (
    <div className="flex flex-col h-screen overflow-y-auto" onClick={handlePoemModalBackgroundClick}>
      <PoetDetailNavbar poetName={poet.pNam} className="navbar" onReturn={onReturn} />
      <div className="flex flex-1 relative bg-closetoblack">
        {/* Main content container for images and traits */}
        <div className="grid grid-rows-[auto,1fr] min-h-0 w-full mx-auto my-6 overflow-y-auto">
          {/* Images container */}
          <div className="flex justify-center items-center px-4 bg-closetoblack" style={{ height: imageContainerHeight }}>
            <div style={{ width: '50%', padding: '0 10px 0 0' }} onClick={() => openImageModal(poet.g0Url, '1X')}>  {/* Add right padding to the first image */}
              <img src={poet.g0Url} alt={`${poet.pNam} Gen0`} className="w-full" loading="lazy" />
            </div>
            <div style={{ width: '50%', padding: '0 0 0 10px' }} onClick={() => openImageModal(poet.g1Url, '2X')}>  {/* Add left padding to the second image */}
              <img src={poet.g1Url} alt={`${poet.pNam} Gen1`} className="w-full" loading="lazy" />
            </div>
          </div>
          <ImageModal isOpen={isImageModalOpen} onClose={() => setImageModalOpen(false)} imageSrc={currentModalImage} imageSize={imageSize}/>
          {/* Container for the traits and the poem if it exists. */}
          {/* When the poem modal is not active, show this container. Hide this container when poem modal is active */}
          {!showPoemModal && (
          <div className="bg-closetoblack text-pearlwhite px-4 pb-4 pt-8 flex justify-center">
            {hasPoem ? (
              <div className="flex gap-4 w-full h-auto">
                {/* First container for traits */}
                <div className="flex-1 px-4 pb-4">
                    <PoetDetailTraits poet={poet} />
                </div>
                {/* Second container for the poem */}
                <div 
                  onClick={isPoemOverflowing ? togglePoemModal : undefined}
                  ref={poemContainerRef}
                  className={`flex-1 flex flex-col justify-start items-center text-center text-pearlwhite px-4 pb-4 overflow-y-auto max-h-28 ${
                    isPoemOverflowing ? 'cursor-pointer' : 'cursor-default'
                  }`}
                  aria-label="Click to toggle poem details"
                >
                  <pre className="whitespace-pre-wrap">{poet.poem}</pre>
                </div>
              </div>
            ) : (
              <PoetDetailTraits poet={poet} />
            )}
          </div>
          )}
        </div>

        {/* Poem modal */}
        {hasPoem && showPoemModal && (
          <Draggable>
            <div 
              className="fixed top-15 left-1/2 w-2/5 h-full bg-verydarkgray text-pearlwhite rounded-3xl px-4 pb-4 z-50"
              style={{ cursor: 'move' }}
              onClick={(e) => e.stopPropagation()} // Prevents click from propagating to background
            >
              <button onClick={togglePoemModal} className="text-lg pt-5 pr-2 pb-2">
                <GrClose />
              </button>
              <div className="text-center overflow-auto h-full">
                <pre className="whitespace-pre-wrap">{poet.poem}</pre>
              </div>
            </div>
          </Draggable>
        )}
      </div>
    </div>
  );
}