import { type ReactNode } from "react";

import { COLORS } from "./constants";

const Layout = ({ children }: { children: ReactNode }) => {
    return <div
        style={{
            minHeight: "100vh",
            height: "100%",
            width: "100%",
            background: COLORS.primary,
            boxSizing: "border-box",
        }}
    > {children}</div>
}

export default Layout;