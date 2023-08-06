import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
function SvgBoat(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 347" ref={ref} {...props}><g fill="none" fillRule="evenodd"><path fill="#FF5757" fillRule="nonzero" d="M86 11c41.421 0 75 33.579 75 75v250H11V86l.01-1.24C11.672 43.91 44.993 11 86 11Z" /><circle cx={161} cy={336} r={10.5} fill="#D8D8D8" fillOpacity={0.74} stroke="#979797" /><circle cx={11} cy={336} r={10.5} fill="#D8D8D8" fillOpacity={0.74} stroke="#979797" /><circle cx={11} cy={86} r={10.5} fill="#D8D8D8" fillOpacity={0.74} stroke="#979797" /><circle cx={86} cy={11} r={10.5} fill="#D8D8D8" fillOpacity={0.74} stroke="#979797" /><circle cx={86} cy={336} r={10.5} fill="#D8D8D8" fillOpacity={0.74} stroke="#979797" /><circle cx={161} cy={86} r={10.5} fill="#D8D8D8" fillOpacity={0.74} stroke="#979797" /><circle cx={161} cy={174} r={10.5} fill="#D8D8D8" fillOpacity={0.74} stroke="#979797" /><circle cx={11} cy={174} r={10.5} fill="#D8D8D8" fillOpacity={0.74} stroke="#979797" /></g></svg>;
}
const ForwardRef = forwardRef(SvgBoat);
export default ForwardRef;
export const svgHeight = 347;
export const svgWidth = 172;