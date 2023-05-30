export const dateFormatted = (date: Date) => {
	const newDate = new Date(date);
	const formatDate = newDate.toLocaleDateString("es-ES", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

	return formatDate.replaceAll("/", "-");
};
