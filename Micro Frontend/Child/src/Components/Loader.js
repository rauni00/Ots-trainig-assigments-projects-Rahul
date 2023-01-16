import React, { useEffect, useState } from "react";

const Loader = () => {
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		setInterval(() => {
			setLoader(false);
		}, 3000);
	}, []);
	return <div>{loader && <>Loading......</>}</div>;
};

export default Loader;
