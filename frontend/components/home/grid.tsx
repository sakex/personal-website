import Styled from 'styled-components';

export default Styled.div`
	width: 100%;
	display: grid;
	position: absolute;
	left: 0;
	top: 0;
	grid-template-columns: 1fr 1fr;
	@media(max-width: 1000px){
		grid-template-columns: 1fr;
		grid-template-rows: minmax(100vh, auto);
	}
	@media(min-width: 1000px){
		height: 100%;
		grid-template-rows: 1fr;
	}
`;