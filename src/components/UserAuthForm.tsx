import { FC } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

interface UserAuthFormProps {}

const UserAuthForm: FC<UserAuthFormProps> = ({}) => {
	return (
		<div className={cn('flex justify-center')}>
			<Button>Google</Button>
		</div>
	);
};

export default UserAuthForm;
