type DateStyle = "full" | "long" | "medium" | "short";

export const dateFormatted = (date: Date, dateStyle?: DateStyle): string => {
	const newDate = new Date(date);

	if (dateStyle) {
		return newDate.toLocaleDateString("en-UK", { dateStyle });
	}

	const formatDate = newDate.toLocaleDateString("es-ES", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

	return formatDate.replaceAll("/", "-");
};
