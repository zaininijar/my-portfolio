import isMobileJS from "ismobilejs";

export function isMobileDevice(userAgent = "") {
  return userAgent === "mobile_app_webview" || isMobileJS(userAgent).any;
}
