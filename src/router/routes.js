const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "cadastro", component: () => import("pages/cadastroCarros.vue") },
      { path: "editar", component: () => import("pages/editarCarros.vue") },
      { path: "painel", component: () => import("pages/infoPainel.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
