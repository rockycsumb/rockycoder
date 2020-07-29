import React from 'react';
import '../../assets/css/Header.scss';

const Header = () =>{
	
	return(
		<div className="Header-main">
			<div className="Header-title">
				<div className="Header-title-names">
					<div className="Header-title-name">
						Rocky
					</div>
					<div className="Header-title-name">
						Coder
					</div>
				</div>
				
				<div className="Header-title-description">
					FRONTEND ENGINEER
				</div>
				
			</div>
		</div>
	)
}

export default Header;