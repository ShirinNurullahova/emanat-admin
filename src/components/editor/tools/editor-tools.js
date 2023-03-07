// tools.js
// import Embed from "@editorjs/embed";
// import Table from "@editorjs/table";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
// import ImageTool from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
// import InlineCode from "@editorjs/inline-code";
// import SimpleImage from "@editorjs/simple-image";
// import axios from "axios";
// import editorjsColumns from "@calumk/editorjs-columns";
import ColorPlugin from "editorjs-text-color-plugin";
import TextVariantTune from "@editorjs/text-variant-tune";
import AlignmentTuneTool from "editorjs-text-alignment-blocktune";
import Tooltip from "editorjs-tooltip";
import Underline from "@editorjs/underline";
// import Alert from "editorjs-alert";
import Strikethrough from "editorjs-strikethrough";
import Hyperlink from "editorjs-hyperlink";
import FontSize from "editorjs-inline-font-size-tool";
import ChangeCase from "editorjs-change-case";
import CodeTool from "@editorjs/code";
// import RawTool from "@editorjs/raw";

export const EDITOR_JS_TOOLS = {
  list: {
    class: List,
    inlineToolbar: true,
  },
  // code: CodeTool,
  // raw: RawTool,
  // quote: {
  //   class: Quote,
  //   inlineToolbar: true,
  // },
  // checklist: CheckList,
  // delimiter: Delimiter,
  // inlineCode: InlineCode,
  // simpleImage: SimpleImage,
  fontSize: FontSize,
  color: {
    class: ColorPlugin,
    config: {
      colorCollections: [
        "#EC7878",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#0070FF",
        "#03A9F4",
        "#00BCD4",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFF",
        "#f99400",
      ],
      defaultColor: "#FF1300",
      type: "text",
    },
  },
  marker: {
    class: ColorPlugin,
    config: {
      colorCollections: [
        "#EC7878",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#0070FF",
        "#03A9F4",
        "#00BCD4",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFF",
        "#f99400",
      ],
      defaultColor: "#FFBF00",
      type: "marker",
    },
  },
  textVariant: TextVariantTune,
  anyTuneName: {
    class: AlignmentTuneTool,
    config: {
      default: "left",
    },
  },
  underline: Underline,
  tooltip: {
    class: Tooltip,
    config: {
      location: "left",
      highlightColor: "#FFEFD5",
      underline: true,
      backgroundColor: "#154360",
      textColor: "#FDFEFE",
    },
  },
  // alert: {
  //   class: Alert,
  //   inlineToolbar: true,
  // },
  strikethrough: Strikethrough,
  link: {
    class: Hyperlink,
    config: {
      shortcut: "CMD+L",
      target: "_blank",
      rel: "nofollow",
      availableTargets: ["_blank", "_self"],
      availableRels: ["author", "noreferrer"],
      validate: false,
    },
  },
  changeCase: {
    class: ChangeCase,
    config: {
      showLocaleOption: true, // enable locale case options
      locale: "tr", // or ['tr', 'TR', 'tr-TR']
    },
  },
};
