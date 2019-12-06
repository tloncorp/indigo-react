var theme = {
  plain: {
    color: "#000",
    backgroundColor: "#F9F9F9",
    fontSize: "14px"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#000"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#000"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#000"
      }
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted"
      ],
      style: {
        color: "#000"
      }
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#000"
      }
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#000"
      }
    },
    {
      types: ["function-variable"],
      style: {
        color: "#000"
      }
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#000"
      }
    }
  ]
};

export default theme;
