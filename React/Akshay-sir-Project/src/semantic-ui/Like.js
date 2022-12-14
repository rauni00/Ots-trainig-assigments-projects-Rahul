import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
export default function Like() {
	const [like, setLike] = useState(false);

	return (
		<div>
			<Icon
				style={{ color: like ? 'red' : 'black', fontSize: 20, cursor: 'pointer' }}
				name="heart"
				onClick={() => {
					setLike(!like);
				}}
			/>
		</div>
	);
}
