export const INTEGRATIONS = [
  {
    id: "html",
    title: "HTML",
    icon: "/languages/html5.svg",
  },
  {
    id: "react",
    title: "React",
    icon: "/languages/react.svg",
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: "/languages/nextjs.svg",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "/languages/javascript.svg",
  },
];

export type IntegrationId = (typeof INTEGRATIONS)[number]["id"];
export const HTML_SCRIPT = `<script src="https://echo-widget-teal.vercel.app/widget.js" data-organization-id={{ORGANIZATION_ID}}></script>`;
export const REACT_SCRIPT = `<script src="https://echo-widget-teal.vercel.app/widget.js" data-organization-id={{ORGANIZATION_ID}}></script>`;
export const NEXTJS_SCRIPT = `<script src="https://echo-widget-teal.vercel.app/widget.js" data-organization-id={{ORGANIZATION_ID}}></script>`;
export const JAVASCRIPT_SCRIPT = `<script src="https://echo-widget-teal.vercel.app/widget.js" data-organization-id={{ORGANIZATION_ID}}></script>`;
