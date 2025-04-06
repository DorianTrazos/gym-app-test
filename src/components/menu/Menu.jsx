import { StyledLink } from './menu.styles';

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<StyledLink to='/'>HOME</StyledLink>
				</li>
				<li>
					<StyledLink to='/about'>ABOUT</StyledLink>
				</li>
				<li>
					<StyledLink to='/macarena'>USER - Macarena</StyledLink>
					<StyledLink to='/xavi'>USER - Xavi</StyledLink>
					<StyledLink to='/diego'>USER - Diego</StyledLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
