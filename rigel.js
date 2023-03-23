/**
 * jprigel theme for Blink shell.
 * https://github.com/hwyncho/Dracula-Blink.git
 *
 * Last updated by hwyncho on 2022. 03. 22.
 */
BLACK = "#00384d";
RED = "#c43060";
GREEN = "#7fc06e";
YELLOW = "#F08e48";
BLUE =  "#1c8db2";
MAGENTA = "#c694ff";
CYAN =  "#00cccc";
WHITE = "#77929e";
BRIGHT_BLACK = "#517f8d";
BRIGHT_RED = "#ff5a67";
BRIGHT_GREEN = "#9cf087";
BRIGHT_YELLOW = "#ffcc1b";
BRIGHT_BLUE = "#7eb2dd";
BRIGHT_MAGENTA = "#fb94ff";
BRIGHT_CYAN ="#00ffff";
BRIGHT_WHITE ="#b7cff9";
FOREGROUND = "#e6e6dc";
BACKGROUND ="#002635";
CURSOR = "rgba(199,199,199,1.0)";

t.prefs_.set("color-palette-overrides", [
    BLACK,
    RED,
    GREEN,
    YELLOW,
    BLUE,
    MAGENTA,
    CYAN,
    WHITE,
    BRIGHT_BLACK,
    BRIGHT_RED,
    BRIGHT_GREEN,
    BRIGHT_YELLOW,
    BRIGHT_BLUE,
    BRIGHT_MAGENTA,
    BRIGHT_CYAN,
    BRIGHT_WHITE,
]);
t.prefs_.set("foreground-color", FOREGROUND);
t.prefs_.set("background-color", BACKGROUND);
t.prefs_.set("cursor-color", CURSOR);
