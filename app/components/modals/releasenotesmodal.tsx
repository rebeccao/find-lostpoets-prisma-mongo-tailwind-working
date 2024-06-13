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
        <h2 className="text-lg font-light">Release 1.0.0 - Major database update, new features, bug fixes</h2>
        <ul className="list-disc list-inside p-4">
          <li className="pl-2 mb-1 hanging-indent">
            <span className="font-normal">Database major update:</span> Migrated the latest Manifold LostPoets Gen1 metadata into the FINDLOSTPOETS database and simplified the database schema. Data that changed: 
            <ol className="list-dash list-inside ml-8">
              <li>New origin names for Pak's 16 orphan Origin families.</li>
              <li>New Class trait: Origin, Poet and Ghost.</li>
              <li>New naming formats for poet: Origin #VIAK changed to VIAK, Poet #20046 changed to #20046 and for certain poets upper case changed to camel case.</li>
            </ol>
          </li>
          <li className="pl-2 mb-1 hanging-indent">
            <span className="font-normal">New features</span> 
            <ol className="list-dash list-inside ml-8">
              <li>Search by Class: Origin, Poet and Ghost.</li>
              <li>Search by Named: Named or No Name.</li>
            </ol>
          </li>
          <li className="pl-2 mb-1 hanging-indent">
            <span className="font-normal">Changes to Information Dropdown</span> 
            <ol className="list-dash list-inside ml-8">
              <li>Updated release to 1.0.0.</li>
              <li>Added these Release Notes.</li>
              <li>Updated About and Help content.</li>
            </ol>
          </li>
          <li className="pl-2 mb-1 hanging-indent">
            <span className="font-normal">Prettied up UI:</ span> Changed fonts and colors of error messages.
          </li>
          <li className="pl-2 mb-1 hanging-indent">
            <span className="font-normal">And of course, bug fixes :)</span>
            <ol className="list-dash list-inside ml-8">
              <li>Search by Trait: Ego search now supports the following inputs: 'I', 'II', 'III', 'IV', 'V', 'i', 'ii', 'iii', 'iv', 'v', '1', '2', '3', '4', '5'.</li>
              <li>Sidebar Panel Tooltips: Added a slight hoover delay to prevent the Tooltip modal from instantly appearing.</li>
              <li>Asset support: Added apple-touch-icon to links.</li>
            </ol>
          </li>
          <li className="pl-2 mb-1 hanging-indent">
            <span className="font-normal">Known Issue:</span> FINDLOSTPOETS uses a free plan on Heroku as the hosting server. A limitation of this plan is that the server idles after 30 minutes of inactivity, resulting in a long startup time of approximately 15 seconds for the next user. I considered adding a "Loading..." screen to indicate the delay, but the implementation is complex and not worth the effort, especially since upgrading to a paid plan will eliminate the issue.
          </li>
        </ul>
      </div>
    </BaseModal>
  );
};

export default ReleaseNotesModal;
