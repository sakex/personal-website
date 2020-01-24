import Styled from "styled-components";

export default Styled.p`
	color: white;
	font-size: 20px;
	font-family: 'Meera Inimai', sans-serif;
	@media(min-width: 400px){
		padding-right: 10px;
		margin-left: 130px;
		margin-top: 20px;
		margin-bottom: 40px;
	}
	@media(max-width: 400px){
		padding: 10px;
		width: calc(100% - 20px);
	}
`;