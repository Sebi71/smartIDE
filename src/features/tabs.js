import { createSlice } from "@reduxjs/toolkit";
import { html, css, js } from "../assets/index";

const initialState = [
  {
    id: 1,
    lang: "html",
    imgURL: html,
    buttonContent: "HTML",
    code: `<div>
        <h1>Éditeur de code avec React</h1>
        <p>Codez directement dans votre navigateur</p>
</div>`,
  },
  {
    id: 2,
    lang: "css",
    imgURL: css,
    buttonContent: "CSS",
    code: `body {
        font-family: Roboto,sans-serif;
        padding: 25px;
        color: #111;
        bacground-color: #f1f1f1;
}`,
  },
  {
    id: 3,
    lang: "javascript",
    imgURL: js,
    buttonContent: "JavaSript",
    code: `console.log("Hello World")`,
  },
];

export const codeUpdate = createSlice({
  name: "codeUpdate",
  initialState,
  reducers: {
    updateCode: (state, action) => {
      state.find((obj) => obj.id === action.payload.id).code =
        action.payload.value;
    },
  },
});

export const { updateCode } = codeUpdate.actions;
export default codeUpdate.reducer;
