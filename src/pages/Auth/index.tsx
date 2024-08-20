import React from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="w-screen min-h-svh flex justify-center">
			<div className="max-w-[800px] w-full p-4 flex flex-col items-center">
				<div className="max-w-[350px] flex flex-col items-center gap-6 w-full">
					<h1 className="text-3xl py-44">XWallet</h1>
					<Input placeholder="Password" type="password" />
					<Button className="w-full" onClick={() => navigate("/")}>
						Unlock
					</Button>
					<Button className="w-full" variant="link">
						Forgot Password
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Auth;

