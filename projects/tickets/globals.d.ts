interface Console {
	log(...data: any[]): void;
	table(...data: any[]): void;
	dir(...data: any[]): void;
	info(...data: any[]): void;
	warn(...data: any[]): void;
	error(...data: any[]): void;
}

declare let console: Console;
