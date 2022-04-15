import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./app-intro";

import { Router } from "@vaadin/router";

import "../components/header";

import "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.63/dist/components/avatar/avatar.js";


@customElement("app-index")
export class AppIndex extends LitElement {
  static get styles() {
    return css`
      main {
        height: 96vh;
        padding: 0;
      }

      sl-avatar {
        position: fixed;

        right: 20px;
        top: 0px;
        --size: 40px;

        /* left: calc(env(titlebar-area-width, 100vw) - 44px);
        top: env(titlebar-area-y, 0);
        --size: env(titlebar-area-height, 40px); */
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      main {
        margin-top: env(titlebar-area-height, 33px);
      }

      @media (max-width: 800px) {
        main {
          margin-top: 2.6em;
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit-element
    // for more info check out the lit-element docs https://lit-element.polymer-project.org/guide/lifecycle

    // For more info on using the @vaadin/router check here https://vaadin.com/router
    const router = new Router(this.shadowRoot?.querySelector("#routerOutlet"));
    router.setRoutes([
      // temporarily cast to any because of a Type bug with the router
      {
        path: "",
        animate: true,
        children: [
          // { path: "/", component: "app-intro" },
          {
            path: "/",
            component: "app-home",
            action: async () => {
              await import("./app-home");
            },
          },
          {
            path: "/home",
            component: "app-home",
            action: async () => {
              await import("./app-home");
            },
          },
          {
            path: "/about",
            component: "app-about",
            action: async () => {
              await import("./app-about.js");
            },
          },
          {
            path: "/gallery",
            component: "app-about",
            action: async () => {
              await import("./app-about.js");
            },
          },
        ],
      } as any,
    ]);
  }

  render() {
    return html`
      <div>
        <app-header></app-header>

        <main>
          <div id="routerOutlet"></div>
          <sl-avatar image="assets/lindsay.jpg"></sl-avatar>
        </main>
      </div>
    `;
  }
}
