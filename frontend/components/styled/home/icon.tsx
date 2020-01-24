import React, {ReactElement} from "react";
import Styled from "styled-components";

const Img = Styled.img`
	width: 100%;
	object-fit: cover;
	object-position: 100%;
`;

const Anchor = Styled.a`
	height: 100%;
	width: 100%;
`;

const Container = Styled.span`
	width: calc(100% - 40px);
	position: relative;
	padding: 20px;
`;

export default (props: { src: string, alt: string, href: string, style?: any }): ReactElement => {
	return (<Container style={props.style}>
		<Anchor href={props.href} target={"_blank"}>
			<Img src={props.src} alt={props.alt} />
		</Anchor>
	</Container>);
}