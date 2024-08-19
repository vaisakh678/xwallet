import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface CreatePasswordProps {}

const CreatePassword: React.FC<CreatePasswordProps> = () => {
	const navigate = useNavigate();
	const [togglePassword, setTogglePassword] = useState(false);

	return (
		<div className="h-full flex items-center flex-col justify-center">
			<section className="text-center mb-28">
				<h1 className="text-4xl font-semibold mb-4">It should be at least 8 characters.</h1>
				<p className="opacity-90">You’ll need this to unlock Backpack</p>
			</section>
			<section className="flex flex-col gap-2 mb-8 max-w-[300px] w-full">
				<div className="relative">
					<Input placeholder="Password" className="pr-8" type={!togglePassword ? "password" : "text"} />
					<div className="absolute h-full w-10 right-0 top-0 flex items-center justify-center">
						<button
							tabIndex={10}
							onClick={() => {
								setTogglePassword((prev) => !prev);
							}}
						>
							{togglePassword ? <IoEyeOutline className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
						</button>
					</div>
				</div>
				<Input placeholder="Confirm Password" type="password" />
			</section>
			<div className="flex items-center space-x-2 mb-3">
				<Checkbox id="terms" />
				<label
					htmlFor="terms"
					className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Accept terms and conditions
				</label>
			</div>
			<Button onClick={() => navigate("/")}>Next</Button>
		</div>
	);
};

export default CreatePassword;

