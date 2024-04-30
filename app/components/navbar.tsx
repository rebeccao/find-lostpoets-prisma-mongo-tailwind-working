import { NavbarProps } from '~/routes/_index';
import {HiMenuAlt3} from 'react-icons/hi';

export default function Navbar({ toggleSidebar }: NavbarProps) {
	return(
		<header className="sticky top-0 z-[1] h-navbar mx-auto bg-gray-100 border-gray-300 p-2 shadow-md flex w-full justify-between items-center dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
			<div className="flex items-center ml-3">
				<button 
				  onClick={toggleSidebar} 
					className="relative flex items-center justify-center h-12 w-12"
					aria-label='Toggle Sidebar'
				>
					<HiMenuAlt3 size={38} className="cursor-pointer text-darkgray" />
				</button>
			</div>
			{/* Right Side Banner */}
			<div className="flex flex-col items-center text-darkgray mr-3"> 
				<div className="text-3xl lg:text-3xl md:text-xl sm:text-lg font-[LeagueSpartan-SemiBold]"> 
					F I N D L O S T P O E T S
				</div> 
				<div className="text-xs font-[LeagueSpartan-Regular] -mt-2 -mb-1">
					(UNOFFICIAL)
				</div> 
      </div>
		</header>
	);
}