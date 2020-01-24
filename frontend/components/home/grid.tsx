import Styled from 'styled-components';

export default Styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: 100%;
	position: absolute;
	left: 0;
	top: 0;
	grid-template-columns: 1fr 1fr;
	@media(max-width: 400px){
		grid-template-columns: 1fr;
	}
	@media(min-width: 400px){
		height: 100%;
	}
`;