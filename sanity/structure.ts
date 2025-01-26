import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items(
        [
            S.documentTypeListItem("owner").title("Owners"),
            S.documentTypeListItem("agent").title("Agents")
        ]
    );
