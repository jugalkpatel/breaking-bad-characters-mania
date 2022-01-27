import { createContext } from "react";

import { AppContextType } from "../../common.types";

const AppContext = createContext<AppContextType | null>(null);

export { AppContext };
