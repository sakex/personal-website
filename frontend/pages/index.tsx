import React from "react";
import Head from "next/head";
import {Left} from "../components/home";
import {Grid} from "../components/home";

export default () => (
	<>
		<Head>
			<title>Alexandre Senges</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
		</Head>
		<Grid>
			<Left/>
			<Left/>
		</Grid>
	</>
);