import Styled from "styled-components";

export default Styled.h1`
	color: white;
	font-family: 'Meera Inimai', sans-serif;
	@media(max-width: 400px){
		padding: 10px;
		font-size: 60px;
	}
	@media(min-width: 400px){
		margin: 30px;
		margin-top: 100px;
		margin-bottom: 70px;
		font-size: 70px;
	}
`;