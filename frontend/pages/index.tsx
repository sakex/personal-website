import React, {ReactElement} from "react";
import Head from "next/head";
import {Left, Right} from "../components/home";
import {Grid} from "../components/home";

export default (): ReactElement => (
	<>
		<Head>
			<title>Alexandre Senges</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
		</Head>
		<Grid>
			<Left/>
			<Right/>
		</Grid>
	</>
);