import { useEffect, useState, useRef } from "react";

interface Props {
	distance?: string;
	externalRef?: React.RefObject<HTMLElement> | null;
	once?: boolean;
}

interface UseNearScreenReturn {
	isNearScreen: boolean;
	fromRef: React.RefObject<HTMLElement> | null;
}

interface IntersectionObserverType {
	rootMargin: string;
	observe: (element: Element) => void;
	disconnect: () => void;
}

interface IntersectionObserverEntry {
	isIntersecting: boolean;
}

export const useNearScreen = ({
	distance = "100px",
	externalRef = null,
	once = true,
}: Props): UseNearScreenReturn => {
	const [isNearScreen, setShow] = useState(false);
	const fromRef = useRef(null);

	useEffect(() => {
		let observer: IntersectionObserverType;

		const element = externalRef ? externalRef.current : fromRef.current;

		const onChange = (entries: IntersectionObserverEntry[], observer: IntersectionObserverType) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setShow(true);
				once && observer.disconnect();
			} else {
				!once && setShow(false);
			}
		};

		Promise.resolve(
			typeof IntersectionObserver !== "undefined"
				? IntersectionObserver
				: import("intersection-observer")
		).then(() => {
			observer = new IntersectionObserver(onChange, {
				rootMargin: distance,
			});

			if (element) observer.observe(element);
		});

		return () => observer && observer.disconnect();
	});

	return { isNearScreen, fromRef };
};
