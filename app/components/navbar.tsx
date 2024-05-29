// navbar.tsx
import React, { useState, useRef } from 'react';
import { NavbarProps } from '~/routes/_index';
import { PiListMagnifyingGlassLight, PiListLight } from "react-icons/pi"; 
import { GoChevronDown } from "react-icons/go";
import ReleaseNotesModal from '~/components/modals/releasenotesmodal';
import HelpModal from '~/components/modals/helpmodal';
import AboutModal from '~/components/modals/aboutmodal';

const Navbar: React.FC<NavbarProps> = React.memo(({ toggleSidebar, className, count }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isReleaseNotesOpen, setIsReleaseNotesOpen] = useState(false);
	const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

	const openReleaseNotes = () => {
    setIsReleaseNotesOpen(true);
  };

	const openHelp = () => {
    setIsHelpOpen(true);
  };

  const openAbout = () => {
    setIsAboutOpen(true);
  };

	const dropdownStyles = {
    backgroundColor: 'bg-darkgray',
    textColor: 'text-pearlwhite'
  };

  return (
    <header ref={navbarRef} className={`navbar sticky top-0 h-navbar mx-auto border text-pearlwhite bg-verydarkgray border-deepgray p-2 shadow-xl flex w-full justify-between items-center ${className}`}>
      {/* Small and Medium Screen Layout */}
      <div className="flex md:hidden items-center justify-between w-full relative">
        <div className="flex items-start">
          <button 
            onClick={toggleSidebar} 
            className="relative flex items-center justify-start h-12 w-12 hover-grow"
            aria-label='Toggle Sidebar'
          >
            <PiListMagnifyingGlassLight size={38} className="cursor-pointer" />
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-lg font-[LeagueSpartan-Regular]"> 
            F I N D L O S T P O E T S
          </div> 
          <div className="text-xs font-[LeagueSpartan-Light] -mt-1">
            (UNOFFICIAL)
          </div> 
        </div>
				<div className="flex items-center justify-center">
        {count !== undefined && (
          <div className="flex flex-col items-center ml-2">
						<div className="text-xs font-[LeagueSpartan-Light]">
							POETS FOUND:
						</div>
						<div className="text-sm font-[LeagueSpartan-Regular]">
							{count}
						</div>
					</div>
        )}
      	</div>
      </div>

      {/* Larger Screen Layout */}
      <div className="hidden md:flex items-center justify-between w-full relative">
        <div className="flex items-center ml-3">
          <button 
            onClick={toggleSidebar} 
            className="relative flex items-center justify-center h-14 w-14 hover-grow"
            aria-label='Toggle Sidebar'
          >
            <PiListMagnifyingGlassLight size={40} className="cursor-pointer" />
          </button>
					{count !== undefined && (
          <div className="flex flex-col items-center ml-5">
						<div className="text-xs mt-2 font-[LeagueSpartan-Light]">
							POETS FOUND:
						</div>
						<div className="text-md -mt-1 font-[LeagueSpartan-Regular]">
							{count}
						</div>
					</div>
        )}
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-xl lg:text-2xl font-[LeagueSpartan-Regular]"> 
            F I N D L O S T P O E T S
          </div> 
          <div className="text-xs font-[LeagueSpartan-Light] -mt-1">
            (UNOFFICIAL)
          </div> 
        </div>
        {/* The Information icon has a dropdown that lists various information items. The */}
        {/* dropdown is added on top of a viewport sized transparent over-lay that allows */}
        {/* clicking anywhere on the view to dismiss the dropdown without activating PoetModals. */}
			  <div className="relative flex items-center justify-center">
          <button 
            onClick={toggleDropdown} 
            className="relative flex items-center justify-center h-14 w-14 hover-grow"
            aria-label='Menu'
          >
            <PiListLight size={40} className="cursor-pointer" />
          </button>
          {isDropdownOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-transparent pointer-events-auto" onClick={closeDropdown}></div>
              <div className={`absolute z-50 right-0 top-full mt-2 w-52 ${dropdownStyles.backgroundColor} ${dropdownStyles.textColor} rounded-xl pointer-events-auto`}>
                <div className="p-3 flex justify-between items-center">
                  <span className="font-medium">Version Number:</span>
                  <span>0.1.0</span>
                </div>
                <div className="border-t border-naughtygray hidden"></div>
                <div className="p-3 cursor-pointer" onClick={openReleaseNotes} hidden>
                  <div className="flex justify-between items-center">
                    <h2 className="font-medium">Release Notes</h2>
                    <GoChevronDown />
                  </div>
                </div>
                <div className="border-t border-naughtygray"></div>
                <div className="p-3 cursor-pointer" onClick={openHelp}>
                  <div className="flex justify-between items-center">
                    <h2 className="font-medium">Help</h2>
                    <GoChevronDown />
                  </div>
                </div>
                <div className="border-t border-naughtygray"></div>
                <div className="p-3 cursor-pointer" onClick={openAbout}>
                  <div className="flex justify-between items-center">
                    <h2 className="font-medium">About</h2>
                    <GoChevronDown />
                  </div>
                </div>
              </div>
            </>
          )}
					{isReleaseNotesOpen && <ReleaseNotesModal onClose={() => setIsReleaseNotesOpen(false)} backgroundColor={dropdownStyles.backgroundColor} textColor={dropdownStyles.textColor} />}
      		{isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} backgroundColor={dropdownStyles.backgroundColor} textColor={dropdownStyles.textColor} />}
          {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} backgroundColor={dropdownStyles.backgroundColor} textColor={dropdownStyles.textColor} />}
				</div>
			</div>
    </header>
  );
});

export default Navbar;