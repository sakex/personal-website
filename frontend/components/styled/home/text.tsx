import Styled from "styled-components";

export default Styled.p`
	color: white;
	font-family: 'Meera Inimai', sans-serif;
	@media(min-width: 1000px){
		padding-right: 10px;
		margin-left: 130px;
		margin-top: 20px;
		margin-bottom: 40px;
		font-size: 38px;
	}
	@media(max-width: 1800px){
		font-size: 36px;
	}
	@media(max-width: 1600px){
		font-size: 34px;
	}
	@media(max-width: 1500px){
		font-size: 30px;
	}
	@media(max-width: 1400px){
		font-size: 28px;
	}
	@media(max-width: 1300px){
		font-size: 26px;
	}
	@media(max-width: 1100px){
		font-size: 22px;
	}
	@media(max-width: 1000px){
		padding: 10px;
		width: calc(100% - 20px);
		font-size: 30px;
	}
`;