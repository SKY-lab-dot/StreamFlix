import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { MEDIA_TYPE } from "src/types/Common";

interface DetailType {
  mediaType: MEDIA_TYPE;
  id: number;
}

interface DetailModalContextType {
  detailType: DetailType | null;
  setDetailType: (detailType: DetailType | null) => void;
}

const DetailModalContext = createContext<
  DetailModalContextType | undefined
>(undefined);

interface DetailModalProviderProps {
  children: ReactNode;
}

export default function DetailModalProvider({
  children,
}: DetailModalProviderProps) {
  const [detailType, setDetailType] = useState<DetailType | null>(null);

  const value = useMemo(
    () => ({
      detailType,
      setDetailType,
    }),
    [detailType]
  );

  return (
    <DetailModalContext.Provider value={value}>
      {children}
    </DetailModalContext.Provider>
  );
}

export function useDetailModal() {
  const context = useContext(DetailModalContext);

  if (!context) {
    throw new Error(
      "useDetailModal must be used within DetailModalProvider"
    );
  }

  return context;
}