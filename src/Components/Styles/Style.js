import styled from 'styled-components';

export const SSection = styled.div`
	height: 100vh;
	color: #2d3436;
`;

export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;
	z-index: 10;
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
	background-color: white;
	opacity: 0.98;
`;

export const HeaderArea = styled.div`
	display: flex;
	align-items: center;
	width: 75vw;
	height: 6rem;
	margin: 0 auto;
	padding: 0 10px;
`;

export const HeaderTitle = styled.div`
	color: #079992;
	font-size: 30px;
	font-weight: 500;
	text-align: center;
`;

export const ItemList = styled.div`
	margin: 8rem auto;
	box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.1);
	width: 84%;
	height: 82%;
	overflow: hidden;
	/* background-color: rgba(0, 0, 0, 0.6); */
	/* color: white; */
`;

export const Items = styled.div`
	text-align: center;
	height: 73vh;
`;

export const ItemTitle = styled.h1`
	font-size: 9rem;
	margin: 2rem 3rem;
	color: #2b3452;
`;

export const ItemValue = styled.div`
	font-size: 8rem;
	margin: 3rem auto;
	color: #2b3452;
`;

export const ItemValueSmall = styled.div`
	font-size: 3rem;
	margin: 3rem auto;
	color: #2b3452;
`;

export const ItemSubTitle = styled.div`
	font-size: 3rem;
	opacity: 0.5;
	color: #222;
`;

export const ItemSub = styled.span`
	font-size: 2.4rem;
	opacity: 0.5;
	color: #222;
`;
