import { buildMetadata } from "@/lib/seo";
import ChessboardClient from "./ChessboardClient";

export const metadata = buildMetadata({
  title: "LED Chessboard",
  description: "EECS 370 UMich final project: LED chessboard that lights up potential moves.",
  slug: "projects/led_chessboard",
});

export default function Page() {
  return <ChessboardClient />;
}
