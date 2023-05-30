import { Alert } from "@mui/material";

interface Props {
	errMsg?: string;
}

export const ErrorMessage = ({
	errMsg = "No se encontraron resultados",
}: Props) => {
	return <Alert severity="warning">{errMsg}</Alert>;
};
