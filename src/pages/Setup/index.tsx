import { Outlet } from "react-router-dom";

interface SetupProps {}

const Setup: React.FC<SetupProps> = () => {
	return (
		<div className="min-h-svh p-4 flex items-center flex-col justify-center">
			<Outlet />
		</div>
	);
};

export default Setup;

