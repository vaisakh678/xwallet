import { Outlet } from "react-router-dom";
import ThemeToggleBtn from "../../components/ui/ThemeToggleBtn";

interface SetupProps {}

const Setup: React.FC<SetupProps> = () => {
	return (
		<div className="min-h-svh p-4 flex items-center flex-col justify-center">
			<div className="p-4 absolute top-0 right-0">
				<ThemeToggleBtn />
			</div>
			<Outlet />
		</div>
	);
};

export default Setup;

