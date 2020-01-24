import Styled from "styled-components";

export default Styled.p`
	color: white;
	font-family: 'Meera Inimai', sans-serif;
	@media(min-width: 1000px){
		padding-right: 10px;
		margin-left: 130px;
		margin-top: 20px;
		margin-bottom: 40px;
		font-size: 20px;
	}
	@media(max-width: 1000px){
		padding: 10px;
		width: calc(100% - 20px);
		font-size: 30px;
	}
`;