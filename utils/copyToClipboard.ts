const copyToClipboard = (text: string, cb: () => void) => {
  navigator.clipboard.writeText(text);
  cb();
};
export { copyToClipboard };
