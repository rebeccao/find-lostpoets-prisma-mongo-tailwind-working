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

// Display Poet's details. The poem m
export default function PoetDetail({ poet, hasPoem, onReturn }: PoetDetailProps) {
  const [showPoemModal, setShowPoemModal] = useState(false);
  const [isPoemOverflowing, setIsPoemOverflowing] = useState(false);
  const poemContainerRef = useRef<HTMLDivElement>(null);
  const togglePoemModal = () => setShowPoemModal(!showPoemModal);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState<string>('');

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

  const openImageModal = (imageSrc: string) => {
    setCurrentModalImage(imageSrc);
    setImageModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen overflow-y-auto" onClick={handlePoemModalBackgroundClick}>
      <PoetDetailNavbar poetName={poet.pNam} className="navbar" onReturn={onReturn} />
      <div className="flex flex-1 relative bg-closetoblack">
        {/* Main content section for images and traits */}
        <div className="grid grid-rows-[auto,1fr] min-h-0 w-full max-w-7xl mx-auto my-6 overflow-y-auto">
          {/* Images container */}
          <div className="flex justify-center items-center px-4 bg-closetoblack">
            <div style={{ width: '50%', padding: '0 10px 0 0' }} onClick={() => openImageModal(poet.g0Url)}>  {/* Add right padding to the first image */}
              <img src={poet.g0Url} alt={`${poet.pNam} Gen0`} className="w-full" loading="lazy" />
            </div>
            <div style={{ width: '50%', padding: '0 0 0 10px' }} onClick={() => openImageModal(poet.g1Url)}>  {/* Add left padding to the second image */}
              <img src={poet.g1Url} alt={`${poet.pNam} Gen1`} className="w-full" loading="lazy" />
            </div>
          </div>
          <ImageModal isOpen={isImageModalOpen} onClose={() => setImageModalOpen(false)} imageSrc={currentModalImage} />
          {/* Container for the traits and the poem if it exists. */}
          {/* When the poem modal is not active, show this container. Hide this container when poem modal is active */}
          {!showPoemModal && (
          <div className="bg-closetoblack text-pearlwhite px-4 pb-4 pt-8 flex justify-center">
            {hasPoem ? (
              <div className="flex gap-4 w-full h-auto">
                {/* First section for traits */}
                <div className="flex-1 px-4 pb-4">
                    <PoetDetailTraits poet={poet} />
                </div>
                {/* Second section for the poem */}
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
              <button onClick={togglePoemModal} className="text-lg pt-5 pl-2 pb-2">
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