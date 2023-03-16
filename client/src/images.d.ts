declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.less';
declare module '*.css';
declare module '*.svg' {
	export function ReactComponent(
		props: React.SVGProps<SVGSVGElement>
	): React.ReactElement;
	const url: string;
	export default url;
}
