import React from "react";
import Styled from "styled-components";
import {Icon} from "../styled/home";

const Grid = Styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(200, 200, 200, .3), rgba(200, 200, 200, .5)), url("/dents.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	align-items: center;
	justify-items: center;
`;

export default () => (
	<Grid>
		<Icon src={"/icons/facebook.png"} alt={"facebook account"} href={"https://www.facebook.com/senges.alex"}/>
		<Icon src={"/icons/Octocat.png"} alt={"github account"} href={"https://github.com/sakex"}/>
		<Icon style={{gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: "rgba(41, 103, 178, 0)"}} src={"/icons/LI-Logo.png"} alt={"linkedin account"} href={"https://www.linkedin.com/in/alexandre-senges-0a02a4111/"}/>
	</Grid>
);