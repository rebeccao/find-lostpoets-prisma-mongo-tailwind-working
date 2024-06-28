import React from 'react';
import BaseModal from '~/components/modals/baseinfomodal';

interface ReleaseNotesModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const ReleaseNotesModal: React.FC<ReleaseNotesModalProps> = ({ onClose, isOpen }) => {
  return (
    <BaseModal onClose={onClose} title="Release Notes" isOpen={isOpen}>
      <div className="space-y-1">
        <h2 className="text-lg font-light">Release 1.1.0 - Major database update, new features, bug fixes</h2>
        <ul className="list-disc list-inside p-4">
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">Database major update:</span> 
            <ol className="list-dash list-inside ml-8">
              <li>New Owner field - Used Opensea API to establish the owner names for every poet, if they exist.</li>
              <li>New Wallet field - Used Etherscan API to establish the wallet addresses for every poet.</li>
              <li>New Listed field - Future feature.</li>
            </ol>
          </li>
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">New features:</span> 
            <ol className="list-dash list-inside ml-8">
              <li><span className="font-normal">Search by Owner:</span> Opensea account owner.</li>
              <li><span className="font-normal">Search by Wallet:</span> Opensea wallet.</li>
              <li><span className="font-normal">Display Search Criteria:</span> Search criteria now displayed in the Navbar.</li>
            </ol>
          </li>
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">Minor UI Improvements</ span> 
          </li>
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">Bug fixes:</span>
            <ol className="list-dash list-inside ml-8">
              <li><span className="font-normal">Slow app startup fix:</span> FINDLOSTPOETS uses a free plan on Heroku for hosting and is idled after 30 minutes of inactivity, causing slow start up. Added a Cloudflare Worker cron job to peridically ping the server to prevent idling.</li>
            </ol>
          </li>
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">Known Issues:</span> 
            <ol className="list-dash list-inside ml-8">
              <li><span className="font-normal">UI glitches:</span> Scrolling involves loading new pages of poets and currently can cause glitches, like flashing content. This will be addressed in future releases.</li>
              <li><span className="font-normal">Gen1 image zooming:</span> Clicking any Poet to show details, then clicking the Gen1 image to zoom. Gen0 and Gen1 images are displayed in 1024x1024 frames. The Gen1 image can be zoomed to 2048x2048, enabling scrolling to view the entire image. Currently, the image is clipped in zoomed mode, limiting the scroll area.</li>
            </ol>
          </li>
        </ul>
        <h2 className="text-lg font-light">Release 1.0.0 - Major database update, new features, bug fixes</h2>
        <ul className="list-disc list-inside p-4">
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">Database major update:</span> Migrated the latest Manifold LostPoets Gen1 metadata into the FINDLOSTPOETS database and simplified the database schema. Data that changed: 
            <ol className="list-dash list-inside ml-8">
              <li>New origin names for Pak's 16 orphan Origin families.</li>
              <li>New Class trait: Origin, Poet and Ghost.</li>
              <li>New naming formats for poet: Origin #VIAK changed to VIAK, Poet #20046 changed to #20046 and for certain poets upper case changed to camel case.</li>
            </ol>
          </li>
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">New features:</span> 
            <ol className="list-dash list-inside ml-8">
              <li><span className="font-normal">Search by Class:</span> Origin, Poet and Ghost.</li>
              <li><span className="font-normal">Search by Named:</span> Named or No Name.</li>
            </ol>
          </li>
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">Changes to Information Dropdown:</span> 
            <ol className="list-dash list-inside ml-8">
              <li>Updated release to 1.0.0.</li>
              <li>Added these Release Notes.</li>
              <li>Updated About and Help content.</li>
            </ol>
          </li>
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">UI Improvements:</ span> Changed fonts throughout. Changed the colors of error messages.
          </li>
          <li className="pl-2 mb-2 hanging-indent">
            <span className="font-normal">Bug fixes:</span>
            <ol className="list-dash list-inside ml-8">
              <li><span className="font-normal">Search by Trait:</span> Ego search now supports the following inputs: 'I', 'II', 'III', 'IV', 'V', 'i', 'ii', 'iii', 'iv', 'v', '1', '2', '3', '4', '5'.</li>
              <li><span className="font-normal">Sidebar Panel Tooltips:</span> Added a slight hover delay to prevent the Tooltip modal from instantly appearing.</li>
              <li><span className="font-normal">Asset support:</span> Added apple-touch-icon to links.</li>
            </ol>
          </li>
        </ul>
      </div>
    </BaseModal>
  );
};

export default ReleaseNotesModal;
