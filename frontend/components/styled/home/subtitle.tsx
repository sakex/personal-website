import Styled from 'styled-components';

export default Styled.h2`
    color: #cb8d4c;
    font-size: 40px;
    font-weight: 700;
	font-family: 'Meera Inimai', sans-serif;
	@media(max-width: 400px){
		padding: 10px;
	}
	@media(min-width: 400px){
		margin-left: 130px;
	    margin-top: 30px;
	    margin-bottom: 70px;
	}
`;