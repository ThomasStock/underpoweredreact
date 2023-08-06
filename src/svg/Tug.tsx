import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
function SvgTug(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 70 156" ref={ref} {...props}><defs><rect id="tug_svg__a" width={20} height={80} x={25} y={40} rx={8} /></defs><g fill="none" fillRule="evenodd"><rect width={10} height={22} x={30} y={132} fill="#323232" stroke="#8A7575" strokeWidth={4} rx={5} /><rect width={10} height={22} x={16} y={132} fill="#323232" stroke="#8A7575" strokeWidth={4} rx={5} /><rect width={10} height={22} x={2} y={132} fill="#323232" stroke="#8A7575" strokeWidth={4} rx={5} /><rect width={10} height={22} x={44} y={132} fill="#323232" stroke="#8A7575" strokeWidth={4} rx={5} /><rect width={10} height={22} x={58} y={132} fill="#323232" stroke="#8A7575" strokeWidth={4} rx={5} /><circle cx={35} cy={30} r={29.5} fill="#82A5FD" stroke="#979797" /><path fill="#7072D5" d="M5 30h60v100H5z" /><mask id="tug_svg__b" fill="#fff"><use xlinkHref="#tug_svg__a" /></mask><rect width={21} height={81} x={24.5} y={39.5} stroke="#2B2B2B" rx={8} /><path fill="#F8FF6E" d="M25 70h20v50H25z" mask="url(#tug_svg__b)" /></g></svg>;
}
const ForwardRef = forwardRef(SvgTug);
export default ForwardRef;
export const svgHeight = 156;
export const svgWidth = 70;