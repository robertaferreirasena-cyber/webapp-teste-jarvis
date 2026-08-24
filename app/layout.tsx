export const metadata = { title: "Webapp JARVIS", description: "Next.js pelo JARVIS" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR"><body style={{margin:0,background:"#070d18",color:"#eaf1fb",fontFamily:"Segoe UI,system-ui,sans-serif"}}>{children}</body></html>);
}
