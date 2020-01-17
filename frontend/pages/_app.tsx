import React from "react";
/// import App from "next/app";

export default ({Component, pageProps}) => (
	<>
		<style jsx global>
			{
				`
				@import url('https://fonts.googleapis.com/css?family=Meera+Inimai:400,700|Bevan|Martel:400,700|Staatliches&display=swap');
				body{
					font-family: 'Martel', serif;
				`
			}
		</style>
		<Component {...pageProps} />
	</>
);