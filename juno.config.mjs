import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: "73ble-jqaaa-aaaal-asxrq-cai",   // ← nahraď svým ID z Juno console
    source: "public",           // složka s hotovými soubory (tady index.html + případné css/js)
    
    // Automatizace pro GitHub Actions (OIDC) – doporučeno
    automation: {
      github: {
        repositories: [
          {
            owner: "TVUJ_GITHUB_USERNAME",   // např. "petrnovak"
            name: "my-juno-site"             // název tvého repa
            // refs: ["refs/heads/main"]     // volitelně omezit jen na main
          }
        ]
      }
    }
  }
});
