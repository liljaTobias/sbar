import { createTheme } from "@material-ui/core"

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        categoryBg: Palette['primary'];
        subCategoryBg: Palette['primary'];
    }
    interface PaletteOptions {
        categoryBg: PaletteOptions['primary'];
        subCategoryBg: PaletteOptions['primary'];
    }
}

export const theme = createTheme({
    palette: {
        categoryBg: {
            main: "#42a5f5"
        },
        subCategoryBg: {
            main: "#80d6ff"
        }
    }
})