import { Alert } from "@mui/material";

interface Props {
	errMsg?: string;
}

export const ErrorMessage = ({ errMsg = "No results found" }: Props) => {
	return <Alert severity="warning">{errMsg}</Alert>;
};
