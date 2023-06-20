declare module "intersection-observer" {
	const IntersectionObserver: {
		prototype: IntersectionObserver;
		new (
			callback: IntersectionObserverCallback,
			options?: IntersectionObserverInit
		): IntersectionObserver;
	};
	interface IntersectionObserver {
		readonly root: Element | null;
		readonly rootMargin: string;
		readonly thresholds: ReadonlyArray<number>;
		disconnect(): void;
		observe(target: Element): void;
		takeRecords(): IntersectionObserverEntry[];
		unobserve(target: Element): void;
	}
	interface IntersectionObserverInit {
		root?: Element | null;
		rootMargin?: string;
		threshold?: number | number[];
	}
	interface IntersectionObserverCallback {
		(
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver
		): void;
	}
	interface IntersectionObserverEntry {
		readonly boundingClientRect: ClientRect;
		readonly intersectionRatio: number;
		readonly intersectionRect: ClientRect;
		readonly isIntersecting: boolean;
		readonly rootBounds: ClientRect | null;
		readonly target: Element;
		readonly time: number;
	}
	export default IntersectionObserver;
}
