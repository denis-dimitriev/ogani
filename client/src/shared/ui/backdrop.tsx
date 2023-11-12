import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

function Backdrop({children}: Props) {
    return (
        <div className="backdrop">
            {children}
        </div>
    );
}

export default Backdrop;